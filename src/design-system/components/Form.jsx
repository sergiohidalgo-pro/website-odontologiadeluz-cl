// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useResponsiveDesign } from '../../hooks/useResponsiveDesign'
import { useFocusManagement } from '../../hooks/useFocusManagement'

/**
 * Comprehensive Form Component System
 * WCAG 2.2 AAA compliant with advanced validation
 */

// Input Component
export const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  disabled = false,
  size = 'md',
  variant = 'default',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  id,
  ariaLabel,
  ariaDescribedBy,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const { getTouchTarget } = useResponsiveDesign()
  const { getUniqueId } = useFocusManagement()
  
  const inputId = id || getUniqueId('input')
  const errorId = error ? `${inputId}-error` : undefined
  const helperTextId = helperText ? `${inputId}-helper` : undefined
  
  // Size configurations
  const sizes = {
    sm: {
      input: 'px-3 py-2 text-sm',
      label: 'text-sm',
      icon: 'w-4 h-4',
      minHeight: 'min-h-[36px]'
    },
    md: {
      input: 'px-4 py-3 text-base',
      label: 'text-base',
      icon: 'w-5 h-5',
      minHeight: 'min-h-[44px]'
    },
    lg: {
      input: 'px-5 py-4 text-lg',
      label: 'text-lg',
      icon: 'w-6 h-6',
      minHeight: 'min-h-[52px]'
    }
  }
  
  // Variant styles
  const variants = {
    default: {
      base: 'bg-white border-2 border-neutral-300',
      focus: 'focus:border-primary-500 focus:ring-primary-500',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      disabled: 'disabled:bg-neutral-100 disabled:border-neutral-200'
    },
    filled: {
      base: 'bg-neutral-100 border-2 border-transparent',
      focus: 'focus:bg-white focus:border-primary-500 focus:ring-primary-500',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      disabled: 'disabled:bg-neutral-50'
    },
    outline: {
      base: 'bg-transparent border-2 border-neutral-400',
      focus: 'focus:border-primary-500 focus:ring-primary-500',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      disabled: 'disabled:border-neutral-200'
    }
  }
  
  const currentSize = sizes[size] || sizes.md
  const currentVariant = variants[variant] || variants.default
  
  // Base input classes
  const inputClasses = [
    'w-full rounded-xl transition-all duration-200',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'font-medium placeholder:text-neutral-500',
    currentSize.input,
    currentSize.minHeight,
    getTouchTarget(),
    error ? currentVariant.error : currentVariant.base,
    currentVariant.focus,
    currentVariant.disabled,
    LeftIcon ? 'pl-12' : '',
    RightIcon ? 'pr-12' : '',
    className
  ].filter(Boolean).join(' ')
  
  // Label classes
  const labelClasses = [
    'block font-semibold mb-2',
    currentSize.label,
    error ? 'text-red-700' : 'text-neutral-700',
    disabled ? 'opacity-60' : ''
  ].filter(Boolean).join(' ')
  
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="campo requerido">*</span>}
        </label>
      )}
      
      <div className="relative">
        {LeftIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <LeftIcon className={`${currentSize.icon} text-neutral-500`} aria-hidden="true" />
          </div>
        )}
        
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputClasses}
          aria-label={ariaLabel}
          aria-describedby={[errorId, helperTextId, ariaDescribedBy].filter(Boolean).join(' ') || undefined}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        
        {RightIcon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <RightIcon className={`${currentSize.icon} text-neutral-500`} aria-hidden="true" />
          </div>
        )}
        
        {/* Focus ring enhancement */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary-500 pointer-events-none"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </div>
      
      {error && (
        <motion.p
          id={errorId}
          className="mt-2 text-sm text-red-600 font-medium"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          role="alert"
          aria-live="polite"
        >
          {error}
        </motion.p>
      )}
      
      {helperText && !error && (
        <p id={helperTextId} className="mt-2 text-sm text-neutral-600">
          {helperText}
        </p>
      )}
    </motion.div>
  )
}

// Textarea Component
export const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  disabled = false,
  rows = 4,
  resize = 'vertical',
  className = '',
  id,
  ariaLabel,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const { getTouchTarget } = useResponsiveDesign()
  const { getUniqueId } = useFocusManagement()
  
  const textareaId = id || getUniqueId('textarea')
  const errorId = error ? `${textareaId}-error` : undefined
  const helperTextId = helperText ? `${textareaId}-helper` : undefined
  
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  }
  
  const textareaClasses = [
    'w-full px-4 py-3 rounded-xl border-2 border-neutral-300',
    'bg-white text-base font-medium placeholder:text-neutral-500',
    'focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500 focus:ring-offset-2',
    'transition-all duration-200',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-neutral-100',
    getTouchTarget(),
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    resizeClasses[resize] || resizeClasses.vertical,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label htmlFor={textareaId} className="block font-semibold text-neutral-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="campo requerido">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          id={textareaId}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={textareaClasses}
          aria-label={ariaLabel}
          aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        
        {/* Focus enhancement */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary-500 pointer-events-none"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </div>
      
      {error && (
        <motion.p
          id={errorId}
          className="mt-2 text-sm text-red-600 font-medium"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          role="alert"
          aria-live="polite"
        >
          {error}
        </motion.p>
      )}
      
      {helperText && !error && (
        <p id={helperTextId} className="mt-2 text-sm text-neutral-600">
          {helperText}
        </p>
      )}
    </motion.div>
  )
}

