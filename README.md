# AIKIBOX — Next.js

A Next.js 14 (App Router) site for AIKIBOX, a technology company with two
products under one domain.

- `/` — AIKIBOX overview: what the company is, and a "Products" section
  featuring both products
- `/martech` — Martech: on-site network cabling, IT
  deployment, and systems integration
- `/vita` — Vita: a social platform for genuine connection

Every product page carries an "AIKIBOX" breadcrumb (or footer link, on
Vita) back to the parent overview.

## Stack
- Next.js 14 + React 18 + TypeScript
- Tailwind CSS — AIKIBOX's tokens (`aiki-ink`, `aiki-paper`, `aiki-steel`,
  `aiki-accent`) and Vita's tokens (`ink`, `paper`, `marigold`, `clay`,
  `sage`) both live in `tailwind.config.ts`, kept deliberately distinct
  since Vita has its own product identity
- `next/font/google` — AIKIBOX uses Space Grotesk / IBM Plex Sans / IBM
  Plex Mono; Vita uses Fraunces / Inter / IBM Plex Mono / Caveat

## Structure
```
app/
  layout.tsx              root layout, loads all fonts for both brands
  page.tsx                 AIKIBOX overview (hub diagram, both products)
  martech/page.tsx  Martech product page
  vita/page.tsx            Vita product page
  globals.css              tailwind base + selection/focus/reduced-motion
components/
  aikibox/
    Nav.tsx        shared AIKIBOX nav, takes an optional `product` crumb
    HomeHero.tsx   parent-company hero (hub + two-product diagram)
    Hero.tsx       Martech hero (network-diagram signature)
    Services.tsx   Martech capability grid
    Products.tsx   two-product grid on the home page
    Footer.tsx     contact + site footer, configurable headline/sub
  Nav.tsx          Vita nav (nametag logo + link back to AIKIBOX)
  Hero.tsx         nametag stack signature element, live "hellos" counter
  HowItWorks.tsx
  Circles.tsx
  Stories.tsx
  CtaFooter.tsx    Vita's Cta + Footer (links back to AIKIBOX)
  Reveal.tsx       client-side scroll reveal (IntersectionObserver)
  HelloCounter.tsx client-side ambient counter
```

## Run locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Build
```
npm run build
npm start
```

## Notes
- No images — all visual elements are CSS/SVG-free, built with layout, color, and type.
- Respects `prefers-reduced-motion`.
- Content (Circles, Stories, stats) is placeholder copy — swap in real data whenever there's a backend to pull from.
# Aikibox-Website
