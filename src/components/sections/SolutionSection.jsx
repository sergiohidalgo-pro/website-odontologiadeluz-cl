// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Sparkles, User, Award, MessageCircle, Star, Clock, Heart, CheckCircle } from 'lucide-react'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'
import imagenFran1 from '../../assets/odontologa-francisca-montecino-2.png'

export default function SolutionSection() {
  const { fadeInUp, optimizedViewport } = useOptimizedAnimations()

  const features = [
    {
      icon: User,
      title: "Evaluación Especializada",
      description: "Diagnóstico integral adaptado para niños neurodivergentes, considerando sus particularidades sensoriales y emocionales.",
      color: "bg-gold-realistic"
    },
    {
      icon: MessageCircle,
      title: "Comunicación con Amor",
      description: "Nos comunicamos de forma clara y cercana, adaptándonos a tu forma única de comprender. Cada conversación es un espacio de confianza y respeto.",
      color: "bg-primary"
    },
    {
      icon: Star,
      title: "Ambiente Sensorial",
      description: "Creamos un entorno calmado y predecible, adaptado a los requerimientos sensoriales de cada niño neurodivergente.",
      color: "bg-secondary"
    }
  ]

  const differences = [
    {
      icon: Clock,
      title: "Citas Extendidas",
      description: "Sesiones de 90 minutos para tratamientos completos y detallados, sin apuros ni interrupciones.",
      color: "#4169E1"
    },
    {
      icon: Heart,
      title: "Seguimiento Continuo",
      description: "Nuestro equipo te acompaña en todo el proceso, manteniendo un registro detallado de tu progreso y requerimientos.",
      color: "#F4C542"
    },
    {
      icon: CheckCircle,
      title: "Tecnología Avanzada",
      description: "Equipamiento de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.",
      color: "#ffb8d0"
    }
  ]

  return (
    <motion.section 
      id="solucion" 
      className="breakout-full bg-white section-spacing relative" 
      role="region" 
      aria-labelledby="solucion-title"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
        >
          <div className="inline-flex items-center bg-gold-subtle-bg px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold-dark mr-2" />
            <span className="text-gold-dark font-bold text-sm uppercase tracking-wider">Mi Propuesta Única</span>
          </div>
          <h3 id="solucion-title" className="text-4xl lg:text-5xl font-black text-neutral-800 leading-tight tracking-tight mb-6">
            <span className="text-primary">Odontología de Luz:</span>
            <span className="block text-neutral-700">Cuidado dental integral</span>
            <span className="block text-gold-core">con amor y profesión</span>
          </h3>
          <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            La <strong className="text-primary">Dra. Francisca Montecino G.</strong>, diplomada en <strong className="text-gold-core">atención de pacientes en discapacidad</strong>, especialista en <strong className="text-primary">odontología inclusiva para niños neurodivergentes, TEA, TDAH, TDA y Síndrome de Down</strong>. También atendemos <strong className="text-gold-core">adultos, adultos mayores y familias</strong> con tecnología avanzada y trato humano especializado.
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content - Features */}
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <div className="bg-secondary-subtle rounded-2xl p-8 border-l-4 border-secondary">
              <h4 className="text-2xl font-bold text-neutral-800 mb-4">Diplomado en Atención de Discapacidad</h4>
              <p className="text-lg text-neutral-700 leading-relaxed">
                "Especialista diplomada en <strong className="text-primary">atención de pacientes en discapacidad</strong>, ofrecemos <strong className="text-gold-core">odontología inclusiva</strong> para niños neurodivergentes y <strong className="text-primary">atención integral a todas las edades</strong>. Cada persona recibe un enfoque único y respetuoso adaptado a sus requerimientos."
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={optimizedViewport}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">{feature.title}</h5>
                    <p className="text-neutral-700">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Content - Professional Photo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={optimizedViewport}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={imagenFran1} 
                  alt="Dra. Francisca Montecino G. diplomada discapacidad especialista odontología inclusiva TEA TDAH TDA Síndrome Down" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Quote */}
              <motion.div
                className="hidden md:block absolute -bottom-6 -right-6 glass-effect rounded-2xl shadow-modern p-5 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={optimizedViewport}
              >
                <p className="text-sm text-neutral-700 italic mb-4 leading-relaxed">
                  "No solo se trata de dientes, sino de ver cómo la vida de mis pacientes se transforma en cada experiencia dental."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-realistic rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-neutral-800 text-sm leading-tight" style={{ marginBottom: 0 }}>Dra. Francisca Montecino G.</p>
                    <p className="text-neutral-600 text-xs leading-tight" style={{ marginBottom: 0 }}>Cirujano Dentista - Diplomada Atención Discapacidad</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* What Makes Us Different */}
        <motion.div 
          className="rounded-3xl p-12" 
          style={{ background: 'linear-gradient(135deg, #E3EDFF 0%, #C7DBFF 50%, #FFB8D0 100%)' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
        >
          <motion.h4 
            className="text-3xl font-black text-neutral-800 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            La Diferencia Odontología de Luz
          </motion.h4>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differences.map((difference, index) => (
              <motion.div 
                key={difference.title}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={optimizedViewport}
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                  style={{ backgroundColor: difference.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={optimizedViewport}
                >
                  <difference.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">{difference.title}</h5>
                <p className="text-neutral-700">{difference.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
        >
          <h4 className="text-2xl font-bold text-neutral-800 mb-4">Comienza tu transformación dental hoy</h4>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Agenda tu evaluación y descubre cómo podemos ayudarte a lograr 
            la sonrisa saludable y radiante que siempre has deseado.
          </p>
          <motion.a
            href="#contacto"
            className="bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer inline-flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Reservar evaluación dental"
          >
            Reservar Evaluación
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}