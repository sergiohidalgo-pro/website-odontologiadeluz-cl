import './App.css'
import { Heart, Smile, User, Clock, MessageCircle, Star, Phone, Mail, MapPin, CheckCircle, Shield, Award, Sparkles, TrendingUp } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

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
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header - Modern & Clean */}
      <motion.header 
        className="breakout-full glass-effect sticky top-0 z-50 border-b border-white/20 shadow-modern" 
        role="banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=80&h=80&fit=crop&crop=center" 
                alt="Logo Odontología de Luz" 
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
              <h1 className="text-2xl font-black text-neutral-800 tracking-tight">
                <span className="text-primary">Odontología</span>
                <span className="text-accent ml-2">de Luz</span>
              </h1>
            </motion.div>
            <motion.nav 
              className="hidden md:flex gap-8" 
              role="navigation" 
              aria-label="Navegación principal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
        className="breakout-full bg-gradient-hero relative overflow-hidden section-spacing" 
        role="banner"
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                    className="block text-gold-core"
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
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Main Image */}
                <motion.div 
                  className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face" alt="Sonrisa genuina de paciente relajada y feliz" className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Floating Trust Card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 glass-effect rounded-2xl shadow-modern p-6"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
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
                      <p className="text-neutral-600 font-medium">Sin Ansiedad</p>
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
        style={{ backgroundColor: '#BBA3F8' }} 
        role="region" 
        aria-labelledby="problema-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <span className="text-primary">Reconocemos las</span>
              <span className="block text-neutral-900">preocupaciones reales</span>
              <span className="block text-gold-dark">de nuestros pacientes</span>
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
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* Fear 1 */}
            <motion.div 
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 transition-all duration-300"
              variants={cardHover}
              initial={{ opacity: 0, x: -30 }}
              whileHover="hover"
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 transition-all duration-300"
              variants={cardHover}
              initial={{ opacity: 0, x: -30 }}
              whileHover="hover"
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 transition-all duration-300"
              variants={cardHover}
              initial={{ opacity: 0, x: -30 }}
              whileHover="hover"
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 transition-all duration-300"
              variants={cardHover}
              initial={{ opacity: 0, x: -30 }}
              whileHover="hover"
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              className="bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 transition-all duration-300"
              variants={cardHover}
              initial={{ opacity: 0, x: -30 }}
              whileHover="hover"
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
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
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face" alt="Dr/a de Odontología de Luz en ambiente cálido y acogedor" className="w-full h-full object-cover" />
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
          <div className="bg-gradient-luxury rounded-3xl p-12">
            <h4 className="text-3xl font-black text-neutral-800 text-center mb-12">La Diferencia Odontología de Luz</h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Difference 1 - Azul Royal */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#4169E1' }}>
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Citas Extendidas</h5>
                <p className="text-neutral-700">
                  Sesiones de 90 minutos para tratamientos completos y detallados, 
                  sin apuros ni interrupciones.
                </p>
              </div>
              
              {/* Difference 2 - Dorado suave */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F4C542' }}>
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Seguimiento Continuo</h5>
                <p className="text-neutral-700">
                  Nuestro equipo te acompaña en todo el proceso, manteniendo un registro 
                  detallado de tu progreso y necesidades.
                </p>
              </div>
              
              {/* Difference 3 - Rosa coral */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FF8FA3' }}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Tecnología Avanzada</h5>
                <p className="text-neutral-700">
                  Equipamiento de última generación para diagnósticos precisos 
                  y tratamientos mínimamente invasivos.
                </p>
              </div>
            </div>
          </div>

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
        className="breakout-full bg-gradient-warm section-spacing relative" 
        role="region" 
        aria-labelledby="testimonios-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-subtle px-6 py-3 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Historias Reales</span>
            </div>
            <h3 id="testimonios-title" className="text-4xl lg:text-5xl font-black text-neutral-800 leading-tight tracking-tight mb-6">
              <span className="text-primary">Así cambió</span>
              <span className="block text-neutral-700">la vida de personas</span>
              <span className="block text-accent">como tú</span>
            </h3>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Estas son historias reales de personas que decidieron dar el paso y transformar su experiencia dental.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
            </div>
          </div>

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
        style={{ backgroundColor: '#9987C6' }} 
        role="region" 
        aria-labelledby="contacto-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gold-light/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/30 px-6 py-3 rounded-full mb-6">
              <Phone className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Da el Primer Paso</span>
            </div>
            <h3 id="contacto-title" className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
              <span className="text-primary">Tu sonrisa perfecta</span>
              <span className="block text-neutral-900">está a solo</span>
              <span className="block text-gold-dark">una llamada</span>
            </h3>
            <p className="text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
              Contáctanos hoy para agendar tu <strong className="text-gold-dark">evaluación gratuita</strong>. 
              Nuestro equipo está listo para acompañarte hacia una <strong className="text-primary">sonrisa radiante y saludable</strong>.
            </p>
          </div>

          {/* Main CTA and Contact Info */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Main CTA */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
                <div className="w-24 h-24 bg-gold-realistic rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-3xl font-black text-neutral-800 mb-6">Agenda tu Cita</h4>
                <p className="text-lg text-neutral-700 mb-8">
                  Contáctanos para una consulta personalizada. Resolveremos tus dudas y 
                  diseñaremos el plan de tratamiento perfecto para ti.
                </p>
                
                <div className="space-y-4 mb-8">
                  <a href="tel:+56223456789" className="block w-full bg-gold-realistic text-white py-6 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2 text-center cursor-pointer">
                    <Phone className="w-6 h-6 inline mr-3" />+56 2 2345 6789
                  </a>
                  <p className="text-sm text-neutral-600">Atención directa de nuestro equipo profesional</p>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <h5 className="font-bold text-neutral-800 mb-4">Otras formas de contacto:</h5>
                  <div className="space-y-3">
                    <a href="mailto:contacto@odontologiadeluz.cl" className="block bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300 cursor-pointer">
                      <Mail className="w-4 h-4 inline mr-2" />contacto@odontologiadeluz.cl
                    </a>
                    <a href="https://wa.me/56223456789" className="block bg-secondary text-white py-3 px-6 rounded-xl font-bold hover:bg-secondary-dark transition-all duration-300 cursor-pointer">
                      <MessageCircle className="w-4 h-4 inline mr-2" />WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Garantía de Calidad */}
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50">
                <h5 className="text-lg font-bold text-neutral-900 mb-4">Garantía de Calidad</h5>
                <p className="text-neutral-800 mb-4">Todos nuestros tratamientos están respaldados por nuestra garantía de satisfacción y seguimiento continuo.</p>
                <div className="flex items-center gap-3 text-neutral-800">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Atención profesional garantizada</span>
                </div>
              </div>
            </div>
            
            {/* Right - Location & Hours */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-neutral-900 mb-1">Ven a Conocerme</h5>
                    <p className="text-neutral-800">Ambiente cálido y acogedor</p>
                  </div>
                </div>
                <p className="text-neutral-800 text-lg">Av. Providencia 1234<br/>Providencia, Santiago</p>
                <div className="mt-4 p-4 bg-white/20 rounded-xl">
                  <p className="text-sm text-neutral-800">Ambiente especialmente diseñado para relajarte y sentirte cómodo/a desde que entras.</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Horarios de Atención</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-neutral-700">Lunes - Viernes</span>
                    <span className="font-black text-primary text-lg">9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-neutral-700">Sábados</span>
                    <span className="font-black text-accent text-lg">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-neutral-700">Domingos</span>
                    <span className="text-gray-500 font-medium">Cerrado</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent-subtle rounded-xl text-center">
                  <p className="text-gold-dark font-bold mb-1">
                    <Clock className="w-4 h-4 inline mr-1" />Citas de 90 minutos mínimo
                  </p>
                  <p className="text-sm text-neutral-700">Sin prisa, sin interrupciones</p>
                </div>
              </div>
              
              {/* Final Social Proof */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50">
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b353?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                </div>
                <p className="text-neutral-900 font-bold mb-1">"Mejor dentista de Santiago"</p>
                <p className="text-neutral-800 text-sm">- Dicen mis pacientes <Heart className="w-4 h-4 inline text-primary" /></p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="breakout-full bg-primary text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h5 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white">Odontología</span>
              <span className="text-accent ml-2">de Luz</span>
            </h5>
            <p className="text-primary-light text-xl mb-6 max-w-2xl mx-auto">Cuidando tu sonrisa con amor y profesionalismo</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#servicios" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2 cursor-pointer" aria-label="Ir a servicios">Servicios</a>
              <a href="#equipo" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2 cursor-pointer" aria-label="Conocer equipo">Equipo</a>
              <a href="#contacto" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2 cursor-pointer" aria-label="Información de contacto">Contacto</a>
            </div>
            <div className="border-t border-primary-light pt-6">
              <p className="text-primary-light text-sm">© {new Date().getFullYear()} Odontología de Luz. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App
