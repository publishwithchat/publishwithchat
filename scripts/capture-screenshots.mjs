#!/usr/bin/env node
// Re-captures the screenshots in docs/screenshots from the live site.
//
// Run from the repo root:   node --experimental-websocket scripts/capture-screenshots.mjs
// (Node 22 and later do not need the flag.) Needs Google Chrome on macOS. No packages to install.
//
// The home page has a looping animation. This script does not guess a time. It reads the animation's own
// keyframes, finds the moment the "live" badge has appeared, goes one second past it (the site is built, live and
// glowing) and freezes every animation there before taking the picture.

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = "docs/screenshots";
const PORT = 9333;
const SITE = "https://publishwith.chat";

const SHOTS = [
  { name: "home-desktop", url: `${SITE}/`, width: 1280, height: 950, animated: true },
  { name: "connect-desktop", url: `${SITE}/connect`, width: 1280, height: 1400 },
  { name: "how-it-works-desktop", url: `${SITE}/how-it-works`, width: 1280, height: 1400 },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const profile = fs.mkdtempSync(path.join(os.tmpdir(), "pwc-shots-"));
const chrome = spawn(CHROME, [`--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, "--headless=new", "--hide-scrollbars", "--no-first-run", "about:blank"], { stdio: "ignore" });

async function connect() {
  for (let i = 0; i < 50; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error("Chrome did not start");
}

const ws = new WebSocket(await connect());
await new Promise((r) => (ws.onopen = r));
let id = 0;
const waiting = new Map();
const listeners = [];
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && waiting.has(msg.id)) {
    const { resolve, reject } = waiting.get(msg.id);
    waiting.delete(msg.id);
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
  } else listeners.forEach((l) => l(msg));
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const n = ++id;
  waiting.set(n, { resolve, reject });
  ws.send(JSON.stringify({ id: n, method, params }));
});
const evaluate = async (expression) => {
  const r = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description ?? ""));
  return r.result.value;
};
const loaded = () => new Promise((resolve) => {
  const l = (msg) => { if (msg.method === "Page.loadEventFired") { listeners.splice(listeners.indexOf(l), 1); resolve(); } };
  listeners.push(l);
});

// Runs in the page: wait for fonts and images, then freeze every animation at the finished moment.
const FREEZE = `(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((i) => i.complete ? 1 : new Promise((r) => { i.onload = i.onerror = r; })));
  const anims = document.getAnimations();
  const live = anims.find((a) => a.animationName === "hd-lv");
  if (!live) return { frozen: false };
  const total = live.effect.getComputedTiming().duration;
  const shown = live.effect.getKeyframes().find((k) => String(k.opacity) === "1");
  const at = shown.computedOffset * total + 1000;
  anims.forEach((a) => { a.pause(); a.currentTime = at; });
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  return { frozen: true, seconds: +(at / 1000).toFixed(2), loop: +(total / 1000).toFixed(2) };
})()`;

fs.mkdirSync(OUT, { recursive: true });
await send("Page.enable");
for (const s of SHOTS) {
  await send("Emulation.setDeviceMetricsOverride", { width: s.width, height: s.height, deviceScaleFactor: 1, mobile: false });
  const done = loaded();
  await send("Page.navigate", { url: s.url });
  await done;
  await sleep(500);
  let note = "";
  if (s.animated) {
    const r = await evaluate(FREEZE);
    if (!r.frozen) throw new Error("Could not find the home page animation. Has the hero demo changed?");
    note = ` (animation frozen at ${r.seconds}s of a ${r.loop}s loop)`;
  }
  const { data } = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(`${OUT}/${s.name}.png`, Buffer.from(data, "base64"));
  console.log(`saved ${OUT}/${s.name}.png${note}`);
}

ws.close();
const exited = new Promise((r) => chrome.on("exit", r));
chrome.kill();
await exited;
try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
