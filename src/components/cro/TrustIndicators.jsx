// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Card, Grid, Container } from '../../design-system/components/Layout'
import { Heading, Text, Badge } from '../../design-system/components/Typography'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

/**
 * Trust Indicators and Social Proof Components
 * Building credibility and reducing friction in conversion funnel
 */

// Social Proof Statistics
export const SocialProofStats = ({
  stats = [
    { number: "500+", label: "Pacientes Satisfechos", icon: "😊" },
    { number: "15+", label: "Años de Experiencia", icon: "🏆" },
    { number: "98%", label: "Recomendación", icon: "⭐" },
    { number: "24/7", label: "Atención al Paciente", icon: "📞" }
  ],
  className = '',
  animated = true
}) => {
  const { fadeInFromBottom, staggerContainer } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 ${className}`}
      variants={animated ? staggerContainer : {}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        <div className="text-center mb-12">
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Cifras que Hablan por Nosotros
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            La confianza de nuestros pacientes es nuestro mayor logro
          </Text>
        </div>
        
        <Grid cols={{ mobile: 2, tablet: 4, desktop: 4 }} gap="lg">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={animated ? fadeInFromBottom : {}}
              className="text-center"
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-neutral-50">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <motion.div
                  className="text-4xl font-bold text-primary-500 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <Text size="sm" weight="medium" color="neutral" align="center">
                  {stat.label}
                </Text>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </motion.section>
  )
}

// Testimonial Carousel Component
export const TestimonialCarousel = ({
  testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Paciente",
      image: "👩‍💼",
      rating: 5,
      text: "Excelente atención, profesionales muy capacitados. Mi sonrisa cambió completamente y el trato fue excepcional durante todo el proceso.",
      treatment: "Ortodoncia"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Paciente",
      image: "👨‍💻",
      rating: 5,
      text: "El equipo es increíble. Me dieron mucha confianza desde el primer día. Los resultados superaron mis expectativas completamente.",
      treatment: "Implantes"
    },
    {
      id: 3,
      name: "Ana Silva",
      role: "Paciente",
      image: "👩‍🎓",
      rating: 5,
      text: "Después de años de complejos con mi sonrisa, finalmente encontré el lugar perfecto. Profesionalismo y calidez humana.",
      treatment: "Estética Dental"
    }
  ],
  autoPlay = true,
  interval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { fadeInFromRight, fadeInFromLeft } = useOptimizedAnimations()
  
  useEffect(() => {
    if (!autoPlay) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [autoPlay, interval, testimonials.length])
  
  const currentTestimonial = testimonials[currentIndex]
  
  return (
    <motion.section
      className={`py-16 bg-gradient-to-br from-neutral-50 to-white ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <div className="text-center mb-12">
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Lo que Dicen Nuestros Pacientes
          </Heading>
          <Text size="xl" align="center" color="muted">
            Testimonios reales de personas que confiaron en nosotros
          </Text>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial.id}
            variants={fadeInFromRight}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-6xl text-primary-200 font-serif">
              "
            </div>
            
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl text-yellow-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <Text size="xl" align="center" className="mb-8 leading-relaxed italic">
                {currentTestimonial.text}
              </Text>
              
              {/* Patient Info */}
              <div className="flex items-center justify-center">
                <div className="text-4xl mr-4">{currentTestimonial.image}</div>
                <div className="text-center">
                  <Heading level="h4" size="h4" className="mb-1">
                    {currentTestimonial.name}
                  </Heading>
                  <Text size="sm" color="muted">
                    {currentTestimonial.role}
                  </Text>
                  <Badge variant="primary" size="sm" className="mt-2">
                    {currentTestimonial.treatment}
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

