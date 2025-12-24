# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
```

### Notes
- Uses Next.js 16.1.1 with App Router (not Pages Router)
- Port 3000 is the default development port
- Hot module replacement is enabled by default

## Architecture Overview

### Core Technologies
- **Framework:** Next.js 16.1.1 with App Router
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS 3.4.1 with custom animations
- **Animations:** Lenis (smooth scrolling), custom canvas-based liquid background
- **Icons:** React Icons
- **Deployment:** Vercel with analytics

### Project Structure

```
src/
├── app/              # Next.js App Router pages (server components by default)
│   ├── layout.tsx    # Root layout with SEO metadata, LiquidBackground, global setup
│   ├── page.tsx      # Home page entry
│   ├── home/         # Home page client component
│   └── projects/     # Project pages with category-based routing
│       ├── page.tsx               # Main projects hub
│       ├── ProjectsClient.tsx     # Shows all 3 categories
│       ├── freelancing/           # Freelancing category page
│       ├── corporate/             # Corporate category page
│       └── personal/              # Personal projects page
│
├── components/       # Reusable React components
│   ├── ui/          # Low-level UI elements (Container, ProjectCard, etc.)
│   ├── header/      # Floating navigation with scroll detection
│   ├── hero/        # Landing section components
│   ├── projects/    # Project showcase components
│   └── [feature]/   # Feature-specific components (about, services, etc.)
│
├── data/            # Static data files (SINGLE SOURCE OF TRUTH)
│   ├── project-data.ts        # All projects with categories
│   ├── experience-data.ts     # Work experience timeline
│   ├── education-data.ts      # Education history
│   └── certification-data.ts  # Certifications
│
├── types/           # TypeScript interfaces
├── lib/             # Utility functions
└── styles/          # Global CSS and Tailwind setup
    └── globals.css  # CSS variables for theming, component classes
```

### Key Architectural Patterns

#### 1. Data-First Approach
All portfolio content lives in `/src/data/` TypeScript files. Components consume this data via props.

**Adding a new project:**
1. Edit `/src/data/project-data.ts`
2. Add a new object to the `projects` array with required fields
3. Set `category: "Freelancing" | "Corporate" | "Personal"` for automatic filtering

```typescript
{
  title: "Project Name",
  description: "...",
  technologies: ["React", "Next.js"],
  imageUrl: "/path/to/image.png",
  previewGif: "/path/to/preview.gif",  // Optional hover animation
  liveUrl: "https://...",              // Optional
  githubUrl: "https://...",            // Optional
  category: "Personal"                  // For filtering
}
```

#### 2. Server vs Client Components
- **Server Components (default):** Page routes, metadata generation, static content
- **Client Components ("use client"):** Interactive elements requiring hooks (useState, useEffect, useRef)

Examples of client components:
- `Header.tsx` (scroll detection, theme toggle)
- `ProjectsClient.tsx` (carousel auto-scroll, drag detection)
- `LiquidBackground.tsx` (canvas animation)
- `AnimatedProjectPreview.tsx` (intersection observer, GIF preloading)

#### 3. Project Category System
Projects are filtered by category at the component level:

```typescript
// ProjectsClient.tsx pattern
const freelancingProjects = projects.filter(p => p.category === "Freelancing");
const corporateProjects = projects.filter(p => p.category === "Corporate");
const personalProjects = projects.filter(p => p.category === "Personal");
```

Each category has its own route (`/projects/freelancing`, `/projects/corporate`, `/projects/personal`) but all consume the same data source.

#### 4. Responsive Display Pattern
Desktop: 3-column grid layout
Mobile: Horizontal carousel with:
- Auto-scroll every 5 seconds (when not dragging)
- Snap scrolling (`snap-mandatory`)
- Touch/drag support

#### 5. Theme Management
Light/dark mode implementation:
- Persisted in localStorage
- CSS class-based (`dark` class on `<html>`)
- System preference detection as fallback
- All theme colors defined as CSS variables in `globals.css`

Toggle logic in `Header.tsx`:
```typescript
const newTheme = theme === "light" ? "dark" : "light";
localStorage.setItem("theme", newTheme);
document.documentElement.classList.toggle("dark", newTheme === "dark");
```

#### 6. Performance Optimizations
- **Lazy loading:** GIFs preload only when scrolled into view (Intersection Observer)
- **Connection-aware:** Skips GIF animations on slow 2G/3G networks
- **Canvas animations:** Uses `requestAnimationFrame` for smooth 60fps
- **Image optimization:** Next.js Image component with remote patterns configured

## Styling Architecture

### Tailwind Configuration
- **Color system:** HSL-based CSS variables (`--background`, `--foreground`, `--primary`, etc.)
- **Custom animations:** `marquee`, `fade-in-up`, `float`, `shine-infinite`, `accordion-down/up`
- **Fonts:** Geist Sans (primary), Geist Mono (code)
- **Path alias:** `@/*` maps to `./src/*`

### Custom CSS Classes (globals.css)
```css
.nav-link          /* Navigation link with gradient on active state */
.gradient-link     /* Inline gradient text links */
.gradient-button   /* Gradient-text buttons */
.gradient-text     /* Large gradient text spans */
```

### Theme Variables
All colors are defined in `:root` and `.dark` blocks using CSS custom properties. To change colors, edit `/src/styles/globals.css`.

## Common Development Tasks

### Adding a New Page
1. Create folder in `/src/app/[route-name]/`
2. Add `page.tsx` (server component with metadata export)
3. Add `[RouteName]Client.tsx` for interactive logic (if needed)
4. Export metadata for SEO:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "...",
  openGraph: { ... },
  twitter: { ... }
};
```

