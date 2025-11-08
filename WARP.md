# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS + PostCSS
- Source root: src/
- Routing: file-system routes under src/app; root layout at src/app/layout.tsx
- Path alias: @/* → src/* (see tsconfig.json)

Commands
- Install deps: npm install
- Local dev: npm run dev (http://localhost:3000)
- Production build: npm run build
- Start prod server (after build): npm run start
- Lint: npm run lint
- Clean install (Windows-only script in package.json): npm run clean
  - macOS/Linux equivalent: rm -rf node_modules package-lock.json && npm install
- Tests: none configured (no jest/vitest scripts present)

Architecture and important files
- App shell and metadata
  - Root layout: src/app/layout.tsx sets global <html>/<body>, imports global CSS (src/styles/globals.css), loads local fonts via next/font, renders Header/Footer, adds @vercel/analytics, and injects Calendly widget + structured data (JSON-LD). SEO metadata (title, description, OpenGraph, Twitter) is defined via Next.js Metadata API here.
  - Home route: src/app/page.tsx composes src/app/home/Home.tsx, which assembles top-level sections (Hero, About, Services, Projects, Recommendations, Contact) using components under src/components/*.
- Routes
  - Pages are implemented under src/app/<route>/page.tsx, e.g. insights/, learning/, projects/ (with subroutes corporate/, freelancing/, personal/), resources/, services/.
  - Client components opt in via "use client" when needed (e.g., src/app/insights/page.tsx for search and pagination state).
- Data and types
  - Data lives in src/data (TypeScript modules and insights.json). The insights route reads src/data/insights.json and displays featured and paginated lists.
  - Shared types are in src/types (e.g., project.ts, experience.ts) and are included by tsconfig.json to aid type safety.
- UI components
  - Domain-focused components are in src/components/<domain>/ (hero, about, services, projects, recommendations, contact, header, footer, etc.).
  - Reusable primitives live in src/components/ui (Container, SkeletonHeader, Timeline, etc.).
  - A small utility helper cn (className merge) is provided in src/lib/util.ts (clsx + tailwind-merge).
- Styling
  - Tailwind config: tailwind.config.ts enables darkMode: 'class', extends theme (fonts bound to CSS vars from next/font, colors, animations), and registers a plugin that exposes all Tailwind colors as CSS variables. Content globs cover src/app, src/pages, src/components.
  - PostCSS: postcss.config.mjs loads tailwindcss.
  - Global styles: src/styles/globals.css.
- Configuration
  - next.config.ts
    - images.remotePatterns allows https://assets.aceternity.com and https://images.unsplash.com; add domains here when using next/image for other sources.
    - headers() sets proper Content-Type for /manifest.json (PWA).
  - tsconfig.json sets strict TS, bundler moduleResolution, and the @/* path alias.
  - ESLint: .eslintrc.json extends next/core-web-vitals and next/typescript; lint via next lint.
  - Public assets and PWA: public/ contains favicons, manifest.json, and images referenced by layout metadata.

Working notes
- Adding routes: create a folder with page.tsx under src/app (e.g., src/app/blog/page.tsx). Use layout.tsx for global wrappers; add route-level layout.tsx if a section needs its own shell.
- Adding remote images: update images.remotePatterns in next.config.ts to include the host before using next/image.
- Tailwind usage: ensure new components live under paths covered by tailwind.config.ts content globs so classes are included in the build.
- Fonts: Local variable fonts are set in layout.tsx; reference with font-sans/font-mono classes bound in tailwind.config.ts.
