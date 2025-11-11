// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Button } from '../../design-system/components/Button'
import { Card, Container } from '../../design-system/components/Layout'
import { Heading, Text } from '../../design-system/components/Typography'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

/**
 * Progressive Disclosure Components
 * Revealing information progressively to reduce cognitive load
 */

// Expandable FAQ Component
export const ExpandableFAQ = ({
  faqs = [
    {
      id: 1,
      question: "¿Qué incluye la primera consulta?",
      answer: "Ofrecemos una consulta inicial donde evaluamos tu situación dental, discutimos tus requerimientos y te explicamos las opciones de tratamiento disponibles. No hay letra chica ni condiciones ocultas.",
      category: "Consultas"
    },
    {
      id: 2,
      question: "¿Qué incluye la evaluación inicial?",
      answer: "La consulta incluye: evaluación dental completa, revisión de tu historial médico, diagnóstico profesional, plan de tratamiento personalizado, explicación detallada de opciones y costos estimados. Todo sin costo para ti.",
      category: "Servicios"
    },
    {
      id: 3,
      question: "¿Aceptan seguros dentales o isapre?",
      answer: "Sí, trabajamos con la mayoría de seguros dentales e isapres. Nuestro equipo te ayuda con todos los trámites y maximizamos tu cobertura para reducir tus costos al mínimo.",
      category: "Pagos"
    },
    {
      id: 4,
      question: "¿Cuánto tiempo toma un tratamiento de ortodoncia?",
      answer: "El tiempo varía según cada caso, pero generalmente entre 12-24 meses. En tu consulta inicial, te daremos un timeline específico para tu situación. Usamos tecnología avanzada para reducir los tiempos de tratamiento.",
      category: "Tratamientos"
    },
    {
      id: 5,
      question: "¿Los tratamientos son dolorosos?",
      answer: "Utilizamos técnicas modernas y anestesia local para minimizar cualquier molestia. La mayoría de nuestros pacientes reportan experiencias muy cómodas. Priorizamos tu bienestar en cada procedimiento.",
      category: "Tratamientos"
    }
  ],
  showCategories = true,
  className = ''
}) => {
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const { fadeInFromBottom, staggerContainer } = useOptimizedAnimations()
  
  const categories = ['Todos', ...new Set(faqs.map(faq => faq.category))]
  const filteredFaqs = selectedCategory === 'Todos' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)
  
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }
  
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
          variants={fadeInFromBottom}
        >
          <Heading level="h2" size="h1" align="center" className="mb-4">
            Preguntas Frecuentes
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </Text>
        </motion.div>
        
        {/* Category Filter */}
        {showCategories && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={fadeInFromBottom}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        )}
        
        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <motion.button
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    onClick={() => toggleFaq(faq.id)}
                    whileHover={{ backgroundColor: '#F9FAFB' }}
                  >
                    <div className="flex justify-between items-center">
                      <Heading level="h3" size="h4" className="pr-4">
                        {faq.question}
                      </Heading>
                      <motion.svg
                        className="w-6 h-6 text-primary-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <Text className="leading-relaxed text-neutral-700">
                            {faq.answer}
                          </Text>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </motion.section>
  )
}

