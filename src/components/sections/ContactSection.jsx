// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, Phone, MessageCircle, Mail, MapPin, Clock, Building2, Train, Instagram } from 'lucide-react'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

export default function ContactSection() {
  const { fadeInUp, optimizedViewport } = useOptimizedAnimations()

  const benefits = [
    {
      icon: CheckCircle,
      title: "Evaluación Neurodivergente",
      description: "Revisión especializada adaptada a requerimientos sensoriales y emocionales",
      color: "#4169E1"
    },
    {
      icon: CheckCircle,
      title: "Plan Adaptado TEA/TDAH",
      description: "Diseñado específicamente para niños con requerimientos especiales",
      color: "#F4C542"
    },
    {
      icon: CheckCircle,
      title: "Ambiente Sensorial",
      description: "Entorno calmado y predecible para niños neurodivergentes",
      color: "#ffb8d0"
    },
    {
      icon: CheckCircle,
      title: "Diplomada en Discapacidad",
      description: "Dra. Cirujano Dentista Francisca Montecino G. diplomada en atención de pacientes en situación de discapacidad",
      color: "#4169E1"
    }
  ]

  const guarantees = [
    { icon: CheckCircle, text: "Evaluación Completa", color: "#4169E1" },
    { icon: CheckCircle, text: "Plan Personalizado", color: "#F4C542" },
    { icon: CheckCircle, text: "Sin Compromiso", color: "#ffb8d0" }
  ]

  return (
    <motion.section 
      id="contacto" 
      className="breakout-full relative overflow-hidden section-spacing"
      style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFFBF0 50%, #FFF0F3 100%)' }} 
      role="region" 
      aria-labelledby="contacto-title"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(65,105,225,0.15) 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(244,197,66,0.2) 0%, transparent 70%)' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,143,163,0.1) 0%, transparent 70%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full mb-6"
            style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFF0F3 100%)', border: '2px solid rgba(255,143,163,0.3)' }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            <Sparkles className="w-5 h-5 mr-2" style={{ color: '#ffb8d0' }} />
            <span className="font-bold text-sm uppercase tracking-wider" style={{ color: '#4169E1' }}>
              Oferta Especial - Evaluación Dental
            </span>
          </motion.div>
          
          <motion.h3 
            id="contacto-title" 
            className="text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            <span className="block" style={{ color: '#4169E1' }}>Transforma Tu Sonrisa</span>
            <span className="block text-neutral-900">Comienza Hoy Mismo</span>
          </motion.h3>
          
          <motion.p 
            className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            <strong style={{ color: '#F4C542' }}>Primera consulta</strong> con la 
            <strong style={{ color: '#4169E1' }}>Dra. Francisca Montecino G.</strong>, diplomada en atención de pacientes en discapacidad, 
            especialista en <strong style={{ color: '#F4C542' }}>odontología inclusiva para niños neurodivergentes, TEA, TDAH, TDA y Síndrome de Down</strong>. 
            Atendemos <strong style={{ color: '#4169E1' }}>todas las edades</strong> en Talagante y Santiago. 
            Sin compromiso, sin costos ocultos.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2">
                <guarantee.icon className="w-5 h-5" style={{ color: guarantee.color }} />
                <span className="text-neutral-700 font-semibold">{guarantee.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main CTA and Contact Info */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Main CTA */}
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            {/* Primary CTA Card */}
            <motion.div 
              className="bg-white rounded-3xl p-10 shadow-2xl border-2"
              style={{ borderColor: '#a9e159' }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={optimizedViewport}
            >
              <div className="text-center mb-8">
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: 'linear-gradient(135deg, #a9e159 0%, #c4ed8a 50%, #d4f1a8 100%)', 
                    boxShadow: '0 8px 32px rgba(169,225,89,0.4)' 
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="text-3xl font-black mb-3" style={{ color: '#7ab83d' }}>¡Reserva con Especialista!</h4>
                <p className="text-lg text-neutral-700 mb-2">
                  <strong style={{ color: '#a9e159' }}>Consulta Neurodivergencia</strong>
                </p>
                <p className="text-sm text-neutral-600">Especialista en odontología inclusiva neurodivergente</p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="tel:+56998116713" 
                  className="block w-full text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #a9e159 0%, #c4ed8a 100%)' }}
                  aria-label="Llamar a Odontología de Luz para reservar cita"
                >
                  <Phone className="w-6 h-6 inline mr-3" />
                  Llamar Ahora: +56 9 9811 6713
                </a>
                
                <a 
                  href="https://wa.me/56998116713?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20hora%20para%20una%20evaluaci%C3%B3n%20dental%20completa.%20%C2%BFCu%C3%A1ndo%20tienen%20disponibilidad%3F" 
                  className="block w-full text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #c4ed8a 0%, #d4f1a8 100%)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp a Odontología de Luz"
                >
                  <MessageCircle className="w-6 h-6 inline mr-3" />
                  WhatsApp Directo
                </a>
                
                <a 
                  href="mailto:contacto@odontologiadeluz.cl" 
                  className="block w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 text-center cursor-pointer border-2"
                  style={{ borderColor: '#a9e159', color: '#7ab83d' }}
                  aria-label="Enviar email a Odontología de Luz"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  contacto@odontologiadeluz.cl
                </a>
                
                <a
                  href="https://www.instagram.com/odontologiadeluz"
                  className="block w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 text-center cursor-pointer border-2 hover:scale-105 text-lg"
                  style={{ borderColor: '#c4ed8a' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir en Instagram a Odontología de Luz"
                >
                  <span style={{ color: '#ffb8d0' }}>
                    <Instagram className="w-5 h-5 inline mr-2" />
                    Síguenos en{' '}
                  </span>
                  <span className="font-black" style={{ color: '#a9e159' }}>@odontologiadeluz</span>
                </a>
              </div>
            </motion.div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={optimizedViewport}
              >
                <div className="text-3xl font-black mb-2" style={{ color: '#a9e159' }}>100%</div>
                <div className="text-sm text-neutral-600 font-semibold">Satisfacción Garantizada</div>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={optimizedViewport}
              >
                <div className="text-3xl font-black mb-2" style={{ color: '#c4ed8a' }}>+500</div>
                <div className="text-sm text-neutral-600 font-semibold">Sonrisas Transformadas</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right - Benefits & Location */}
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            {/* What You Get */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={optimizedViewport}
            >
              <h4 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Tu Primera Visita Incluye:</h4>
              <p className="text-center text-neutral-600 mb-6">Atención integral para todas las edades</p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={optimizedViewport}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" 
                      style={{ backgroundColor: benefit.color }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-neutral-800 mb-1">{benefit.title}</h5>
                      <p className="text-sm text-neutral-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-6 p-4 rounded-xl text-center" 
                style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFFBF0 50%, #FFF0F3 100%)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={optimizedViewport}
              >
                <p className="font-black text-2xl mb-1" style={{ color: '#4169E1' }}>Atención Especializada</p>
                <p className="text-lg font-bold" style={{ color: '#F4C542' }}>Para Todas las Edades</p>
              </motion.div>
            </motion.div>
            
            {/* Location */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={optimizedViewport}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#4169E1' }}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-2xl font-bold text-neutral-800 mb-2">Nuestras Ubicaciones</h5>
                <p className="text-neutral-600">Dos sucursales para atenderte mejor</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Talagante */}
                <a
                  href="https://maps.google.com/?q=Av.+Balmaceda+949,+Talagante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#E8EFFE', borderWidth: '2px', borderColor: 'transparent' }}
                  aria-label="Ver ubicación de Talagante en Google Maps"
                >
                  <div className="text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-3" style={{ color: '#4169E1' }} />
                    <p className="font-bold text-neutral-800 text-lg mb-2">Talagante</p>
                    <p className="text-neutral-700 text-sm mb-3">Av. Balmaceda 949</p>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold mb-4" style={{ color: '#4169E1' }}>
                      <Building2 className="w-4 h-4" />
                      <span>Plaza Talagante</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-colors" style={{ backgroundColor: '#4169E1', color: 'white' }}>
                      <MapPin className="w-4 h-4" />
                      Cómo llegar
                    </div>
                  </div>
                </a>
                
                {/* Providencia */}
                <a
                  href="https://maps.google.com/?q=Av.+Salvador+95+Of.+316,+Providencia,+Santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#FFFBF0', borderWidth: '2px', borderColor: 'transparent' }}
                  aria-label="Ver ubicación de Providencia en Google Maps"
                >
                  <div className="text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-3" style={{ color: '#F4C542' }} />
                    <p className="font-bold text-neutral-800 text-lg mb-2">Providencia</p>
                    <p className="text-neutral-700 text-sm mb-3">Av. Salvador 95 Of. 316</p>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold mb-4" style={{ color: '#4169E1' }}>
                      <img src="/logo-metro.svg" alt="Metro" className="w-5 h-5" />
                      <span>Metro Salvador</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-colors" style={{ backgroundColor: '#F4C542', color: '#1a1a1a' }}>
                      <MapPin className="w-4 h-4" />
                      Cómo llegar
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}