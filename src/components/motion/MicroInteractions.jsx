// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

/**
 * Micro-Interactions Library
 * Subtle, purposeful animations that enhance user experience
 */

// Loading Dots Animation
export const LoadingDots = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }
  
  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-400',
    gold: 'bg-gold-400',
    white: 'bg-white'
  }
  
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 }
  }
  
  return (
    <div className={`flex space-x-2 items-center ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizes[size]} ${colors[color]} rounded-full`}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Pulse Effect Component
export const PulseEffect = ({ 
  children, 
  intensity = 1.05,
  duration = 2,
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        scale: [1, intensity, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Floating Label Input
export const FloatingLabelInput = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  
  useEffect(() => {
    setHasValue(value && value.length > 0)
  }, [value])
  
  const labelVariants = {
    inactive: {
      scale: 1,
      y: 0,
      color: '#6B7280'
    },
    active: {
      scale: 0.8,
      y: -25,
      color: '#4169E1'
    }
  }
  
  return (
    <div className={`relative ${className}`}>
      <motion.input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full px-4 py-3 border-2 rounded-xl bg-white 
          transition-colors duration-200 outline-none
          ${error 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-neutral-300 focus:border-primary-500'
          }
        `}
        initial={{ borderColor: '#D1D5DB' }}
        animate={{ 
          borderColor: error ? '#EF4444' : isFocused ? '#4169E1' : '#D1D5DB' 
        }}
        {...props}
      />
      
      <motion.label
        className="absolute left-4 top-3 pointer-events-none origin-left"
        variants={labelVariants}
        animate={isFocused || hasValue ? 'active' : 'inactive'}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>
      
      {error && (
        <motion.p
          className="text-red-500 text-sm mt-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Ripple Effect Button
export const RippleButton = ({ 
  children, 
  onClick,
  className = '',
  ...props 
}) => {
  const [ripples, setRipples] = useState([])
  
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    }
    
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
    
    onClick?.(e)
  }
  
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 50,
              top: ripple.y - 50,
              width: 100,
              height: 100,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  )
}

// Toggle Switch Component
export const ToggleSwitch = ({ 
  checked, 
  onChange, 
  size = 'md',
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: { container: 'w-10 h-6', thumb: 'w-4 h-4' },
    md: { container: 'w-12 h-7', thumb: 'w-5 h-5' },
    lg: { container: 'w-14 h-8', thumb: 'w-6 h-6' }
  }
  
  const colors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-400',
    gold: 'bg-gold-400',
    green: 'bg-green-500'
  }
  
  const currentSize = sizes[size]
  const currentColor = colors[color]
  
  return (
    <motion.button
      type="button"
      className={`
        relative inline-flex rounded-full transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
        ${currentSize.container}
        ${checked ? currentColor : 'bg-neutral-300'}
        ${className}
      `}
      onClick={() => onChange(!checked)}
      animate={{ backgroundColor: checked ? undefined : '#D1D5DB' }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className={`
          inline-block bg-white rounded-full shadow-lg transform 
          ${currentSize.thumb}
        `}
        animate={{ 
          x: checked ? 'calc(100% + 4px)' : 4,
          scale: checked ? 1.1 : 1
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      />
    </motion.button>
  )
}

// Progress Ring Component
export const ProgressRing = ({ 
  progress, 
  size = 120, 
  strokeWidth = 8,
  color = 'primary',
  className = '' 
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (progress / 100) * circumference
  
  const colors = {
    primary: '#4169E1',
    secondary: '#FF6B9D',
    gold: '#F4C542',
    green: '#10B981'
  }
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colors[color]}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          style={{
            strokeDasharray,
            strokeDashoffset
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Progress text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-xl font-bold text-neutral-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </div>
  )
}

// Tooltip Component
export const Tooltip = ({ 
  children, 
  content, 
  position = 'top',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  
  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  }
  
  const arrows = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-800',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-neutral-800',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-neutral-800'
  }
  
  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-50 ${positions[position]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-neutral-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
              {content}
              <div className={`absolute w-0 h-0 ${arrows[position]}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Stagger Animation Container
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = '' 
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }
  
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

// Number Counter Animation
export const NumberCounter = ({ 
  from = 0, 
  to, 
  duration = 2,
  className = '',
  prefix = '',
  suffix = '' 
}) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (value) => Math.round(value))
  const [displayValue, setDisplayValue] = useState(from)
  
  useEffect(() => {
    const controls = count.set(to)
    
    const unsubscribe = rounded.onChange((v) => setDisplayValue(v))
    
    return () => {
      controls
      unsubscribe()
    }
  }, [count, rounded, to])
  
  useEffect(() => {
    const animation = count.set(to, {
      duration,
      ease: "easeOut"
    })
    
    return () => animation?.stop?.()
  }, [count, to, duration])
  
  return (
    <motion.span
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
}

// Shake Animation
export const ShakeAnimation = ({ 
  children, 
  trigger,
  intensity = 10,
  className = '' 
}) => {
  const shakeVariants = {
    shake: {
      x: [-intensity, intensity, -intensity, intensity, 0],
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <motion.div
      className={className}
      variants={shakeVariants}
      animate={trigger ? "shake" : ""}
    >
      {children}
    </motion.div>
  )
}

// Bounce on Scroll Component
export const BounceOnScroll = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  const bounceVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay
      }
    }
  }
  
  return (
    <motion.div
      className={className}
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}