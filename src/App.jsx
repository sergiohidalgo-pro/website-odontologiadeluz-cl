import './App.css'
import { Heart, Smile, User, Clock, MessageCircle, Star, Phone, Mail, MapPin, CheckCircle, Shield, Award, Sparkles, TrendingUp } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import logo from './assets/logo-odontologia-de-luz-100x100.png'
import imagenFran from './assets/odontologa-francisca-montecino-6.png'
import imagenFran1 from './assets/odontologa-francisca-montecino-2.png'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Enhanced animation variants
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1.8
      }
    }
  }

  const cardHover = {
    rest: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: { 
      scale: 1.02, 
      rotateX: 2, 
      rotateY: 2,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }



  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-24 h-24 mx-auto mb-4" style={{ overflow: 'visible' }}>
            <img 
              src={logo} 
              alt="Logo Odontología de Luz" 
              className="w-20 h-20 rounded-full object-cover shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <svg className="w-24 h-24 absolute top-0 left-0" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F4C542"
              strokeWidth="6"
              opacity="0.2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F4C542"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="283"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                filter: 'drop-shadow(0 0 8px #F4C542)',
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%'
              }}
            />
            </svg>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Header - Modern & Clean */}
      <motion.header 
        className="breakout-full glass-effect sticky top-0 z-50 border-b border-white/20 shadow-modern" 
        role="banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <img 
                src={logo} 
                alt="Logo Odontología de Luz" 
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
              <h1 className="text-2xl font-black text-neutral-800 tracking-tight">
                <span className="text-primary">Odontología de Luz</span>
              </h1>
            </motion.div>
            <motion.nav 
              className="hidden md:flex gap-8" 
              role="navigation" 
              aria-label="Navegación principal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a 
                href="#problema" 
                className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ¿Por qué sufres?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#solucion" 
                className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mi Enfoque
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#contacto" 
                className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserva tu Cita
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            </motion.nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Problem-Focused */}
      <motion.section 
        className="breakout-full relative overflow-hidden section-spacing"
        style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFFBF0 50%, #FFF0F3 100%)', paddingTop: 0,  y: textY }} 
        role="banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Sacred Geometry Background */}
        <motion.div 
          className="absolute top-20 left-10 golden-circle"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 fibonacci-spiral"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sacred-hexagon"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInFromLeft}>
                <motion.div 
                  className="inline-flex items-center bg-secondary-subtle px-6 py-3 rounded-full mb-6"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart className="w-4 h-4 text-primary mr-2" />
                  <span className="text-primary-dark font-bold text-sm uppercase tracking-wider">Atención con el Corazón</span>
                </motion.div>
                <motion.h2 
                  className="text-5xl lg:text-6xl font-black text-neutral-800 leading-tight tracking-tight mb-6"
                  variants={fadeInFromLeft}
                >
                  <motion.span 
                    className="text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >¿Sientes que tu</motion.span>
                  <motion.span 
                    style={{ color: '#ffb8d0' }}
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >sonrisa no refleja</motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >quien realmente eres?</motion.span>
                </motion.h2>
              </motion.div>
              
              <motion.p 
                className="text-xl text-neutral-700 leading-relaxed max-w-2xl"
                variants={fadeInFromLeft}
              >
                En Odontología de Luz entendemos que cada sonrisa cuenta una historia única. Ofrecemos 
                <strong className="text-primary">atención dental integral</strong> con la calidez humana que mereces, 
                donde tu <strong className="text-gold-core">bienestar emocional</strong> es tan importante como tu salud bucal.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInFromLeft}
              >
                <motion.button 
                  className="group bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Reserva tu Evaluación Gratuita
                </motion.button>
                <motion.button 
                  className="group bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Conoce Nuestro Enfoque
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.5 }}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Main Image */}
                <motion.div 
                  className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={imagenFran} alt="Sonrisa genuina de paciente relajada y feliz" className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Floating Trust Card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 glass-effect rounded-2xl shadow-modern p-6"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 3.0 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-16 h-16 bg-gold-realistic rounded-2xl flex items-center justify-center"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Smile className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-black text-neutral-800">100%</p>
                      <p className="text-neutral-600 font-medium">Confianza</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Background Decoration */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-3xl -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem Identification Section */}
      <motion.section 
        id="problema" 
        className="breakout-full section-spacing relative overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, #C7DBFF 0%, #E8EFFE 50%, #FFB8D0 100%)' }} 
        role="region" 
        aria-labelledby="problema-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        viewport={{ once: true, margin: "-200px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center bg-white/30 px-6 py-3 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <User className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Tu Realidad Actual</span>
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
            viewport={{ once: true, margin: "-150px" }}
          >
            
            {/* Fear 1 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50"
              style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Ansiedad Dental</h4>
              <p className="text-neutral-800 leading-relaxed">
                Ofrecemos técnicas de relajación y un ambiente cálido donde te sentirás cómodo/a 
                y seguro/a durante todo el tratamiento.
              </p>
            </motion.div>

            {/* Fear 2 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50"
              style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Transparencia en Costos</h4>
              <p className="text-neutral-800 leading-relaxed">
                Brindamos presupuestos detallados y transparentes desde la primera consulta, 
                sin sorpresas ni costos ocultos.
              </p>
            </motion.div>

            {/* Fear 3 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50"
              style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Smile className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Autoestima y Confianza</h4>
              <p className="text-neutral-800 leading-relaxed">
                Te ayudamos a recuperar la seguridad en tu sonrisa con tratamientos 
                estéticos personalizados y resultados naturales.
              </p>
            </motion.div>

            {/* Fear 4 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50"
              style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Manejo del Dolor</h4>
              <p className="text-neutral-800 leading-relaxed">
                Utilizamos técnicas avanzadas de anestesia y control del dolor 
                para garantizar tratamientos cómodos y sin molestias.
              </p>
            </motion.div>

            {/* Fear 5 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50"
              style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Atención Personalizada</h4>
              <p className="text-neutral-800 leading-relaxed">
                Cada paciente recibe atención individualizada, escuchamos tus preocupaciones 
                y adaptamos el tratamiento a tus necesidades específicas.
              </p>
            </motion.div>

            {/* Fear 6 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50"
              style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-8 h-8 text-primary" />
              </motion.div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Tiempo y Dedicación</h4>
              <p className="text-neutral-800 leading-relaxed">
                Asignamos el tiempo necesario para cada consulta, explicamos 
                detalladamente cada procedimiento y resolvemos todas tus dudas.
              </p>
            </motion.div>
          </motion.div>

          {/* Transition */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-neutral-900 mb-4">Tu tranquilidad es nuestra prioridad</h4>
              <p className="text-xl text-neutral-800 mb-8">
                Descubre cómo la atención dental puede ser una experiencia positiva y reconfortante.
              </p>
              <motion.button 
                className="bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2 cursor-pointer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Conoce Nuestro Enfoque
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section - Mi Enfoque Diferente */}
      <motion.section 
        id="solucion" 
        className="breakout-full bg-white section-spacing relative" 
        role="region" 
        aria-labelledby="solucion-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
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
              Somos un equipo de <strong className="text-primary">profesionales especializados</strong> comprometidos 
              con brindar atención dental de excelencia. Combinamos <strong className="text-gold-core">tecnología avanzada</strong> 
              con el <strong className="text-primary">trato humano y cálido</strong> que cada persona merece.
            </p>
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Content - My Story */}
            <div className="space-y-8">
              <div className="bg-secondary-subtle rounded-2xl p-8 border-l-4 border-secondary">
                <h4 className="text-2xl font-bold text-neutral-800 mb-4">Nuestro Compromiso</h4>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  "En Odontología de Luz, cada tratamiento es una oportunidad para transformar vidas. 
                  Nos especializamos en crear experiencias positivas que fortalecen la confianza 
                  de nuestros pacientes en el cuidado dental."
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-realistic rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">Evaluación Integral</h5>
                    <p className="text-neutral-700">Realizamos un diagnóstico completo considerando tu historial, necesidades y objetivos de salud bucal.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">Información Transparente</h5>
                    <p className="text-neutral-700">Te explicamos cada tratamiento de forma clara, incluyendo opciones, tiempos y costos detallados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">Atención Personalizada</h5>
                    <p className="text-neutral-700">Adaptamos cada tratamiento a tu ritmo y necesidades, creando un ambiente de confianza y tranquilidad.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Professional Photo */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={imagenFran1} alt="Dr/a de Odontología de Luz en ambiente cálido y acogedor" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating Quote */}
                <div className="absolute -bottom-6 -right-6 glass-effect rounded-2xl shadow-modern p-6 max-w-xs">
                  <p className="text-sm text-neutral-700 italic mb-3">
                    "Cada persona que llega aquí es recibida con respeto, comprensión y amor genuino."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-realistic rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800 text-sm">Tu Dentista</p>
                      <p className="text-neutral-600 text-xs">Odontología de Luz</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <motion.div 
            className="rounded-3xl p-12" 
            style={{ background: 'linear-gradient(135deg, #E3EDFF 0%, #C7DBFF 50%, #FFB8D0 100%)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h4 
              className="text-3xl font-black text-neutral-800 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              La Diferencia Odontología de Luz
            </motion.h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Difference 1 - Azul Royal */}
              <motion.div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
                style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                onMouseMove={(e) => {
                  const card = e.currentTarget
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = (y - centerY) / 20
                  const rotateY = (centerX - x) / 20
                  card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                  style={{ backgroundColor: '#4169E1' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-10 h-10 text-white" />
                </motion.div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Citas Extendidas</h5>
                <p className="text-neutral-700">
                  Sesiones de 90 minutos para tratamientos completos y detallados, 
                  sin apuros ni interrupciones.
                </p>
              </motion.div>
              
              {/* Difference 2 - Dorado suave */}
              <motion.div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
                style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                onMouseMove={(e) => {
                  const card = e.currentTarget
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = (y - centerY) / 20
                  const rotateY = (centerX - x) / 20
                  card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                  style={{ backgroundColor: '#F4C542' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Seguimiento Continuo</h5>
                <p className="text-neutral-700">
                  Nuestro equipo te acompaña en todo el proceso, manteniendo un registro 
                  detallado de tu progreso y necesidades.
                </p>
              </motion.div>
              
              {/* Difference 3 - Rosa coral */}
              <motion.div 
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
                style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                onMouseMove={(e) => {
                  const card = e.currentTarget
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = (y - centerY) / 20
                  const rotateY = (centerX - x) / 20
                  card.style.transition = 'transform 0.15s ease-out'
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = 'transform 0.2s ease-out'
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                  style={{ backgroundColor: '#ffb8d0' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Tecnología Avanzada</h5>
                <p className="text-neutral-700">
                  Equipamiento de última generación para diagnósticos precisos 
                  y tratamientos mínimamente invasivos.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h4 className="text-2xl font-bold text-neutral-800 mb-4">Comienza tu transformación dental hoy</h4>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Agenda tu evaluación gratuita y descubre cómo podemos ayudarte a lograr 
              la sonrisa saludable y radiante que siempre has deseado.
            </p>
            <button className="bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2 cursor-pointer">
              Reservar Evaluación Gratuita
            </button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials / Social Proof Section */}
      <motion.section 
        className="breakout-full section-spacing relative"
        style={{ background: 'linear-gradient(135deg, #FFFCF0 0%, #FFF5F9 50%, #E8EFFE 100%)' }} 
        role="region" 
        aria-labelledby="testimonios-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="inline-flex items-center bg-primary-subtle px-6 py-3 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Heart className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Historias Reales</span>
            </motion.div>
            <motion.h3 
              id="testimonios-title" 
              className="text-4xl lg:text-5xl font-black text-neutral-800 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary">Así cambió</span>
              <span className="block text-neutral-700">la vida de personas</span>
              <span className="block text-accent">como tú</span>
            </motion.h3>
            <motion.p 
              className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Estas son historias reales de personas que decidieron dar el paso y transformar su experiencia dental.
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b353?w=60&h=60&fit=crop&crop=face" alt="María" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-neutral-800">María, 34 años</p>
                  <p className="text-sm text-neutral-600">Ejecutiva</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                "Tenía pánico al dentista desde niña. Aquí encontré comprensión real. Me explicaron todo con paciencia 
                y por primera vez salí tranquila de una consulta dental."
              </p>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-core fill-current" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">Hace 2 meses</span>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Carlos" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-neutral-800">Carlos, 28 años</p>
                  <p className="text-sm text-neutral-600">Ingeniero</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                "Me avergonzaba sonreír. Tenía los dientes muy mal. Aquí no me juzgaron, me ayudaron. 
                Ahora sonrío sin pena y mi autoestima cambió completamente."
              </p>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-core fill-current" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">Hace 1 mes</span>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="Ana" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-neutral-800">Ana, 45 años</p>
                  <p className="text-sm text-neutral-600">Profesora</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                "Después de una mala experiencia en otra clínica, había perdido la confianza. 
                Aquí recuperé la fe en los dentistas. Trato humano y profesional al 100%."
              </p>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-core fill-current" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">Hace 3 semanas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-primary mb-2">100%</div>
              <div className="text-neutral-600 font-medium">Pacientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent mb-2">0</div>
              <div className="text-neutral-600 font-medium">Quejas o Reclamos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary mb-2">95%</div>
              <div className="text-neutral-600 font-medium">Recomiendan a Familiares</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary mb-2">90min</div>
              <div className="text-neutral-600 font-medium">Tiempo Promedio por Cita</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section - Conversion Focused */}
      <motion.section 
        id="contacto" 
        className="breakout-full relative overflow-hidden section-spacing"
        style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFFBF0 50%, #FFF0F3 100%);' }} 
        role="region" 
        aria-labelledby="contacto-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(65,105,225,0.15) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(244,197,66,0.2) 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,143,163,0.1) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full mb-6"
              style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFF0F3 100%)', border: '2px solid rgba(255,143,163,0.3)' }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 mr-2" style={{ color: '#ffb8d0' }} />
              <span className="font-bold text-sm uppercase tracking-wider" style={{ color: '#4169E1' }}>Oferta Especial - Evaluación Gratuita</span>
            </motion.div>
            <motion.h3 
              id="contacto-title" 
              className="text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="block" style={{ color: '#4169E1' }}>Transforma Tu Sonrisa</span>
              <span className="block text-neutral-900">Comienza Hoy Mismo</span>
            </motion.h3>
            <motion.p 
              className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <strong style={{ color: '#F4C542' }}>Primera consulta 100% gratuita</strong> con evaluación completa y plan personalizado. 
              Sin compromiso, sin costos ocultos.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: '#4169E1' }} />
                <span className="text-neutral-700 font-semibold">Evaluación Completa Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: '#F4C542' }} />
                <span className="text-neutral-700 font-semibold">Plan Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: '#ffb8d0' }} />
                <span className="text-neutral-700 font-semibold">Sin Compromiso</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main CTA and Contact Info */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Main CTA */}
            <div className="space-y-6">
              {/* Primary CTA Card */}
              <motion.div 
                className="bg-white rounded-3xl p-10 shadow-2xl border-2"
                style={{ borderColor: '#a9e159' }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #a9e159 0%, #c4ed8a 50%, #d4f1a8 100%)', boxShadow: '0 8px 32px rgba(169,225,89,0.4)' }}
                    animate={{ scale: [1, 1.05, 1], boxShadow: ['0 8px 32px rgba(169,225,89,0.4)', '0 12px 40px rgba(169,225,89,0.6)', '0 8px 32px rgba(169,225,89,0.4)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-3xl font-black mb-3" style={{ color: '#7ab83d' }}>¡Reserva Ahora!</h4>
                  <p className="text-lg text-neutral-700 mb-2">
                    <strong style={{ color: '#a9e159' }}>Primera Consulta Gratis</strong> - Valor $50.000
                  </p>
                  <p className="text-sm text-neutral-600">Cupos limitados disponibles esta semana</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+56223456789" 
                    className="block w-full text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 text-center cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #a9e159 0%, #c4ed8a 100%)' }}
                  >
                    <Phone className="w-6 h-6 inline mr-3" />
                    Llamar Ahora: +56 2 2345 6789
                  </a>
                  
                  <a 
                    href="https://wa.me/56223456789" 
                    className="block w-full text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 text-center cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #c4ed8a 0%, #d4f1a8 100%)' }}
                  >
                    <MessageCircle className="w-6 h-6 inline mr-3" />
                    WhatsApp Directo
                  </a>
                  
                  <a 
                    href="mailto:contacto@odontologiadeluz.cl" 
                    className="block w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 text-center cursor-pointer border-2"
                    style={{ borderColor: '#a9e159', color: '#7ab83d' }}
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    contacto@odontologiadeluz.cl
                  </a>
                </div>
              </motion.div>
              
              {/* Trust Signals */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-black mb-2" style={{ color: '#a9e159' }}>100%</div>
                  <div className="text-sm text-neutral-600 font-semibold">Satisfacción Garantizada</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-black mb-2" style={{ color: '#c4ed8a' }}>+500</div>
                  <div className="text-sm text-neutral-600 font-semibold">Sonrisas Transformadas</div>
                </div>
              </div>
              
            </div>
            
            {/* Right - Benefits & Social Proof */}
            <div className="space-y-6">
              {/* What You Get */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Tu Primera Visita Incluye:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4169E1' }}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-neutral-800 mb-1">Evaluación Dental Completa</h5>
                      <p className="text-sm text-neutral-600">Revisión exhaustiva de tu salud bucal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4C542' }}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-neutral-800 mb-1">Plan Personalizado</h5>
                      <p className="text-sm text-neutral-600">Diseñado específicamente para ti</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffb8d0' }}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-neutral-800 mb-1">Presupuesto Transparente</h5>
                      <p className="text-sm text-neutral-600">Sin sorpresas ni costos ocultos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4169E1' }}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-neutral-800 mb-1">Asesoría Profesional</h5>
                      <p className="text-sm text-neutral-600">Respuestas a todas tus dudas</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #E8EFFE 0%, #FFFBF0 50%, #FFF0F3 100%)' }}>
                  <p className="font-black text-2xl mb-1" style={{ color: '#4169E1' }}>Valor: $50.000</p>
                  <p className="text-lg font-bold" style={{ color: '#F4C542' }}>Hoy: ¡GRATIS!</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: '#4169E1' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800">Nuestra Ubicación</h5>
                    <p className="text-sm text-neutral-600">Fácil acceso en metro</p>
                  </div>
                </div>
                <p className="text-neutral-700 font-semibold mb-4">Av. Providencia 1234<br/>Providencia, Santiago</p>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: '#4169E1' }} />
                    <span><strong>Lun-Vie:</strong> 9:00 - 19:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: '#F4C542' }} />
                    <span><strong>Sábados:</strong> 9:00 - 14:00</span>
                  </div>
                </div>
              </div>
            
        
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="breakout-full text-white py-12" style={{ background: 'linear-gradient(135deg, #5B7FE8 0%, #2E4CAA 50%, #1E3A8A 100%)' }} role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h5 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white">Odontología de Luz</span>
            </h5>
            <p className="text-white/80 text-xl mb-6 max-w-2xl mx-auto">Cuidando tu sonrisa con amor y profesionalismo</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#servicios" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-3 py-2 cursor-pointer" aria-label="Ir a servicios">Servicios</a>
              <a href="#equipo" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-3 py-2 cursor-pointer" aria-label="Conocer equipo">Equipo</a>
              <a href="#contacto" className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-3 py-2 cursor-pointer" aria-label="Información de contacto">Contacto</a>
            </div>
            <div className="border-t border-white/30 pt-6">
              <p className="text-white/70 text-sm">© {new Date().getFullYear()} Odontología de Luz. Todos los derechos reservados.</p>
              <p className="text-white/60 text-xs mt-3">
                Creado con I.C. inteligencia del corazón y asistencia de IA por Sergio Hidalgo bajo la empresa{' '}
                <a href="https://cdx.cl" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white underline transition-colors">CDX - Codex SpA</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App
