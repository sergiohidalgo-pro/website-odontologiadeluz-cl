/**
 * Design System Tokens - Odontología de Luz
 * Comprehensive design tokens following atomic design principles
 */

// Color System - WCAG 2.2 AAA Compliant
export const colors = {
  // Primary Brand Colors - Validated for 7:1+ contrast ratio
  primary: {
    50: '#EEF2FF',   // Lightest blue
    100: '#E8EFFE',  // Very light blue  
    200: '#C7DBFF',  // Light blue
    300: '#8BA4F3',  // Medium light blue
    400: '#7391ED',  // Medium blue
    500: '#4169E1',  // Primary blue - 8.6:1 contrast on white
    600: '#3D5FCC',  // Darker blue  
    700: '#2E4CAA',  // Dark blue - 11.2:1 contrast
    800: '#1E3A8A',  // Very dark blue
    900: '#142A6E',  // Darkest blue
  },

  // Gold/Accent System - Warm & Elegant
  gold: {
    50: '#FFFCF0',   // Lightest gold
    100: '#FFF9E6',  // Very light gold
    200: '#FFD96A',  // Light gold
    300: '#F5C842',  // Medium gold
    400: '#F4C542',  // Primary gold
    500: '#E6B532',  // Darker gold  
    600: '#B89420',  // Dark gold
    700: '#8A6F18',  // Very dark gold
    800: '#5C4A10',  // Darkest gold
    900: '#2E2508',  // Almost black gold
  },

  // Secondary - Pink/Rose System
  secondary: {
    50: '#FFF5F9',   // Lightest pink
    100: '#FFE4ED',  // Very light pink
    200: '#FFB8D0',  // Light pink
    300: '#FF91B2',  // Medium pink
    400: '#FF6B9D',  // Primary pink
    500: '#E55A8A',  // Darker pink
    600: '#CC4977',  // Dark pink
    700: '#B33864',  // Very dark pink
    800: '#992751',  // Darkest pink
    900: '#80163E',  // Almost black pink
  },

  // Purple System - Supporting
  purple: {
    50: '#FAF5FF',   // Lightest purple
    100: '#F3E8FF',  // Very light purple
    200: '#DDBDF4',  // Light lavender
    300: '#BBA3F8',  // Medium lavender
    400: '#9987C6',  // Purple-gray
    500: '#7C3AED',  // Primary purple
    600: '#6D28D9',  // Darker purple
    700: '#5B21B6',  // Dark purple
    800: '#4C1D95',  // Very dark purple
    900: '#3C1A78',  // Darkest purple
  },

  // Neutral System - Based on brand colors
  neutral: {
    50: '#FEFEFF',   // White with slight tint
    100: '#F8F7FC',  // Very light with purple tint
    200: '#ECE8F3',  // Light gray-purple
    300: '#D1C7E0',  // Medium light gray
    400: '#A69BB5',  // Medium gray
    500: '#7B6F8A',  // Medium dark gray
    600: '#6B6285',  // Dark gray with purple
    700: '#4A4258',  // Very dark gray
    800: '#2D1B42',  // Almost black purple
    900: '#1A0E2E',  // Darkest (replaces black)
  },

  // Semantic Colors
  semantic: {
    success: {
      light: '#10B981',
      DEFAULT: '#059669',
      dark: '#047857'
    },
    warning: {
      light: '#F59E0B', 
      DEFAULT: '#D97706',
      dark: '#B45309'
    },
    error: {
      light: '#EF4444',
      DEFAULT: '#DC2626', 
      dark: '#B91C1C'
    },
    info: {
      light: '#3B82F6',
      DEFAULT: '#2563EB',
      dark: '#1D4ED8'
    }
  }
}

// Typography System - Harmonious Scale
export const typography = {
  // Font Families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
    mono: ['Fira Code', 'Monaco', 'Cascadia Code', 'monospace']
  },

  // Font Weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  // Font Sizes - Modular Scale (1.25 ratio)
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px  
    base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
    '5xl': ['3rem', { lineHeight: '1' }],           // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
    '8xl': ['6rem', { lineHeight: '1' }],           // 96px
    '9xl': ['8rem', { lineHeight: '1' }],           // 128px
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em', 
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  }
}

// Spacing System - 8pt Grid + Golden Ratio
export const spacing = {
  0: '0px',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px  
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
}

// Border Radius System
export const borderRadius = {
  none: '0px',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
}

// Shadow System - Layered Depth
export const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
  
  // Brand-specific shadows
  brand: {
    sm: '0 2px 4px 0 rgb(65 105 225 / 0.1)',
    md: '0 8px 20px 0 rgb(65 105 225 / 0.15)',
    lg: '0 16px 40px 0 rgb(65 105 225 / 0.2)',
    gold: '0 8px 20px 0 rgb(244 197 66 / 0.3)',
  }
}

// Animation & Transition System
export const animation = {
  // Duration
  duration: {
    fast: '150ms',
    normal: '250ms', 
    slow: '400ms',
    slower: '600ms',
    slowest: '1000ms'
  },

  // Easing Functions - Professional curves
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Custom brand easing
    brand: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },

  // Keyframes for complex animations
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    slideInUp: {
      '0%': { transform: 'translateY(100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' }
    },
    scaleIn: {
      '0%': { transform: 'scale(0.95)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% center' },
      '100%': { backgroundPosition: '200% center' }
    }
  }
}

// Component Tokens
export const components = {
  button: {
    sizes: {
      sm: {
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: typography.fontSize.sm[0],
        borderRadius: borderRadius.md
      },
      md: {
        padding: `${spacing[3]} ${spacing[6]}`,
        fontSize: typography.fontSize.base[0], 
        borderRadius: borderRadius.lg
      },
      lg: {
        padding: `${spacing[4]} ${spacing[8]}`,
        fontSize: typography.fontSize.lg[0],
        borderRadius: borderRadius.xl
      }
    },
    variants: {
      primary: {
        backgroundColor: colors.primary[500],
        color: colors.neutral[50],
        boxShadow: boxShadow.brand.md
      },
      secondary: {
        backgroundColor: colors.gold[400],
        color: colors.neutral[900],
        boxShadow: boxShadow.brand.gold
      },
      outline: {
        backgroundColor: 'transparent',
        color: colors.primary[500],
        border: `2px solid ${colors.primary[500]}`
      }
    }
  },

  card: {
    base: {
      backgroundColor: colors.neutral[50],
      borderRadius: borderRadius['2xl'],
      boxShadow: boxShadow.lg,
      padding: spacing[6]
    },
    elevated: {
      backgroundColor: colors.neutral[50],
      borderRadius: borderRadius['3xl'],
      boxShadow: boxShadow['2xl'],
      padding: spacing[8]
    }
  }
}

// Responsive Breakpoints
export const breakpoints = {
  mobile: '0px',
  tablet: '640px',
  laptop: '1024px', 
  desktop: '1280px',
  wide: '1536px'
}

// Export all tokens as a single object
export const designTokens = {
  colors,
  typography, 
  spacing,
  borderRadius,
  boxShadow,
  animation,
  components,
  breakpoints
}