// Tabbed Content Component
export const TabbedContent = ({
  tabs = [
    {
      id: 'general',
      label: 'Odontología General',
      icon: '🦷',
      content: {
        title: 'Cuidado Dental Integral',
        description: 'Servicios fundamentales para mantener tu salud bucal en óptimas condiciones.',
        services: [
          'Limpiezas dentales profundas',
          'Tratamiento de caries',
          'Endodoncias (tratamiento de conducto)',
          'Extracciones dentales',
          'Sellantes dentales',
          'Revisiones preventivas'
        ],
        image: '🦷'
      }
    },
    {
      id: 'estetica',
      label: 'Estética Dental',
      icon: '✨',
      content: {
        title: 'Sonrisa Perfecta',
        description: 'Transforma tu sonrisa con nuestros tratamientos estéticos de vanguardia.',
        services: [
          'Blanqueamiento dental profesional',
          'Carillas de porcelana',
          'Diseño de sonrisa digital',
          'Resinas estéticas',
          'Coronas de porcelana',
          'Remodelación gingival'
        ],
        image: '✨'
      }
    },
    {
      id: 'ortodoncia',
      label: 'Ortodoncia',
      icon: '🔧',
      content: {
        title: 'Dientes Perfectamente Alineados',
        description: 'Corrige la posición de tus dientes con tecnología moderna y cómoda.',
        services: [
          'Brackets metálicos tradicionales',
          'Brackets estéticos de porcelana',
          'Ortodoncia invisible (Invisalign)',
          'Ortodoncia para adultos',
          'Tratamiento interceptivo infantil',
          'Retenedores post-tratamiento'
        ],
        image: '🔧'
      }
    },
    {
      id: 'implantes',
      label: 'Implantología',
      icon: '🦴',
      content: {
        title: 'Recupera Tus Dientes Perdidos',
        description: 'Soluciones permanentes para reemplazar dientes perdidos con implantes de titanio.',
        services: [
          'Implantes unitarios',
          'Puentes sobre implantes',
          'Prótesis totales sobre implantes',
          'Regeneración ósea',
          'Cirugía guiada por computadora',
          'Implantes inmediatos'
        ],
        image: '🦴'
      }
    }
  ],
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)
  const { fadeInFromRight, fadeInFromLeft } = useOptimizedAnimations()
  
  const activeContent = tabs.find(tab => tab.id === activeTab)?.content
  
  return (
    <motion.section
      className={`py-16 ${className}`}
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
            Nuestros Servicios Especializados
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            Descubre la amplia gama de tratamientos dentales que ofrecemos
          </Text>
        </motion.div>
        
        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center mb-10"
          variants={fadeInFromLeft}
        >
          <div className="bg-neutral-100 p-1 rounded-2xl inline-flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                  flex items-center space-x-2 min-w-max
                  ${activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-neutral-600 hover:text-neutral-800'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-6xl mx-auto"
            >
              <Card className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-6xl mb-6 text-center lg:text-left">
                      {activeContent.image}
                    </div>
                    <Heading level="h3" size="h2" className="mb-4">
                      {activeContent.title}
                    </Heading>
                    <Text size="lg" className="mb-8 leading-relaxed">
                      {activeContent.description}
                    </Text>
                    
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full lg:w-auto"
                    >
                      Agendar Consulta
                    </Button>
                  </div>
                  
                  <div>
                    <Heading level="h4" size="h4" className="mb-6">
                      Servicios Incluidos:
                    </Heading>
                    <div className="space-y-4">
                      {activeContent.services.map((service, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <Text className="font-medium">
                            {service}
                          </Text>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.section>
  )
}

// Accordion Component
export const AccordionComponent = ({
  items = [
    {
      id: 1,
      title: "¿Qué tecnología utilizan en sus tratamientos?",
      content: "Utilizamos la más moderna tecnología dental incluyendo radiografías digitales, escáneres intraorales 3D, láser dental, y sistemas de ortodoncia invisible. Nuestra clínica está equipada con lo último en innovación dental para garantizar tratamientos precisos y cómodos."
    },
    {
      id: 2,
      title: "¿Ofrecen planes de financiamiento?",
      content: "Sí, ofrecemos múltiples opciones de financiamiento para hacer accesibles nuestros tratamientos. Trabajamos con sistemas de cuotas sin interés, financiamiento extendido, y aceptamos todos los seguros dentales principales. Nuestro equipo te ayudará a encontrar la opción que mejor se adapte a tu presupuesto."
    },
    {
      id: 3,
      title: "¿Cuáles son sus horarios de atención?",
      content: "Atendemos de lunes a viernes de 9:00 AM a 7:00 PM y sábados de 9:00 AM a 2:00 PM. También ofrecemos citas de urgencia los fines de semana. Nuestro equipo está disponible para consultas telefónicas las 24 horas del día."
    }
  ],
  allowMultiple = false,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState(new Set())
  
  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    
    if (allowMultiple) {
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id)
      } else {
        newOpenItems.add(id)
      }
    } else {
      newOpenItems.clear()
      if (!openItems.has(id)) {
        newOpenItems.add(id)
      }
    }
    
    setOpenItems(newOpenItems)
  }
  
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <motion.button
            className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => toggleItem(item.id)}
            whileHover={{ backgroundColor: '#F9FAFB' }}
          >
            <div className="flex justify-between items-center">
              <Heading level="h4" size="h5" className="pr-4">
                {item.title}
              </Heading>
              <motion.div
                animate={{ rotate: openItems.has(item.id) ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.div>
            </div>
          </motion.button>
          
          <AnimatePresence>
            {openItems.has(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <Text className="leading-relaxed text-neutral-700">
                    {item.content}
                  </Text>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      ))}
    </div>
  )
}

// Step-by-Step Guide Component
export const StepByStepGuide = ({
  title = "Cómo Funciona Nuestro Proceso",
  subtitle = "Un proceso simple y transparente para cuidar tu sonrisa",
  steps = [
    {
      number: 1,
      title: "Reserva tu Consulta",
      description: "Agenda tu cita a través de WhatsApp, teléfono o nuestro formulario web. Sin compromiso.",
      icon: "📅"
    },
    {
      number: 2,
      title: "Evaluación Completa",
      description: "Realizamos un diagnóstico completo de tu salud bucal utilizando tecnología de última generación.",
      icon: "🔍"
    },
    {
      number: 3,
      title: "Plan Personalizado",
      description: "Diseñamos un plan de tratamiento específico para ti, explicando cada paso y los costos involucrados.",
      icon: "📋"
    },
    {
      number: 4,
      title: "Tratamiento Profesional",
      description: "Ejecutamos tu tratamiento con los más altos estándares de calidad y usando técnicas modernas.",
      icon: "⚕️"
    },
    {
      number: 5,
      title: "Seguimiento Continuo",
      description: "Te acompañamos después del tratamiento con controles regulares para asegurar resultados duraderos.",
      icon: "🎯"
    }
  ],
  className = ''
}) => {
  const { fadeInFromLeft, staggerContainer } = useOptimizedAnimations()
  
  return (
    <motion.section
      className={`py-16 bg-gradient-to-br from-neutral-50 to-white ${className}`}
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
            {title}
          </Heading>
          <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
            {subtitle}
          </Text>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              variants={fadeInFromLeft}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary-500 to-primary-300 z-0" />
              )}
              
              <div className="flex items-start space-x-6 mb-12 relative z-10">
                {/* Step Number Circle */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </motion.div>
                
                {/* Step Content */}
                <Card className="flex-1 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div className="flex-1">
                      <Heading level="h3" size="h4" className="mb-3">
                        {step.title}
                      </Heading>
                      <Text className="leading-relaxed text-neutral-700">
                        {step.description}
                      </Text>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          variants={fadeInFromLeft}
        >
          <Button
            variant="primary"
            size="xl"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            ¡Comenzar Mi Proceso Ahora!
          </Button>
        </motion.div>
      </Container>
    </motion.section>
  )
}