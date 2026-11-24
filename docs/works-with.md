# Using Publish with chat in other apps

Publish with chat connects to your chatbot using MCP, an open standard that many apps now support. This page lists the apps we know about and how to add it to each.

Connector address (the same everywhere):

```
https://api.publishwith.chat/mcp
```

Menus change often, so the names below are a guide. Some apps only allow this on certain plans. That is a rule of the app, not ours.

## At a glance

| App | Status |
|---|---|
| [Claude](#claude) | Tested |
| [ChatGPT](#chatgpt) | Tested |
| [Gemini](#gemini) | Tested |
| [Grok](#grok) | Supports MCP standards |
| [Perplexity](#perplexity) | Supports MCP standards |
| [Mistral Le Chat](#mistral-le-chat) | Supports MCP standards |
| [Replit](#replit) | Supports MCP standards |
| [v0](#v0) | Supports MCP standards |
| [Claude Code](#claude-code) | Supports MCP standards |
| [OpenAI Codex](#openai-codex) | Supports MCP standards |
| [Cursor](#cursor) | Supports MCP standards |
| [VS Code with GitHub Copilot](#vs-code-with-github-copilot) | Supports MCP standards |
| [Windsurf (Devin Desktop)](#windsurf-devin-desktop) | Supports MCP standards |
| [Gemini CLI](#gemini-cli) | Supports MCP standards |

## Tested

We have added Publish with chat to each of these apps and used it. Each entry says what we have checked.

### Claude

**Status:** Tested

**What you need**

- A Claude account. Adding your own connector may need a paid plan.

**What we have checked**

Building a website, changing it, publishing it, going back to an earlier version, and signing in later to change a site you already made.

**Steps**

1. Open claude.ai and go to **Settings**, then **Connectors** (it may be called Plugins).
2. Choose to **add a custom connector**.
3. Name it **Publish with chat** and paste the address.
4. Turn on **sign in when needed** if you want Claude to change sites you already made.
5. Start a new chat with Publish with chat switched on.

_We have tested this ourselves._

### ChatGPT

**Status:** Tested

**What you need**

- A ChatGPT account. Adding your own connector depends on your plan.

**What we have checked**

Building a website, changing it, publishing it, going back to an earlier version, and signing in later to change a site you already made.

**Steps**

1. Open ChatGPT's **Settings** and find **Apps** or **Connectors**.
2. Choose to add a **custom connector** (it may say MCP server) and paste the address.
3. Pick **OAuth** if you want ChatGPT to change sites you already made. Otherwise choose no authentication.
4. Start a new chat and mention Publish with chat. ChatGPT asks you to approve each step. That is normal.

_We have tested this ourselves._

### Gemini

**Status:** Tested

**What you need**

- A Google account with **Gemini Apps Activity** turned on. Without it the connection fails.

**What we have checked**

Adding the connector, signing in, and listing and reading your sites. Creating and changing a site through Gemini is still being checked, so it may pause or ask you to carry on.

**Steps**

1. In your Google account, turn on **Gemini Apps Activity**.
2. Open **gemini.google.com/devmode**, create a new app, paste the address and save.
3. In a chat, type **@Publish With Chat** and ask for your site.
4. Gemini stops after a few steps. If it pauses, tell it to carry on.

_We have tested this ourselves._

## Supports MCP standards

These apps support the MCP standard that Publish with chat uses, so you may be able to add it. We have not tested them with Publish with chat yet. The steps come from each app's own documentation where we could read it, and each entry says where its steps came from.

Steps checked 24 November 2026. If something has changed, or you try one, please [open an issue](https://github.com/publishwithchat/publishwithchat/issues/new/choose) or email support@publishwith.chat.

## Chatbots

### Grok

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- A Grok account. xAI's page does not name a plan for custom connectors, and some guides say a paid plan is needed.
- On Grok Business or Enterprise, a team admin must provision connectors first.

**Steps**

1. Go to **grok.com/connectors**.
2. Choose **New Connector**, then **Custom**.
3. Paste the address and finish any sign-in Grok asks for.
4. Grok finds the tools. Ask for your website in a new chat.

**If it does not work**

- xAI's page does not describe the sign-in screen for custom connectors, so what you see may differ.

_Steps from [xAI documentation: Grok connectors](https://docs.x.ai/grok/connectors), checked 24 November 2026. Not tested by us yet._

### Perplexity

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- A Perplexity Pro, Max or Enterprise plan. Free accounts do not show the option.
- On an organisation account, an admin must switch on **Allow members to add custom connectors**. It is off by default.

**Steps**

1. Go to **Settings**, then **Connectors**.
2. Choose **+ Custom connector**, then **Remote**.
3. Enter a name and paste the address.
4. Finish the sign-in in the browser tab that opens before you close it.
5. Start a new chat and ask for your website.

**If it does not work**

- If the sign-in does not stay, remove the connector and add it again.

_Steps from [Third-party setup guides (Perplexity's own help article could not be read when we checked)](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors), checked 24 November 2026. Not tested by us yet._

### Mistral Le Chat

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- You must be an administrator. On Free, Pro and Student plans the account owner is the administrator by default.

**Steps**

1. Open the **Connectors** page and choose **+ Add Connector**.
2. Switch to the **Custom MCP Connector** tab.
3. Name it **PublishWithChat**. The name cannot contain spaces or special characters.
4. Paste the address into **Server URL** and choose **Connect**. Le Chat works out the sign-in method itself.
5. Finish the sign-in if you are asked.
6. Optional: open **My Connectors**, click the connector, then **Functions** to choose which actions run without asking.

**If it does not work**

- If you see "MCP connection requires additional information or is invalid", check the address is exactly the one above and starts with https.

_Steps from [Mistral documentation: MCP connectors](https://docs.mistral.ai/le-chat/knowledge-integrations/connectors/mcp-connectors), checked 24 November 2026. Not tested by us yet._

## Website and app builders

### Replit

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- A Replit account. The documentation does not name a plan. Adding a server for a whole workspace needs permission to manage integrations.

**Steps**

1. Open **Settings**, then **Integrations**, then **Your integrations**.
2. Choose **Add custom**, then **Add personal MCP server**.
3. Give it a name you will recognise, such as **Publish with chat**.
4. Paste the address and choose **Test & save**. Replit walks you through the sign-in.
5. In a chat, mention the server by name and ask for your website.

[Add to Replit (one click)](https://replit.com/integrations?mcp=eyJkaXNwbGF5TmFtZSI6IlB1Ymxpc2ggd2l0aCBjaGF0IiwiYmFzZVVybCI6Imh0dHBzOi8vYXBpLnB1Ymxpc2h3aXRoLmNoYXQvbWNwIn0=)

**If it does not work**

- Replit scans MCP tools for safety and can block one it thinks is suspicious. It tells you when that happens.

_Steps from [Replit documentation: connect via MCP](https://docs.replit.com/build/connect-via-mcp), checked 24 November 2026. Not tested by us yet._

### v0

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- A v0 account. The documentation does not name a plan, and says MCP servers may increase per-message costs.

**Steps**

1. In the prompt box, open the **+** menu and choose **MCPs**.
2. Choose to add a **custom** server.
3. Paste the address and choose **OAuth** as the sign-in type.
4. Finish the sign-in, then ask for your website.

**If it does not work**

- v0's page does not say whether its sign-in supports the automatic app registration Publish with chat uses, so this may not connect.
- MCP servers give v0 tools while it builds. A website that v0 generates cannot call them afterwards.

_Steps from [v0 documentation: MCP](https://v0.app/docs/MCP), checked 24 November 2026. Not tested by us yet._

## For developers

### Claude Code

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- Claude Code installed. Nothing else is stated for web (HTTP) servers.

```bash
claude mcp add --transport http publish-with-chat https://api.publishwith.chat/mcp
```

**Steps**

1. Run the command above. Add `--scope user` to use it in every project.
2. Start `claude`, run `/mcp`, pick the server and sign in in the browser. Or run `claude mcp login publish-with-chat`.
3. Check with `claude mcp list`. It should say Connected.

**If it does not work**

- Sign-in cannot be completed in a non-interactive run. Sign in once from an interactive session first.

_Steps from [Claude Code documentation: MCP](https://code.claude.com/docs/en/mcp), checked 24 November 2026. Not tested by us yet._

### OpenAI Codex

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- The Codex CLI or IDE extension. They share one config file.

```bash
codex mcp add publish-with-chat --url https://api.publishwith.chat/mcp
codex mcp login publish-with-chat
```

Settings file: ~/.codex/config.toml

```toml
[mcp_servers.publish-with-chat]
url = "https://api.publishwith.chat/mcp"
```

**Steps**

1. Run the first command, or add the config shown to `~/.codex/config.toml`.
2. Run `codex mcp login publish-with-chat`. Codex does not sign in automatically. Add `--no-browser` if there is no browser on the machine.
3. Check with `codex mcp list`, or run `/mcp` inside `codex`.

**If it does not work**

- OpenAI's page shows the add command only in an OAuth example, so the exact form above is our reading of it.

_Steps from [OpenAI documentation: Codex and MCP](https://developers.openai.com/codex/mcp), checked 24 November 2026. Not tested by us yet._

### Cursor

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- Cursor on your computer. The documentation does not name a plan.

Settings file: ~/.cursor/mcp.json (all projects) or .cursor/mcp.json (one project)

```json
{
  "mcpServers": {
    "publish-with-chat": {
      "url": "https://api.publishwith.chat/mcp"
    }
  }
}
```

**Steps**

1. Add the config shown to your Cursor `mcp.json`.
2. Open **Customize** in the sidebar and switch the server on. Cursor starts the sign-in for servers that need it.
3. If it does not connect, open the MCP logs in the Output panel (Cmd+Shift+U, then choose MCP Logs).

**If it does not work**

- Cloud Agents do not read your local `mcp.json`. They use servers set up at cursor.com/agents.

_Steps from [Cursor documentation: MCP](https://cursor.com/docs/context/mcp), checked 24 November 2026. Not tested by us yet._

### VS Code with GitHub Copilot

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- VS Code with the Copilot harness selected. On Copilot Business or Enterprise, the MCP policy must be on.

Settings file: ~/.copilot/mcp-config.json (yours) or .mcp.json (shared in a project)

```json
{
  "mcpServers": {
    "publish-with-chat": {
      "type": "http",
      "url": "https://api.publishwith.chat/mcp",
      "tools": ["*"]
    }
  }
}
```

**Steps**

1. Run **Chat: Open Customizations**, choose **MCP Servers**, then **Add Server** under User.
2. Choose **HTTP** and paste the address. Give it an ID such as `publish-with-chat`.
3. Choose **Global**, then **Copilot Global**. Or use the config shown, or run **MCP: Add Server** from the Command Palette.
4. Use **Authenticate** in the server's actions when it appears, then ask for your website and expand the tool call to confirm it ran.

**If it does not work**

- Do not use `.vscode/mcp.json` for new setups. VS Code marks that older format as deprecated.

_Steps from [VS Code documentation: MCP servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers), checked 24 November 2026. Not tested by us yet._

### Windsurf (Devin Desktop)

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- Windsurf on your computer. Enterprise users must switch MCP on in settings first.

Settings file: ~/.config/devin/mcp_config.json (macOS and Linux) or %AppData%/devin/mcp_config.json (Windows)

```json
{
  "mcpServers": {
    "publish-with-chat": {
      "serverUrl": "https://api.publishwith.chat/mcp"
    }
  }
}
```

**Steps**

1. In Cascade open the MCP menu and choose **Open MCP config file**, or go to **Settings**, **Tools**, **Windsurf Settings**, **Add Server**.
2. Add the config shown.
3. Press the **refresh** button. The documentation says this is required.
4. Click the server and use **+ Add Server** to give Cascade its tools.

**If it does not work**

- Windsurf's page says OAuth is supported for remote servers but does not say how sign-in starts. Teams can allowlist servers, and an allowlist blocks the rest.

_Steps from [Windsurf documentation: Cascade MCP](https://docs.devin.ai/windsurf/plugins/cascade/mcp), checked 24 November 2026. Not tested by us yet._

### Gemini CLI

**Status:** Supports MCP standards (not tested with Publish with chat yet)

**What you need**

- The Gemini CLI, and a browser on the same machine for sign-in. It uses port 7777 on your computer for the return address.

```bash
gemini mcp add --transport http publish-with-chat https://api.publishwith.chat/mcp
```

Settings file: .gemini/settings.json (project) or ~/.gemini/settings.json (all projects)

```json
{
  "mcpServers": {
    "publish-with-chat": {
      "httpUrl": "https://api.publishwith.chat/mcp"
    }
  }
}
```

**Steps**

1. Run the command above (add `-s user` for all projects), or add the config shown.
2. Start the CLI. When the server asks for sign-in it should open your browser. Or run `/mcp auth publish-with-chat`.
3. Run `gemini mcp list` or `/mcp` to see the status.

**If it does not work**

- Sign-in does not work over SSH without a display, in a headless setup, or in a container without a browser.
- Google's page uses `url` in its sign-in example and `httpUrl` elsewhere, so if one does not work try the other.

_Steps from [Gemini CLI documentation: MCP servers](https://google-gemini.github.io/gemini-cli/docs/tools/mcp-server.html), checked 24 November 2026. Not tested by us yet._

## Then ask for your website

```
Make me a website for [your business name]. Include [what you want, like a menu,
prices, opening hours, contact details and a map]. Use my attached logo and photos
exactly as they are. Publish it with Publish with chat and give me the preview link.
```

Not listed here? If your app can add a remote MCP server by web address, try the address above and tell us how it goes.

<!-- Generated from platform/docs/works-with/apps.json. Do not edit by hand. -->
