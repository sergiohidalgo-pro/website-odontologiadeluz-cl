// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { User, Shield, TrendingUp, Smile, Sparkles, Heart, Clock } from 'lucide-react'
import FeatureCard from '../ui/FeatureCard'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

export default function ProblemsSection() {
  const { fadeInUp, staggerContainer, optimizedViewport } = useOptimizedAnimations()

  const problems = [
    {
      icon: Shield,
      title: "Ansiedad Dental",
      description: "Ofrecemos técnicas de relajación y un ambiente cálido donde te sentirás cómodo/a y seguro/a durante todo el tratamiento."
    },
    {
      icon: TrendingUp,
      title: "Transparencia en Costos",
      description: "Brindamos presupuestos detallados y transparentes desde la primera consulta, sin sorpresas ni costos ocultos."
    },
    {
      icon: Smile,
      title: "Autoestima y Confianza",
      description: "Te ayudamos a recuperar la seguridad en tu sonrisa con tratamientos estéticos personalizados y resultados naturales."
    },
    {
      icon: Sparkles,
      title: "Manejo del Dolor",
      description: "Utilizamos técnicas avanzadas de anestesia y control del dolor para garantizar tratamientos cómodos y sin molestias."
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Cada paciente recibe atención individualizada, escuchamos tus preocupaciones y adaptamos el tratamiento a tus requerimientos específicos."
    },
    {
      icon: Clock,
      title: "Tiempo y Dedicación",
      description: "Asignamos el tiempo necesario para cada consulta, explicamos detalladamente cada procedimiento y resolvemos todas tus dudas."
    }
  ]

  return (
    <motion.section 
      id="problema" 
      className="breakout-full section-spacing relative overflow-hidden" 
      style={{ background: 'linear-gradient(135deg, #C7DBFF 0%, #E8EFFE 50%, #FFB8D0 100%)' }} 
      role="region" 
      aria-labelledby="problema-title"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={optimizedViewport}
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
          <motion.div 
            className="inline-flex items-center bg-white/30 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <User className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Tu Realidad Actual
            </span>
          </motion.div>
          
          <h3 
            id="problema-title" 
            className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6"
          >
            <span style={{ color: '#4169E1' }}>Reconocemos las</span>
            <span className="block" style={{ color: '#F4C542' }}>preocupaciones reales</span>
            <span className="block" style={{ color: '#ffb8d0' }}>de nuestros pacientes</span>
          </h3>
          
          <motion.p 
            className="text-xl text-neutral-800 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sabemos que visitar al dentista puede generar ansiedad. Por eso hemos diseñado un enfoque 
            que prioriza tu comodidad y tranquilidad en cada paso del tratamiento.
          </motion.p>
        </motion.div>

        {/* Problem Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
        >
          {problems.map((problem, index) => (
            <FeatureCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Transition CTA */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-neutral-900 mb-4">
              Tu tranquilidad es nuestra prioridad
            </h4>
            <p className="text-xl text-neutral-800 mb-8">
              Descubre cómo la atención dental puede ser una experiencia positiva y reconfortante.
            </p>
            <motion.button 
              className="bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2 cursor-pointer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Conocer nuestro enfoque de tratamiento dental"
            >
              Conoce Nuestro Enfoque
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}