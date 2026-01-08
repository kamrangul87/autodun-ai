Autodun — EV & MOT Intelligence Platform (UK)
Project Overview

Autodun is a UK-focused mobility intelligence platform providing tools and insights for:

Electric Vehicle (EV) charging discovery and analysis

MOT history and vehicle readiness insights

Data-driven decision support for drivers and future public-sector use

The platform is built as a fast, modern web application with a static-first architecture, designed for reliability, performance, and long-term extensibility.

Live URL:
https://autodun.com

Key Features

EV Finder
Locate and analyse nearby EV charging stations using structured datasets.

MOT Intelligence (Beta)
Vehicle readiness insights using MOT history and contextual analysis.

Static Blog (In Progress)
Research-grade articles on EV infrastructure, public data gaps, and UK mobility challenges.

Performance-First Frontend
Optimised for fast load times and clean SEO.

Tech Stack

This project is built with:

Vite — frontend build tool

React 18 — UI framework

TypeScript — type-safe development

Tailwind CSS — utility-first styling

shadcn/ui — component system

Deployment is handled via Vercel.

Project Structure (High Level)
/
├─ public/              # Static assets and static pages (including /blog)
├─ src/                 # Application source code
├─ index.html           # App entry point
├─ package.json         # Project configuration
└─ vite.config.ts       # Vite configuration

Local Development (Optional)

If you choose to work locally:

Requirements

Node.js 20.x

npm

Steps
# Install dependencies
npm install

# Run development server
npm run dev


The app will be available at:

http://localhost:5173

Deployment

Production deployments are automatically triggered from the main branch via Vercel.

Build command: npm run build

Output directory: dist

Runtime: Node.js 20.x

Ownership & Authorship

This project is developed and maintained by:

Kamran Gul
Founder — Autodun

Autodun is an independent project focused on practical, data-driven improvements to UK mobility systems.

Status

Platform: Live

Blog: Active development

MOT Intelligence: Beta

EV Tools: Live

License

This project is currently private and not licensed for redistribution.
