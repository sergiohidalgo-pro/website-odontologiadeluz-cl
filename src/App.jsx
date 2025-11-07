import './App.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
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
    </motion.div>
  )
}

export default App