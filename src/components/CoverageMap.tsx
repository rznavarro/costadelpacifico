import { useState } from 'react';
import { MapPin, Compass, Shield, Building } from 'lucide-react';
import { motion } from 'motion/react';

type SelectedRegion = 'v' | 'rm' | 'vi';

export function CoverageMap() {
  const [hoveredRegion, setHoveredRegion] = useState<SelectedRegion | null>(null);
  const [activeRegion, setActiveRegion] = useState<SelectedRegion>('vi');

  // Interactive project pins details
  const pins = [
    { id: 'rm-nexus', region: 'rm', name: 'edificio nexus vespucio', cx: '185', cy: '175' },
    { id: 'rm-prunos', region: 'rm', name: 'los prunos (lo barnechea)', cx: '210', cy: '150' },
    { id: 'vi-damian', region: 'vi', name: 'vistas de san damián ii', cx: '180', cy: '235' },
    { id: 'vi-polo', region: 'vi', name: 'haras polo de machalí', cx: '190', cy: '250' },
    { id: 'vi-sur', region: 'vi', name: 'vista sur iv (rancagua)', cx: '165', cy: '225' },
    { id: 'vi-ayres', region: 'vi', name: 'ayres de pinares (pichilemu)', cx: '90', cy: '270' },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 px-6 border-t border-white/5 relative" id="cobertura">
      {/* Absolute decorative badge */}
      <div className="absolute top-0 right-10 text-[9px] font-mono text-white/5 select-none select-none">
        lat: -33.4489° s, lon: -70.6693° w
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3 block">cobertura territorial</span>
          <h2 className="hero-title text-[9vw] md:text-[5vw] font-medium text-white mb-4 lowercase">
            presencia en zona central
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto mb-4" />
          <p className="text-white/50 text-sm md:text-base font-light lowercase">
            proyectos en tres regiones clave de chile. más de 500 familias han hecho de costa pacífico su elección para proyectar su futuro o inversión comercial.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA — Mapa interactivo */}
          <div className="flex flex-col items-center">
            <div 
              className="relative w-full aspect-[4/5] max-w-sm md:max-w-md bg-[#111] border border-white/10 rounded-2xl overflow-hidden p-6 shadow-2xl flex flex-col justify-between"
              id="cobertura-picture-frame"
            >
              
              {/* Background Map Title Overlay */}
              <div className="absolute top-4 left-4 z-20 flex flex-col pointer-events-none">
                <span className="text-[10px] uppercase font-light text-white/45 tracking-widest">esquema geográfico</span>
                <span className="text-xs text-white/25 lowercase">rm, v y vi región</span>
              </div>

              {/* Central interactive inline Map */}
              <div className="w-full h-full flex items-center justify-center relative translate-y-2 select-none" id="svg-map-wrapper">
                
                <svg 
                  viewBox="0 0 300 380" 
                  className="w-full h-full text-white/10 max-h-[340px]"
                >
                  {/* Definition for gradients */}
                  <defs>
                    <radialGradient id="pulse-grad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* V REGION - NORTH WEST POLYGON */}
                  <path 
                    d="M 60,30 L 100,50 L 125,40 L 130,85 L 105,100 L 135,120 L 110,140 L 75,130 Z" 
                    fill={activeRegion === 'v' ? 'rgba(255,255,255,0.08)' : 'transparent'}
                    stroke={activeRegion === 'v' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)'}
                    strokeWidth="1.5"
                    className="transition-all duration-300 cursor-pointer hover:fill-white/[0.04] hover:stroke-white/40"
                    onClick={() => setActiveRegion('v')}
                    onMouseEnter={() => setHoveredRegion('v')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* REGION METROPOLITANA (RM) - CENTER RIGHT */}
                  <path 
                    d="M 135,120 L 180,105 L 235,140 L 220,200 L 165,200 L 140,175 L 110,140 Z" 
                    fill={activeRegion === 'rm' ? 'rgba(255,255,255,0.08)' : 'transparent'}
                    stroke={activeRegion === 'rm' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)'}
                    strokeWidth="1.5"
                    className="transition-all duration-300 cursor-pointer hover:fill-white/[0.04] hover:stroke-white/40"
                    onClick={() => setActiveRegion('rm')}
                    onMouseEnter={() => setHoveredRegion('rm')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* VI REGION (O'HIGGINS) - SOUTH */}
                  <path 
                    d="M 110,140 L 140,175 L 165,200 L 220,200 L 205,290 L 150,300 L 80,310 L 65,250 L 110,215 Z" 
                    fill={activeRegion === 'vi' ? 'rgba(255,255,255,0.08)' : 'transparent'}
                    stroke={activeRegion === 'vi' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)'}
                    strokeWidth="1.5"
                    className="transition-all duration-300 cursor-pointer hover:fill-white/[0.04] hover:stroke-white/40"
                    onClick={() => setActiveRegion('vi')}
                    onMouseEnter={() => setHoveredRegion('vi')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />

                  {/* Coastline visual hint */}
                  <path 
                    d="M 55,20 L 50,110 L 45,210 L 40,320" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.05)" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                  />

                  {/* Label indicators on Map */}
                  <text x="75" y="80" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="1" className="font-light">v región</text>
                  <text x="170" y="150" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="1" className="font-light">rm</text>
                  <text x="125" y="260" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="1" className="font-light">vi región</text>

                  {/* Pulsing Project Pins on Map based on selected region */}
                  {pins.map((pin) => {
                    const isSelected = activeRegion === pin.region;
                    return (
                      <g key={pin.id} className="transition-all duration-500">
                        {/* Outer Glow Pulse circles */}
                        {isSelected && (
                          <circle 
                            cx={pin.cx} 
                            cy={pin.cy} 
                            r="12" 
                            fill="url(#pulse-grad)"
                            className="animate-pulse"
                          />
                        )}
                        {/* Core pin point */}
                        <circle 
                          cx={pin.cx} 
                          cy={pin.cy} 
                          r={isSelected ? "4.5" : "3"} 
                          fill={isSelected ? '#ffffff' : 'rgba(255,255,255,0.4)'}
                          stroke="#000000"
                          strokeWidth="1"
                          className="transition-all duration-300 cursor-pointer"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Left labels floating */}
                <div className="absolute bottom-4 left-4 text-[9px] text-white/35 font-mono">
                  * haz clic sobre las regiones del mapa
                </div>
              </div>

              {/* Bottom current status display */}
              <div className="mt-4 border-t border-white/5 pt-4 flex justify-between items-center z-10">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">región seleccionada</span>
                <span className="text-xs text-white/80 lowercase bg-white/5 px-2.5 py-1 rounded font-normal">
                  {activeRegion === 'v' ? 'v región (costera)' : activeRegion === 'rm' ? 'región metropolitana' : 'vi región (o\'higgins)'}
                </span>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA — Stats por región */}
          <div className="space-y-6">
            
            {/* BLOQUE Metropolitano (RM) */}
            <div 
              onClick={() => setActiveRegion('rm')}
              className={`border-l-2 p-6 rounded-r-xl transition-all duration-300 cursor-pointer ${
                activeRegion === 'rm'
                  ? 'border-white bg-white/[0.03] shadow-[0_4px_24px_rgba(255,255,255,0.01)]'
                  : 'border-white/10 hover:border-white/40 hover:bg-white/[0.01]'
              }`}
              id="coverage-block-rm"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">
                  región metropolitana
                </span>
                <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full lowercase font-light">
                  alta plusvalía
                </span>
              </div>
              
              <h3 className="hero-title text-2xl md:text-3xl font-medium text-white mb-2 ml-0 pl-0 lowercase">
                2 proyectos activos
              </h3>
              
              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light mb-4 lowercase">
                departamentos premium y condominios cerrados en ubicaciones estratégicas con excelente conectividad, pensados para dar la máxima rentabilidad de arriendo o calidad de vida indiscutible.
              </p>

              <div className="flex flex-wrap gap-2" id="comunas-chips-rm">
                <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/50 lowercase font-light">
                  la cisterna
                </span>
                <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/50 lowercase font-light">
                  lo barnechea
                </span>
              </div>
            </div>

            {/* BLOQUE V Región */}
            <div 
              onClick={() => setActiveRegion('v')}
              className={`border-l-2 p-6 rounded-r-xl transition-all duration-300 cursor-pointer ${
                activeRegion === 'v'
                  ? 'border-white bg-white/[0.03] shadow-[0_4px_24px_rgba(255,255,255,0.01)]'
                  : 'border-white/10 hover:border-white/40 hover:bg-white/[0.01]'
              }`}
              id="coverage-block-v"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">
                  v región (valparaíso)
                </span>
                <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full lowercase font-light">
                  lanzamiento
                </span>
              </div>

              <h3 className="hero-title text-2xl md:text-3xl font-medium text-white mb-2 ml-0 pl-0 lowercase">
                expansión q1 2026
              </h3>

              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light mb-4 lowercase">
                próximos desarrollos en el sector costero exclusivo de zapallar y litorales aledaños. consulta con nuestros asesores comerciales para acceder a valores de lanzamiento 'en blanco' anticipado.
              </p>

              <div className="flex flex-wrap gap-2" id="comunas-chips-v">
                <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/50 lowercase font-light">
                  zapallar (lanzamiento)
                </span>
              </div>
            </div>

            {/* BLOQUE VI Región */}
            <div 
              onClick={() => setActiveRegion('vi')}
              className={`border-l-2 p-6 rounded-r-xl transition-all duration-300 cursor-pointer ${
                activeRegion === 'vi'
                  ? 'border-white bg-white/[0.03] shadow-[0_4px_24px_rgba(255,255,255,0.01)]'
                  : 'border-white/10 hover:border-white/40 hover:bg-white/[0.01]'
              }`}
              id="coverage-block-vi"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">
                  vi región (o'higgins)
                </span>
                <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full lowercase font-light font-light">
                  cuna operativa
                </span>
              </div>

              <h3 className="hero-title text-2xl md:text-3xl font-medium text-white mb-2 ml-0 pl-0 lowercase">
                4+ proyectos premium
              </h3>

              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light mb-4 lowercase">
                el núcleo fundamental de nuestra operación. casas de alto estándar mediterráneo, condominios exclusivos de baja densidad y terrenos con una urbanización de lujo en machalí y rancagua.
              </p>

              <div className="flex flex-wrap gap-2" id="comunas-chips-vi">
                <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/50 lowercase font-light">
                  machalí
                </span>
                <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/50 lowercase font-light">
                  rancagua
                </span>
                <span className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/50 lowercase font-light">
                  pichilemu (vendido)
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
