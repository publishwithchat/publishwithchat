#!/usr/bin/env bash
# Re-capture the screenshots in docs/screenshots from the live site.
# Uses reduced motion so the animated home page shows its finished state. Needs Google Chrome on macOS. Run from the repo root: scripts/capture-screenshots.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="docs/screenshots"
mkdir -p "$OUT"

shot() { # name url width,height
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --force-prefers-reduced-motion --virtual-time-budget=6000 \
    --window-size="$3" --screenshot="$PWD/$OUT/$1.png" "$2" >/dev/null 2>&1
  echo "saved $OUT/$1.png"
}

shot home-desktop https://publishwith.chat/ 1280,900
shot connect-desktop https://publishwith.chat/connect 1280,1400
shot how-it-works-desktop https://publishwith.chat/how-it-works 1280,1400
