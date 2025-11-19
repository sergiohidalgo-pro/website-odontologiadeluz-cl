// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Smile, Instagram } from 'lucide-react'
import imagenFran from '../../assets/odontologa-francisca-montecino-6.png'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const { fadeInLeft, staggerContainer } = useOptimizedAnimations()

  // Fallback animations for compatibility
  const fadeInFromLeft = fadeInLeft

  return (
    <motion.section 
      className="breakout-full relative overflow-hidden section-spacing"
      style={{ 
        background: 'linear-gradient(135deg, #E8EFFE 0%, #FFFBF0 50%, #FFF0F3 100%)', 
        paddingTop: 30,  
        y: textY 
      }} 
      role="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
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
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Atención con el Corazón
                </span>
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
                >
                  ¿Sientes que tu
                </motion.span>
                <motion.span 
                  style={{ color: '#ffb8d0' }}
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  sonrisa no refleja
                </motion.span>
                <motion.span 
                  className="block text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  quien realmente eres?
                </motion.span>
              </motion.h2>
            </motion.div>
            
            <motion.p
              className="text-xl text-neutral-700 leading-relaxed max-w-2xl"
              variants={fadeInFromLeft}
            >
              La <strong className="text-primary">Dra. Cirujano Dentista Francisca Montecino G.</strong>, diplomada en <strong className="text-gold-core">atención de pacientes en situación de discapacidad</strong>, ofrece <strong className="text-primary">odontología inclusiva</strong> especializada en <strong className="text-gold-core">niños neurodivergentes, TEA, TDAH, TDA y Síndrome de Down</strong>. También atendemos <strong className="text-primary">adultos, adultos mayores y familias</strong> en Talagante y Santiago.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInFromLeft}
            >
              <motion.a
                href="#contacto"
                className="group bg-gold-realistic text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer inline-flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                aria-label="Reservar evaluación dental"
              >
                Reserva tu Evaluación
              </motion.a>

              <motion.a
                href="#solucion"
                className="group bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                aria-label="Conocer nuestro enfoque de atención dental"
              >
                Conoce Nuestro Enfoque
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image */}
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
                <img 
                  src={imagenFran} 
                  alt="Dra. Francisca Montecino G. especialista odontología inclusiva niños neurodivergentes TEA TDAH TDA Síndrome Down Talagante Santiago" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
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
              />
            </div>
          </motion.div>
        </div>
        
        {/* Instagram Call-to-Action */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="https://www.instagram.com/odontologiadeluz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-all duration-300 font-medium text-lg bg-white/80 px-6 py-3 rounded-full shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30 hover:scale-105 group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" style={{ color: '#ffb8d0' }} />
            <span style={{ color: '#ffb8d0' }}>Síguenos en <span className="font-black text-primary">@odontologiadeluz</span></span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}