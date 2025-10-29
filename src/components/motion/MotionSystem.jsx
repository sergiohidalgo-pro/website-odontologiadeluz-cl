// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

/**
 * Advanced Motion Design System
 * Purposeful micro-interactions and premium animations
 */

// Magnetic Button Component
export const MagneticButton = ({ 
  children, 
  className = '', 
  magneticStrength = 0.4,
  ...props 
}) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 400 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const handleMouseMove = (e) => {
    if (!ref.current) return
    
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    x.set(distanceX * magneticStrength)
    y.set(distanceY * magneticStrength)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer ${className}`}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Parallax Scroll Component
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = '' 
}) => {
  const ref = useRef(null)
  const y = useMotionValue(0)
  const x = useMotionValue(0)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      if (direction === 'vertical') {
        y.set(rate)
      } else {
        x.set(rate)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction, y, x])
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        y: direction === 'vertical' ? y : 0,
        x: direction === 'horizontal' ? x : 0
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Morphing Shape Component
export const MorphingShape = ({ 
  shapes = [
    "M0,0 L100,0 L100,100 L0,100 Z", // Square
    "M50,0 L100,50 L50,100 L0,50 Z",  // Diamond
    "M50,0 Q100,50 50,100 Q0,50 50,0 Z" // Circle
  ],
  duration = 3,
  className = '',
  size = 100
}) => {
  const [currentShape, setCurrentShape] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape(prev => (prev + 1) % shapes.length)
    }, duration * 1000)
    
    return () => clearInterval(interval)
  }, [shapes.length, duration])
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <motion.path
        d={shapes[currentShape]}
        fill="currentColor"
        animate={{ d: shapes[currentShape] }}
        transition={{
          duration: duration * 0.8,
          ease: "easeInOut"
        }}
      />
    </svg>
  )
}

// Liquid Blob Component
export const LiquidBlob = ({ 
  color = "currentColor",
  size = 200,
  className = '',
  animate = true
}) => {
  const pathVariants = {
    animate: {
      d: [
        "M44,-76.4C58.7,-69.9,73.1,-59.1,82.4,-44.8C91.6,-30.5,95.7,-12.7,95.1,5.4C94.5,23.5,89.2,41.9,78.6,56.8C68,71.7,52.1,83.1,34.8,89.4C17.5,95.7,-1.1,96.9,-19.8,92.3C-38.5,87.7,-57.3,77.3,-69.8,62.2C-82.3,47.1,-88.5,27.3,-89.1,7.1C-89.7,-13.1,-84.7,-33.7,-75.2,-50.2C-65.7,-66.7,-51.7,-79.1,-35.8,-84.7C-19.9,-90.3,-2.1,-89.1,13.2,-83.8C28.5,-78.5,29.3,-82.9,44,-76.4Z",
        "M37.1,-64.8C49.8,-58.7,62.7,-49.6,69.8,-37.2C76.9,-24.8,78.2,-9.1,75.8,5.8C73.4,20.7,67.3,34.8,57.7,46.2C48.1,57.6,35,66.3,20.6,71.2C6.2,76.1,-9.5,77.2,-24.8,73.9C-40.1,70.6,-54.9,63,-65.2,51.7C-75.5,40.4,-81.3,25.4,-82.7,9.7C-84.1,-6,-81.1,-22.4,-73.6,-36.2C-66.1,-50,-54.1,-61.2,-40.5,-66.8C-26.9,-72.4,-11.7,-72.4,1.8,-75.4C15.3,-78.4,24.4,-70.9,37.1,-64.8Z",
        "M51.2,-85.1C67.1,-77.8,81.4,-63.4,89.2,-45.8C97,-28.2,98.3,-7.4,94.7,11.9C91.1,31.2,82.6,49,70.5,63.5C58.4,78,42.7,89.2,25.8,93.8C8.9,98.4,-9.2,96.4,-26.4,90.6C-43.6,84.8,-59.9,75.2,-71.4,61.9C-82.9,48.6,-89.6,31.6,-90.4,14.2C-91.2,-3.2,-86.1,-21,-76.9,-36.1C-67.7,-51.2,-54.4,-63.6,-39.7,-71.4C-25,-79.2,-8.9,-82.4,6.1,-91.3C21.1,-100.2,35.3,-92.4,51.2,-85.1Z"
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(65, 105, 225, 0.8)" />
          <stop offset="50%" stopColor="rgba(147, 197, 253, 0.6)" />
          <stop offset="100%" stopColor="rgba(187, 163, 248, 0.4)" />
        </linearGradient>
      </defs>
      
      <motion.path
        d="M44,-76.4C58.7,-69.9,73.1,-59.1,82.4,-44.8C91.6,-30.5,95.7,-12.7,95.1,5.4C94.5,23.5,89.2,41.9,78.6,56.8C68,71.7,52.1,83.1,34.8,89.4C17.5,95.7,-1.1,96.9,-19.8,92.3C-38.5,87.7,-57.3,77.3,-69.8,62.2C-82.3,47.1,-88.5,27.3,-89.1,7.1C-89.7,-13.1,-84.7,-33.7,-75.2,-50.2C-65.7,-66.7,-51.7,-79.1,-35.8,-84.7C-19.9,-90.3,-2.1,-89.1,13.2,-83.8C28.5,-78.5,29.3,-82.9,44,-76.4Z"
        transform="translate(100 100)"
        fill="url(#blobGradient)"
        variants={animate ? pathVariants : {}}
        animate={animate ? "animate" : ""}
      />
    </svg>
  )
}

// Floating Elements Component
export const FloatingElements = ({ 
  count = 5, 
  className = '',
  children 
}) => {
  const elements = Array.from({ length: count }, (_, i) => i)
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3 + Math.random() * 0.5,
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {children || <div className="w-4 h-4 bg-primary-400 rounded-full blur-sm" />}
        </motion.div>
      ))}
    </div>
  )
}

// Text Reveal Animation
export const TextReveal = ({ 
  text, 
  className = '',
  delay = 0,
  staggerDelay = 0.05 
}) => {
  const words = text.split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay 
      },
    }),
  }
  
  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }
  
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 mb-1 origin-bottom"
          variants={child}
          style={{ transformPerspective: 1000 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Hover Card with 3D Effect
export const HoverCard3D = ({ 
  children, 
  className = '',
  intensity = 15,
  ...props 
}) => {
  const ref = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  
  const handleMouseMove = (e) => {
    if (!ref.current) return
    
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const rotateXValue = ((e.clientY - centerY) / height) * intensity
    const rotateYValue = ((centerX - e.clientX) / width) * intensity
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }
  
  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ 
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      }}
      className={`cursor-pointer ${className}`}
      {...props}
    >
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Scroll Progress Component
export const ScrollProgress = ({ 
  className = '',
  color = 'bg-primary-500'
}) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.pageYOffset / totalHeight) * 100
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-50 ${color} ${className}`}
      style={{
        scaleX: scrollProgress / 100,
        transformOrigin: "0%"
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  )
}

