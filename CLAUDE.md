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

### Design System - Paleta Oficial de Marca Odontología de Luz (2025)

#### Colores Oficiales de Marca
Los siguientes colores son los ÚNICOS colores aprobados para uso en el diseño:

**Paleta Principal:**
- **#DDBDF4**: Lavanda suave - fondos delicados y elementos sutiles
- **#BBA3F8**: Lavanda medio - acentos y elementos secundarios
- **#9987C6**: Púrpura grisáceo - elementos de nivel medio
- **#e7d29a**: Dorado cremoso - acentos cálidos y elegantes
- **#cfaf55**: Dorado vibrante - botones principales y CTAs

**Colores para Texto y Elementos Oscuros:**
- **#002c82**: Azul marino profundo - texto principal (WCAG AAA)
- **#5e17eb**: Púrpura vibrante - acentos especiales y elementos destacados

#### Sistema de Colores Implementado

```css
/* Colores Primarios - Púrpuras/Lavandas de Marca */
--primary: #002c82;              /* Azul marino profundo - texto principal */
--primary-light: #9987C6;        /* Púrpura grisáceo - elementos medianos */
--primary-medium: #BBA3F8;       /* Lavanda medio - acentos */
--primary-subtle: #DDBDF4;       /* Lavanda suave - fondos delicados */

/* Sistema Dorado Oficial */
--gold-core: #cfaf55;            /* Dorado vibrante oficial */
--gold-light: #e7d29a;           /* Dorado cremoso oficial */
--gold-realistic: linear-gradient(135deg, 
  #cfaf55 0%,     /* Dorado vibrante de marca */
  #e7d29a 25%,    /* Dorado cremoso de marca */
  #cfaf55 50%,    /* Dorado vibrante central */
  #b8941a 75%,    /* Dorado más profundo */
  #e7d29a 100%    /* Dorado cremoso final */
);

/* Púrpura Vibrante de Marca */
--secondary: #5e17eb;            /* Púrpura vibrante oficial */
--secondary-light: #8b5cf6;      /* Púrpura vibrante más claro */
--secondary-dark: #4c0db3;       /* Púrpura vibrante más oscuro */
```

#### Gradientes Especiales de Marca
```css
/* Gradientes Oficiales para Secciones */
--gradient-hero: linear-gradient(135deg, #DDBDF4 0%, #fefeff 30%, #f9f6e8 100%);
--gradient-luxury: linear-gradient(135deg, #BBA3F8 0%, #e7d29a 50%, #DDBDF4 100%);
--gradient-warm: linear-gradient(135deg, #f9f6e8 0%, #DDBDF4 100%);
--gradient-lavanda: linear-gradient(135deg, #DDBDF4 0%, #BBA3F8 50%, #9987C6 100%);
```

#### Restricciones de Color
**IMPORTANTE: Evitar Colores No Complementarios**
- ❌ NO usar negros puros (#000000)
- ❌ NO usar rojos (#ff0000, #red, etc.)
- ❌ NO usar colores que no estén en la paleta oficial
- ❌ NO usar combinaciones disonantes
- ✅ SOLO usar los colores especificados en la paleta oficial
- ✅ Usar variaciones tonales de los colores oficiales cuando sea necesario

#### Neutral System - Armonizado con Paleta de Marca
- **#fefeff (Neutral 50)**: Blanco con tinte lavanda muy sutil
- **#f8f7fc (Neutral 100)**: Gris muy claro con tinte púrpura
- **#ece8f3 (Neutral 200)**: Gris claro púrpura
- **#6b6285 (Neutral 600)**: Gris medio con base púrpura
- **#4a4258 (Neutral 700)**: Gris oscuro púrpura
- **#2d1b42 (Neutral 800)**: Púrpura oscuro profundo
- **#1a0e2e (Neutral 900)**: Púrpura muy oscuro (reemplaza negro)

### Enhanced Motion Design & Micro-Interactions (2025 Update)

#### Scroll-Triggered Animation System
Premium quality animations that appear from sides and top as users scroll:

```css
/* Enhanced Animation Variants */
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -60, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeInFromRight = {
  hidden: { opacity: 0, x: 60, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}
```

#### Professional Icon System
Icons with sophisticated hover effects and placement:

```css
/* Professional Icon Classes */
.icon-container:hover {
  transform: scale(1.1) rotate(5deg);
}

.icon-badge {
  background: var(--gold-realistic);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.icon-floating {
  animation: float 3s ease-in-out infinite;
}

.icon-pulse {
  animation: iconPulse 2s ease-in-out infinite;
}
```

#### Hover Effects & Micro-Interactions
Subtle, premium quality hover states:

```css
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.hover-glow:hover::before {
  left: 100%; /* Shimmer effect */
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

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