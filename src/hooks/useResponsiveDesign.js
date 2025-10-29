import { useState, useEffect } from 'react'

/**
 * Advanced responsive design hook for mobile-first approach
 * Breakpoints based on modern design systems
 */
export const useResponsiveDesign = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  const [device, setDevice] = useState('mobile')

  // Modern breakpoints - mobile-first approach
  const breakpoints = {
    mobile: 0,      // 0px - 640px
    tablet: 640,    // 640px - 1024px  
    laptop: 1024,   // 1024px - 1280px
    desktop: 1280,  // 1280px - 1536px
    wide: 1536      // 1536px+
  }

  // Check if device type
  const isMobile = screenSize.width < breakpoints.tablet
  const isTablet = screenSize.width >= breakpoints.tablet && screenSize.width < breakpoints.laptop
  const isLaptop = screenSize.width >= breakpoints.laptop && screenSize.width < breakpoints.desktop
  const isDesktop = screenSize.width >= breakpoints.desktop && screenSize.width < breakpoints.wide
  const isWide = screenSize.width >= breakpoints.wide

  // Get current device type
  const getCurrentDevice = () => {
    if (isMobile) return 'mobile'
    if (isTablet) return 'tablet'
    if (isLaptop) return 'laptop'
    if (isDesktop) return 'desktop'
    return 'wide'
  }

  // Responsive values based on device
  const getResponsiveValue = (values) => {
    const currentDevice = getCurrentDevice()
    return values[currentDevice] || values.mobile || values.default
  }

  // Container sizes for different screens
  const getContainerClass = () => {
    if (isMobile) return 'px-4 max-w-none'
    if (isTablet) return 'px-6 max-w-3xl mx-auto'
    if (isLaptop) return 'px-8 max-w-5xl mx-auto'
    if (isDesktop) return 'px-6 max-w-7xl mx-auto'
    return 'px-6 max-w-8xl mx-auto'
  }

  // Grid columns for responsive layouts
  const getGridColumns = (mobileColumns = 1, tabletColumns = 2, desktopColumns = 3) => {
    if (isMobile) return `grid-cols-${mobileColumns}`
    if (isTablet) return `grid-cols-${tabletColumns}`
    return `grid-cols-${desktopColumns}`
  }

  // Text sizes for responsive typography
  const getTextSize = (level = 'body') => {
    const sizes = {
      hero: {
        mobile: 'text-3xl',
        tablet: 'text-4xl', 
        laptop: 'text-5xl',
        desktop: 'text-6xl'
      },
      h1: {
        mobile: 'text-2xl',
        tablet: 'text-3xl',
        laptop: 'text-4xl', 
        desktop: 'text-5xl'
      },
      h2: {
        mobile: 'text-xl',
        tablet: 'text-2xl',
        laptop: 'text-3xl',
        desktop: 'text-4xl'
      },
      h3: {
        mobile: 'text-lg',
        tablet: 'text-xl',
        laptop: 'text-2xl',
        desktop: 'text-3xl'
      },
      body: {
        mobile: 'text-base',
        tablet: 'text-lg',
        laptop: 'text-lg',
        desktop: 'text-xl'
      },
      small: {
        mobile: 'text-sm',
        tablet: 'text-base',
        laptop: 'text-base',
        desktop: 'text-lg'
      }
    }

    return getResponsiveValue(sizes[level] || sizes.body)
  }

  // Spacing for responsive layouts
  const getSpacing = (level = 'md') => {
    const spacing = {
      xs: {
        mobile: 'p-2',
        tablet: 'p-3',
        laptop: 'p-4',
        desktop: 'p-6'
      },
      sm: {
        mobile: 'p-4',
        tablet: 'p-6',
        laptop: 'p-8',
        desktop: 'p-10'
      },
      md: {
        mobile: 'p-6',
        tablet: 'p-8', 
        laptop: 'p-12',
        desktop: 'p-16'
      },
      lg: {
        mobile: 'p-8',
        tablet: 'p-12',
        laptop: 'p-16',
        desktop: 'p-20'
      }
    }

    return getResponsiveValue(spacing[level] || spacing.md)
  }

  // Touch-friendly sizes for mobile
  const getTouchTarget = () => {
    return isMobile ? 'min-h-[44px] min-w-[44px]' : 'min-h-[40px] min-w-[40px]'
  }

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      setDevice(getCurrentDevice())
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial values

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    screenSize,
    device,
    isMobile,
    isTablet, 
    isLaptop,
    isDesktop,
    isWide,
    breakpoints,
    getResponsiveValue,
    getContainerClass,
    getGridColumns,
    getTextSize,
    getSpacing,
    getTouchTarget
  }
}