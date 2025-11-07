// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import logo from '../../assets/logo-odontologia-de-luz-100x100.png'

export default function Header() {
  return (
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
          
          {/* Desktop Navigation */}
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
          
          {/* Social Media Links */}
          <motion.div 
            className="hidden md:flex items-center gap-4" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="https://www.instagram.com/odontologiadeluz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-700 hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg px-3 py-2 group font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Seguir en Instagram @odontologiadeluz"
            >
              <Instagram className="w-5 h-5 group-hover:text-accent transition-colors duration-300" />
              <span className="text-sm group-hover:text-accent transition-colors duration-300">@odontologiadeluz</span>
            </motion.a>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Abrir menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}