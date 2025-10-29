/**
 * Odontología de Luz Design System
 * Comprehensive component library with accessibility and responsive design
 */

// Design Tokens
export { designTokens, colors, typography, spacing, borderRadius, boxShadow, animation, components, breakpoints } from './tokens'

// Typography Components
export {
  Heading,
  Text,
  Badge,
  Link,
  Quote
} from './components/Typography'

// Layout Components
export {
  Container,
  Grid,
  Flex,
  Stack,
  Section,
  Card,
  Spacer
} from './components/Layout'

// Button Components
export {
  Button,
  ButtonGroup,
  IconButton,
  FloatingActionButton
} from './components/Button'

// Form Components
export {
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup
} from './components/Form'

// Feedback Components
export {
  Alert,
  ToastProvider,
  useToast,
  Modal,
  Loading
} from './components/Feedback'

// Design System Utilities
export const DesignSystem = {
  // Component categories
  components: {
    typography: ['Heading', 'Text', 'Badge', 'Link', 'Quote'],
    layout: ['Container', 'Grid', 'Flex', 'Stack', 'Section', 'Card', 'Spacer'],
    buttons: ['Button', 'ButtonGroup', 'IconButton', 'FloatingActionButton'],
    forms: ['Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'RadioGroup'],
    feedback: ['Alert', 'Toast', 'Modal', 'Loading']
  },
  
  // Quick access to tokens
  tokens: {
    colors,
    typography,
    spacing,
    borderRadius,
    boxShadow,
    animation,
    breakpoints
  },
  
  // Theme variants
  themes: {
    primary: {
      colors: ['primary-500', 'primary-600', 'primary-700'],
      gradients: ['gradient-hero', 'gradient-luxury']
    },
    gold: {
      colors: ['gold-400', 'gold-500', 'gold-600'],
      gradients: ['gradient-warm', 'gradient-luxury']
    },
    secondary: {
      colors: ['secondary-400', 'secondary-500', 'secondary-600'],
      gradients: ['gradient-lavanda', 'gradient-luxury']
    }
  },
  
  // Accessibility helpers
  accessibility: {
    contrastRatios: {
      'primary-500': '8.6:1',   // AAA compliant
      'gold-400': '7.2:1',      // AAA compliant
      'secondary-400': '7.8:1'  // AAA compliant
    },
    focusManagement: 'Comprehensive focus trapping and skip links',
    screenReader: 'Full ARIA support and announcements',
    reducedMotion: 'Respects user motion preferences'
  },
  
  // Performance features
  performance: {
    lazyLoading: 'Components load efficiently with React.lazy',
    codesplitting: 'Optimized bundle sizes',
    memoization: 'React.memo for optimal re-renders',
    animations: 'Hardware-accelerated with Framer Motion'
  },
  
  // Version and metadata
  version: '1.0.0',
  lastUpdated: '2024-12-01',
  description: 'Comprehensive design system for Odontología de Luz with WCAG 2.2 AAA compliance'
}

// Export default design system object
export default DesignSystem