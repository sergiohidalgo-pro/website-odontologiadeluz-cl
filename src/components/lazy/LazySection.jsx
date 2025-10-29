import { lazy, Suspense } from 'react'

// Lazy load heavy sections
export const LazyTestimonialsSection = lazy(() => import('../sections/TestimonialsSection'))
export const LazySolutionSection = lazy(() => import('../sections/SolutionSection'))
export const LazyContactSection = lazy(() => import('../sections/ContactSection'))

// Loading fallback component
const SectionSkeleton = ({ height = "400px" }) => (
  <div 
    className="w-full bg-neutral-100 animate-pulse rounded-lg"
    style={{ height }}
    aria-label="Cargando sección..."
  />
)

// Wrapper component with Suspense
export const LazyWrapper = ({ children, fallbackHeight = "400px" }) => (
  <Suspense fallback={<SectionSkeleton height={fallbackHeight} />}>
    {children}
  </Suspense>
)