// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Card, Container, Grid } from '../../design-system/components/Layout'
import { Heading, Text, Badge } from '../../design-system/components/Typography'
import { Button } from '../../design-system/components/Button'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

/**
 * Visual Hierarchy Components
 * Implementing advanced layout patterns and information architecture
 */

// Hero Section with Enhanced Hierarchy
export const EnhancedHeroSection = ({
  primaryHeadline = "Transforma Tu Sonrisa",
  secondaryHeadline = "con Amor y Profesionalismo",
  subtitle = "Más de 500 pacientes han confiado en nosotros para crear sonrisas perfectas. Únete a nuestra familia y descubre la diferencia.",
  urgencyMessage = "Consulta Gratuita - Solo por Tiempo Limitado",
  primaryCTA = "Reservar Consulta Gratuita",
  secondaryCTA = "Ver Casos de Éxito",
  trustIndicators = [
    "✓ 15+ años de experiencia",
    "✓ Tecnología de vanguardia", 
    "✓ Garantía de satisfacción"
  ],
  className = ''
}) => {
  const { fadeInFromBottom, fadeInFromLeft, fadeInFromRight, staggerContainer } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`relative min-h-screen flex items-center overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #DDBDF4 0%, #fefeff 30%, #f9f6e8 100%)'
      }}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-gold-400/30 to-primary-500/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={fadeInFromLeft}
          >
            {/* Urgency Banner */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px rgba(0, 0, 0, 0.2)",
                  "0 4px 6px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="mr-2">⚡</span>
              {urgencyMessage}
            </motion.div>
            
            {/* Main Headlines with Staggered Animation */}
            <div className="mb-6">
              <motion.div
                variants={fadeInFromBottom}
                className="relative"
              >
                <Heading 
                  level="h1" 
                  size="hero" 
                  className="mb-2 leading-none"
                  color="primary"
                >
                  {primaryHeadline}
                </Heading>
                {/* Decorative underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 lg:left-0 w-24 h-1 bg-gradient-to-r from-gold-400 to-primary-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.div
                variants={fadeInFromBottom}
                transition={{ delay: 0.3 }}
              >
                <Heading 
                  level="h2" 
                  size="hero" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-500"
                >
                  {secondaryHeadline}
                </Heading>
              </motion.div>
            </div>
            
            {/* Subtitle with Better Typography */}
            <motion.div
              variants={fadeInFromBottom}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <Text size="xl" className="leading-relaxed max-w-xl mx-auto lg:mx-0 text-neutral-700">
                {subtitle}
              </Text>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              variants={fadeInFromBottom}
              transition={{ delay: 0.9 }}
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-green-600 font-medium text-sm"
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.2 
                  }}
                >
                  <span className="mr-2">{indicator.split(' ')[0]}</span>
                  <span>{indicator.substring(2)}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons with Hierarchy */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInFromBottom}
              transition={{ delay: 1.2 }}
            >
              <Button
                variant="primary"
                size="xl"
                className="transform hover:scale-105 transition-transform duration-200 shadow-2xl"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {primaryCTA}
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {secondaryCTA}
                </span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            variants={fadeInFromRight}
          >
            <div className="relative">
              {/* Main Visual Placeholder - Replace with actual image */}
              <motion.div
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-white to-neutral-100 rounded-3xl shadow-2xl flex items-center justify-center border border-neutral-200"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5 
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">😊</div>
                  <Text size="lg" weight="medium" color="muted">
                    Imagen Principal Aquí
                  </Text>
                  <Text size="sm" color="muted">
                    (Sonrisa feliz de paciente)
                  </Text>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-neutral-100"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <Text size="sm" weight="bold">4.9/5</Text>
                    <Text size="xs" color="muted">500+ reseñas</Text>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-4 shadow-xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -3, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <Text size="sm" weight="bold" color="white">15+ años</Text>
                    <Text size="xs" className="text-green-100">experiencia</Text>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}

// Information Hierarchy Card Grid
export const InformationGrid = ({
  title = "¿Por Qué Elegir Odontología de Luz?",
  subtitle = "Características que nos hacen únicos en el cuidado dental",
  features = [
    {
      level: "primary", // Visual importance level
      icon: "🏆",
      title: "15+ Años de Experiencia",
      description: "Más de una década cuidando sonrisas con los más altos estándares de calidad y profesionalismo.",
      metrics: "500+ pacientes satisfechos"
    },
    {
      level: "primary",
      icon: "⚕️",
      title: "Tecnología de Vanguardia",
      description: "Equipos modernos y técnicas avanzadas para tratamientos más precisos y cómodos.",
      metrics: "100% tecnología digital"
    },
    {
      level: "secondary",
      icon: "💝",
      title: "Atención Personalizada",
      description: "Cada tratamiento es diseñado específicamente para tus necesidades individuales.",
      metrics: "Plan único por paciente"
    },
    {
      level: "secondary",
      icon: "🛡️",
      title: "Garantía de Satisfacción",
      description: "Respaldamos nuestro trabajo con garantía completa en todos nuestros tratamientos.",
      metrics: "100% garantizado"
    },
    {
      level: "tertiary",
      icon: "📅",
      title: "Horarios Flexibles",
      description: "Adaptamos nuestros horarios a tu disponibilidad para mayor comodidad.",
      metrics: "Lun-Sab disponible"
    },
    {
      level: "tertiary",
      icon: "💳",
      title: "Facilidades de Pago",
      description: "Múltiples opciones de financiamiento para hacer accesible tu tratamiento.",
      metrics: "Planes desde $0 inicial"
    }
  ],
  className = ''
}) => {
  const { fadeInFromBottom, staggerContainer } = useOptimizedAnimations()
  
  // Group features by importance level
  const primaryFeatures = features.filter(f => f.level === 'primary')
  const secondaryFeatures = features.filter(f => f.level === 'secondary')
  const tertiaryFeatures = features.filter(f => f.level === 'tertiary')
  
  return (
    <motion.section
      className={`py-20 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={fadeInFromBottom}
        >
          <Heading level="h2" size="h1" align="center" className="mb-4">
            {title}
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            {subtitle}
          </Text>
        </motion.div>
        
        {/* Primary Features - Hero Level */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={fadeInFromBottom}
        >
          {primaryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300">
                <div className="text-center">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {feature.icon}
                  </motion.div>
                  <Heading level="h3" size="h3" align="center" className="mb-4">
                    {feature.title}
                  </Heading>
                  <Text align="center" className="mb-4 leading-relaxed">
                    {feature.description}
                  </Text>
                  <Badge variant="primary" size="lg">
                    {feature.metrics}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Secondary Features - Supporting Level */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-10"
          variants={fadeInFromBottom}
        >
          {secondaryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <Heading level="h4" size="h4" className="mb-2">
                      {feature.title}
                    </Heading>
                    <Text size="sm" className="mb-3 leading-relaxed">
                      {feature.description}
                    </Text>
                    <Badge variant="secondary" size="sm">
                      {feature.metrics}
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tertiary Features - Detail Level */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-4"
          variants={fadeInFromBottom}
        >
          {tertiaryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow duration-300 bg-neutral-50">
                <div className="flex items-center space-x-3">
                  <div className="text-xl">{feature.icon}</div>
                  <div>
                    <Heading level="h5" size="h5" className="mb-1">
                      {feature.title}
                    </Heading>
                    <Text size="xs" color="muted">
                      {feature.metrics}
                    </Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}

// Content Priority Layout
export const ContentPriorityLayout = ({
  primaryContent,
  secondaryContent,
  supportingContent,
  className = ''
}) => {
  const { fadeInFromLeft, fadeInFromRight, fadeInFromBottom } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Primary Content - Takes most space */}
          <motion.div
            className="lg:col-span-8"
            variants={fadeInFromLeft}
          >
            <Card className="p-8 h-full border-2 border-primary-200">
              <div className="flex items-start space-x-4 mb-6">
                <Badge variant="primary" size="lg">PRINCIPAL</Badge>
                <div className="flex-1">
                  {primaryContent}
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Secondary Content - Sidebar */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            variants={fadeInFromRight}
          >
            <Card className="p-6 border border-secondary-200">
              <Badge variant="secondary" className="mb-4">SECUNDARIO</Badge>
              {secondaryContent}
            </Card>
            
            <motion.div variants={fadeInFromBottom}>
              <Card className="p-4 bg-neutral-50">
                <Badge variant="gold" size="sm" className="mb-3">APOYO</Badge>
                {supportingContent}
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}

// Reading Flow Component
export const ReadingFlowLayout = ({
  sections = [
    {
      type: "attention", // attention, interest, desire, action
      content: "Tu sonrisa es lo primero que ven de ti",
      size: "hero"
    },
    {
      type: "interest",
      content: "En Odontología de Luz entendemos la importancia de una sonrisa saludable y hermosa.",
      size: "large"
    },
    {
      type: "desire", 
      content: "Imagínate sonriendo con confianza, sintiéndote cómodo en cada conversación, destacando en cada foto.",
      size: "medium"
    },
    {
      type: "action",
      content: "Reserva tu consulta gratuita hoy y comienza tu transformación.",
      size: "large"
    }
  ],
  className = ''
}) => {
  const { fadeInFromBottom } = useOptimizedAnimations()
  
  const getSizeClasses = (size) => {
    switch (size) {
      case 'hero': return 'text-4xl md:text-6xl lg:text-7xl'
      case 'large': return 'text-2xl md:text-3xl lg:text-4xl'
      case 'medium': return 'text-xl md:text-2xl'
      default: return 'text-lg md:text-xl'
    }
  }
  
  const getTypeStyles = (type) => {
    switch (type) {
      case 'attention': return 'font-black text-primary-600'
      case 'interest': return 'font-bold text-neutral-800'
      case 'desire': return 'font-semibold text-secondary-500 italic'
      case 'action': return 'font-bold text-gold-600'
      default: return 'font-medium text-neutral-700'
    }
  }
  
  return (
    <motion.section
      className={`py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom}
              transition={{ delay: index * 0.3 }}
              className={`
                ${getSizeClasses(section.size)}
                ${getTypeStyles(section.type)}
                leading-tight
              `}
            >
              {section.content}
            </motion.div>
          ))}
          
          <motion.div
            variants={fadeInFromBottom}
            transition={{ delay: sections.length * 0.3 }}
            className="pt-8"
          >
            <Button
              variant="primary"
              size="xl"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              ¡Quiero Mi Consulta Gratuita!
            </Button>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}