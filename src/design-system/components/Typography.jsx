import { designTokens } from '../tokens'
import { useResponsiveDesign } from '../../hooks/useResponsiveDesign'

/**
 * Typography component system with responsive design
 */

// Heading Component
export const Heading = ({ 
  level = 'h2', 
  size = 'auto',
  weight = 'bold',
  color = 'primary',
  align = 'left',
  className = '',
  children,
  ...props 
}) => {
  const { getTextSize } = useResponsiveDesign()
  
  const Component = level
  
  // Auto-size based on heading level if not specified
  const autoSize = {
    h1: 'hero',
    h2: 'h1', 
    h3: 'h2',
    h4: 'h3',
    h5: 'h3',
    h6: 'h3'
  }
  
  const finalSize = size === 'auto' ? autoSize[level] : size
  const responsiveSize = getTextSize(finalSize)
  
  const colorClasses = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-400', 
    neutral: 'text-neutral-800',
    gold: 'text-gold-400',
    white: 'text-white'
  }
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal', 
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  }
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const classes = [
    responsiveSize,
    colorClasses[color] || colorClasses.primary,
    weightClasses[weight] || weightClasses.bold,
    alignClasses[align] || alignClasses.left,
    'leading-tight tracking-tight',
    className
  ].filter(Boolean).join(' ')
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

// Text Component
export const Text = ({
  size = 'base',
  weight = 'normal',
  color = 'neutral',
  align = 'left', 
  className = '',
  children,
  ...props
}) => {
  const { getTextSize } = useResponsiveDesign()
  const responsiveSize = getTextSize(size)
  
  const colorClasses = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-400',
    neutral: 'text-neutral-700',
    muted: 'text-neutral-600',
    light: 'text-neutral-500',
    gold: 'text-gold-400',
    white: 'text-white'
  }
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium', 
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  }
  
  const classes = [
    responsiveSize,
    colorClasses[color] || colorClasses.neutral,
    weightClasses[weight] || weightClasses.normal,
    alignClasses[align] || alignClasses.left,
    'leading-relaxed',
    className
  ].filter(Boolean).join(' ')
  
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

// Badge/Tag Component
export const Badge = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 border-secondary-200', 
    gold: 'bg-gold-100 text-gold-700 border-gold-200',
    success: 'bg-green-100 text-green-700 border-green-200',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    error: 'bg-red-100 text-red-700 border-red-200'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  const classes = [
    'inline-flex items-center rounded-full border font-medium',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

// Link Component with enhanced accessibility
export const Link = ({
  href,
  variant = 'primary',
  size = 'base',
  underline = 'hover',
  external = false,
  className = '',
  children,
  ...props
}) => {
  const { getTextSize } = useResponsiveDesign()
  const responsiveSize = getTextSize(size)
  
  const variants = {
    primary: 'text-primary-500 hover:text-primary-600 focus:text-primary-600',
    secondary: 'text-secondary-400 hover:text-secondary-500 focus:text-secondary-500',
    gold: 'text-gold-400 hover:text-gold-500 focus:text-gold-500',
    neutral: 'text-neutral-700 hover:text-neutral-800 focus:text-neutral-800'
  }
  
  const underlineClasses = {
    none: 'no-underline',
    always: 'underline',
    hover: 'hover:underline focus:underline'
  }
  
  const classes = [
    responsiveSize,
    variants[variant] || variants.primary,
    underlineClasses[underline] || underlineClasses.hover,
    'transition-all duration-200 font-medium',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    'rounded-sm',
    className
  ].filter(Boolean).join(' ')
  
  const linkProps = {
    className: classes,
    href,
    ...props
  }
  
  if (external) {
    linkProps.target = '_blank'
    linkProps.rel = 'noopener noreferrer'
    linkProps['aria-label'] = `${children} (abre en nueva ventana)`
  }
  
  return <a {...linkProps}>{children}</a>
}

// Quote Component
export const Quote = ({
  author,
  role,
  size = 'lg',
  className = '',
  children,
  ...props
}) => {
  const { getTextSize } = useResponsiveDesign()
  const responsiveSize = getTextSize(size)
  
  return (
    <blockquote 
      className={`${responsiveSize} italic text-neutral-700 leading-relaxed ${className}`}
      {...props}
    >
      <p className="mb-4">"{children}"</p>
      {author && (
        <footer className="text-sm font-medium text-neutral-600">
          <cite className="not-italic font-semibold text-neutral-800">{author}</cite>
          {role && <span className="block text-neutral-500">{role}</span>}
        </footer>
      )}
    </blockquote>
  )
}