### Modifying Animations
1. Add keyframe in `tailwind.config.ts` → `extend.keyframes`
2. Add animation in `tailwind.config.ts` → `extend.animation`
3. Use via className: `className="animate-[animation-name]"`

### Working with Images
- Store static images in `/public/`
- Reference from root: `imageUrl: "/images/project.png"`
- Use Next.js Image component: `<Image src="..." alt="..." width={} height={} />`
- For remote images, add hostname to `next.config.ts` → `images.remotePatterns`

### LiquidBackground Component
Canvas-based animated background with:
- Mouse-following gradient effect
- Theme-aware colors (light/dark)
- Smooth easing animations
- Performance optimized with `requestAnimationFrame`

Located at: `src/components/ui/LiquidBackground.tsx`

### SEO & Metadata
Root layout (`app/layout.tsx`) includes:
- Structured data (JSON-LD): Person, WebSite, ProfessionalService schemas
- OpenGraph metadata
- Twitter card metadata
- Dynamic sitemap (`app/sitemap.ts`)
- Robots.txt (`app/robots.ts`)

Each page should export its own metadata for route-specific SEO.

## TypeScript Configuration

- **Strict mode enabled:** All code must be type-safe
- **Path alias:** `@/` → `./src/`
- **Target:** ES2017
- **Module resolution:** Bundler (Next.js default)

When adding new types, create interfaces in `/src/types/`.

## State Management

No global state library (Redux/Zustand) is used. State management is component-level:
- `useState` for local state
- `useEffect` for side effects (scroll listeners, theme detection)
- `useRef` for DOM references (carousel scrolling, canvas)
- LocalStorage for persistent preferences (theme)

## File Naming Conventions

- **Page routes:** `page.tsx` (server component)
- **Client components:** `[ComponentName]Client.tsx`
- **UI components:** PascalCase (e.g., `ProjectCard.tsx`)
- **Data files:** kebab-case (e.g., `project-data.ts`)
- **Type files:** kebab-case (e.g., `project.ts`)

## Important Notes

1. **Never modify data directly in components** - All content updates go through `/src/data/` files
2. **Use Tailwind classes first** - Only add custom CSS when absolutely necessary
3. **Preserve "use client" directives** - Only client components can use hooks
4. **Test on mobile** - Carousel behavior differs between desktop grid and mobile scroll
5. **Check theme in both modes** - All UI should work in light and dark themes
6. **Remote images require configuration** - Add to `next.config.ts` → `images.remotePatterns`
7. **ESLint configuration** - Extends `next/core-web-vitals` and `next/typescript`
