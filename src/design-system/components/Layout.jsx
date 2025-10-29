import { useResponsiveDesign } from '../../hooks/useResponsiveDesign'

/**
 * Layout component system with responsive design
 */

// Container Component - Responsive max-widths
export const Container = ({
  size = 'default',
  padding = true,
  className = '',
  children,
  ...props
}) => {
  const { getContainerClass } = useResponsiveDesign()
  
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    full: 'max-w-none'
  }
  
  const paddingClass = padding ? 'px-4 sm:px-6 lg:px-8' : ''
  
  const classes = [
    'mx-auto',
    sizes[size] || sizes.default,
    paddingClass,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Grid Component - Responsive grid system
export const Grid = ({
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className = '',
  children,
  ...props
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsiveDesign()
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }
  
  // Determine grid columns based on screen size
  let gridCols = 'grid-cols-1'
  if (isDesktop && cols.desktop) {
    gridCols = `grid-cols-${cols.desktop}`
  } else if (isTablet && cols.tablet) {
    gridCols = `grid-cols-${cols.tablet}`
  } else if (cols.mobile) {
    gridCols = `grid-cols-${cols.mobile}`
  }
  
  const classes = [
    'grid',
    gridCols,
    gapClasses[gap] || gapClasses.md,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Flex Component - Flexible layout
export const Flex = ({
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = '',
  children,
  ...props
}) => {
  const directionClasses = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse'
  }
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
  }
  
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  }
  
  const gapClasses = {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }
  
  const classes = [
    'flex',
    directionClasses[direction] || directionClasses.row,
    alignClasses[align] || alignClasses.start,
    justifyClasses[justify] || justifyClasses.start,
    wrap ? 'flex-wrap' : 'flex-nowrap',
    gapClasses[gap] || gapClasses.md,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Stack Component - Vertical spacing
export const Stack = ({
  space = 'md',
  align = 'stretch',
  className = '',
  children,
  ...props
}) => {
  const spaceClasses = {
    xs: 'space-y-2',
    sm: 'space-y-4', 
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12'
  }
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }
  
  const classes = [
    'flex flex-col',
    spaceClasses[space] || spaceClasses.md,
    alignClasses[align] || alignClasses.stretch,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Section Component - Full-width sections
export const Section = ({
  background = 'white',
  padding = 'default',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    neutral: 'bg-neutral-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
    gold: 'bg-gold-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32'
  }
  
  const widthClass = fullWidth ? 'breakout-full' : ''
  
  const classes = [
    widthClass,
    backgroundClasses[background] || backgroundClasses.white,
    paddingClasses[padding] || paddingClasses.default,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}

// Card Component - Content containers
export const Card = ({
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  border = false,
  hover = false,
  className = '',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-white',
    subtle: 'bg-neutral-50',
    primary: 'bg-primary-50 border-primary-100',
    secondary: 'bg-secondary-50 border-secondary-100',
    gold: 'bg-gold-50 border-gold-100'
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-12'
  }
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  const borderClass = border ? 'border border-neutral-200' : ''
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
  
  const classes = [
    'rounded-2xl',
    variants[variant] || variants.default,
    paddingClasses[padding] || paddingClasses.md,
    shadowClasses[shadow] || shadowClasses.md,
    borderClass,
    hoverClass,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Spacer Component - Flexible spacing
export const Spacer = ({ size = 'md', axis = 'y' }) => {
  const sizes = {
    xs: axis === 'y' ? 'h-4' : 'w-4',
    sm: axis === 'y' ? 'h-6' : 'w-6',
    md: axis === 'y' ? 'h-8' : 'w-8',
    lg: axis === 'y' ? 'h-12' : 'w-12',
    xl: axis === 'y' ? 'h-16' : 'w-16',
    '2xl': axis === 'y' ? 'h-24' : 'w-24'
  }
  
  return <div className={sizes[size] || sizes.md} />
}