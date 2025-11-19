import './App.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { useFocusManagement } from './hooks/useFocusManagement'

// Modular Components (that we know work)
import LoadingScreen from './components/ui/LoadingScreen'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import ProblemsSection from './components/sections/ProblemsSection'
import SolutionSection from './components/sections/SolutionSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

// Lazy Components (temporarily disabled for debugging)
// import { 
//   LazyTestimonialsSection, 
//   LazySolutionSection, 
//   LazyContactSection,
//   LazyWrapper 
// } from './components/lazy/LazySection'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { announceToScreenReader } = useFocusManagement()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      announceToScreenReader('Página de Odontología de Luz cargada completamente', 'polite')
    }, 1000)
    return () => clearTimeout(timer)
  }, [announceToScreenReader])

  // Smooth scroll para enlaces con hash - Funciona en todos los navegadores incluido Chrome macOS
  useEffect(() => {
    const handleHashClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return

      const targetId = link.getAttribute('href')
      if (!targetId || targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    document.addEventListener('click', handleHashClick)
    return () => document.removeEventListener('click', handleHashClick)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Header />
      
      <main id="main-content" tabIndex="-1" role="main" aria-label="Contenido principal de Odontología de Luz">
        <HeroSection />
        <ProblemsSection />
        
        <SolutionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href="https://wa.me/56998116713?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20hora%20para%20una%20evaluaci%C3%B3n%20dental%20completa.%20%C2%BFCu%C3%A1ndo%20tienen%20disponibilidad%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp para agendar cita"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2} />
      </motion.a>
    </motion.div>
  )
}

export default App