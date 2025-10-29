// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Input, Textarea, Select, Checkbox } from '../../design-system/components/Form'
import { Button } from '../../design-system/components/Button'
import { Card, Container } from '../../design-system/components/Layout'
import { Heading, Text } from '../../design-system/components/Typography'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'
import { SecurityBadges } from './TrustIndicators'

/**
 * Optimized Contact Form with CRO Best Practices
 * Multi-step form with progress indicators and conversion optimization
 */

export const OptimizedContactForm = ({
  onSubmit,
  className = '',
  showMultiStep = true,
  showProgressBar = true
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    name: '',
    phone: '',
    email: '',
    
    // Step 2 - Appointment Details
    preferredDate: '',
    preferredTime: '',
    urgency: '',
    service: '',
    
    // Step 3 - Additional Info
    hasInsurance: false,
    previousDentist: '',
    concerns: '',
    marketingConsent: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { fadeInFromRight, fadeInFromLeft, staggerContainer } = useOptimizedAnimations()
  
  const totalSteps = 3
  const progressPercentage = (currentStep / totalSteps) * 100
  
  // Form validation
  const validateStep = (step) => {
    const newErrors = {}
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
        if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido'
        if (!formData.email.trim()) newErrors.email = 'El email es requerido'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido'
        break
        
      case 2:
        if (!formData.service) newErrors.service = 'Selecciona un servicio'
        if (!formData.urgency) newErrors.urgency = 'Indica la urgencia de tu consulta'
        break
        
      case 3:
        if (!formData.marketingConsent) newErrors.marketingConsent = 'Debes aceptar los términos'
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }
  
  // Navigate between steps
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(currentStep)) return
    
    setIsSubmitting(true)
    
    try {
      await onSubmit?.(formData)
      // Success handling would go here
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Service options
  const serviceOptions = [
    { value: 'consulta-general', label: 'Consulta General' },
    { value: 'limpieza', label: 'Limpieza Dental' },
    { value: 'ortodoncia', label: 'Ortodoncia' },
    { value: 'implantes', label: 'Implantes Dentales' },
    { value: 'estetica', label: 'Estética Dental' },
    { value: 'endodoncia', label: 'Endodoncia' },
    { value: 'cirugia', label: 'Cirugía Oral' },
    { value: 'urgencia', label: 'Urgencia Dental' }
  ]
  
  const urgencyOptions = [
    { value: 'baja', label: 'Revisión de rutina - No es urgente' },
    { value: 'media', label: 'Molestia leve - Esta semana' },
    { value: 'alta', label: 'Dolor moderado - En 2-3 días' },
    { value: 'urgente', label: '🚨 Dolor intenso - ¡HOY!' }
  ]
  
  const timeOptions = [
    { value: 'manana', label: 'Mañana (9:00 - 12:00)' },
    { value: 'tarde', label: 'Tarde (14:00 - 18:00)' },
    { value: 'flexible', label: 'Horario flexible' }
  ]
  
  return (
    <motion.section
      className={`py-16 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInFromLeft}
          >
            <Heading level="h2" size="h1" align="center" className="mb-4">
              Reserva tu Consulta Gratuita
            </Heading>
            <Text size="xl" align="center" color="muted" className="max-w-2xl mx-auto">
              Completa este formulario en menos de 2 minutos y te contactaremos para confirmar tu cita
            </Text>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                "✅ Consulta 100% gratuita",
                "⏱️ Respuesta en menos de 2 horas",
                "🔒 Información completamente segura"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-green-600 font-medium"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInFromRight}>
            <Card className="p-8 md:p-12 shadow-2xl bg-gradient-to-br from-white to-neutral-50">
              {/* Progress Bar */}
              {showProgressBar && showMultiStep && (
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <Text size="sm" weight="medium">
                      Paso {currentStep} de {totalSteps}
                    </Text>
                    <Text size="sm" color="muted">
                      {Math.round(progressPercentage)}% completado
                    </Text>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full flex items-center justify-end pr-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {progressPercentage > 15 && (
                        <span className="text-white text-xs font-bold">
                          🚀
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heading level="h3" size="h3" className="mb-6 text-center">
                      Información Personal
                    </Heading>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <Input
                        label="Nombre Completo"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        error={errors.name}
                        required
                        size="lg"
                      />
                      
                      <Input
                        type="tel"
                        label="Teléfono"
                        placeholder="+56 9 1234 5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        error={errors.phone}
                        required
                        size="lg"
                      />
                    </div>
                    
                    <Input
                      type="email"
                      label="Email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      helperText="Te enviaremos la confirmación de tu cita a este email"
                      required
                      size="lg"
                      className="mb-8"
                    />
                  </motion.div>
                )}
                
                {/* Step 2: Appointment Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heading level="h3" size="h3" className="mb-6 text-center">
                      Detalles de la Cita
                    </Heading>
                    
                    <div className="space-y-6">
                      <Select
                        label="¿Qué servicio necesitas?"
                        options={serviceOptions}
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        error={errors.service}
                        required
                        size="lg"
                      />
                      
                      <Select
                        label="¿Qué tan urgente es tu consulta?"
                        options={urgencyOptions}
                        value={formData.urgency}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        error={errors.urgency}
                        required
                        size="lg"
                      />
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          type="date"
                          label="Fecha Preferida"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          size="lg"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        
                        <Select
                          label="Horario Preferido"
                          options={timeOptions}
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          size="lg"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heading level="h3" size="h3" className="mb-6 text-center">
                      Información Adicional
                    </Heading>
                    
                    <div className="space-y-6">
                      <Checkbox
                        label="Tengo seguro dental o isapre"
                        checked={formData.hasInsurance}
                        onChange={(e) => handleInputChange('hasInsurance', e.target.checked)}
                        size="lg"
                      />
                      
                      <Input
                        label="¿Cuándo fue tu última visita al dentista? (Opcional)"
                        placeholder="Ej: Hace 6 meses, hace 2 años, nunca he ido"
                        value={formData.previousDentist}
                        onChange={(e) => handleInputChange('previousDentist', e.target.value)}
                        size="lg"
                      />
                      
                      <Textarea
                        label="¿Tienes alguna preocupación específica? (Opcional)"
                        placeholder="Cuéntanos qué te preocupa o qué esperas lograr con tu visita..."
                        value={formData.concerns}
                        onChange={(e) => handleInputChange('concerns', e.target.value)}
                        rows={4}
                        helperText="Esta información nos ayuda a preparar mejor tu consulta"
                      />
                      
                      <div className="bg-neutral-50 p-6 rounded-xl">
                        <Checkbox
                          label="Acepto recibir información sobre promociones y tratamientos por WhatsApp y email"
                          checked={formData.marketingConsent}
                          onChange={(e) => handleInputChange('marketingConsent', e.target.checked)}
                          error={errors.marketingConsent}
                          required
                          size="lg"
                        />
                        <Text size="xs" color="muted" className="mt-2 ml-8">
                          Puedes cancelar tu suscripción en cualquier momento. 
                          Respetamos tu privacidad y no compartimos tu información.
                        </Text>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-12">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={prevStep}
                      className="flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Anterior
                    </Button>
                  ) : (
                    <div />
                  )}
                  
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      onClick={nextStep}
                      className="flex items-center ml-auto"
                    >
                      Continuar
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      className="ml-auto transform hover:scale-105 transition-transform duration-200"
                    >
                      {isSubmitting ? 'Enviando...' : '🎉 ¡Reservar Mi Consulta Gratuita!'}
                    </Button>
                  )}
                </div>
                
                {/* Security badges at bottom */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <SecurityBadges />
                </div>
              </form>
            </Card>
          </motion.div>
          
          {/* Additional Trust Indicators */}
          <motion.div
            className="text-center mt-8"
            variants={fadeInFromLeft}
          >
            <Text size="sm" color="muted">
              💬 <strong>¿Prefieres llamar?</strong> Llámanos al{' '}
              <a href="tel:+56998116713" className="text-primary-500 font-bold hover:underline">
                +56 9 9811 6713
              </a>
            </Text>
            <Text size="xs" color="muted" className="mt-2">
              Horario de atención: Lunes a Viernes 9:00 - 18:00 hrs
            </Text>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}