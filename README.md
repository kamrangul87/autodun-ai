# ⚡ Autodun — UK Automotive Intelligence Platform

> Free AI-powered tools for UK drivers: EV charging discovery, MOT risk prediction, vehicle diagnostics, and more.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Claude AI](https://img.shields.io/badge/Claude_AI-Anthropic-CC785C?style=flat-square&logo=anthropic&logoColor=white)](https://anthropic.com)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Status](https://img.shields.io/badge/Status-Live-00d48a?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

**[Live Platform → autodun.com](https://autodun.com)**

---

## What is Autodun?

Autodun is a UK-focused automotive intelligence platform that converts raw government data, infrastructure datasets, and AI reasoning into practical, free tools for everyday UK drivers. It delivers EV charging discovery with AI suitability scoring, DVSA-powered MOT risk prediction, AI vehicle diagnostics, parking fine appeals, and repair price benchmarking — all under one brand.

The platform is built as a suite of independent micro-tools, each deployed at its own subdomain with its own data pipeline. The main `autodun.com` shell serves as the discovery, SEO, and marketing layer.

---

## Platform Ecosystem

| Subdomain | Description |
|---|---|
| [autodun.com](https://autodun.com) | Main platform hub — tool discovery, animated demos, research blog |
| [ev.autodun.com](https://ev.autodun.com) | EV Charger Finder — maps 30,000+ UK charging stations with AI suitability scoring |
| [mot.autodun.com](https://mot.autodun.com) | MOT Predictor — estimates failure risk using live DVSA MOT History records |
| [ai.autodun.com](https://ai.autodun.com) | AI Assistant — free automotive Q&A powered by Claude AI and real UK vehicle data |
| [fix.autodun.com](https://fix.autodun.com) | Fix My Car — AI breakdown diagnosis, warning lights, parking fine appeals, price checker |

---

## Tools

### EV Charger Finder — `ev.autodun.com`
- Indexes 30,000+ UK public charging stations from national infrastructure datasets
- AI suitability scoring derived from aggregated user feedback
- Filter by connector type (CCS, CHAdeMO, Type 2) and power rating
- Heatmap and individual marker view modes
- GPS-based locate-me discovery with postcode fallback
- Dataset refreshed daily via OpenChargeMap API

### MOT Predictor — `mot.autodun.com`
- Predicts MOT failure risk before the test date
- Inputs: vehicle age, mileage, fuel type, prior failure count
- Risk classification: **Low / Medium / High** with confidence indicators
- Powered by live DVSA MOT History API — no stale data
- Operates at the vehicle level; no personal data captured

### AI Assistant — `ai.autodun.com`
- Free natural-language guidance for UK drivers
- Covers MOT prep, EV charging, used car buying, ULEZ compliance
- Powered by Claude AI (Anthropic) with real UK datasets as context
- No account required, no query limits

### Fix My Car — `fix.autodun.com`

| Tool | Route | Description |
|---|---|---|
| Breakdown Assistant | `/fix/breakdown` | Describe symptoms → AI diagnosis + action plan |
| Warning Light Decoder | `/fix/warning-lights` | Identify any dashboard light, severity + next steps |
| Parking Fine Appeal | `/fix/appeal` | Grounds checker + AI-generated appeal letter (PCN & private) |
| Fair Price Checker | `/fix/price` | Market rate comparison + photo-based damage assessment |

---

## Tech Stack

### Platform Shell (`autodun.com` — this repo)

| Layer | Library | Version |
|---|---|---|
| Framework | React | `18.3.1` |
| Language | TypeScript | `5.8.3` |
| Build Tool | Vite + SWC | `5.4.19` |
| Routing | React Router DOM | `6.30.1` |
| Styling | Tailwind CSS | `3.4.17` |
| Component System | shadcn/ui + Radix UI | — |
| Data Fetching | TanStack React Query | `5.83.0` |
| Charts | Recharts | `2.15.4` |
| Forms | React Hook Form + Zod | `7.61.1` / `3.25.76` |
| Icons | Lucide React | `0.462.0` |
| Analytics | Google Analytics 4 | — |
| Contact | Formspree | — |

### Full Platform (across all services)

| Layer | Technology |
|---|---|
| Subdomain services | Next.js 14 (App Router) |
| AI reasoning | Claude AI API (Anthropic) |
| Database & auth | Supabase (PostgreSQL + Row Level Security) |
| Hosting & CI/CD | Vercel (all services) |
| EV charging data | OpenChargeMap API |
| MOT data | DVSA MOT History API (UK Government) |
| ULEZ data | TfL Open Data API |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#070f1a` | Page background |
| Surface | `#111f33` | Cards, panels |
| Surface Alt | `#0d1b2a` | Section backgrounds |
| Footer | `#050c15` | Footer background |
| Accent Green | `#00d48a` | Primary CTA, badges, active states |
| Accent Blue | `#2979ff` | Secondary highlights |
| Foreground | `#f0f6ff` | Headings |
| Body Text | `#c8d8e8` | Paragraph text |
| Muted | `#8899aa` | Subtext, descriptions |
| Subtle | `#556677` | Footer text, captions |
| Font | Inter, system-ui | All text |
| Mono Font | JetBrains Mono | Code |

---

## Architecture

```
autodun-ai/                          ← This repo (platform shell)
├── src/
│   ├── pages/                       ← Route-level components
│   │   ├── Index.tsx                ← Landing page with hero, demos, tool sections
│   │   ├── EVChargerFinder.tsx      ← Tool page → iframe: ev.autodun.com
│   │   ├── MOTPredictor.tsx         ← Tool page → iframe: mot.autodun.com
│   │   ├── AIAssistant.tsx          ← Tool page → iframe: ai.autodun.com
│   │   ├── fix/
│   │   │   ├── FixHub.tsx           ← /fix — Fix My Car landing page
│   │   │   ├── Breakdown.tsx        ← /fix/breakdown → iframe: fix.autodun.com/breakdown
│   │   │   ├── WarningLights.tsx    ← /fix/warning-lights → iframe: fix.autodun.com/warning-lights
│   │   │   ├── Appeal.tsx           ← /fix/appeal → iframe: fix.autodun.com/appeal
│   │   │   └── Price.tsx            ← /fix/price → iframe: fix.autodun.com/price
│   │   ├── Blog.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx              ← Formspree with honeypot spam protection
│   │   ├── DataUsage.tsx
│   │   ├── Privacy.tsx / Terms.tsx / Cookies.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx           ← Page wrapper
│   │   │   ├── Header.tsx           ← Sticky nav with Fix dropdown, mobile accordion
│   │   │   └── Footer.tsx           ← Multi-column footer: Tools, Fix, Company
│   │   ├── demos/
│   │   │   ├── EVChargerDemo.tsx    ← 5-step animated charger discovery demo
│   │   │   └── MOTDemo.tsx          ← Animated risk gauge demo
│   │   ├── LogoMark.tsx             ← Reusable logo (sm / header / md / lg / xl / hero)
│   │   └── ui/                      ← 47 shadcn/ui primitives
│   └── lib/
│       ├── seo.ts                   ← Per-page dynamic meta injection
│       ├── ga.ts                    ← GA4 init + SPA page view tracker
│       └── utils.ts                 ← Tailwind class merge utility
├── public/
│   ├── blog/                        ← 8 static HTML articles (zero JS, full SEO)
│   ├── sitemap.xml                  ← 20 URLs, canonical non-www
│   └── robots.txt
├── index.html                       ← SPA entry point
├── vite.config.ts
├── tailwind.config.ts
└── vercel.json
```

**Micro-tool architecture.** Each major tool is a self-contained service at its own subdomain with an independent data pipeline. The `autodun.com` shell embeds them via iframe — decoupling deployments, scaling, and incidents across services.

**Static blog for performance.** Nine blog articles are plain HTML in `/public/blog/`. Served directly from Vercel's CDN edge with no React overhead, inline JSON-LD structured data, and full GA4 tracking.

**ML training data pipeline.** The MOT Predictor's risk model is trained on anonymised UK DVSA MOT History records (millions of test outcomes across vehicle age, mileage, make, and fuel type categories). Training is performed offline; the model is deployed as a lightweight scoring endpoint consumed by `mot.autodun.com`. EV AI scoring is updated daily from aggregated user session feedback and OpenChargeMap reliability signals.

---

## Getting Started

### Prerequisites

- **Node.js** `20.x`
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

> The iframe embeds (subdomains) only load if those services are running. Animated demos on each tool page render fully without them.

### Build

```bash
npm run build       # Production build → dist/
npm run preview     # Preview production build locally
npm run lint        # ESLint
```

---

## Environment Variables

This repo is a **frontend-only shell** — no backend, no secrets required to run locally.

| Variable | Description | Placeholder |
|---|---|---|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `VITE_FORMSPREE_ENDPOINT` | Formspree endpoint for contact form | `https://formspree.io/f/xxxxxxxx` |

```env
# .env.local — never commit real values
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Subdomain services (Next.js) require additional variables for Supabase, Claude AI API, DVSA API, and OpenChargeMap API — managed separately per service.

---

## Screenshots

| Homepage | Fix My Car | EV Charger Finder |
|---|---|---|
| ![Dark navy landing page with hero section and tool cards](docs/screenshots/homepage.png) | ![Fix My Car hub with 4 AI tool cards](docs/screenshots/fix-hub.png) | ![EV Charger Finder with AI-scored map](docs/screenshots/ev-finder.png) |

> Visit [autodun.com](https://autodun.com) for the live experience.

---

## Contributing

Autodun is a private project. If you have been granted access:

1. Branch from `main` using the convention `feat/your-feature` or `fix/your-fix`
2. Keep commits atomic with descriptive messages
3. Run `npm run lint` before pushing — no lint errors
4. Open a PR against `main` with a clear description of what changed and why
5. No force-pushes to `main`

---

## Global Talent Visa

This platform is part of the UK Global Talent Visa (GTV) portfolio submitted by **Kamran Gul**, demonstrating exceptional technical talent in the field of digital technology. Autodun was conceived, designed, built, and shipped solely by Kamran as a solo founder and developer — covering full-stack engineering, AI integration, data pipeline design, SEO architecture, and product strategy.

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

## Built By

**[Autodun](https://autodun.com)** — UK Automotive Intelligence

Built in the UK. Powered by real data. Designed for UK drivers.
