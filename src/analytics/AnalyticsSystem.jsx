// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useEffect, useState } from 'react'

/**
 * Comprehensive Analytics System
 * Tracking, heatmaps, A/B testing, and conversion optimization
 */

// Analytics Context
const AnalyticsContext = createContext()

// Event Types for Tracking
export const EVENT_TYPES = {
  // Conversion Events
  CONSULTATION_REQUESTED: 'consultation_requested',
  FORM_STARTED: 'form_started',
  FORM_COMPLETED: 'form_completed',
  PHONE_CLICKED: 'phone_clicked',
  WHATSAPP_CLICKED: 'whatsapp_clicked',
  
  // Engagement Events
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  VIDEO_WATCHED: 'video_watched',
  TESTIMONIAL_VIEWED: 'testimonial_viewed',
  FAQ_OPENED: 'faq_opened',
  
  // User Journey Events
  PAGE_VIEW: 'page_view',
  SECTION_VIEWED: 'section_viewed',
  CTA_CLICKED: 'cta_clicked',
  NAVIGATION_CLICKED: 'navigation_clicked',
  
  // Technical Events
  ERROR_OCCURRED: 'error_occurred',
  PERFORMANCE_METRIC: 'performance_metric',
  ACCESSIBILITY_USED: 'accessibility_used'
}

// Analytics Provider Component
export const AnalyticsProvider = ({ children }) => {
  const [sessionId] = useState(() => generateSessionId())
  const [userId] = useState(() => getUserId())
  const [isInitialized, setIsInitialized] = useState(false)
  
  useEffect(() => {
    initializeAnalytics()
  }, [])
  
  // Initialize all analytics services
  const initializeAnalytics = async () => {
    try {
      // Initialize Google Analytics 4
      await initializeGA4()
      
      // Initialize Hotjar for heatmaps
      await initializeHotjar()
      
      // Initialize custom tracking
      await initializeCustomTracking()
      
      // Track initial page load
      trackEvent(EVENT_TYPES.PAGE_VIEW, {
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer || 'direct'
      })
      
      setIsInitialized(true)
    } catch (error) {
      console.error('Analytics initialization failed:', error)
    }
  }
  
  // Track events with multiple providers
  const trackEvent = (eventType, properties = {}) => {
    const eventData = {
      event_type: eventType,
      session_id: sessionId,
      user_id: userId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...properties
    }
    
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', eventType, {
        custom_parameter_1: JSON.stringify(properties),
        value: properties.value || 1
      })
    }
    
    // Send to custom analytics endpoint
    sendToCustomAnalytics(eventData)
    
    // Send to local storage for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventData)
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]')
      events.push(eventData)
      localStorage.setItem('analytics_events', JSON.stringify(events.slice(-100))) // Keep last 100 events
    }
  }
  
  // Track conversions with detailed funnel data
  const trackConversion = (conversionType, properties = {}) => {
    const conversionData = {
      conversion_type: conversionType,
      funnel_step: properties.funnel_step || 'unknown',
      conversion_value: properties.value || 0,
      user_journey: getUserJourney(),
      ...properties
    }
    
    trackEvent(EVENT_TYPES.CONSULTATION_REQUESTED, conversionData)
    
    // Send conversion to Google Analytics with enhanced ecommerce
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: `conv_${Date.now()}`,
        value: conversionData.conversion_value,
        currency: 'CLP',
        items: [{
          item_id: conversionType,
          item_name: conversionType,
          category: 'dental_service',
          quantity: 1,
          price: conversionData.conversion_value
        }]
      })
    }
  }
  
  // A/B Testing functionality
  const getExperimentVariant = (experimentId) => {
    const storedVariant = localStorage.getItem(`experiment_${experimentId}`)
    
    if (storedVariant) {
      return storedVariant
    }
    
    // Simple random assignment (50/50 split)
    const variant = Math.random() < 0.5 ? 'A' : 'B'
    localStorage.setItem(`experiment_${experimentId}`, variant)
    
    // Track experiment participation
    trackEvent('experiment_assigned', {
      experiment_id: experimentId,
      variant: variant
    })
    
    return variant
  }
  
  // Enhanced user journey tracking
  const getUserJourney = () => {
    const journey = JSON.parse(sessionStorage.getItem('user_journey') || '[]')
    return journey
  }
  
  const addToUserJourney = (action, properties = {}) => {
    const journey = getUserJourney()
    const journeyStep = {
      action,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...properties
    }
    
    journey.push(journeyStep)
    sessionStorage.setItem('user_journey', JSON.stringify(journey.slice(-50))) // Keep last 50 steps
  }
  
  const value = {
    trackEvent,
    trackConversion,
    getExperimentVariant,
    addToUserJourney,
    getUserJourney,
    isInitialized,
    sessionId,
    userId
  }
  
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

