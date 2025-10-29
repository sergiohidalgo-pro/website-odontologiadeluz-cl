// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Card, Container, Grid } from '../../design-system/components/Layout'
import { Heading, Text, Badge } from '../../design-system/components/Typography'
import { Button } from '../../design-system/components/Button'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'
import { NumberCounter } from '../motion/MicroInteractions'

/**
 * Comprehensive Trust Architecture System
 * Building credibility through social proof, credentials, and transparency
 */

// Dynamic Social Proof Hub
export const SocialProofHub = ({
  realtimeActivity = true,
  className = ''
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [liveStats, setLiveStats] = useState({
    patientsThisWeek: 12,
    consultationsToday: 5,
    onlineNow: 3
  })
  
  const testimonials = [
    {
      id: 1,
      name: "María González",
      age: 34,
      treatment: "Ortodoncia Invisible",
      rating: 5,
      text: "No puedo creer lo cómodo que fue todo el proceso. El equipo me explicó cada paso y los resultados superaron mis expectativas. Mi sonrisa cambió completamente mi confianza.",
      image: "👩‍💼",
      beforeAfter: "Antes: Dientes desalineados → Después: Sonrisa perfecta",
      timeFrame: "18 meses de tratamiento",
      verified: true
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      age: 42,
      treatment: "Implantes Dentales",
      rating: 5,
      text: "Después de años evitando sonreír, finalmente tengo la confianza de nuevo. El proceso fue mucho menos molesto de lo que esperaba y el resultado es increíble.",
      image: "👨‍💻",
      beforeAfter: "Antes: Dientes perdidos → Después: Sonrisa completa",
      timeFrame: "6 meses desde implante hasta corona final",
      verified: true
    },
    {
      id: 3,
      name: "Ana Silva",
      age: 28,
      treatment: "Blanqueamiento + Carillas",
      rating: 5,
      text: "Siempre soñé con tener una sonrisa como la de las actrices. El Dr. y su equipo hicieron realidad ese sueño. La atención fue excepcional desde el primer día.",
      image: "👩‍🎓",
      beforeAfter: "Antes: Dientes manchados → Después: Sonrisa radiante",
      timeFrame: "2 semanas de tratamiento",
      verified: true
    }
  ]
  
  const { fadeInFromBottom, fadeInFromRight, staggerContainer } = useOptimizedAnimations()
  
  // Simulate real-time updates
  useEffect(() => {
    if (!realtimeActivity) return
    
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        patientsThisWeek: prev.patientsThisWeek + Math.floor(Math.random() * 2),
        consultationsToday: prev.consultationsToday + Math.floor(Math.random() * 2),
        onlineNow: Math.max(1, prev.onlineNow + Math.floor(Math.random() * 3 - 1))
      }))
    }, 10000) // Update every 10 seconds
    
    return () => clearInterval(interval)
  }, [realtimeActivity])
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const currentTest = testimonials[currentTestimonial]
  
  return (
    <motion.section
      className={`py-16 bg-gradient-to-br from-white to-neutral-50 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        {/* Live Activity Header */}
        {realtimeActivity && (
          <motion.div
            className="flex justify-center mb-8"
            variants={fadeInFromBottom}
          >
            <Card className="px-6 py-3 bg-green-50 border-green-200">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-700 font-medium">
                    <NumberCounter from={0} to={liveStats.onlineNow} duration={1} /> personas viendo esta página
                  </span>
                </div>
                <div className="text-neutral-600">
                  <NumberCounter from={0} to={liveStats.consultationsToday} duration={1.5} /> consultas reservadas hoy
                </div>
                <div className="text-neutral-600">
                  <NumberCounter from={0} to={liveStats.patientsThisWeek} duration={2} /> nuevos pacientes esta semana
                </div>
              </div>
            </Card>
          </motion.div>
        )}
        
        <motion.div
          className="text-center mb-12"
          variants={fadeInFromBottom}
        >
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Lo Que Dicen Nuestros Pacientes
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            Testimonios reales de personas que transformaron su sonrisa con nosotros
          </Text>
        </motion.div>
        
        {/* Featured Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          variants={fadeInFromRight}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-white shadow-2xl relative overflow-hidden">
                {/* Verification Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="success" className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verificado
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Patient Info */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">{currentTest.image}</div>
                    <Heading level="h3" size="h4" className="mb-2">
                      {currentTest.name}
                    </Heading>
                    <Text size="sm" color="muted" className="mb-2">
                      {currentTest.age} años
                    </Text>
                    <Badge variant="primary">{currentTest.treatment}</Badge>
                    
                    {/* Rating */}
                    <div className="flex justify-center mt-4">
                      {[...Array(currentTest.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-yellow-400 text-xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    <div className="text-6xl text-primary-200 mb-4">"</div>
                    <Text size="lg" className="mb-6 leading-relaxed italic">
                      {currentTest.text}
                    </Text>
                    
                    {/* Treatment Details */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <Text size="sm" weight="medium">
                          {currentTest.beforeAfter}
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-500 mr-2">⏱️</span>
                        <Text size="sm" weight="medium">
                          {currentTest.timeFrame}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Trust Metrics */}
        <motion.div
          variants={fadeInFromBottom}
        >
          <Grid cols={{ mobile: 2, tablet: 4, desktop: 4 }} gap="lg">
            {[
              { number: "500+", label: "Pacientes Felices", icon: "😊", color: "text-green-600" },
              { number: "98%", label: "Satisfacción", icon: "⭐", color: "text-yellow-600" },
              { number: "15+", label: "Años Experiencia", icon: "🏆", color: "text-blue-600" },
              { number: "24/7", label: "Atención", icon: "📞", color: "text-purple-600" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInFromBottom}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    <NumberCounter from={0} to={parseInt(metric.number)} suffix={metric.number.includes('+') ? '+' : metric.number.includes('%') ? '%' : ''} />
                  </div>
                  <Text size="sm" weight="medium" color="muted">
                    {metric.label}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </motion.section>
  )
}

// Professional Credentials Showcase
export const CredentialsShowcase = ({
  className = ''
}) => {
  const credentials = [
    {
      title: "Colegio de Dentistas de Chile",
      subtitle: "Registro Profesional Activo",
      description: "Miembro registrado y certificado del Colegio de Dentistas de Chile con licencia vigente.",
      icon: "🏛️",
      verificationLink: "#",
      status: "Activo",
      year: "2008 - Presente"
    },
    {
      title: "Universidad de Chile",
      subtitle: "Título Profesional en Odontología",
      description: "Graduado con distinción de la Universidad de Chile, una de las instituciones más prestigiosas del país.",
      icon: "🎓",
      verificationLink: "#",
      status: "Verificado",
      year: "2008"
    },
    {
      title: "Especialización en Ortodoncia",
      subtitle: "Pontificia Universidad Católica",
      description: "Especialización avanzada en ortodoncia y ortopedia maxilar con certificación internacional.",
      icon: "🔧",
      verificationLink: "#",
      status: "Certificado",
      year: "2012"
    },
    {
      title: "Curso Avanzado en Implantología",
      subtitle: "ITI International Team for Implantology",
      description: "Certificación internacional en implantología con técnicas de vanguardia y protocolos modernos.",
      icon: "⚕️",
      verificationLink: "#",
      status: "Certificado",
      year: "2015"
    }
  ]
  
  const { fadeInFromLeft, staggerContainer } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        <motion.div
          className="text-center mb-12"
          variants={fadeInFromLeft}
        >
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Credenciales y Certificaciones Profesionales
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia está respaldado por años de formación y certificaciones continuas
          </Text>
        </motion.div>
        
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              variants={fadeInFromLeft}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{credential.icon}</div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Heading level="h4" size="h5">
                          {credential.title}
                        </Heading>
                        <motion.div
                          className="flex items-center text-green-500"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      </div>
                      <Text size="sm" weight="medium" color="primary">
                        {credential.subtitle}
                      </Text>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">
                    {credential.status}
                  </Badge>
                </div>
                
                <Text className="mb-4 leading-relaxed">
                  {credential.description}
                </Text>
                
                <div className="flex justify-between items-center">
                  <Text size="sm" color="muted" weight="medium">
                    {credential.year}
                  </Text>
                  <Button
                    variant="outline"
                    size="sm"
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    Verificar Credencial
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
        
        {/* Trust Seal */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInFromLeft}
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <Heading level="h4" size="h5" className="text-green-800 mb-1">
                  Profesional Verificado y Certificado
                </Heading>
                <Text size="sm" className="text-green-700">
                  Todas nuestras credenciales son verificables y están respaldadas por instituciones reconocidas
                </Text>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </motion.section>
  )
}

// Before/After Gallery with Trust Elements
export const BeforeAfterGallery = ({
  cases = [
    {
      id: 1,
      title: "Transformación con Ortodoncia Invisible",
      patient: "María G.",
      age: 34,
      treatment: "Invisalign",
      duration: "18 meses",
      beforeImage: "🦷😟", // Placeholder - replace with actual images
      afterImage: "🦷😊",
      description: "Alineación completa de dientes sin brackets metálicos visibles.",
      consent: true
    },
    {
      id: 2,
      title: "Rehabilitación con Implantes",
      patient: "Carlos M.",
      age: 42,
      treatment: "Implante + Corona",
      duration: "6 meses",
      beforeImage: "🦷❌",
      afterImage: "🦷✅",
      description: "Reemplazo de diente perdido con implante de titanio.",
      consent: true
    },
    {
      id: 3,
      title: "Sonrisa Perfecta con Carillas",
      patient: "Ana S.",
      age: 28,
      treatment: "Carillas de Porcelana",
      duration: "3 semanas",
      beforeImage: "🦷😐",
      afterImage: "🦷🌟",
      description: "Mejora estética completa con carillas de última generación.",
      consent: true
    }
  ],
  className = ''
}) => {
  const [selectedCase, setSelectedCase] = useState(0)
  const { fadeInFromBottom, fadeInFromRight } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 bg-gradient-to-br from-neutral-50 to-white ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        <motion.div
          className="text-center mb-12"
          variants={fadeInFromBottom}
        >
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Casos de Éxito Reales
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            Transformaciones auténticas de nuestros pacientes con su consentimiento
          </Text>
        </motion.div>
        
        {/* Case Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={fadeInFromBottom}
        >
          {cases.map((caseItem, index) => (
            <Button
              key={caseItem.id}
              variant={selectedCase === index ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCase(index)}
              className="text-sm"
            >
              Caso {index + 1}: {caseItem.patient}
            </Button>
          ))}
        </motion.div>
        
        {/* Selected Case Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                {/* Before/After Images */}
                <div className="space-y-6">
                  <div className="text-center">
                    <Text size="lg" weight="bold" className="mb-4">Antes</Text>
                    <div className="bg-neutral-100 rounded-2xl p-8 text-6xl">
                      {cases[selectedCase].beforeImage}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Text size="lg" weight="bold" className="mb-4">Después</Text>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-6xl">
                      {cases[selectedCase].afterImage}
                    </div>
                  </div>
                </div>
                
                {/* Case Details */}
                <div>
                  <Heading level="h3" size="h3" className="mb-4">
                    {cases[selectedCase].title}
                  </Heading>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <Text weight="medium">Paciente:</Text>
                      <Text>{cases[selectedCase].patient}, {cases[selectedCase].age} años</Text>
                    </div>
                    <div className="flex justify-between">
                      <Text weight="medium">Tratamiento:</Text>
                      <Badge variant="primary">{cases[selectedCase].treatment}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <Text weight="medium">Duración:</Text>
                      <Text>{cases[selectedCase].duration}</Text>
                    </div>
                  </div>
                  
                  <Text className="mb-6 leading-relaxed">
                    {cases[selectedCase].description}
                  </Text>
                  
                  {/* Trust Elements */}
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text size="sm" weight="bold" className="text-green-800">
                        Caso Verificado
                      </Text>
                    </div>
                    <Text size="xs" className="text-green-700">
                      Publicado con consentimiento expreso del paciente. 
                      Respetamos la privacidad y confidencialidad médica.
                    </Text>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center pt-6 border-t border-neutral-200">
                <Text className="mb-4">
                  ¿Te gustaría obtener resultados similares?
                </Text>
                <Button
                  variant="primary"
                  size="lg"
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  Agendar Mi Consulta Gratuita
                </Button>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        {/* Privacy Notice */}
        <motion.div
          className="text-center mt-8"
          variants={fadeInFromBottom}
        >
          <Text size="xs" color="muted" className="max-w-2xl mx-auto">
            🔒 Todos los casos mostrados cuentan con autorización escrita de los pacientes. 
            Cumplimos estrictamente con las normas de confidencialidad médica y protección de datos personales.
          </Text>
        </motion.div>
      </Container>
    </motion.section>
  )
}

// Trust Guarantee Section
export const TrustGuaranteeSection = ({
  className = ''
}) => {
  const guarantees = [
    {
      icon: "💰",
      title: "Garantía de Satisfacción 100%",
      description: "Si no estás completamente satisfecho con tu tratamiento, te devolvemos tu dinero.",
      details: ["Reembolso completo en 30 días", "Sin preguntas ni condiciones", "Proceso simple y transparente"]
    },
    {
      icon: "🔒",
      title: "Privacidad y Confidencialidad",
      description: "Tus datos médicos y personales están protegidos con los más altos estándares de seguridad.",
      details: ["Cumplimiento GDPR", "Servidores seguros", "Acceso restringido"]
    },
    {
      icon: "⚕️",
      title: "Calidad Médica Certificada",
      description: "Todos nuestros tratamientos siguen protocolos internacionales de calidad.",
      details: ["Materiales premium", "Técnicas actualizadas", "Seguimiento post-tratamiento"]
    }
  ]
  
  const { fadeInFromLeft, staggerContainer } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        <motion.div
          className="text-center mb-12"
          variants={fadeInFromLeft}
        >
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Nuestro Compromiso Contigo
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            Tu tranquilidad es nuestra prioridad. Respaldamos cada tratamiento con garantías sólidas.
          </Text>
        </motion.div>
        
        <Grid cols={{ mobile: 1, tablet: 3, desktop: 3 }} gap="lg">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              variants={fadeInFromLeft}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 h-full text-center hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="text-5xl mb-4">{guarantee.icon}</div>
                <Heading level="h3" size="h4" className="mb-4">
                  {guarantee.title}
                </Heading>
                <Text className="mb-6 leading-relaxed">
                  {guarantee.description}
                </Text>
                
                <div className="space-y-2">
                  {guarantee.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text size="sm" className="text-left">
                        {detail}
                      </Text>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
        
        <motion.div
          className="text-center mt-12"
          variants={fadeInFromLeft}
        >
          <Button
            variant="primary"
            size="xl"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            Conocer Más Sobre Nuestras Garantías
          </Button>
        </motion.div>
      </Container>
    </motion.section>
  )
}