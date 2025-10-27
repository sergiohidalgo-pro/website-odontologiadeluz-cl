# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite application for odontologiadeluz.cl (a dental clinic website). The project uses:
- React 19.1.1 with modern JSX
- Vite as the build tool (using rolldown-vite for better performance)
- Tailwind CSS v4 for styling
- ESLint for code quality
- pnpm as the package manager

## Development Commands

- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint to check code quality
- `pnpm preview` - Preview production build locally

## Architecture

The application follows a standard Vite + React structure:
- `src/main.jsx` - Application entry point with React 18+ createRoot API
- `src/App.jsx` - Main application component
- `src/index.css` - Global styles
- `src/App.css` - Component-specific styles
- `public/` - Static assets served directly
- `dist/` - Build output directory (ignored by ESLint)

## Key Configuration Details

- Uses Rolldown Vite (`rolldown-vite@7.1.14`) for improved build performance
- Tailwind CSS v4 integrated via Vite plugin
- ESLint configured with React Hooks and React Refresh plugins
- Custom ESLint rule: allows unused variables with uppercase/underscore pattern
- Supports modern JavaScript (ES2020) with JSX

## Package Management

This project uses pnpm with specific overrides for Vite. Always use `pnpm` commands instead of npm.

## Business Context & Brand Guidelines

### About Odontología de Luz

"Odontología de Luz" is a dental clinic that provides comprehensive dental care with love and kindness, focused on understanding the individual requirements of each patient from the professional vocation with love as dentists. The clinic considers the complete being in their approach to dental care.

### Target Audience
- Chilean men, women, children, and elderly adults
- Patients seeking comprehensive dental care with a humanistic approach

### Brand Voice & Tone
- Loving and understanding communication
- Speak to patients with warmth and comprehension
- Focus on individual needs and holistic care
- Professional yet approachable language

### Design System - Advanced Color Palette

#### Primary Colors
- **#2563eb (Primary Blue)**: Modern blue for headers, primary buttons, links
- **#1d4ed8 (Primary Dark)**: Darker variant for hover states
- **#3b82f6 (Primary Light)**: Lighter variant for secondary elements

#### Realistic Gold Gradient System
Replace solid gold with realistic metallic gradients that mimic real gold:

```css
/* Main Gold Gradient - Realistic metallic appearance */
--gold-realistic: linear-gradient(135deg, 
  #ffd900 0%,     /* Pure gold highlight */
  #ffcd3c 15%,    /* Bright gold surface */
  #f4a500 30%,    /* Rich gold mid-tone */
  #e8940f 50%,    /* Deep gold shadow */
  #cc7a00 70%,    /* Bronze shadow depth */
  #ffcd3c 85%,    /* Reflected light */
  #fff2cc 100%    /* Rim lighting */
);

/* Subtle Gold for backgrounds */
--gold-subtle: linear-gradient(135deg, 
  #fef3c7 0%, 
  #fed7aa 50%, 
  #fbbf24 100%
);

/* Dark Gold for text */
--gold-dark: #92400e;
```

#### Secondary Colors
- **#ec4899 (Pink)**: Accent color for secondary elements, hover states
- **#f472b6 (Pink Light)**: Lighter pink for backgrounds

#### Neutral System
- **#171717 (Neutral 900)**: Primary text, dark backgrounds
- **#262626 (Neutral 800)**: Secondary text
- **#fafafa (Neutral 50)**: Light backgrounds
- **#f5f5f5 (Neutral 100)**: Card backgrounds

### Expert UX/UI Design Guidelines (10+ Years Big Tech Experience)

Act as a senior UX/UI expert from Apple/Google/Meta when implementing changes:

#### Advanced Layout & Structure
- **Breakout Sections**: Implement full-viewport-width backgrounds with constrained content containers
- **8pt Grid System**: Use systematic 8-point spacing for perfect visual rhythm
- **Asymmetric Layouts**: Break traditional symmetry for modern, dynamic feel
- **Container Queries**: Use modern responsive design beyond media queries
- **Z-index Management**: Systematic layering with design tokens

#### Premium Visual Design
- **Real Gold Implementation**: Use the realistic gold gradient system above
- **Glass Morphism**: Subtle backdrop-blur effects for modern depth
- **Neumorphism**: Gentle 3D effects on interactive elements
- **Motion Design**: Scroll-triggered animations with performance optimization
- **Typography Expressiveness**: Use font-weight variations (300-900) for hierarchy

#### Advanced Accessibility Standards
- **WCAG 2.2 AAA Compliance**: Go beyond minimum standards
- **Color Contrast**: Minimum 7:1 for text, 3:1 for interactive elements
- **Focus Management**: Visible focus indicators with 2px outline + offset
- **Reduced Motion**: Respect prefers-reduced-motion settings
- **Screen Reader Optimization**: Semantic HTML5 + comprehensive ARIA
- **Touch Targets**: Minimum 44px for mobile interactions

#### Modern Typography System
```css
/* Modular Scale based on Golden Ratio (1.618) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */
--text-8xl: 6rem;      /* 96px */
```

#### Spacing System (8pt Grid)
```css
--space-1: 0.125rem;   /* 2px */
--space-2: 0.25rem;    /* 4px */
--space-3: 0.375rem;   /* 6px */
--space-4: 0.5rem;     /* 8px */
--space-6: 0.75rem;    /* 12px */
--space-8: 1rem;       /* 16px */
--space-12: 1.5rem;    /* 24px */
--space-16: 2rem;      /* 32px */
--space-24: 3rem;      /* 48px */
--space-32: 4rem;      /* 64px */
--space-40: 5rem;      /* 80px */
--space-48: 6rem;      /* 96px */
```

#### Component Patterns
- **Hero Sections**: Asymmetric split layouts with floating elements
- **Service Cards**: Bento grid layouts with varying sizes
- **Team Sections**: Card stacks with 3D hover transforms
- **Contact Forms**: Progressive disclosure with micro-interactions
- **Navigation**: Sticky headers with glass morphism

#### Performance & Technical Excellence
- **Image Optimization**: WebP/AVIF with fallbacks
- **CSS Architecture**: Utility-first with semantic components
- **JavaScript**: Minimal, progressive enhancement
- **Loading States**: Skeleton screens and optimistic UI
- **Error Handling**: Graceful degradation with user feedback

### Technical Implementation Requirements
- **Full-Width Breakout Design**: Backgrounds extend 100% viewport, content max-width constrained
- **Mobile-First Progressive Enhancement**: Start with mobile, enhance for larger screens
- **Modern CSS Features**: Container queries, CSS Grid subgrid, custom properties
- **Accessibility First**: Build with assistive technology from the start
- **Performance Budget**: <100kb initial bundle, <3s LCP, CLS <0.1