// Hook to use analytics
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider')
  }
  return context
}

// Scroll Depth Tracking Hook
export const useScrollTracking = () => {
  const { trackEvent } = useAnalytics()
  
  useEffect(() => {
    let maxScrollDepth = 0
    const trackingIntervals = [25, 50, 75, 90, 100]
    const trackedDepths = new Set()
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollDepth = Math.round((scrollTop / docHeight) * 100)
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        
        // Track specific depth milestones
        trackingIntervals.forEach(interval => {
          if (scrollDepth >= interval && !trackedDepths.has(interval)) {
            trackedDepths.add(interval)
            trackEvent(EVENT_TYPES.SCROLL_DEPTH, {
              depth_percentage: interval,
              depth_pixels: scrollTop,
              page_height: docHeight
            })
          }
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [trackEvent])
}

// Form Analytics Hook
export const useFormAnalytics = (formId) => {
  const { trackEvent, addToUserJourney } = useAnalytics()
  
  const trackFormStart = (formData = {}) => {
    trackEvent(EVENT_TYPES.FORM_STARTED, {
      form_id: formId,
      ...formData
    })
    addToUserJourney('form_started', { form_id: formId })
  }
  
  const trackFormStep = (step, stepData = {}) => {
    trackEvent('form_step_completed', {
      form_id: formId,
      step: step,
      ...stepData
    })
    addToUserJourney('form_step', { form_id: formId, step })
  }
  
  const trackFormError = (error, fieldName = '') => {
    trackEvent('form_error', {
      form_id: formId,
      error_message: error,
      field_name: fieldName
    })
  }
  
  const trackFormCompletion = (formData = {}) => {
    trackEvent(EVENT_TYPES.FORM_COMPLETED, {
      form_id: formId,
      completion_time: formData.completion_time,
      ...formData
    })
    addToUserJourney('form_completed', { form_id: formId })
  }
  
  return {
    trackFormStart,
    trackFormStep,
    trackFormError,
    trackFormCompletion
  }
}

// Performance Monitoring Hook
export const usePerformanceTracking = () => {
  const { trackEvent } = useAnalytics()
  
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      if ('web-vital' in window) {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          
          trackEvent(EVENT_TYPES.PERFORMANCE_METRIC, {
            metric: 'LCP',
            value: lastEntry.startTime,
            rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
          })
        }).observe({ entryTypes: ['largest-contentful-paint'] })
      }
      
      // Track CLS (Cumulative Layout Shift)
      let clsScore = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsScore += entry.value
          }
        }
        
        trackEvent(EVENT_TYPES.PERFORMANCE_METRIC, {
          metric: 'CLS',
          value: clsScore,
          rating: clsScore < 0.1 ? 'good' : clsScore < 0.25 ? 'needs_improvement' : 'poor'
        })
      }).observe({ entryTypes: ['layout-shift'] })
      
      // Track FID (First Input Delay)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const firstInput = entries[0]
        
        trackEvent(EVENT_TYPES.PERFORMANCE_METRIC, {
          metric: 'FID',
          value: firstInput.processingStart - firstInput.startTime,
          rating: (firstInput.processingStart - firstInput.startTime) < 100 ? 'good' : 
                  (firstInput.processingStart - firstInput.startTime) < 300 ? 'needs_improvement' : 'poor'
        })
      }).observe({ entryTypes: ['first-input'] })
    }
    
    // Run after page load
    if (document.readyState === 'complete') {
      trackWebVitals()
    } else {
      window.addEventListener('load', trackWebVitals)
    }
  }, [trackEvent])
}

