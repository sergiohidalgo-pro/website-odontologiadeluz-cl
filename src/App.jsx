import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Modern & Clean */}
      <header className="breakout-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-neutral-800 tracking-tight">
                <span className="text-primary">Odontología</span>
                <span className="text-accent ml-2">de Luz</span>
              </h1>
            </div>
            <nav className="hidden md:flex gap-8" role="navigation" aria-label="Navegación principal">
              <a href="#problema" className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group">
                ¿Por qué sufres?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#solucion" className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group">
                Mi Enfoque
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacto" className="text-neutral-700 hover:text-primary transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2 relative group">
                Reserva tu Cita
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Problem-Focused */}
      <section className="breakout-full bg-gradient-to-br from-primary-subtle via-white to-accent-subtle relative overflow-hidden py-20 lg:py-32" role="banner">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-secondary-subtle px-6 py-3 rounded-full mb-6">
                  <span className="text-secondary-dark font-bold text-sm uppercase tracking-wider">💝 Atención con el Corazón</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-neutral-800 leading-tight tracking-tight mb-6">
                  <span className="text-secondary">¿Tienes miedo</span>
                  <span className="block text-neutral-700">al dentista?</span>
                  <span className="block text-accent">Yo te entiendo</span>
                </h2>
              </div>
              
              <p className="text-xl text-neutral-700 leading-relaxed max-w-2xl">
                Sé lo que sientes: <strong className="text-secondary">ansiedad, dolor, vergüenza</strong>. He creado Odontología de Luz para que vivas 
                una experiencia completamente diferente, donde tu <strong className="text-accent">ser real</strong> es lo más importante.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2">
                  Quiero Sentirme Seguro/a
                </button>
                <button className="group bg-white border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-offset-2">
                  Conoce Mi Historia
                </button>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                {/* Main Image */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face" alt="Sonrisa genuina de paciente relajada y feliz" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating Trust Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">😌</span>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-neutral-800">100%</p>
                      <p className="text-neutral-600 font-medium">Sin Ansiedad</p>
                    </div>
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification Section */}
      <section id="problema" className="breakout-full bg-neutral-800 text-white py-20 lg:py-32" role="region" aria-labelledby="problema-title">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary/20 px-6 py-3 rounded-full mb-6">
              <span className="text-secondary-light font-bold text-sm uppercase tracking-wider">😔 Tu Realidad Actual</span>
            </div>
            <h3 id="problema-title" className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              <span className="text-secondary">¿Te identificas</span>
              <span className="block text-gray-300">con alguna de estas</span>
              <span className="block text-accent">situaciones?</span>
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              No estás solo/a. Estos son los miedos y dolores más comunes que escucho todos los días en mi consulta.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Fear 1 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                😰
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Miedo y Ansiedad</h4>
              <p className="text-gray-300 leading-relaxed">
                "Solo pensar en ir al dentista me da pánico. He postergado mi cita por años y ahora mi problema es peor."
              </p>
            </div>

            {/* Fear 2 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                💸
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Costos Inesperados</h4>
              <p className="text-gray-300 leading-relaxed">
                "Siempre me sorprenden con tratamientos carísimos que no sabía que necesitaba. No entiendo por qué es tan caro."
              </p>
            </div>

            {/* Fear 3 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                😔
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Vergüenza por mi Sonrisa</h4>
              <p className="text-gray-300 leading-relaxed">
                "Me da pena sonreír. He evitado fotos y situaciones sociales porque no me gusta cómo se ven mis dientes."
              </p>
            </div>

            {/* Fear 4 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Dolor y Molestias</h4>
              <p className="text-gray-300 leading-relaxed">
                "Siempre salgo adolorido/a de la consulta dental. Siento que no entienden mi sensibilidad al dolor."
              </p>
            </div>

            {/* Fear 5 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                👩‍⚕️
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Atención Fría e Impersonal</h4>
              <p className="text-gray-300 leading-relaxed">
                "Me siento como un número más. El dentista no me escucha ni entiende mis preocupaciones reales."
              </p>
            </div>

            {/* Fear 6 */}
            <div className="bg-neutral-700 rounded-2xl p-8 border border-neutral-600 hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                ⏰
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Falta de Tiempo y Prisa</h4>
              <p className="text-gray-300 leading-relaxed">
                "Siempre tienen prisa. No me explican bien qué me van a hacer y siento que no hay tiempo para mis dudas."
              </p>
            </div>
          </div>

          {/* Transition */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Si te sientes identificado/a...</h4>
              <p className="text-xl text-gray-300 mb-8">
                Es hora de conocer una forma completamente diferente de vivir tu atención dental.
              </p>
              <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2">
                Descubre Mi Enfoque Diferente
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Mi Enfoque Diferente */}
      <section id="solucion" className="breakout-full bg-white py-20 lg:py-32" role="region" aria-labelledby="solucion-title">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent-subtle px-6 py-3 rounded-full mb-6">
              <span className="text-accent-dark font-bold text-sm uppercase tracking-wider">✨ Mi Propuesta Única</span>
            </div>
            <h3 id="solucion-title" className="text-4xl lg:text-5xl font-black text-neutral-800 leading-tight tracking-tight mb-6">
              <span className="text-primary">Odontología de Luz:</span>
              <span className="block text-neutral-700">Atención centrada en</span>
              <span className="block text-accent">tu ser real</span>
            </h3>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Soy <strong className="text-accent">un profesional</strong> que ha decidido cambiar completamente la forma tradicional de hacer odontología. 
              Aquí no eres un paciente más, eres una <strong className="text-secondary">persona única</strong> con historia, miedos y sueños.
            </p>
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Content - My Story */}
            <div className="space-y-8">
              <div className="bg-secondary-subtle rounded-2xl p-8 border-l-4 border-secondary">
                <h4 className="text-2xl font-bold text-neutral-800 mb-4">Mi Promesa Personal</h4>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  "Durante años trabajé en clínicas tradicionales donde todo era rapidez, números y procedimientos. 
                  Veía cómo las personas salían más asustadas de lo que llegaban. Decidí que tenía que existir una forma mejor."
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    👂
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">Te Escucho de Verdad</h5>
                    <p className="text-neutral-700">Dedicamos el tiempo necesario para entender tu historia, tus miedos y tus expectativas reales.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">Explicación Clara y Honesta</h5>
                    <p className="text-neutral-700">Te explico todo en palabras simples. Conoces cada paso, cada costo, cada alternativa antes de decidir.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🌟
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-neutral-800 mb-2">Ambiente de Confianza</h5>
                    <p className="text-neutral-700">Sin prisa, sin presión. Trabajamos a tu ritmo, respetando tus tiempos y emociones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Professional Photo */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face" alt="Dr/a de Odontología de Luz en ambiente cálido y acogedor" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating Quote */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs">
                  <p className="text-sm text-neutral-700 italic mb-3">
                    "Cada persona que llega aquí es recibida con respeto, comprensión y amor genuino."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white text-sm">
                      👨‍⚕️
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800 text-sm">Tu Dentista</p>
                      <p className="text-neutral-600 text-xs">Odontología de Luz</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h4 className="text-3xl font-black text-neutral-800 text-center mb-12">¿Qué Hace Diferente a Odontología de Luz?</h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Difference 1 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  ⏰
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Tiempo Sin Prisa</h5>
                <p className="text-neutral-700">
                  Bloques de 90 minutos mínimo. Tu cita no será interrumpida y tendrás toda mi atención.
                </p>
              </div>
              
              {/* Difference 2 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  💝
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Atención Personalizada</h5>
                <p className="text-neutral-700">
                  Soy yo quien te atiende siempre. Conozco tu historia y respeto tu sensibilidad única.
                </p>
              </div>
              
              {/* Difference 3 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6">
                  📋
                </div>
                <h5 className="text-xl font-bold text-neutral-800 mb-4">Transparencia Total</h5>
                <p className="text-neutral-700">
                  Precios claros desde el inicio. Plan de tratamiento explicado paso a paso.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h4 className="text-2xl font-bold text-neutral-800 mb-4">¿Listo para una experiencia dental completamente diferente?</h4>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Agenda tu primera cita y descubre cómo se siente ser atendido/a como la persona única que eres.
            </p>
            <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2">
              Reservar Mi Primera Cita
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="breakout-full bg-gray-50 py-20 lg:py-32" role="region" aria-labelledby="testimonios-title">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-subtle px-6 py-3 rounded-full mb-6">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">💝 Historias Reales</span>
            </div>
            <h3 id="testimonios-title" className="text-4xl lg:text-5xl font-black text-neutral-800 leading-tight tracking-tight mb-6">
              <span className="text-secondary">Así cambió</span>
              <span className="block text-neutral-700">la vida de personas</span>
              <span className="block text-accent">como tú</span>
            </h3>
            <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Estas son historias reales de personas que decidieron dar el paso y transformar su experiencia dental.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b353?w=60&h=60&fit=crop&crop=face" alt="María" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-neutral-800">María, 34 años</p>
                  <p className="text-sm text-neutral-600">Ejecutiva</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                "Tenía pánico al dentista desde niña. Aquí encontré comprensión real. Me explicaron todo con paciencia 
                y por primera vez salí tranquila de una consulta dental."
              </p>
              <div className="flex items-center">
                <span className="text-accent mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-neutral-600">Hace 2 meses</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Carlos" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-neutral-800">Carlos, 28 años</p>
                  <p className="text-sm text-neutral-600">Ingeniero</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                "Me avergonzaba sonreír. Tenía los dientes muy mal. Aquí no me juzgaron, me ayudaron. 
                Ahora sonrío sin pena y mi autoestima cambió completamente."
              </p>
              <div className="flex items-center">
                <span className="text-accent mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-neutral-600">Hace 1 mes</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="Ana" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-neutral-800">Ana, 45 años</p>
                  <p className="text-sm text-neutral-600">Profesora</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4 italic">
                "Después de una mala experiencia en otra clínica, había perdido la confianza. 
                Aquí recuperé la fe en los dentistas. Trato humano y profesional al 100%."
              </p>
              <div className="flex items-center">
                <span className="text-accent mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-neutral-600">Hace 3 semanas</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-primary mb-2">100%</div>
              <div className="text-neutral-600 font-medium">Pacientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent mb-2">0</div>
              <div className="text-neutral-600 font-medium">Quejas o Reclamos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-secondary mb-2">95%</div>
              <div className="text-neutral-600 font-medium">Recomiendan a Familiares</div>
            </div>
            <div>
              <div className="text-3xl font-black text-primary mb-2">90min</div>
              <div className="text-neutral-600 font-medium">Tiempo Promedio por Cita</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Conversion Focused */}
      <section id="contacto" className="breakout-full bg-neutral-800 relative overflow-hidden py-20 lg:py-32" role="region" aria-labelledby="contacto-title">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent/20 px-6 py-3 rounded-full mb-6">
              <span className="text-accent-light font-bold text-sm uppercase tracking-wider">📞 Da el Primer Paso</span>
            </div>
            <h3 id="contacto-title" className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              <span className="text-secondary">Estás a solo</span>
              <span className="block text-white">una llamada de</span>
              <span className="block text-accent">cambiar tu vida</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              No sigas posponiendo tu bienestar. Es hora de que vivas una experiencia dental 
              <strong className="text-accent">completamente diferente</strong>. Tu nueva sonrisa te espera.
            </p>
          </div>

          {/* Main CTA and Contact Info */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Main CTA */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
                <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center text-white text-4xl mx-auto mb-8">
                  📞
                </div>
                <h4 className="text-3xl font-black text-neutral-800 mb-6">Llámame Ahora</h4>
                <p className="text-lg text-neutral-700 mb-8">
                  Hablemos personalmente. Te escucharé, resolveré tus dudas y agendaremos tu primera cita sin presiones.
                </p>
                
                <div className="space-y-4 mb-8">
                  <a href="tel:+56223456789" className="block w-full bg-accent text-white py-6 px-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2 text-center">
                    📞 +56 2 2345 6789
                  </a>
                  <p className="text-sm text-neutral-600">Llámame directamente - Respondo yo personalmente</p>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <h5 className="font-bold text-neutral-800 mb-4">O si prefieres escribir:</h5>
                  <div className="space-y-3">
                    <a href="mailto:contacto@odontologiadeluz.cl" className="block bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300">
                      ✉️ contacto@odontologiadeluz.cl
                    </a>
                    <a href="https://wa.me/56223456789" className="block bg-secondary text-white py-3 px-6 rounded-xl font-bold hover:bg-secondary-dark transition-all duration-300">
                      📱 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Urgency + Guarantees */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h5 className="text-lg font-bold text-white mb-4">⚡ ¿Es una emergencia?</h5>
                <p className="text-gray-300 mb-4">Si tienes dolor o una urgencia dental, contáctame inmediatamente. Atiendo emergencias 24/7.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+56223456789" className="bg-red-600 text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-red-700 transition-all duration-300">
                    Emergencia 24/7
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right - Location & Hours */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl mr-4">
                    📍
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-1">Ven a Conocerme</h5>
                    <p className="text-gray-300">Ambiente cálido y acogedor</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg">Av. Providencia 1234<br/>Providencia, Santiago</p>
                <div className="mt-4 p-4 bg-white/10 rounded-xl">
                  <p className="text-sm text-gray-300">🌿 Ambiente especialmente diseñado para relajarte y sentirte cómodo/a desde que entras.</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Horarios de Atención</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-neutral-700">Lunes - Viernes</span>
                    <span className="font-black text-primary text-lg">9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-neutral-700">Sábados</span>
                    <span className="font-black text-accent text-lg">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-neutral-700">Domingos</span>
                    <span className="text-gray-500 font-medium">Solo Emergencias</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent-subtle rounded-xl text-center">
                  <p className="text-accent-dark font-bold mb-1">🕰️ Citas de 90 minutos mínimo</p>
                  <p className="text-sm text-neutral-700">Sin prisa, sin interrupciones</p>
                </div>
              </div>
              
              {/* Final Social Proof */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b353?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Paciente feliz" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                </div>
                <p className="text-white font-bold mb-1">"Mejor dentista de Santiago"</p>
                <p className="text-gray-300 text-sm">- Dicen mis pacientes ❤️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="breakout-full bg-primary text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h5 className="text-3xl font-bold mb-4 tracking-tight">
              <span className="text-white">Odontología</span>
              <span className="text-accent ml-2">de Luz</span>
            </h5>
            <p className="text-primary-light text-xl mb-6 max-w-2xl mx-auto">Cuidando tu sonrisa con amor y profesionalismo</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#servicios" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2" aria-label="Ir a servicios">Servicios</a>
              <a href="#equipo" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2" aria-label="Conocer equipo">Equipo</a>
              <a href="#contacto" className="text-primary-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2" aria-label="Información de contacto">Contacto</a>
            </div>
            <div className="border-t border-primary-light pt-6">
              <p className="text-primary-light text-sm">© 2024 Odontología de Luz. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
