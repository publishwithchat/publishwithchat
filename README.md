<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/lockup-horizontal-reversed.svg">
    <img alt="Publish with chat" src="assets/lockup-horizontal.svg" width="320">
  </picture>
</p>

# Publish with chat

Describe a website to your chatbot, and it builds it, checks it, and puts it online. Works with Claude, ChatGPT and Gemini.

**Website:** https://publishwith.chat  
**Connector address:** `https://api.publishwith.chat/mcp`  
**Support:** support@publishwith.chat

## What it does

1. You ask your chatbot for a website: "Make me a website for my bakery, with a menu and opening hours."
2. The chatbot builds the pages and sends them to Publish with chat.
3. Publish with chat checks them for errors and gives you a free preview link that lasts 48 hours.
4. When you are happy, you sign in and the site goes online at its own address. A custom domain can be connected too.
5. Later, ask the chatbot to change text, photos or pages. Every update is kept as a version you can switch back to.

Good for brochure sites, portfolios, menus, landing pages and event pages. Sites are static: no server code and no databases.

## Add it to your chatbot

You only do this once. Copy the connector address above, then:

**Claude**
1. Open claude.ai, then Settings, then Connectors.
2. Choose to add a custom connector. Name it "Publish with chat" and paste the address.
3. Turn on sign in when needed if you want Claude to change sites you already made.
4. Start a new chat with Publish with chat switched on.

**ChatGPT**
1. Open Settings and find Apps or Connectors.
2. Add a custom connector (it may say MCP server) and paste the address.
3. Choose OAuth if you want ChatGPT to change sites you already made.
4. Start a new chat and mention Publish with chat.

**Gemini**
1. Turn on Gemini Apps Activity in your Google account. Without it the connection fails.
2. Open gemini.google.com/devmode, create a new app, paste the address and save.
3. In a chat, type `@Publish With Chat` and ask for your site. If it pauses, tell it to carry on.

Menus change often, so the names above are a guide. Step-by-step pages with screenshots are at https://publishwith.chat/connect.

## Try this

```
Make me a website for [your business name]. Include [what you want, like a menu,
opening hours, contact details and a map]. Use my attached logo and photos exactly
as they are. Publish it with Publish with chat and give me the preview link.
```

More ideas:
- `@Publish with chat build a one-page website for my plumbing business and show me a preview`
- `@Publish with chat change my opening hours and publish the update`
- `Switch my site back to the version from yesterday`

## What the connector can do

| Area | What you can ask for |
|---|---|
| Build | Create a site from text, upload images, import files from a web address, get a preview link |
| Go live | Check progress and put a previewed site online once your account is set up |
| Change | Edit text, images and pages on a site you own |
| Undo | List versions and switch back to an earlier one |

Tools that change or replace a live site are marked as such, so your chatbot asks before using them.

## Privacy and safety

- We store the website files you give us and your email address. Payments are handled by Stripe and we never see card numbers.
- Uploads are checked for harmful content. Every site and preview has a report link.
- You can export your data and delete your sites or account at any time.
- Privacy policy: https://app.publishwith.chat/privacy
- Terms: https://app.publishwith.chat/terms

## Brand

Logos and icons are in the brand pack. Please keep the logo unaltered and give it clear space. For anything else, email support@publishwith.chat.

## About this repository

This repository holds the public information about Publish with chat: this guide, brand assets and, over time, skills that help chatbots build better sites. The service itself is not open source.

Found a problem or have an idea? Open an issue here or email support@publishwith.chat.

---

Publish with chat is run by Philip Snelling trading as Conduit Digital, Cwmbran, Wales.
