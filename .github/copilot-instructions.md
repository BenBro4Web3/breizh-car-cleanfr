# Breizh Car Clean - Copilot Instructions

## Project Overview
A single-page, multi-section React/TypeScript website for a car detailing service in Brittany (France). Built with Vite, React Router, shadcn/ui, and Tailwind CSS. The site showcases services, pricing, gallery, and contact information.

## Architecture

### Stack
- **Frontend**: React 18 + TypeScript + Vite (SWC transpiler)
- **Routing**: React Router v6 (SPA with catch-all NotFound route)
- **UI Framework**: shadcn/ui (Radix UI primitives + Tailwind)
- **Styling**: Tailwind CSS v3 with custom HSL color system
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Toasts/Notifications**: Sonner + shadcn/ui toast system
- **Data Fetching**: TanStack React Query (installed but may not be actively used)

### Component Structure
The app uses a **section-based layout** with single-page components:
- [Index.tsx](../src/pages/Index.tsx) is the main entry point, rendering stacked sections in order
- Each section (Header, Hero, About, Services, Gallery, Pricing, Contact, Footer) is a standalone component in [/src/components](../src/components/)
- Navigation uses anchor links (`#accueil`, `#apropos`, `#services`, etc.) defined in [Header.tsx](../src/components/Header.tsx)

### Key Patterns

**Responsive Design**: 
- Mobile breakpoint is 768px (`MOBILE_BREAKPOINT` in use-mobile.tsx)
- Use Tailwind's `md:` prefix for tablet+, no prefix for mobile-first defaults
- Header has mobile menu toggle (Menu/X icons from lucide-react)

**Styling Conventions**:
- Custom reusable class names in sections (e.g., `section-title`, `section-subtitle` in Contact.tsx)
- CSS modules or global styles via [index.css](../src/index.css) and [App.css](../src/App.css)
- Tailwind custom theme extends Montserrat font, HSL color variables (--primary, --accent, etc.)

**Navigation Data Structure**:
- navLinks array in Header defines all routes as hash links
- New sections should add entries to this array for automatic nav support

## Developer Workflows

### Local Development
```bash
npm run dev        # Start Vite dev server (port 8080)
npm run build      # Production build
npm run build:dev  # Dev build with component tagging (Lovable integration)
npm run lint       # ESLint check (unused vars disabled)
npm run preview    # Preview production build
```

### Adding New Sections
1. Create component in `src/components/`
2. Export as named export (e.g., `export const MySection = () => ...`)
3. Import and add to [Index.tsx](../src/pages/Index.tsx) in desired order
4. Add nav link entry to `navLinks` array in Header.tsx if needed
5. Use `id` attribute for anchor link target (e.g., `<section id="mysection">`)

### UI Components
- All UI components use shadcn/ui from [src/components/ui/](../src/components/ui/) (pre-built, Radix-based)
- Don't edit these directly unless fixing bugs
- Compose sections using Button, Card, Dialog, etc. from this library

## Critical Rules

1. **Route Management**: Add custom routes in App.tsx ABOVE the catch-all `<Route path="*" />` (see comment in [App.tsx](../src/App.tsx))
2. **Anchor Link IDs**: Use kebab-case IDs matching nav links (`#accueil`, `#apropos`, `#services`, etc.)
3. **Tailwind Scope**: Content paths in [tailwind.config.ts](../tailwind.config.ts) only watch `src/**` — ensure .tsx files are there
4. **Provider Stack** (App.tsx): QueryClientProvider → TooltipProvider → Toaster/Sonner → BrowserRouter. Don't reorder or skip Providers.

## Integration Points

- **Lovable Integration**: vite.config.ts includes `lovable-tagger` for development mode (`build:dev` command)
- **Icons**: All icons from lucide-react (used in Header mobile menu, Contact section, etc.)
- **Mobile Detection**: `useIsMobile()` hook available in [src/hooks/use-mobile.tsx](../src/hooks/use-mobile.tsx)

## Notes

- ESLint rule `@typescript-eslint/no-unused-vars` disabled (Lovable projects often have this)
- No test suite configured (add Jest/Vitest if needed)
- Color scheme uses CSS variables (HSL format) — customize in tailwind.config.ts theme.colors
- French language content throughout (e.g., "CONTACTEZ NOUS", service descriptions)