// Credentials and Certifications
export const CredentialsSection = ({
  credentials = [
    {
      title: "Colegio de Dentistas de Chile",
      description: "Membresía activa y certificación profesional",
      icon: "🏛️",
      verified: true
    },
    {
      title: "Especialización en Ortodoncia",
      description: "Universidad de Chile, especialista certificado",
      icon: "🎓",
      verified: true
    },
    {
      title: "Certificación en Implantología",
      description: "Curso avanzado en implantes dentales",
      icon: "⚕️",
      verified: true
    },
    {
      title: "15+ Años de Experiencia",
      description: "Más de una década cuidando sonrisas",
      icon: "🏆",
      verified: true
    }
  ],
  className = ''
}) => {
  const { fadeInFromLeft, staggerContainer } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Container>
        <div className="text-center mb-12">
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Credenciales y Certificaciones
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            Profesionales certificados y reconocidos en el área odontológica
          </Text>
        </div>
        
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              variants={fadeInFromLeft}
              className="relative"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{credential.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Heading level="h4" size="h4" className="mr-3">
                        {credential.title}
                      </Heading>
                      {credential.verified && (
                        <motion.div
                          className="flex items-center text-green-500"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <Text size="xs" className="ml-1 text-green-600">Verificado</Text>
                        </motion.div>
                      )}
                    </div>
                    <Text color="muted">
                      {credential.description}
                    </Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </motion.section>
  )
}

// Real-time Activity Feed
export const ActivityFeed = ({
  activities = [
    "María G. reservó una consulta hace 5 minutos",
    "Carlos M. completó su tratamiento de implantes",
    "Ana S. calificó nuestro servicio con 5 estrellas",
    "Pedro L. se unió a nuestros pacientes satisfechos",
    "Sofia R. reservó una consulta de ortodoncia"
  ],
  showActivity = true,
  className = ''
}) => {
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    if (!showActivity) return
    
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length)
        setIsVisible(true)
      }, 300)
    }, 4000)
    
    return () => clearInterval(timer)
  }, [showActivity, activities.length])
  
  if (!showActivity) return null
  
  return (
    <motion.div
      className={`fixed bottom-6 left-6 z-40 ${className}`}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-xl p-4 max-w-sm border-l-4 border-green-500"
      >
        <div className="flex items-center">
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full mr-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <div>
            <Text size="xs" color="muted" className="uppercase tracking-wide">
              Actividad reciente
            </Text>
            <Text size="sm" weight="medium">
              {activities[currentActivity]}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Security and Privacy Badges
export const SecurityBadges = ({
  badges = [
    { icon: "🔒", text: "Datos Protegidos SSL" },
    { icon: "🏥", text: "Registro Sanitario" },
    { icon: "⚖️", text: "Cumple Normativas" },
    { icon: "🛡️", text: "Privacidad Garantizada" }
  ],
  className = ''
}) => {
  const { fadeInFromBottom } = useOptimizedAnimations()
  
  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-4 ${className}`}
      variants={fadeInFromBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="flex items-center bg-neutral-100 px-4 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="mr-2">{badge.icon}</span>
          <Text size="sm" weight="medium" color="neutral">
            {badge.text}
          </Text>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Money-Back Guarantee Component
export const MoneyBackGuarantee = ({
  title = "Garantía de Satisfacción 100%",
  description = "Si no estás completamente satisfecho con nuestro servicio, te devolvemos tu dinero sin preguntas.",
  features = [
    "Reembolso completo en 30 días",
    "Sin letra chica ni condiciones ocultas",
    "Proceso simple y transparente"
  ],
  className = ''
}) => {
  const { fadeInFromRight } = useOptimizedAnimations()
  
  return (
    <motion.div
      variants={fadeInFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
        <div className="text-center">
          <div className="text-6xl mb-4">💰</div>
          <Heading level="h3" size="h3" className="mb-4 text-green-800">
            {title}
          </Heading>
          <Text className="mb-6 text-green-700">
            {description}
          </Text>
          
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-green-700">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <Text size="sm" weight="medium">
                  {feature}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}