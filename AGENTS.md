# Repository Guidelines

## Project Structure & Module Organization
- `src/app` houses App Router routes; every route owns a `page.tsx` (and optional `layout.tsx`) and imports sections from `@/components/sections`.
- `src/components` now splits into `layout/` (header, footer, navigation sheets), `sections/` (hero, services, projects-showcase, experience-timeline, testimonials, learning, insights, resources, contact), and `ui/` where shadcn/ui primitives live. Theme utilities live in `src/components/theme`.
- Support code resides in `src/assets`, `src/data`, `src/lib`, `src/styles`, and `src/types`; always import via the `@/*` alias.
- Static assets belong in `public/`, while build and styling knobs (`tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`) stay at the repo root and should be updated whenever design tokens or deployment rules shift.

## UI Framework & Theming
- All interactive and layout elements must use shadcn/ui wrappers around Radix primitives; no bespoke component styling.
- Dark/light mode flows through the ThemeProvider in `src/components/theme`, with a persistent toggle surfaced in the header; extend the same tokens when creating new UI.
- Replace placeholders with shadcn counterparts (Button, Card, Tabs, Sheet, NavigationMenu, etc.) before adding new sections or routes.

## Styling & Tokens
- Tailwind is pinned to v3.4.15; custom properties live in `src/styles/globals.css`. Keep foundational CSS there and let components rely on utility classes plus tokens (`--muted`, `--ring`, etc.).
- Remove unused or duplicate declarations when touching styles and align any new utilities with the refreshed design system.

## Content & Pages
- Home plus secondary routes (services, projects, insights, learning, resources) already ship with rich dummy content; maintain that level of fidelity for any new page.
- Category grids on projects subroutes should stay populated; avoid blank states by supplying representative placeholder data.
- Swap placeholder resource download URLs or scheduling links with real assets whenever they become available.

## Build, Test, and Development Commands
- `npm run dev` – launch the Next.js dev server with hot reload on `http://localhost:3000`.
- `npm run build` – compile the production bundle; treat failures here as blockers.
- `npm run start` – serve the compiled `.next` output to mimic production.
- `npm run lint` – run ESLint using `eslint-config-next`.
- `npm run clean` – drop `node_modules` and the lockfile before re-installing; only use when dependency resolution breaks.

## Coding Style & Naming Conventions
- Strict TypeScript is enabled, so type every prop, return value, and configuration object; place reusable contracts in `src/types`.
- Components and hooks are PascalCase (`HeroSection.tsx`, `useTheme.ts`), utilities camelCase, and folders kept small with `index.ts` re-exports when grouping variants.
- Follow the two-space indentation seen across the repo, prefer functional components, and compose styling via Tailwind utilities combined with `clsx`/`tailwind-merge`.
- Mark client components with `"use client"` and isolate browser-only side effects inside hooks so SSR paths remain deterministic.

## Testing Guidelines
- No runner ships by default; when adding coverage, pair Jest + React Testing Library for components and Playwright for cross-page journeys.
- Component specs live under `src/__tests__` or beside the file as `*.test.tsx`; e2e suites go in `e2e/*.spec.ts`.
- Until automated tests exist, document manual QA (viewports, keyboard navigation, reduced motion) in each PR and gate merges with `npm run lint && npm run build`.
- Manual QA checklist: verify responsive layouts, theme toggle persistence, CTA links, and section rendering on every route via `npm run dev`.

## Commit & Pull Request Guidelines
- Stick to the Conventional Commit style already in history (`feat(scope): …`, `fix(scope): …`, `chore(scope): …`) and keep scopes aligned with folders like `header` or `insights`.
- PR descriptions should explain intent, link related issues, enumerate new routes or env vars, and include before/after screenshots for UI work.
- Rebase on `main`, keep commits focused, and verify `npm run build && npm run start` locally before requesting review.
