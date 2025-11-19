// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useOptimizedAnimations } from '../../hooks/useOptimizedAnimations'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

export default function TestimonialsSection() {
  const { fadeInUp, optimizedViewport } = useOptimizedAnimations()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const testimonials = [
    {
      id: 1,
      name: "María, 34 años",
      role: "Ejecutiva",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b353?w=60&h=60&fit=crop&crop=face",
      text: "Tenía pánico al dentista desde niña. Aquí encontré comprensión real. Me explicaron todo con paciencia y por primera vez salí tranquila de una consulta dental.",
      timeAgo: "Hace 2 meses"
    },
    {
      id: 2,
      name: "Carlos, 28 años",
      role: "Ingeniero",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      text: "Me avergonzaba sonreír. Tenía los dientes muy mal. Aquí no me juzgaron, me ayudaron. Ahora sonrío sin pena y mi autoestima cambió completamente.",
      timeAgo: "Hace 1 mes"
    },
    {
      id: 3,
      name: "Ana, 45 años",
      role: "Profesora",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      text: "Después de una mala experiencia en otra clínica, había perdido la confianza. Aquí recuperé la fe en los dentistas. Trato humano y profesional al 100%.",
      timeAgo: "Hace 3 semanas"
    }
  ]

  const stats = [
    { value: "100%", label: "Pacientes Satisfechos" },
    { value: "0", label: "Quejas o Reclamos" },
    { value: "95%", label: "Recomiendan a Familiares" },
    { value: "90min", label: "Tiempo Promedio por Cita" }
  ]

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
          loading="lazy"
        />
        <div>
          <p className="font-bold text-neutral-800">{testimonial.name}</p>
          <p className="text-sm text-neutral-600">{testimonial.role}</p>
        </div>
      </div>

      <p className="text-neutral-700 leading-relaxed mb-4 italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center">
        <div className="flex mr-2" aria-label="5 estrellas">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold-core fill-current" />
          ))}
        </div>
        <span className="text-sm text-neutral-600">{testimonial.timeAgo}</span>
      </div>
    </div>
  )

  return (
    <motion.section
      id="testimonios"
      className="breakout-full section-spacing relative"
      style={{ background: 'linear-gradient(135deg, #FFFCF0 0%, #FFF5F9 50%, #E8EFFE 100%)' }}
      role="region"
      aria-labelledby="testimonios-title"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={optimizedViewport}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
        >
          <motion.div
            className="inline-flex items-center bg-primary-subtle px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            <Heart className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Historias Reales</span>
          </motion.div>

          <motion.h3
            id="testimonios-title"
            className="text-4xl lg:text-5xl font-black text-neutral-800 leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            <span className="text-primary">Así cambió</span>
            <span className="block text-neutral-700">la vida de personas</span>
            <span className="block text-accent">como tú</span>
          </motion.h3>

          <motion.p
            className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={optimizedViewport}
          >
            Estas son historias reales de personas que decidieron dar el paso y transformar su experiencia dental.
          </motion.p>
        </motion.div>

        {/* Testimonials - Carrusel en Mobile, Grid en Desktop */}

        {/* Mobile: Carrusel */}
        <div className="md:hidden mb-16">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div className="embla__slide" key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              className="embla__button embla__button--prev"
              onClick={scrollPrev}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="embla__button embla__button--next"
              onClick={scrollNext}
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={optimizedViewport}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={optimizedViewport}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={optimizedViewport}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={optimizedViewport}
            >
              <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-neutral-600 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
