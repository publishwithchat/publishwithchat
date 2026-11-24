# Add Publish with chat to your chatbot

You only do this once. It takes about a minute.

The connector address is the same for every chatbot:

```
https://api.publishwith.chat/mcp
```

Menus change often, so the names below are a guide. Some chatbots only let you add custom connectors on certain plans. That is a rule of the chatbot, not ours.

## Claude

1. Open claude.ai and go to **Settings**, then **Connectors** (it may be called Plugins).
2. Choose **Add custom connector**.
3. Name it `Publish with chat` and paste the address.
4. Turn on **sign in when needed** if you want Claude to change sites you already made.
5. Start a new chat with Publish with chat switched on.

## ChatGPT

1. Open **Settings** and find **Apps** or **Connectors**.
2. Choose to add a custom connector (it may say MCP server) and paste the address.
3. Pick **OAuth** if you want ChatGPT to change sites you already made. Otherwise choose no authentication.
4. Start a new chat and mention Publish with chat. ChatGPT asks you to approve each step. That is normal.

## Gemini

1. In your Google account, turn on **Gemini Apps Activity**. Without it the connection fails.
2. Open gemini.google.com/devmode, create a new app, paste the address and save.
3. In a chat, type `@Publish With Chat` and ask for your site.
4. Gemini stops after a few steps. If it pauses, tell it to carry on.

## Other chatbots

Grok and Perplexity can also add connectors like this on paid plans, using the same address. We have tested Claude, ChatGPT and Gemini, and not yet those two.

## Next

Ask for your website. See [prompts](prompts.md) for what to include, or [troubleshooting](troubleshooting.md) if something does not work.
