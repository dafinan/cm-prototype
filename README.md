# Covet & Mane — Prototype

A clickable, interactive HTML mockup of the new Covet & Mane website, built for internal review and stakeholder walk-throughs ahead of the full Shopify rebuild.

This is a static prototype. No backend, no build tooling, no framework — just plain HTML, CSS, and a small amount of vanilla JavaScript. Deployable as-is to GitHub Pages.

---

## What's inside

```
cm-prototype/
├── index.html              ← Homepage
├── academy.html            ← Education hub
├── find-a-stylist.html     ← The Coveted — consumer directory + aftercare
├── portal.html             ← Logged-in pro experience
├── design-system.html      ← Internal: every design token rendered
│
├── css/
│   ├── tokens.css          ← Single source of truth for colors, type, spacing
│   ├── base.css            ← Reset, root typography, .img-zone, .reveal
│   ├── components.css      ← Nav, footer, buttons, cards, accordion, dev toggle
│   └── pages/
│       ├── home.css
│       ├── academy.css
│       ├── find-a-stylist.css
│       └── portal.css
│
├── js/
│   ├── nav.js              ← Shared nav + footer injection (edit nav copy here)
│   ├── toggle.js           ← Floating dev toggle: Logged In / Logged Out
│   ├── reveal.js           ← Scroll-reveal animation observer
│   └── tabs.js             ← Tab switcher for portal page
│
├── assets/
│   └── images/
│       ├── MANIFEST.md     ← Inventory of real C&M Shopify CDN images
│       ├── COVETNYFILM-26.jpg
│       └── IMG_9612.PNG
│
└── reference/v1/           ← Original v1 mockups (preserved, do not edit)
```

---

## How to preview locally

Double-click `index.html` (or any other `.html` at the root). It opens in your browser. Because everything is plain HTML/CSS/JS with no fetch-based loaders, there's no need for a local server.

If you want a slightly nicer preview with hot-reload or proper URL routing, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## How to deploy to GitHub Pages

1. Push these files to the `main` branch of the `cm-prototype` repo.
2. In the repo settings → Pages, set the source to `main` / `/ (root)`.
3. Save. After a minute or two, the site is live at the URL GitHub displays.

That's it. No build step.

---

## How to edit common things

### The promo bar at the top

Open `js/nav.js`. Look for the constant `promoBar` near the top. Change the text or link there. Change propagates to all four pages.

### The nav links

Same file — `js/nav.js`. The constant `navMarkup` contains the link list. Edit the `<li>` items.

The active-state highlight on each page is set by the `data-page` attribute on `<body>`. The pages use:

| File                 | `<body data-page="">` |
| -------------------- | --------------------- |
| `index.html`         | `home`                |
| `academy.html`       | `academy`             |
| `find-a-stylist.html`| `coveted`             |
| `portal.html`        | `portal`              |

### The footer

Same file — `js/nav.js`. The constant `footerMarkup` is the full footer. Edit columns, links, and the tagline there.

### Colors, type, spacing

Open `css/tokens.css`. Every color, font size, and spacing value is a CSS variable on `:root`. Change a value here, and it propagates to every page automatically. The `design-system.html` page shows every token rendered visually.

### Swapping an image

Most images load from the Covet & Mane Shopify CDN — `https://covetandmane.com/cdn/shop/files/<filename>`. To swap one, just paste a new CDN URL into the `src` attribute. Look at `assets/images/MANIFEST.md` for the catalog of images and what each is intended for.

For placeholders (the warm gradient + ⚠ icon blocks), search the HTML for `img-label img-label--placeholder`. The text inside each tells you what kind of image is needed.

### The "Logged In / Logged Out" dev toggle

Bottom-right of every page. Click it to flip between states. Your choice is remembered across pages and across browser refreshes (stored in `localStorage`). To reset, open your browser dev tools console and run:

```js
localStorage.removeItem('cm-auth');
```

### Tabs on the portal page

`portal.html` has four tabs: Overview · Orders · Education · Community. They're driven by `js/tabs.js`. The "Overview" panel has the full experience; the other three are stubs for prototype review.

---

## Notes on this prototype vs. the production build

- **Fonts.** This prototype uses Nunito Sans (stand-in for Avenir) and EB Garamond italic (stand-in for Adobe Caslon Pro Italic), both loaded from Google Fonts. The production Shopify build will load licensed Avenir and Adobe Caslon Pro. To swap, change `--font-serif` and `--font-sans` in `css/tokens.css`.
- **Images.** Pulled live from the C&M Shopify CDN. If the CDN rotates a file, the image will break — replace the URL or substitute a different file from `assets/images/MANIFEST.md`.
- **No real backend.** All forms (search, SKU order, newsletter, reorder) are visual only. They render correctly and the buttons animate, but nothing is submitted anywhere.
- **No analytics, no tracking pixels.** Add these in the Shopify production build, not here.

---

## Known placeholders (flagged in the UI)

Every spot where real content is needed is annotated in the prototype with a warm gradient block + ⚠ label. The ones to populate before the production build:

- Real Collective numbers (Stylists / Salons / Master Educators) on the homepage Covet Collective section
- Additional press logos beyond Allure and The Tease
- Real ROI numbers for the "Why Education First" section on the Academy page
- Educator portrait photography
- Stylist portrait photography for the directory
- Confirm pro-feed naming on the portal — the handoff called it "The Coveted" but that name belongs to the consumer side now

---

*Built May 2026 for Dafina Smith and Katina, ahead of the Covet & Mane redesign session.*
