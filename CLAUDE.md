# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for Brenda, a tarot reader and therapist, built with React and Vite. The site promotes her tarot reading services with an emphasis on emotional guidance and self-discovery rather than fortune telling.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build
- `pnpm deploy` - Deploy to GitHub Pages (pushes to brendacartomante.github.io)

## Architecture

### Tech Stack
- **React 19** with JSX (no TypeScript)
- **Vite** for build tooling
- **Tailwind CSS v4** for styling with @tailwindcss/vite plugin
- **Shadcn/ui** components (New York style, no RSC/TSX)
- **Lucide React** for icons
- **Framer Motion** for animations
- **pnpm** as package manager

### Project Structure
- Single-page application in `src/App.jsx`
- Shadcn/ui components in `src/components/ui/`
- Custom hooks in `src/hooks/`
- Utilities in `src/lib/utils.js` (contains `cn()` helper for className merging)
- Static assets (images) in `src/assets/`

### Key Features
- Hero section with call-to-action
- Service offerings with Stripe payment links
- Testimonials section
- About section
- WhatsApp integration for contact

### Styling Approach  
- Custom CSS in `App.css` combined with Tailwind utility classes
- Uses CSS Grid and Flexbox for layouts
- Responsive design with mobile-first approach
- Path alias `@` configured for `./src`

### External Integrations
- Stripe for payments (buy.stripe.com links)
- WhatsApp for contact (wa.me links)
- GitHub Pages deployment to custom domain

## Linting Configuration
ESLint is configured with React-specific rules, unused variables checking, and React Refresh plugin for development.