export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer 
      className="breakout-full text-white py-12" 
      style={{ background: 'linear-gradient(135deg, #5B7FE8 0%, #2E4CAA 50%, #1E3A8A 100%)' }} 
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h5 className="text-3xl font-bold mb-4 tracking-tight">
            <span className="text-white">Odontología de Luz</span>
          </h5>
          
          <p className="text-white/80 text-xl mb-6 max-w-2xl mx-auto">
            Cuidando tu sonrisa con amor y profesionalismo
          </p>
          
          <div className="text-white/90 mb-6 space-y-2">
            <p className="text-lg">
              📍 <strong>Talagante:</strong> Av. Balmaceda 949
            </p>
            <p className="text-lg">
              📍 <strong>Providencia:</strong> Av. Salvador 95 Of. 316, Santiago
            </p>
            <p className="text-lg">
              📧 <a href="mailto:contacto@odontologiadeluz.cl" className="hover:text-white underline">contacto@odontologiadeluz.cl</a>
            </p>
            <p className="text-lg">
              📱 <a href="tel:+56998116713" className="hover:text-white underline">+56 9 9811 6713</a>
            </p>
          </div>
          
          <nav className="flex justify-center space-x-6 mb-8" aria-label="Enlaces del pie de página">
            <a 
              href="#servicios" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-3 py-2 cursor-pointer" 
              aria-label="Ir a servicios"
            >
              Servicios
            </a>
            <a 
              href="#equipo" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-3 py-2 cursor-pointer" 
              aria-label="Conocer equipo"
            >
              Equipo
            </a>
            <a 
              href="#contacto" 
              className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-3 py-2 cursor-pointer" 
              aria-label="Información de contacto"
            >
              Contacto
            </a>
          </nav>
          
          <div className="border-t border-white/30 pt-6">
            <p className="text-white/70 text-sm">
              © {currentYear} Odontología de Luz. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-xs mt-3">
              Creado con IC Inteligencia del Corazón 💙 y asistido por IA Claude Code manejada por Sergio Hidalgo bajo la empresa{' '}
              <a 
                href="https://cdx.cl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/90 hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 rounded"
              >
                CDX.cl - Codex SpA
              </a> <br />
              🇨🇱 Hecho en Chile - Noviembre 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}