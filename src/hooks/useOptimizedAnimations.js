import { useReducedMotion } from 'framer-motion'

export const useOptimizedAnimations = () => {
  const shouldReduceMotion = useReducedMotion() || false

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? 'none' : 'blur(5px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  }

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : -30,
      filter: shouldReduceMotion ? 'none' : 'blur(5px)'
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  }

  const optimizedViewport = {
    once: true,
    margin: "-50px",
    amount: 0.3
  }

  return {
    fadeInUp,
    fadeInLeft,
    staggerContainer,
    optimizedViewport,
    shouldReduceMotion
  }
}