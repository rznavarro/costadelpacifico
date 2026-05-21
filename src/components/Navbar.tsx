import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onCotizarClick: () => void;
}

export function Navbar({ onCotizarClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`absolute top-0 left-0 right-0 z-50 px-4 md:px-10 pt-6 transition-all duration-300 ${
          scrolled ? 'fixed bg-black/60 backdrop-blur-md pt-4 pb-4 border-b border-white/5' : ''
        }`}
        id="navbar-container"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Pill */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-full pl-3 pr-5 py-2.5 cursor-pointer hover:border-white/20 transition-all duration-200"
            id="nav-logo-pill"
          >
            <div className="bg-white p-1 rounded-full flex items-center justify-center w-7 h-7 overflow-hidden">
              <img 
                src="https://icostapacifico.cl/wp-content/uploads/2025/07/cospac-logo.png" 
                alt="COSPAC Isotipo" 
                className="w-5 h-5 object-contain invert"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to minimal SVG text-style logo if asset can't load or is locked
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="text-white text-xs md:text-sm font-normal tracking-wider lowercase">
              costa pacífico
            </span>
          </div>

          {/* Central Pill (Hidden on mobile) */}
          <nav 
            className="hidden lg:flex items-center gap-0.5 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-full px-2 py-1"
            id="nav-links-pill"
          >
            <button
              onClick={() => handleNavClick('proyectos')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              proyectos
            </button>
            <button
              onClick={() => handleNavClick('cobertura')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              cobertura
            </button>
            <button
              onClick={() => handleNavClick('equipo')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              equipo
            </button>
            <button
              onClick={() => handleNavClick('testimonios')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              testimonios
            </button>
            <button
              onClick={() => handleNavClick('inversionistas')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              inversión
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              radar
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className="text-neutral-300 hover:text-white transition-colors text-[10px] uppercase tracking-widest px-3 py-2 rounded-full hover:bg-white/5"
            >
              contacto
            </button>
          </nav>

          {/* CTA & Actions Pill */}
          <div className="flex items-center gap-2" id="nav-actions-pill">
            <button
              onClick={onCotizarClick}
              className="bg-white text-black text-xs uppercase tracking-widest font-normal rounded-full px-5 py-3 md:px-6 hover:bg-neutral-200 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              cotizar
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden w-11 h-11 rounded-full bg-neutral-900/95 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:border-white/20 active:scale-95 transition-all"
              aria-label="Toggle menu"
              id="hamburger-trigger"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        id="mobile-drawer"
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-11 h-11 rounded-full bg-neutral-900/80 border border-white/10 flex items-center justify-center text-white"
        >
          <X size={18} />
        </button>

        <span className="text-white/30 text-xs tracking-widest uppercase mb-4">costa pacífico</span>

        <button
          onClick={() => handleNavClick('proyectos')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          proyectos
        </button>
        <button
          onClick={() => handleNavClick('cobertura')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          cobertura central
        </button>
        <button
          onClick={() => handleNavClick('equipo')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          nuestro equipo
        </button>
        <button
          onClick={() => handleNavClick('testimonios')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          testimonios
        </button>
        <button
          onClick={() => handleNavClick('inversionistas')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          inversionistas
        </button>
        <button
          onClick={() => handleNavClick('blog')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          radar inmobiliario
        </button>
        <button
          onClick={() => handleNavClick('contacto')}
          className="text-white hover:text-neutral-300 transition-colors text-xl lowercase tracking-tight"
        >
          contacto
        </button>

        <div className="mt-8 border-t border-white/10 pt-8 w-4/5 text-center">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onCotizarClick();
            }}
            className="w-full bg-white text-black font-normal rounded-full px-6 py-3.5 text-sm uppercase tracking-wider"
          >
            solicitar cotización
          </button>
          <p className="text-white/40 text-xs mt-6 font-light">
            +15 años de trayectoria inmobiliaria
          </p>
        </div>
      </div>
    </>
  );
}
