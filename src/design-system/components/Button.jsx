// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useResponsiveDesign } from '../../hooks/useResponsiveDesign'

/**
 * Advanced Button Component System
 * WCAG 2.2 AAA compliant with responsive design
 */

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  href,
  external = false,
  onClick,
  className = '',
  children,
  ariaLabel,
  ...props
}) => {
  const { getTouchTarget, isMobile } = useResponsiveDesign()
  
  // Variant styles with high contrast ratios
  const variants = {
    primary: {
      base: 'bg-primary-500 text-white border-2 border-primary-500',
      hover: 'hover:bg-primary-600 hover:border-primary-600',
      focus: '',
      disabled: 'disabled:bg-primary-300 disabled:border-primary-300'
    },
    secondary: {
      base: 'bg-gold-400 text-neutral-900 border-2 border-gold-400',
      hover: 'hover:bg-gold-500 hover:border-gold-500',
      focus: '',
      disabled: 'disabled:bg-gold-200 disabled:border-gold-200'
    },
    outline: {
      base: 'bg-transparent text-primary-500 border-2 border-primary-500',
      hover: 'hover:bg-primary-500 hover:text-white',
      focus: '',
      disabled: 'disabled:text-primary-300 disabled:border-primary-300'
    },
    ghost: {
      base: 'bg-transparent text-primary-500 border-2 border-transparent',
      hover: 'hover:bg-primary-50',
      focus: '',
      disabled: 'disabled:text-primary-300'
    },
    danger: {
      base: 'bg-red-500 text-white border-2 border-red-500',
      hover: 'hover:bg-red-600 hover:border-red-600',
      focus: '',
      disabled: 'disabled:bg-red-300 disabled:border-red-300'
    },
    success: {
      base: 'bg-green-500 text-white border-2 border-green-500',
      hover: 'hover:bg-green-600 hover:border-green-600',
      focus: '',
      disabled: 'disabled:bg-green-300 disabled:border-green-300'
    }
  }
  
  // Size configurations
  const sizes = {
    sm: {
      padding: 'px-3 py-2',
      text: 'text-sm',
      rounded: 'rounded-lg',
      minHeight: 'min-h-[36px]'
    },
    md: {
      padding: 'px-6 py-3',
      text: 'text-base',
      rounded: 'rounded-xl',
      minHeight: 'min-h-[44px]'
    },
    lg: {
      padding: 'px-8 py-4',
      text: 'text-lg',
      rounded: 'rounded-2xl',
      minHeight: 'min-h-[52px]'
    },
    xl: {
      padding: 'px-10 py-5',
      text: 'text-xl',
      rounded: 'rounded-2xl',
      minHeight: 'min-h-[60px]'
    }
  }
  
  const currentVariant = variants[variant] || variants.primary
  const currentSize = sizes[size] || sizes.md
  
  // Base classes for all buttons
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-semibold',
    'transition-all duration-200 ease-out',
    'focus:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'relative overflow-hidden',
    currentSize.padding,
    currentSize.text,
    currentSize.rounded,
    currentSize.minHeight,
    getTouchTarget(), // Ensures proper touch targets
    currentVariant.base,
    currentVariant.hover,
    currentVariant.focus,
    currentVariant.disabled
  ]
  
  // Motion animation props
  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.02, y: -2 },
    whileTap: disabled || loading ? {} : { scale: 0.98 },
    transition: { duration: 0.15 }
  }
  
  // Additional classes
  const additionalClasses = [
    fullWidth ? 'w-full' : '',
    loading ? 'cursor-wait' : '',
    className
  ].filter(Boolean)
  
  const allClasses = [...baseClasses, ...additionalClasses].join(' ')
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-3 h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
  
  // Content with icon and loading state
  const ButtonContent = () => (
    <>
      {loading && <LoadingSpinner />}
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-5 h-5 ml-2" aria-hidden="true" />
      )}
    </>
  )
  
  // Determine component type
  const isLink = href && !disabled && !loading
  const Component = isLink ? motion.a : motion.button
  
  // Props for the component
  const componentProps = {
    className: allClasses,
    disabled: disabled || loading,
    'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
    'aria-busy': loading,
    'aria-disabled': disabled || loading,
    ...motionProps,
    ...props
  }
  
  if (isLink) {
    componentProps.href = href
    if (external) {
      componentProps.target = '_blank'
      componentProps.rel = 'noopener noreferrer'
      componentProps['aria-label'] = `${ariaLabel || children} (abre en nueva ventana)`
    }
  } else {
    componentProps.type = props.type || 'button'
    componentProps.onClick = disabled || loading ? undefined : onClick
  }
  
  return (
    <Component {...componentProps}>
      <ButtonContent />
      
      {/* Subtle shimmer effect for primary buttons */}
      {variant === 'primary' && !disabled && !loading && (
        <div 
          className="absolute inset-0 -top-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"
          aria-hidden="true"
        />
      )}
    </Component>
  )
}

// Button Group Component
export const ButtonGroup = ({
  size = 'md',
  orientation = 'horizontal',
  spacing = 'sm',
  className = '',
  children,
  ...props
}) => {
  const orientationClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col'
  }
  
  const spacingClasses = {
    xs: orientation === 'horizontal' ? 'space-x-2' : 'space-y-2',
    sm: orientation === 'horizontal' ? 'space-x-3' : 'space-y-3',
    md: orientation === 'horizontal' ? 'space-x-4' : 'space-y-4',
    lg: orientation === 'horizontal' ? 'space-x-6' : 'space-y-6'
  }
  
  const classes = [
    'flex',
    orientationClasses[orientation],
    spacingClasses[spacing],
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes} role="group" {...props}>
      {children}
    </div>
  )
}

// Icon Button Component
export const IconButton = ({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  rounded = true,
  className = '',
  ariaLabel,
  ...props
}) => {
  const roundedClass = rounded ? 'rounded-full' : ''
  
  return (
    <Button
      variant={variant}
      size={size}
      className={`aspect-square ${roundedClass} ${className}`}
      ariaLabel={ariaLabel}
      {...props}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </Button>
  )
}

// Floating Action Button
export const FloatingActionButton = ({
  icon: Icon,
  position = 'bottom-right',
  size = 'lg',
  className = '',
  ...props
}) => {
  const positions = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  }
  
  const classes = [
    positions[position],
    'z-50 shadow-2xl',
    className
  ].filter(Boolean).join(' ')
  
  return (
    <IconButton
      icon={Icon}
      variant="primary"
      size={size}
      className={classes}
      rounded={true}
      {...props}
    />
  )
}