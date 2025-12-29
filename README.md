# Breizh Car Clean

Professional car detailing service website built with React + Vite, deployed on OVH.

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

### Option 1: Local IDE (Recommended)

Clone this repo, make changes locally, and push to GitHub. Changes will auto-deploy to OVH.

### Option 2: GitHub Web Editor

- Navigate to any file
- Click the edit (pencil) icon
- Commit your changes
- Deployment triggers automatically

### Option 3: GitHub Codespaces

- Click "Code" → "Codespaces" → "New codespace"
- Edit files and commit changes
- Push to trigger deployment

## Deployment

Your website is automatically deployed to OVH hosting via GitHub Actions.

### How It Works

1. **Push to GitHub** - Commit and push changes to the `main` branch
2. **Automatic Build** - GitHub Actions builds the project automatically
3. **Deploy to OVH** - Built files are deployed to your OVH server via SFTP
4. **Live in Minutes** - Changes are live at https://breizh-car-clean.fr/

### Deployment Configuration

The deployment is handled by [.github/workflows/deploy-ovh.yml](.github/workflows/deploy-ovh.yml).

**Required GitHub Secrets** (already configured):
- `OVH_SSH_HOST` - SSH server (ssh.cluster031.hosting.ovh.net)
- `OVH_SSH_USER` - SSH username (agenccs)
- `OVH_SSH_KEY` - Private SSH key for authentication
- `OVH_REMOTE_PATH` - Remote directory (/home/agenccs/agenccs/breizhcarclean)

### Manual Deployment

You can trigger a manual deployment from GitHub:
1. Go to the "Actions" tab in your repository
2. Select "Deploy to OVH" workflow
3. Click "Run workflow"

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

---

**Last Updated**: December 29, 2025
