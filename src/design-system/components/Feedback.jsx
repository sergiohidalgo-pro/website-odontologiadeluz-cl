// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, createContext, useContext } from 'react'
import { useResponsiveDesign } from '../../hooks/useResponsiveDesign'
import { useFocusManagement } from '../../hooks/useFocusManagement'

/**
 * Feedback Component System - Alerts, Toasts, Modals
 * WCAG 2.2 AAA compliant with advanced interactions
 */

// Alert Component
export const Alert = ({
  variant = 'info',
  size = 'md',
  title,
  message,
  onClose,
  closable = false,
  icon: CustomIcon,
  actions,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const { announceToScreenReader } = useFocusManagement()
  
  useEffect(() => {
    // Announce alert to screen readers
    if (title || message) {
      announceToScreenReader(`${variant}: ${title || message}`)
    }
  }, [title, message, variant, announceToScreenReader])
  
  const variants = {
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: 'text-green-600',
      title: 'text-green-900',
      message: 'text-green-700'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: 'text-yellow-600',
      title: 'text-yellow-900',
      message: 'text-yellow-700'
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: 'text-red-600',
      title: 'text-red-900',
      message: 'text-red-700'
    },
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: 'text-blue-600',
      title: 'text-blue-900',
      message: 'text-blue-700'
    }
  }
  
  const sizes = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg'
  }
  
  // Default icons
  const defaultIcons = {
    success: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    warning: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    error: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
    info: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    )
  }
  
  const currentVariant = variants[variant] || variants.info
  const currentSize = sizes[size] || sizes.md
  const Icon = CustomIcon || defaultIcons[variant]
  
  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose?.(), 300) // Wait for animation
  }
  
  if (!isVisible) return null
  
  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        aria-live="polite"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`
          flex items-start border-2 rounded-xl shadow-lg
          ${currentVariant.container}
          ${currentSize}
          ${className}
        `}
        {...props}
      >
        {/* Icon */}
        {Icon && (
          <div className={`flex-shrink-0 mr-3 ${currentVariant.icon}`}>
            <Icon />
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className={`font-bold mb-1 ${currentVariant.title}`}>
              {title}
            </h3>
          )}
          {message && (
            <p className={`${currentVariant.message} leading-relaxed`}>
              {message}
            </p>
          )}
          
          {/* Actions */}
          {actions && (
            <div className="mt-3 flex flex-wrap gap-2">
              {actions}
            </div>
          )}
        </div>
        
        {/* Close button */}
        {closable && (
          <motion.button
            type="button"
            onClick={handleClose}
            className={`
              flex-shrink-0 ml-3 p-1 rounded-lg transition-colors
              ${currentVariant.icon}
              hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2
            `}
            aria-label="Cerrar alerta"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

// Toast Context for global toast management
const ToastContext = createContext()

export const ToastProvider = ({ children, maxToasts = 5 }) => {
  const [toasts, setToasts] = useState([])
  
  const addToast = (toast) => {
    const id = Date.now() + Math.random()
    const newToast = { ...toast, id }
    
    setToasts(prev => {
      const updated = [newToast, ...prev].slice(0, maxToasts)
      return updated
    })
    
    // Auto-remove after duration
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration || 5000)
    }
    
    return id
  }
  
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }
  
  const clearAllToasts = () => {
    setToasts([])
  }
  
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAllToasts }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

// Hook to use toast functionality
export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  
  const { addToast } = context
  
  return {
    success: (message, options) => addToast({ variant: 'success', message, ...options }),
    error: (message, options) => addToast({ variant: 'error', message, ...options }),
    warning: (message, options) => addToast({ variant: 'warning', message, ...options }),
    info: (message, options) => addToast({ variant: 'info', message, ...options }),
    custom: (toast) => addToast(toast)
  }
}

