import { useIndicadores } from '../hooks/useIndicadores';
import { Mail, Phone, MessageSquare, Instagram, Facebook, Linkedin, ChevronUp, Landmark } from 'lucide-react';

export function Footer() {
  const { data: indicadores } = useIndicadores();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatCLP = (val?: number) => {
    if (!val) return 'cargando...';
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(val).toLowerCase();
  };

  const handleSectionScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 text-white relative text-xs font-light" id="footer">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ZONA 1 — TOP (grid de 4 columnas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4" id="footer-col-brand">
            <span className="text-xl font-medium tracking-wide lowercase">
              costa pacífico
            </span>
            <p className="text-white/40 leading-relaxed max-w-xs lowercase">
              inmobiliaria con +15 años creando hogares exclusivos, con la más alta plusvalia habitacional y terminaciones vanguardistas en la zona central de chile.
            </p>
          </div>

          {/* Col 2 — Proyectos */}
          <div className="flex flex-col gap-4" id="footer-col-proyectos">
            <span className="text-white/30 text-[10px] uppercase tracking-widest font-normal">
              proyectos
            </span>
            <ul className="space-y-2 select-none">
              <li>
                <button 
                  onClick={() => handleSectionScroll('proyectos')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  vistas de san damián ii (machalí)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('proyectos')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  edificio nexus vespucio (la cisterna)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('proyectos')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  haras polo de machalí (machalí)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('proyectos')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  vista sur iv (rancagua)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('proyectos')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  los prunos (lo barnechea)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div className="flex flex-col gap-4" id="footer-col-empresa">
            <span className="text-white/30 text-[10px] uppercase tracking-widest font-normal">
              empresa
            </span>
            <ul className="space-y-2 select-none">
              <li>
                <button 
                  onClick={() => handleSectionScroll('nosotros')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('equipo')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  equipo executivas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('inversionistas')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  inversionistas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('testimonios')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionScroll('blog')}
                  className="text-white/60 hover:text-white transition-colors lowercase cursor-pointer text-left"
                >
                  radar inmobiliario
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contacto y Redes */}
          <div className="flex flex-col gap-4" id="footer-col-contact">
            <span className="text-white/30 text-[10px] uppercase tracking-widest font-normal">
              contacto
            </span>
            <div className="space-y-3">
              <a 
                href="tel:+56952027697" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors lowercase"
              >
                <Phone size={13} className="text-white/30" />
                <span>+56 9 5202 7697</span>
              </a>
              <a 
                href="https://wa.me/56952027697" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors lowercase"
              >
                <MessageSquare size={13} className="text-white/30" />
                <span>escríbenos por whatsapp</span>
              </a>
              <a 
                href="mailto:contacto@icostapacifico.cl" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors lowercase"
              >
                <Mail size={13} className="text-white/30" />
                <span>contacto@icostapacifico.cl</span>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-2.5 mt-2" id="footer-socials">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram size={13} className="text-white/60" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook size={13} className="text-white/60" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} className="text-white/60" />
              </a>
            </div>
          </div>

        </div>

        {/* ZONA 2 — Indicadores Financieros Ticker en Footer */}
        <div className="border-t border-white/5 mt-12 pt-8 mb-8" id="footer-indicators-ticker">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-widest text-white/35">
            <span className="flex items-center gap-1.5 font-light">
              <Landmark size={12} className="text-white/20" />
              <span>indicadores de mercado clp (actualizado santiago cl)</span>
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-2 select-none">
              <span className="font-light">uf: <strong className="text-white/70 font-mono font-normal tracking-normal">{formatCLP(indicadores?.uf)}</strong></span>
              <span className="font-light">usr: <strong className="text-white/70 font-mono font-normal tracking-normal">{formatCLP(indicadores?.dolar)}</strong></span>
              <span className="font-light">utm: <strong className="text-white/70 font-mono font-normal tracking-normal">{formatCLP(indicadores?.utm)}</strong></span>
            </div>
          </div>
        </div>

        {/* ZONA 3 — Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/20" id="footer-bottom-bar">
          <div className="lowercase">
            © 2026 costa pacífico. todos los derechos reservados.
          </div>
          
          <div className="flex gap-6 items-center select-none">
            <a href="#footer" className="hover:text-white/40 transition-colors lowercase">política de privacidad</a>
            <a href="#footer" className="hover:text-white/40 transition-colors lowercase">términos y condiciones</a>
            <a href="#footer" className="hover:text-white/40 transition-colors lowercase">uso de cookies</a>

            <button 
              onClick={handleScrollTop}
              className="w-8 h-8 rounded-full border border-white/10 hover:border-white/35 flex items-center justify-center text-white/40 hover:text-white transition-all cursor-pointer active:scale-90"
              aria-label="Volver arriba"
            >
              <ChevronUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