// Select Component
export const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Selecciona una opción',
  error,
  helperText,
  required = false,
  disabled = false,
  size = 'md',
  className = '',
  id,
  ariaLabel,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { getTouchTarget } = useResponsiveDesign()
  const { getUniqueId } = useFocusManagement()
  
  const selectId = id || getUniqueId('select')
  const errorId = error ? `${selectId}-error` : undefined
  const helperTextId = helperText ? `${selectId}-helper` : undefined
  
  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[36px]',
    md: 'px-4 py-3 text-base min-h-[44px]',
    lg: 'px-5 py-4 text-lg min-h-[52px]'
  }
  
  const selectClasses = [
    'w-full rounded-xl border-2 border-neutral-300 bg-white',
    'font-medium text-neutral-900',
    'focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500 focus:ring-offset-2',
    'transition-all duration-200 cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-neutral-100',
    getTouchTarget(),
    sizes[size] || sizes.md,
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label htmlFor={selectId} className="block font-semibold text-neutral-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="campo requerido">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={selectClasses}
          aria-label={ariaLabel}
          aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
          aria-invalid={error ? 'true' : 'false'}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <motion.svg
            className="w-5 h-5 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </div>
      
      {error && (
        <motion.p
          id={errorId}
          className="mt-2 text-sm text-red-600 font-medium"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          role="alert"
          aria-live="polite"
        >
          {error}
        </motion.p>
      )}
      
      {helperText && !error && (
        <p id={helperTextId} className="mt-2 text-sm text-neutral-600">
          {helperText}
        </p>
      )}
    </motion.div>
  )
}

// Checkbox Component
export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  size = 'md',
  color = 'primary',
  className = '',
  id,
  ariaLabel,
  ...props
}) => {
  const { getTouchTarget } = useResponsiveDesign()
  const { getUniqueId } = useFocusManagement()
  
  const checkboxId = id || getUniqueId('checkbox')
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  const colors = {
    primary: 'text-primary-500 focus:ring-primary-500',
    secondary: 'text-secondary-400 focus:ring-secondary-400',
    gold: 'text-gold-400 focus:ring-gold-400'
  }
  
  const checkboxClasses = [
    'rounded border-2 border-neutral-300',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    'transition-all duration-200 cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-60',
    getTouchTarget(),
    sizes[size] || sizes.md,
    colors[color] || colors.primary,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={checkboxClasses}
        aria-label={ariaLabel}
        {...props}
      />
      
      {label && (
        <label 
          htmlFor={checkboxId} 
          className={`ml-3 font-medium cursor-pointer ${disabled ? 'opacity-60' : 'text-neutral-700'}`}
        >
          {label}
        </label>
      )}
    </motion.div>
  )
}

// Radio Component
export const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  size = 'md',
  color = 'primary',
  className = '',
  id,
  ariaLabel,
  ...props
}) => {
  const { getTouchTarget } = useResponsiveDesign()
  const { getUniqueId } = useFocusManagement()
  
  const radioId = id || getUniqueId('radio')
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  const colors = {
    primary: 'text-primary-500 focus:ring-primary-500',
    secondary: 'text-secondary-400 focus:ring-secondary-400',
    gold: 'text-gold-400 focus:ring-gold-400'
  }
  
  const radioClasses = [
    'border-2 border-neutral-300',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    'transition-all duration-200 cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-60',
    getTouchTarget(),
    sizes[size] || sizes.md,
    colors[color] || colors.primary,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={radioClasses}
        aria-label={ariaLabel}
        {...props}
      />
      
      {label && (
        <label 
          htmlFor={radioId} 
          className={`ml-3 font-medium cursor-pointer ${disabled ? 'opacity-60' : 'text-neutral-700'}`}
        >
          {label}
        </label>
      )}
    </motion.div>
  )
}

// Radio Group Component
export const RadioGroup = ({
  label,
  options = [],
  value,
  onChange,
  name,
  error,
  helperText,
  required = false,
  disabled = false,
  orientation = 'vertical',
  className = '',
  ...props
}) => {
  const { getUniqueId } = useFocusManagement()
  
  const groupId = getUniqueId('radiogroup')
  const errorId = error ? `${groupId}-error` : undefined
  const helperTextId = helperText ? `${groupId}-helper` : undefined
  
  const orientationClasses = {
    vertical: 'flex-col space-y-3',
    horizontal: 'flex-row space-x-6'
  }
  
  return (
    <motion.fieldset 
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
      {...props}
    >
      {label && (
        <legend className="block font-semibold text-neutral-700 mb-4">
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="campo requerido">*</span>}
        </legend>
      )}
      
      <div className={`flex ${orientationClasses[orientation] || orientationClasses.vertical}`}>
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>
      
      {error && (
        <motion.p
          id={errorId}
          className="mt-3 text-sm text-red-600 font-medium"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          role="alert"
          aria-live="polite"
        >
          {error}
        </motion.p>
      )}
      
      {helperText && !error && (
        <p id={helperTextId} className="mt-3 text-sm text-neutral-600">
          {helperText}
        </p>
      )}
    </motion.fieldset>
  )
}