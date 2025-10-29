// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  className = ""
}) {
  const handleMouseMove = (e) => {
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
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transition = 'transform 0.2s ease-out'
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <motion.div 
      className={`bg-white/40 rounded-2xl p-8 border border-white/50 hover:border-gold-core/50 ${className}`}
      style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-20px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {Icon && <Icon className="w-8 h-8 text-primary" />}
      </motion.div>
      
      <h4 className="text-xl font-bold text-neutral-900 mb-4">{title}</h4>
      
      <p className="text-neutral-800 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}