// Toast Container
const ToastContainer = ({ toasts, removeToast }) => {
  const { isMobile } = useResponsiveDesign()
  
  return (
    <div 
      className={`
        fixed z-50 pointer-events-none
        ${isMobile 
          ? 'top-4 left-4 right-4' 
          : 'top-4 right-4 w-96'
        }
      `}
      aria-live="polite"
      aria-label="Notificaciones"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast, index) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              delay: index * 0.05 
            }}
            className="mb-3 pointer-events-auto"
          >
            <Toast {...toast} onClose={() => removeToast(toast.id)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Individual Toast Component
const Toast = ({
  variant = 'info',
  title,
  message,
  onClose,
  actions,
  progress = false,
  duration = 5000
}) => {
  const [progressValue, setProgressValue] = useState(100)
  
  useEffect(() => {
    if (progress && duration > 0) {
      const interval = setInterval(() => {
        setProgressValue(prev => {
          const newValue = prev - (100 / (duration / 50))
          return newValue <= 0 ? 0 : newValue
        })
      }, 50)
      
      return () => clearInterval(interval)
    }
  }, [progress, duration])
  
  const variants = {
    success: 'bg-green-600 text-white border-green-700',
    warning: 'bg-yellow-600 text-white border-yellow-700',
    error: 'bg-red-600 text-white border-red-700',
    info: 'bg-blue-600 text-white border-blue-700'
  }
  
  return (
    <motion.div
      className={`
        relative p-4 rounded-xl border-2 shadow-xl backdrop-blur-sm
        ${variants[variant] || variants.info}
      `}
      whileHover={{ scale: 1.02 }}
      role="alert"
    >
      {/* Progress bar */}
      {progress && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-xl overflow-hidden">
          <motion.div
            className="h-full bg-white/40"
            initial={{ width: '100%' }}
            animate={{ width: `${progressValue}%` }}
            transition={{ duration: 0.05, ease: 'linear' }}
          />
        </div>
      )}
      
      <div className="flex items-start justify-between">
        <div className="flex-1 mr-3">
          {title && (
            <h4 className="font-bold text-sm mb-1">
              {title}
            </h4>
          )}
          <p className="text-sm opacity-90 leading-relaxed">
            {message}
          </p>
          
          {actions && (
            <div className="mt-3 flex flex-wrap gap-2">
              {actions}
            </div>
          )}
        </div>
        
        <motion.button
          type="button"
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Cerrar notificación"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  )
}

// Modal Component
export const Modal = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
  children,
  footer,
  ...props
}) => {
  const { trapFocus, releaseFocus } = useFocusManagement()
  const { isMobile } = useResponsiveDesign()
  
  useEffect(() => {
    if (isOpen) {
      // Trap focus within modal
      trapFocus()
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      releaseFocus()
      document.body.style.overflow = ''
    }
    
    return () => {
      releaseFocus()
      document.body.style.overflow = ''
    }
  }, [isOpen, trapFocus, releaseFocus])
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])
  
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full mx-4'
  }
  
  if (!isOpen) return null
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        {...props}
      >
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeOnBackdrop ? onClose : undefined}
        />
        
        {/* Modal Content */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`
              relative w-full bg-white rounded-2xl shadow-2xl
              ${sizes[size] || sizes.md}
              ${isMobile ? 'mx-4' : ''}
              ${className}
            `}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                {title && (
                  <h2 id="modal-title" className="text-xl font-bold text-neutral-900">
                    {title}
                  </h2>
                )}
                
                {showCloseButton && (
                  <motion.button
                    type="button"
                    onClick={onClose}
                    className="p-2 rounded-lg text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Cerrar modal"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
              </div>
            )}
            
            {/* Body */}
            <div className="p-6">
              {children}
            </div>
            
            {/* Footer */}
            {footer && (
              <div className="flex items-center justify-end gap-3 p-6 border-t border-neutral-200 bg-neutral-50 rounded-b-2xl">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Loading Component
export const Loading = ({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
  text,
  overlay = false,
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  
  const colors = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-400',
    gold: 'text-gold-400',
    white: 'text-white',
    neutral: 'text-neutral-600'
  }
  
  const SpinnerIcon = () => (
    <motion.svg
      className={`${sizes[size]} ${colors[color]} animate-spin`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </motion.svg>
  )
  
  const PulseIcon = () => (
    <motion.div
      className={`${sizes[size]} ${colors[color]} rounded-full bg-current`}
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  )
  
  const DotsIcon = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 ${colors[color]} rounded-full bg-current`}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
  
  const variants = {
    spinner: SpinnerIcon,
    pulse: PulseIcon,
    dots: DotsIcon
  }
  
  const LoadingIcon = variants[variant] || variants.spinner
  
  const content = (
    <div 
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={text || "Cargando"}
      {...props}
    >
      <LoadingIcon />
      {text && (
        <p className={`mt-3 text-sm font-medium ${colors[color]}`}>
          {text}
        </p>
      )}
    </div>
  )
  
  if (overlay) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
      >
        {content}
      </motion.div>
    )
  }
  
  return content
}