// Interactive Particle System
export const ParticleSystem = ({ 
  particleCount = 50,
  className = '',
  interactive = true 
}) => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    if (!interactive) return
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [interactive])
  
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
    initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
    size: 2 + Math.random() * 4,
  }))
  
  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
    >
      {particles.map((particle) => {
        const distance = interactive ? Math.sqrt(
          Math.pow(mousePosition.x - particle.initialX, 2) + 
          Math.pow(mousePosition.y - particle.initialY, 2)
        ) : 0
        
        const attractionRadius = 150
        const attraction = Math.max(0, 1 - distance / attractionRadius)
        
        return (
          <motion.div
            key={particle.id}
            className="absolute bg-primary-400 rounded-full opacity-30"
            style={{
              width: particle.size,
              height: particle.size,
            }}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              x: interactive 
                ? particle.initialX + (mousePosition.x - particle.initialX) * attraction * 0.1
                : particle.initialX,
              y: interactive 
                ? particle.initialY + (mousePosition.y - particle.initialY) * attraction * 0.1
                : particle.initialY,
              scale: 1 + attraction * 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          />
        )
      })}
    </div>
  )
}

// Elastic Button Component
export const ElasticButton = ({ 
  children, 
  className = '',
  elasticity = 1.2,
  ...props 
}) => {
  return (
    <motion.button
      className={`transform-gpu ${className}`}
      whileHover={{ 
        scale: elasticity,
        rotateZ: 2,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 15 
        }
      }}
      whileTap={{ 
        scale: 0.95,
        rotateZ: -1,
        transition: { 
          type: "spring", 
          stiffness: 500, 
          damping: 15 
        }
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}