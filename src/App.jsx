import './App.css'
import { Heart, Smile, User, Clock, MessageCircle, Star, Phone, Mail, MapPin, CheckCircle, Shield, Award, Sparkles, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header - Modern & Clean */}
      <header className="breakout-full glass-effect sticky top-0 z-50 border-b border-white/20 shadow-modern" role="banner">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-neutral-800 tracking-tight">
                <span className="text-primary">Odontología</span>
                <span className="text-accent ml-2">de Luz</span>
              </h1>
            </div>
            <nav className="hidden md:flex gap-8" role="navigation" aria-label="Navegación principal">
              <a href="#problema" className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group">
                ¿Por qué sufres?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#solucion" className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group">
                Mi Enfoque
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacto" className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group">
                Reserva tu Cita
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Problem-Focused */}
      <motion.section 
        className="breakout-full bg-gradient-to-br from-primary-subtle via-white to-gold-subtle-bg relative overflow-hidden section-spacing" 
        role="banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Sacred Geometry Background */}
        <div className="absolute top-20 left-10 golden-circle"></div>
        <div className="absolute bottom-20 right-10 fibonacci-spiral"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sacred-hexagon"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-secondary-subtle px-6 py-3 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-secondary mr-2" />
                  <span className="text-secondary-dark font-bold text-sm uppercase tracking-wider">Atención con el Corazón</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-neutral-800 leading-tight tracking-tight mb-6">
                  <span className="text-primary">¿Sientes que tu</span>
                  <span className="block text-gold-core">sonrisa no refleja</span>
                  <span className="block text-pink-primary">quien realmente eres?</span>
                </h2>
              </div>
              
              <p className="text-xl text-neutral-700 leading-relaxed max-w-2xl">
                En Odontología de Luz entendemos que cada sonrisa cuenta una historia única. Ofrecemos 
                <strong className="text-primary">atención dental integral</strong> con la calidez humana que mereces, 
                donde tu <strong className="text-gold-core">bienestar emocional</strong> es tan importante como tu salud bucal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2">
                  Reserva tu Evaluación Gratuita
                </button>
                <button className="group bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2">
                  Conoce Nuestro Enfoque
                </button>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                {/* Main Image */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face" alt="Sonrisa genuina de paciente relajada y feliz" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating Trust Card */}
                <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl shadow-modern p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-realistic rounded-2xl flex items-center justify-center">
                      <Smile className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-neutral-800">100%</p>
                      <p className="text-neutral-600 font-medium">Sin Ansiedad</p>
                    </div>
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Problem Identification Section */}
      <motion.section 
        id="problema" 
        className="breakout-full bg-neutral-800 text-white section-spacing relative overflow-hidden" 
        role="region" 
        aria-labelledby="problema-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary/20 px-6 py-3 rounded-full mb-6">
              <User className="w-4 h-4 text-secondary mr-2" />
              <span className="text-secondary-light font-bold text-sm uppercase tracking-wider">Tu Realidad Actual</span>
            </div>
            <h3 id="problema-title" className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              <span className="text-primary">Reconocemos las</span>
              <span className="block text-gray-300">preocupaciones reales</span>
              <span className="block text-gold-core">de nuestros pacientes</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Sabemos que visitar al dentista puede generar ansiedad. Por eso hemos diseñado un enfoque 
              que prioriza tu comodidad y tranquilidad en cada paso del tratamiento.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Fear 1 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Ansiedad Dental</h4>
              <p className="text-gray-300 leading-relaxed">
                Ofrecemos técnicas de relajación y un ambiente cálido donde te sentirás cómodo/a 
                y seguro/a durante todo el tratamiento.
              </p>
            </div>

            {/* Fear 2 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Transparencia en Costos</h4>
              <p className="text-gray-300 leading-relaxed">
                Brindamos presupuestos detallados y transparentes desde la primera consulta, 
                sin sorpresas ni costos ocultos.
              </p>
            </div>

            {/* Fear 3 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Smile className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Autoestima y Confianza</h4>
              <p className="text-gray-300 leading-relaxed">
                Te ayudamos a recuperar la seguridad en tu sonrisa con tratamientos 
                estéticos personalizados y resultados naturales.
              </p>
            </div>

            {/* Fear 4 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Manejo del Dolor</h4>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos técnicas avanzadas de anestesia y control del dolor 
                para garantizar tratamientos cómodos y sin molestias.
              </p>
            </div>

            {/* Fear 5 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Atención Personalizada</h4>
              <p className="text-gray-300 leading-relaxed">
                Cada paciente recibe atención individualizada, escuchamos tus preocupaciones 
                y adaptamos el tratamiento a tus necesidades específicas.
              </p>
            </div>

            {/* Fear 6 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Tiempo y Dedicación</h4>
              <p className="text-gray-300 leading-relaxed">
                Asignamos el tiempo necesario para cada consulta, explicamos 
                detalladamente cada procedimiento y resolvemos todas tus dudas.
              </p>
            </div>
          </div>

          {/* Transition */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Tu tranquilidad es nuestra prioridad</h4>
              <p className="text-xl text-gray-300 mb-8">
                Descubre cómo la atención dental puede ser una experiencia positiva y reconfortante.
              </p>
              <button className="bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2">
                Conoce Nuestro Enfoque
              </button>
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
              con el <strong className="text-pink-primary">trato humano y cálido</strong> que cada persona merece.
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
          <div className="bg-gray-50 rounded-3xl p-12">
            <h4 className="text-3xl font-black text-neutral-800 text-center mb-12">La Diferencia Odontología de Luz</h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Difference 1 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-gold-realistic rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Citas Extendidas</h5>
                <p className="text-neutral-700">
                  Sesiones de 90 minutos para tratamientos completos y detallados, 
                  sin apuros ni interrupciones.
                </p>
              </div>
              
              {/* Difference 2 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Seguimiento Continuo</h5>
                <p className="text-neutral-700">
                  Nuestro equipo te acompaña en todo el proceso, manteniendo un registro 
                  detallado de tu progreso y necesidades.
                </p>
              </div>
              
              {/* Difference 3 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
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
            <button className="bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2">
              Reservar Evaluación Gratuita
            </button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials / Social Proof Section */}
      <motion.section 
        className="breakout-full bg-gray-50 section-spacing relative" 
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
              <span className="text-secondary">Así cambió</span>
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
              <div className="text-3xl font-black text-secondary mb-2">95%</div>
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
        className="breakout-full bg-neutral-800 relative overflow-hidden section-spacing" 
        role="region" 
        aria-labelledby="contacto-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gold-core/20 px-6 py-3 rounded-full mb-6">
              <Phone className="w-4 h-4 text-gold-light mr-2" />
              <span className="text-gold-light font-bold text-sm uppercase tracking-wider">Da el Primer Paso</span>
            </div>
            <h3 id="contacto-title" className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              <span className="text-primary">Tu sonrisa perfecta</span>
              <span className="block text-white">está a solo</span>
              <span className="block text-gold-core">una llamada</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contáctanos hoy para agendar tu <strong className="text-gold-core">evaluación gratuita</strong>. 
              Nuestro equipo está listo para acompañarte hacia una <strong className="text-pink-primary">sonrisa radiante y saludable</strong>.
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
                  <a href="tel:+56223456789" className="block w-full bg-gold-realistic text-white py-6 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gold-core focus:ring-offset-2 text-center">
                    <Phone className="w-6 h-6 inline mr-3" />+56 2 2345 6789
                  </a>
                  <p className="text-sm text-neutral-600">Atención directa de nuestro equipo profesional</p>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <h5 className="font-bold text-neutral-800 mb-4">Otras formas de contacto:</h5>
                  <div className="space-y-3">
                    <a href="mailto:contacto@odontologiadeluz.cl" className="block bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300">
                      <Mail className="w-4 h-4 inline mr-2" />contacto@odontologiadeluz.cl
                    </a>
                    <a href="https://wa.me/56223456789" className="block bg-secondary text-white py-3 px-6 rounded-xl font-bold hover:bg-secondary-dark transition-all duration-300">
                      <MessageCircle className="w-4 h-4 inline mr-2" />WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Urgency + Guarantees */}
              <div className="glass-dark rounded-2xl p-6">
                <h5 className="text-lg font-bold text-white mb-4">Emergencias Dentales</h5>
                <p className="text-gray-300 mb-4">Para urgencias dentales, contáctanos inmediatamente. Tenemos atención de emergencia disponible.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+56223456789" className="bg-red-600 text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-red-700 transition-all duration-300">
                    Emergencia 24/7
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right - Location & Hours */}
            <div className="space-y-8">
              {/* Location */}
              <div className="glass-dark p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-1">Ven a Conocerme</h5>
                    <p className="text-gray-300">Ambiente cálido y acogedor</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg">Av. Providencia 1234<br/>Providencia, Santiago</p>
                <div className="mt-4 p-4 bg-white/10 rounded-xl">
                  <p className="text-sm text-gray-300">Ambiente especialmente diseñado para relajarte y sentirte cómodo/a desde que entras.</p>
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
                    <span className="text-gray-500 font-medium">Solo Emergencias</span>
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
              <div className="glass-dark rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b353?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                </div>
                <p className="text-white font-bold mb-1">"Mejor dentista de Santiago"</p>
                <p className="text-gray-300 text-sm">- Dicen mis pacientes <Heart className="w-4 h-4 inline text-pink-primary" /></p>
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
              <a href="#servicios" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2" aria-label="Ir a servicios">Servicios</a>
              <a href="#equipo" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2" aria-label="Conocer equipo">Equipo</a>
              <a href="#contacto" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2" aria-label="Información de contacto">Contacto</a>
            </div>
            <div className="border-t border-primary-light pt-6">
              <p className="text-primary-light text-sm">© 2024 Odontología de Luz. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App