// CTA Tracking Hook
export const useCTATracking = () => {
  const { trackEvent, trackConversion, addToUserJourney } = useAnalytics()
  
  const trackCTAClick = (ctaId, properties = {}) => {
    const ctaData = {
      cta_id: ctaId,
      cta_text: properties.text || '',
      cta_position: properties.position || 'unknown',
      page_section: properties.section || 'unknown',
      ...properties
    }
    
    trackEvent(EVENT_TYPES.CTA_CLICKED, ctaData)
    addToUserJourney('cta_clicked', ctaData)
    
    // If this is a conversion CTA, track as conversion
    if (properties.is_conversion) {
      trackConversion('cta_conversion', ctaData)
    }
  }
  
  return { trackCTAClick }
}

// Heatmap Integration
export const useHeatmapTracking = () => {
  const { trackEvent } = useAnalytics()
  
  useEffect(() => {
    // Track clicks for heatmap data
    const trackClick = (event) => {
      const element = event.target
      const rect = element.getBoundingClientRect()
      
      trackEvent('click_heatmap', {
        element_tag: element.tagName,
        element_class: element.className,
        element_id: element.id,
        click_x: event.clientX,
        click_y: event.clientY,
        element_x: rect.left,
        element_y: rect.top,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight
      })
    }
    
    document.addEventListener('click', trackClick)
    return () => document.removeEventListener('click', trackClick)
  }, [trackEvent])
}

// Helper Functions
const generateSessionId = () => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

const getUserId = () => {
  let userId = localStorage.getItem('user_id')
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('user_id', userId)
  }
  return userId
}

const initializeGA4 = async () => {
  // Google Analytics 4 initialization
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    document.head.appendChild(script)
    
    window.dataLayer = window.dataLayer || []
    window.gtag = function() { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href
    })
  }
}

const initializeHotjar = async () => {
  // Hotjar initialization for heatmaps and recordings
  if (typeof window !== 'undefined' && !window.hj) {
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}
      h._hjSettings={hjid:3000000,hjsv:6} // Replace with actual Hotjar ID
      a=o.getElementsByTagName('head')[0]
      r=o.createElement('script');r.async=1
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv
      a.appendChild(r)
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
  }
}

const initializeCustomTracking = async () => {
  // Custom analytics endpoint setup
  console.log('Custom tracking initialized')
}

const sendToCustomAnalytics = async (eventData) => {
  // Send to your custom analytics endpoint
  try {
    if (process.env.NODE_ENV === 'production') {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
      })
    }
  } catch (error) {
    console.error('Failed to send custom analytics:', error)
  }
}

// A/B Testing Component
export const ABTestWrapper = ({ 
  experimentId, 
  variantA, 
  variantB, 
  children 
}) => {
  const { getExperimentVariant } = useAnalytics()
  const variant = getExperimentVariant(experimentId)
  
  if (variant === 'A') {
    return variantA || children
  } else {
    return variantB || children
  }
}

// Analytics Dashboard Component (for development)
export const AnalyticsDashboard = () => {
  const [events, setEvents] = useState([])
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const storedEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]')
      setEvents(storedEvents.reverse()) // Show newest first
    }
  }, [])
  
  if (process.env.NODE_ENV !== 'development') {
    return null
  }
  
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      width: 400,
      maxHeight: 500,
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      fontSize: 12,
      overflow: 'auto',
      zIndex: 9999,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: 14 }}>Analytics Events (Dev)</h3>
      <div style={{ maxHeight: 400, overflow: 'auto' }}>
        {events.map((event, index) => (
          <div key={index} style={{
            marginBottom: 8,
            padding: 8,
            background: '#f5f5f5',
            borderRadius: 4,
            fontSize: 11
          }}>
            <strong>{event.event_type}</strong>
            <div style={{ color: '#666', marginTop: 4 }}>
              {new Date(event.timestamp).toLocaleTimeString()}
            </div>
            <pre style={{ margin: '4px 0 0 0', fontSize: 10, overflow: 'hidden' }}>
              {JSON.stringify(event, null, 2).substring(0, 200)}...
            </pre>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem('analytics_events')
          setEvents([])
        }}
        style={{
          marginTop: 8,
          padding: '4px 8px',
          background: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          fontSize: 11,
          cursor: 'pointer'
        }}
      >
        Clear Events
      </button>
    </div>
  )
}