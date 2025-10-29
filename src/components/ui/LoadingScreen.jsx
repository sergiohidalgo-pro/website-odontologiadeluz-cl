// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import logo from '../../assets/logo-odontologia-de-luz-100x100.png'

export default function LoadingScreen() {
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
          <svg 
            className="w-24 h-24 absolute top-0 left-0" 
            viewBox="0 0 100 100" 
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
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
        <motion.p 
          className="text-neutral-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Cargando tu sonrisa...
        </motion.p>
      </motion.div>
    </div>
  )
}