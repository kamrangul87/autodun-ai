# ⚡ Autodun — UK Automotive Intelligence Platform

> Free, data-driven tools for UK drivers: EV charger discovery, MOT risk analysis, and AI-powered vehicle guidance.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Status](https://img.shields.io/badge/Status-Live-00d48a?style=flat-square)]()
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)]()

**[Live Platform → autodun.com](https://autodun.com)**

---

## What is Autodun?

Autodun is a UK-focused automotive intelligence platform that turns raw government and infrastructure data into actionable tools for everyday drivers and public-sector researchers. It combines live DVSA MOT records, 30,000+ EV charging station datasets, and AI-powered guidance into a fast, accessible, zero-login web experience.

The platform is deployed as a suite of focused micro-tools under one brand — each tool lives at its own subdomain with an independent data pipeline, embedded into the main site via performant iframe integration. The main shell handles discovery, SEO, and brand presentation.

---

## Platform Ecosystem

| Subdomain | Description |
|---|---|
| [autodun.com](https://autodun.com) | Main platform hub — tool discovery, animated demos, research blog, and brand shell |
| [ev.autodun.com](https://ev.autodun.com) | EV Charger Finder — maps 30,000+ UK charging stations with AI suitability scoring |
| [mot.autodun.com](https://mot.autodun.com) | MOT Predictor — estimates failure risk using live DVSA MOT History records |
| [ai.autodun.com](https://ai.autodun.com) | AI Assistant — free automotive Q&A powered by real UK vehicle data |

---

## Features

### EV Charger Finder
- Indexes 30,000+ UK public charging stations from national infrastructure datasets
- AI suitability scoring derived from aggregated user feedback signals
- Filter by connector type (CCS, CHAdeMO, Type 2) and power rating (slow / fast / rapid / ultra-rapid)
- Dual view modes: spatial heatmap and individual station markers
- GPS-based "locate me" discovery with fallback postcode search
- Dataset refreshed daily

### MOT Predictor *(Beta)*
- Predicts MOT failure risk before the test date
- Inputs: vehicle age, annual mileage, fuel type, number of prior failures
- Risk classification: **Low / Medium / High** with confidence indicators
- Powered by live DVSA MOT History records — no scraping, no stale data
- Operates at the vehicle level only; no personal data captured or stored

### AI Assistant
- Free natural-language guidance for UK drivers
- Covers: MOT preparation, EV charging planning, used car buying, ULEZ compliance
- Backed by real UK government and infrastructure datasets
- No account required, no query limits

### Animated Interactive Demos
- `EVChargerDemo` — 5-stage animated demo: location search → map render → station selection → AI scoring → feedback loop
- `MOTDemo` — Animated circular risk gauge with live counter, form input simulation, and risk badge reveal
- Both demos run entirely client-side with no external calls; designed to convert before the user loads the full tool

### Research Blog
- 8 in-depth articles on EV infrastructure, MOT intelligence, and clean air policy
- Served as static HTML from `/public/blog/` for maximum cache-hit performance
- Full structured data on every post: `Article` + `FAQPage` JSON-LD schemas
- Open Graph and Twitter Card meta on every article
- Sticky branded header, dark-navy design system, consistent with main platform

### Platform Shell
- Per-page dynamic SEO: title, description, canonical URL, OG, and Twitter Card injected via `setSEO()` utility
- SPA page-view tracking via GA4 (react-ga4), fires on every route change
- Sticky navigation with mobile-responsive hamburger menu
- Multi-column footer with links across all platform surfaces
- Contact form with spam protection via Formspree

---

## Tech Stack

### Frontend

| Layer | Library | Version |
|---|---|---|
| Framework | React | `18.3.1` |
| Language | TypeScript | `5.8.3` |
| Build Tool | Vite + SWC | `5.4.19` |
| Routing | React Router DOM | `6.30.1` |
| Styling | Tailwind CSS | `3.4.17` |
| Component System | shadcn/ui + Radix UI primitives | — |
| Data Fetching | TanStack React Query | `5.83.0` |
| Charts | Recharts | `2.15.4` |
| Forms | React Hook Form | `7.61.1` |
| Validation | Zod | `3.25.76` |
| Icons | Lucide React | `0.462.0` |
| Carousel | Embla Carousel | `8.6.0` |
| Notifications | Sonner | `1.7.4` |
| Drawer / Dialogs | Vaul | `0.9.9` |
| Date Utilities | date-fns | `3.6.0` |
| Analytics | react-ga4 | `2.1.0` |

### Infrastructure

| Layer | Service |
|---|---|
| Hosting & CI/CD | Vercel (auto-deploy from `main`) |
| Analytics | Google Analytics 4 |
| Contact Forms | Formspree |
| Data: MOT | DVSA MOT History (live government records) |
| Data: EV | UK national EV charging infrastructure datasets |

---

## Architecture

```
autodun-ai/                          ← This repo (platform shell)
├── src/
│   ├── pages/                       ← Route-level components
│   │   ├── Index.tsx                ← Landing page: hero, stats, demos, tool cards
│   │   ├── EVChargerFinder.tsx      ← Tool page → iframe: ev.autodun.com
│   │   ├── MOTPredictor.tsx         ← Tool page → iframe: mot.autodun.com
│   │   ├── AIAssistant.tsx          ← Tool page → iframe: ai.autodun.com
│   │   ├── Blog.tsx                 ← Blog listing → links to /public/blog/
│   │   ├── About.tsx
│   │   ├── Contact.tsx              ← Formspree form with honeypot
│   │   ├── DataUsage.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Cookies.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx           ← Page wrapper (Header + outlet + Footer)
│   │   │   ├── Header.tsx           ← Sticky nav, mobile menu, brand logo
│   │   │   └── Footer.tsx           ← Multi-column brand footer
│   │   ├── demos/
│   │   │   ├── EVChargerDemo.tsx    ← Animated 5-step charger discovery demo
│   │   │   └── MOTDemo.tsx          ← Animated risk gauge with step simulation
│   │   ├── LogoMark.tsx             ← Reusable logo (sm / header / md / lg / xl / hero)
│   │   ├── NavLink.tsx              ← Router-aware nav link with active state
│   │   └── ui/                      ← 47 shadcn/ui primitives (buttons, cards, etc.)
│   ├── lib/
│   │   ├── seo.ts                   ← Dynamic meta tag injection per page
│   │   ├── analytics.ts             ← GA4 init + SPA page view tracker
│   │   └── utils.ts                 ← Tailwind class merge utility
│   ├── hooks/                       ← Custom React hooks
│   ├── App.tsx                      ← Router setup + GA4 initialisation
│   └── index.css                    ← Global styles, design tokens, utility classes
├── public/
│   └── blog/                        ← Static HTML articles (zero JS overhead)
│       ├── index.html               ← Blog hub with article listing
│       ├── mot-history-check-uk.html
│       ├── mot-advisories-explained-uk.html
│       ├── electric-car-charger-map-uk.html
│       ├── ev-charging-on-uk-motorways.html
│       ├── ev-charging-reliability-uk.html
│       ├── ulez-checker-uk.html
│       ├── uk-vehicle-data-tools.html
│       └── why-uk-councils-are-flying-blind-on-ev-charging-infrastructure.html
├── index.html                       ← SPA entry point (GA4 script, root div)
├── vite.config.ts                   ← Vite config: port 8080, path alias @/
├── tailwind.config.ts               ← Custom palette, dark mode, extended fonts
├── tsconfig.json
└── vercel.json                      ← Redirect: autodun.com → www.autodun.com
```

### Design Decisions

**Micro-tool architecture.** Each major tool (EV Finder, MOT Predictor, AI Assistant) is a self-contained service at its own subdomain with an independent data pipeline. `autodun.com` acts as the discovery and SEO layer. This decouples scaling, updates, and incidents: a data pipeline change at `ev.autodun.com` has zero impact on the main shell.

**Static blog for performance.** Blog articles are plain HTML in `/public/blog/`, not React routes. They are served directly by the CDN with no JavaScript parse cost, no hydration, and no framework overhead. Each file includes inline JSON-LD structured data, OG meta tags, and GA4 — everything needed for SEO and analytics in a single file.

**Animated demos before the iframe.** Each tool page renders a fully client-side animated demo (`EVChargerDemo`, `MOTDemo`) that simulates the tool UX with zero network calls. This gives users immediate context while the iframe loads, and works on slow connections or if the subdomain is temporarily unavailable.

**Design system.** A single dark-navy palette (`#070f1a` background, `#00d48a` accent green, `#f0f6ff` foreground) runs consistently across the React SPA, all 9 static blog files, and all subdomains. Defined as CSS custom properties in `index.css` and mapped into Tailwind's config.

---

## Getting Started

### Prerequisites

- **Node.js** `20.x` (required — see `package.json` `engines` field)
- **npm** `9+`

### Local Setup

```bash
# Clone the repository
git clone https://github.com/kamrangul87/autodun-ai.git
cd autodun-ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

> **Note:** The iframe embeds (`ev.autodun.com`, `mot.autodun.com`, `ai.autodun.com`) will only load in development if the subdomain services are running. The animated demos on each tool page render fully without them.

### Build

```bash
# Production build → outputs to dist/
npm run build

# Preview the production build locally
npm run preview

# Type-check + lint
npm run lint
```

---

## Environment Variables

This repo is a **frontend-only shell** — there is no backend, no database, and no secrets required to run the dev server or build.

The following values are currently hardcoded in source and can be extracted to environment variables as needed:

| Variable | Description | Placeholder |
|---|---|---|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `VITE_FORMSPREE_ENDPOINT` | Formspree endpoint for the contact form | `https://formspree.io/f/xxxxxxxx` |

To override locally, create a `.env.local` file at the project root:

```env
# .env.local — never commit this file
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Vite automatically loads `.env.local` and exposes variables prefixed with `VITE_` to client-side code.

---

## Screenshots

| Homepage | EV Charger Finder | MOT Predictor |
|---|---|---|
| ![Dark navy landing page with hero section, animated demos, and tool cards](docs/screenshots/homepage.png) | ![EV Charger Finder with map view and AI suitability scores](docs/screenshots/ev-finder.png) | ![MOT Predictor with animated circular risk gauge](docs/screenshots/mot-predictor.png) |

> Visit [autodun.com](https://autodun.com) for the live experience.

---

## Contributing

Autodun is a private project. If you have been granted repository access:

1. **Branch** from `main` using the convention `feat/your-feature` or `fix/your-fix`
2. **Keep commits atomic** — one logical change per commit with a descriptive message
3. **Lint before pushing** — run `npm run lint` and fix all errors
4. **Open a PR against `main`** with a clear description of what changed and why
5. **No force-pushes** to `main` — all merges go through PR review

For bug reports or feature requests, open an issue in this repository.

---

## License

This project is **proprietary and all rights reserved.**

No part of this codebase may be reproduced, distributed, modified, or used in derivative works without explicit written permission from the project owner.

---

## Built By

**[Autodun](https://autodun.com)** — UK Automotive Intelligence

Built to make UK vehicle data more accessible, more actionable, and more honest.
