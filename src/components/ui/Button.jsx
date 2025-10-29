import { motion } from 'framer-motion'

export default function Button({ 
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  icon: Icon,
  ariaLabel,
  disabled = false,
  ...props
}) {
  const baseClasses = "font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 inline-flex items-center justify-center gap-2"
  
  const variants = {
    primary: "bg-gold-realistic text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-gold-core",
    secondary: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    outline: "border-2 border-gold-core text-gold-core hover:bg-gold-core hover:text-white focus:ring-gold-core",
    ghost: "text-primary hover:bg-primary/10 focus:ring-primary"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-8 py-4 text-base rounded-xl",
    lg: "px-10 py-5 text-lg rounded-2xl"
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`
  
  const MotionComponent = href ? motion.a : motion.button
  
  const motionProps = {
    className: classes,
    whileHover: disabled ? {} : { scale: 1.02, y: variant === 'primary' ? -2 : 0 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 },
    'aria-label': ariaLabel,
    onClick: disabled ? undefined : onClick,
    href,
    disabled,
    ...props
  }
  
  return (
    <MotionComponent {...motionProps}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </MotionComponent>
  )
}