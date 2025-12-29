# Breizh Car Clean

Professional car detailing service website built with Lovable.

## Project Overview

**Website**: https://breizh-car-clean.fr/

A modern, responsive single-page React application for Breizh Car Clean, offering professional car detailing services in Brittany, France.

## Technologies

This project is built with:

- **Vite** - Fast build tool
- **React 18** + TypeScript
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling
- **React Router v6** - Navigation
- **React Hook Form** + Zod - Form validation
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Getting Started

### Prerequisites

- Node.js 16+ & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd breizh-car-cleanfr

# Install dependencies
npm i

# Start development server (http://localhost:8080)
npm run dev
```

### Available Scripts

```sh
npm run dev          # Start development server with hot reload
npm run build        # Create production build
npm run build:dev    # Build with Lovable tagger
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Editing Your Website

### Option 1: Using Lovable (Recommended)

Visit [Lovable](https://lovable.dev) and open your project. Changes are auto-committed to GitHub.

### Option 2: Local IDE

Clone this repo, make changes locally, and push to GitHub. Changes sync automatically with Lovable.

### Option 3: GitHub Web Editor

- Navigate to any file
- Click the edit (pencil) icon
- Commit your changes

### Option 4: GitHub Codespaces

- Click "Code" → "Codespaces" → "New codespace"
- Edit files and commit changes

## Deployment

Your website is automatically deployed with Lovable Pro. 

### How It Works

1. **Lovable Hosting** - Built-in deployment at https://breizh-car-clean.fr/
2. Changes push to GitHub → Auto-deployed within minutes
3. No additional CI/CD setup needed

### Custom Domain

Your custom domain `breizh-car-clean.fr` is already connected via Lovable.

To manage domain settings:
1. Open [Lovable Dashboard](https://lovable.dev)
2. Project Settings → Domains
3. View or modify domain configuration

## Project Structure

```
src/
├── pages/
│   └── Index.tsx          # Main page (all sections)
├── components/
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section with video
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services offered
│   ├── Gallery.tsx        # Photo gallery
│   ├── Pricing.tsx        # Pricing plans
│   ├── CustomQuote.tsx    # Custom quote form
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── ui/                # shadcn/ui components
├── styles/
│   └── index.css          # Global styles
└── main.tsx              # App entry point
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ French language content
- ✅ SEO optimized (schema.org structured data)
- ✅ Google Analytics integration
- ✅ Contact form
- ✅ Custom quote request
- ✅ Service gallery
- ✅ Pricing table
- ✅ Google Reviews integration

## Support

For Lovable features and documentation, visit [docs.lovable.dev](https://docs.lovable.dev)

---

**Last Updated**: December 29, 2025
