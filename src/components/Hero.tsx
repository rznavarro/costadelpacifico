import { useEffect, useState } from 'react';

interface HeroProps {
  onSearchClick: () => void;
}

export function Hero({ onSearchClick }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after mounting
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id="hero-section">
      
      {/* z-0 — Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-75 md:opacity-85 mix-blend-lighten scale-105 select-none pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        id="hero-video"
      />

      {/* z-0 — Overlay sutil */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/40 z-0" id="hero-overlay" />

      {/* z-0 — Gradient fade inferior */}
      <div 
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent via-black/50 to-black z-10" 
        id="hero-gradient-bottom"
      />

      {/* z-10 — Foreground content wrapper */}
      <div className="relative h-full w-full z-10 max-w-7xl mx-auto px-6 md:px-10" id="hero-content">
        
        {/* WORD 1: "tu" */}
        <h1 
          className={`hero-title absolute text-white font-medium text-[16vw] md:text-[13vw] lowercase transition-all duration-1000 ease-out select-none ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ top: '18%', left: '16px' }}
          id="hero-word-1"
        >
          tu
        </h1>

        {/* DESCRIPCIÓN (entre palabra 1 y 2, elegantemente posicionada) */}
        <div 
          className={`absolute left-6 md:left-10 text-[15px] leading-snug text-white/90 z-20 max-w-[280px] md:max-w-[320px] font-light transition-all duration-1000 ease-out delay-500 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
          style={{ top: '44%' }}
          id="hero-description"
        >
          <p className="border-l-2 border-white/30 pl-4 py-1">
            más de 15 años creando hogares exclusivos en la zona central de chile. arquitectura premium, gestión transparente y compromiso real con tu inversión.
          </p>
          <button 
            onClick={onSearchClick}
            className="group mt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-normal text-white hover:text-white/80 transition-colors"
          >
            ver proyectos
            <span className="block w-6 h-px bg-white/50 group-hover:w-10 transition-all duration-300" />
          </button>
        </div>

        {/* WORD 2: "próximo" */}
        <h1 
          className={`hero-title absolute text-white font-medium text-[16vw] md:text-[13vw] text-right lowercase transition-all duration-1000 ease-out delay-250 select-none ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ top: '35%', right: '16px' }}
          id="hero-word-2"
        >
          próximo
        </h1>

        {/* WORD 3: "hogar" */}
        <h1 
          className={`hero-title absolute text-white font-medium text-[16vw] md:text-[13vw] lowercase transition-all duration-1000 ease-out delay-500 select-none ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ top: '56%', left: '20%' }}
          id="hero-word-3"
        >
          hogar
        </h1>

        {/* STAT 1 — Top-right */}
        <div 
          className={`absolute right-6 md:right-10 top-[14%] flex flex-col items-end text-right transition-all duration-1000 ease-out delay-700 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          id="hero-stat-1"
        >
          <div className="flex items-center gap-3 justify-end">
            <span className="hidden md:block h-px w-20 bg-white/20 origin-right rotate-[15deg]" />
            <span className="text-4xl md:text-5xl font-light tracking-tight text-white select-none">+15</span>
          </div>
          <span className="text-[11px] md:text-xs text-white/60 uppercase tracking-wider mt-1.5 block">
            años de experiencia
          </span>
        </div>

        {/* STAT 2 — Bottom-left */}
        <div 
          className={`absolute left-6 md:left-10 bottom-24 flex flex-col items-start transition-all duration-1000 ease-out delay-900 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          id="hero-stat-2"
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-light tracking-tight text-white select-none">+500</span>
            <span className="hidden md:block h-px w-20 bg-white/20 origin-left -rotate-[15deg]" />
          </div>
          <span className="text-[11px] md:text-xs text-white/60 uppercase tracking-wider mt-1.5 block">
            familias confían en nosotros
          </span>
        </div>

        {/* STAT 3 — Bottom-right */}
        <div 
          className={`absolute right-6 md:right-10 bottom-24 flex flex-col items-end text-right transition-all duration-1000 ease-out delay-[1000ms] ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          id="hero-stat-3"
        >
          <div className="flex items-center gap-3 justify-end">
            <span className="hidden md:block h-px w-20 bg-white/20 origin-right -rotate-[15deg]" />
            <span className="text-4xl md:text-5xl font-light tracking-tight text-white select-none">3</span>
          </div>
          <span className="text-[11px] md:text-xs text-white/60 uppercase tracking-wider mt-1.5 block">
            regiones de chile
          </span>
        </div>

        {/* Animated indicator to scroll */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer select-none" 
          onClick={onSearchClick}
          id="hero-scroll-indicator"
        >
          <span className="text-[9px] text-white/30 uppercase tracking-[0.25em]">descubrir</span>
          <div className="w-5 h-9 border border-white/20 rounded-full p-1 flex justify-center">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce mt-1" />
          </div>
        </div>

      </div>
    </section>
  );
}
