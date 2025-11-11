// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '../../design-system/components/Button'
import { Card } from '../../design-system/components/Layout'
import { Heading, Text } from '../../design-system/components/Typography'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

/**
 * Advanced Call-to-Action Components for Conversion Optimization
 * Implements psychological triggers and urgency tactics
 */

// Primary CTA Component with Urgency
export const PrimaryCTA = ({
  title = "¡Reserva Tu Consulta Ahora!",
  subtitle = "Únete a más de 500+ pacientes satisfechos que han transformado su sonrisa",
  urgencyText = "⏰ Solo quedan 3 cupos disponibles para esta semana",
  buttonText = "Reservar Consulta",
  trustIndicators = [
    "✓ Atención personalizada",
    "✓ Sin compromiso",
    "✓ Especialistas certificados"
  ],
  socialProof = "148 personas reservaron esta semana",
  onCTAClick,
  className = '',
  showUrgency = true,
  showSocialProof = true,
  animated = true
}) => {
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const { fadeInFromBottom, fadeInFromLeft, staggerContainer } = useOptimizedAnimations()
  
  // Countdown timer effect
  useEffect(() => {
    if (!showUrgency) return
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          // Reset at midnight
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [showUrgency])
  
  const ctaVariants = animated ? fadeInFromBottom : {}
  const containerVariants = animated ? staggerContainer : {}
  
  return (
    <motion.section
      className={`breakout-full py-16 relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #4169E1 0%, #7391ED 50%, #BBA3F8 100%)'
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gold-400 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-white rounded-full blur-lg" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          variants={ctaVariants}
        >
          {/* Urgency Banner */}
          {showUrgency && (
            <motion.div
              className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="mr-2">🔥</span>
              {urgencyText}
            </motion.div>
          )}
          
          {/* Main Headline */}
          <Heading
            level="h2"
            size="hero"
            color="white"
            align="center"
            className="mb-4 max-w-3xl mx-auto leading-tight"
          >
            {title}
          </Heading>
          
          {/* Subtitle */}
          <Text
            size="xl"
            color="white"
            align="center"
            className="mb-8 opacity-90 max-w-2xl mx-auto"
          >
            {subtitle}
          </Text>
          
          {/* Countdown Timer */}
          {showUrgency && (
            <motion.div
              className="flex justify-center items-center gap-4 mb-8"
              variants={fadeInFromLeft}
            >
              <span className="text-white/80 font-medium">Promoción válida por:</span>
              <div className="flex gap-2">
                {Object.entries(countdown).map(([unit, value]) => (
                  <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                    <div className="text-xl font-bold text-white">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-white/70 uppercase">
                      {unit === 'hours' ? 'hrs' : unit === 'minutes' ? 'min' : 'seg'}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={fadeInFromLeft}
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center text-white/90">
                <span className="text-green-300 mr-2 font-bold">{indicator.split(' ')[0]}</span>
                <span className="font-medium">{indicator.substring(2)}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            className="mb-6"
            variants={ctaVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              size="xl"
              onClick={onCTAClick}
              className="shadow-2xl transform hover:shadow-3xl transition-all duration-300"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {buttonText}
              </span>
            </Button>
          </motion.div>
          
          {/* Social Proof */}
          {showSocialProof && (
            <motion.p
              className="text-white/70 text-sm"
              variants={fadeInFromBottom}
            >
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {socialProof}
              </span>
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}

// Secondary CTA Component
export const SecondaryCTA = ({
  title = "¿Dudas? ¡Hablemos!",
  subtitle = "Nuestro equipo te orientará sin compromiso",
  buttonText = "WhatsApp Directo",
  icon = "💬",
  onCTAClick,
  className = '',
  variant = 'outline'
}) => {
  const { fadeInFromRight } = useOptimizedAnimations()
  
  return (
    <motion.div
      className={`text-center ${className}`}
      variants={fadeInFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <Heading level="h3" size="h3" className="mb-0">
          {title}
        </Heading>
      </div>
      
      <Text className="mb-6 text-neutral-600">
        {subtitle}
      </Text>
      
      <Button
        variant={variant}
        size="lg"
        onClick={onCTAClick}
        className="transform hover:scale-105 transition-transform duration-200"
      >
        {buttonText}
      </Button>
    </motion.div>
  )
}

// Floating CTA Component
export const FloatingCTA = ({
  isVisible = true,
  buttonText = "¡Reserva Ahora!",
  urgencyBadge = "Solo hoy",
  onCTAClick,
  position = 'bottom-right'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  if (!isVisible) return null
  
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  }
  
  return (
    <motion.div
      className={`fixed z-50 ${positionClasses[position]}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "backOut" }}
    >
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ 
          y: [0, -8, 0],
          rotate: isHovered ? [0, -3, 3, 0] : 0
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 0.5 }
        }}
      >
        {/* Urgency Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">
          {urgencyBadge}
        </div>
        
        {/* Main Button */}
        <Button
          variant="primary"
          size="lg"
          onClick={onCTAClick}
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {buttonText}
          </span>
        </Button>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-xl bg-primary-500 opacity-20 animate-ping" />
      </motion.div>
    </motion.div>
  )
}

// Trust Signal Card
export const TrustSignalCard = ({
  icon,
  title,
  description,
  metric,
  className = ''
}) => {
  const { fadeInFromBottom } = useOptimizedAnimations()
  
  return (
    <motion.div
      variants={fadeInFromBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card
        className={`text-center p-8 hover:shadow-xl transition-shadow duration-300 ${className}`}
        hover={true}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-2xl text-white">{icon}</span>
        </div>
        
        <Heading level="h3" size="h3" className="mb-2">
          {title}
        </Heading>
        
        <Text className="text-neutral-600 mb-4">
          {description}
        </Text>
        
        {metric && (
          <div className="text-3xl font-bold text-primary-500 mb-2">
            {metric}
          </div>
        )}
      </Card>
    </motion.div>
  )
}

// Urgency Banner Component
export const UrgencyBanner = ({
  message = "⚡ Promoción limitada: Consulta dental especializada",
  isVisible = true,
  onClose,
  className = ''
}) => {
  if (!isVisible) return null
  
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className={`breakout-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 relative z-40 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="mr-3"
          >
            🔥
          </motion.span>
          <span className="font-bold text-sm md:text-base">
            {message}
          </span>
        </div>
        
        {onClose && (
          <motion.button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}