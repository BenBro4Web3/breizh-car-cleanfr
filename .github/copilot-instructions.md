# Breizh Car Clean - AI Agent Instructions

## Overview
Single-page React/TypeScript car detailing website (French). Vite + shadcn/ui + Tailwind. Section-based layout with anchor navigation.

## Tech Stack
- React 18 + TS + Vite (SWC)
- React Router v6 (SPA)
- shadcn/ui (Radix + Tailwind)
- Forms: React Hook Form + Zod
- Icons: Lucide React
- Toasts: Sonner
- Data: TanStack Query (unused)
- Font: Montserrat

## Architecture
- Main page: [Index.tsx](src/pages/Index.tsx) stacks sections: Header, Hero, About, Services, Gallery, Pricing, CustomQuote, GoogleReviews, Contact, Footer
- Components in [src/components/](src/components/), UI in [ui/](src/components/ui/)
- Navigation: hash links (#accueil, #apropos, etc.) from navLinks in [Header.tsx](src/components/Header.tsx)

## Patterns
- Responsive: mobile <768px, use `md:` for tablet+
- Styling: custom classes like `section-title`, `glass-card`, `hover-lift` in [index.css](src/index.css)
- Colors: HSL variables (--primary: 0 85% 50%, etc.)
- Mobile menu: Menu/X icons
- Provider order: QueryClient → Tooltip → Toasters → BrowserRouter

## Workflows
```bash
npm run dev      # Vite dev (port 8080)
npm run build    # Prod build
npm run build:dev # Dev build with lovable-tagger
npm run lint     # ESLint (@ts/no-unused-vars off)
npm run preview  # Preview
```

## Adding Sections
1. Create component in `src/components/`
2. Add to [Index.tsx](src/pages/Index.tsx) imports and render
3. Add to navLinks in [Header.tsx](src/components/Header.tsx) if navigable
4. Use kebab-case id for anchor (e.g., `<section id="mysection">`)

## Rules
- Routes: Add above catch-all `*` in [App.tsx](src/App.tsx)
- Tailwind content: watches `src/**` + `pages/**` + `components/**` + `app/**`
- French content only
- No tests; ESLint ignores unused vars
- Use shadcn/ui components; don't edit ui/ files

## Integration
- Lovable: vite.config.ts has componentTagger in dev
- useIsMobile() hook for responsive logic
