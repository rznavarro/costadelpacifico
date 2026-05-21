import { useState, useMemo } from 'react';
import { PROYECTOS_DATA } from '../data';
import { Proyecto, RegionType } from '../types';
import { Bed, Bath, Maximize, Compass, MessageCircle, ArrowRight, Check } from 'lucide-react';

interface ActiveProjectsGridProps {
  onQuoteProject: (proyectoNombre: string) => void;
}

export function ActiveProjectsGrid({ onQuoteProject }: ActiveProjectsGridProps) {
  const [activeTab, setActiveTab] = useState<'todos' | 'inmediata' | 'futura'>('todos');

  // Filter ONLY active projects (non-sold ones)
  const activeProjects = useMemo(() => {
    return PROYECTOS_DATA.filter(p => p.entrega !== 'vendido');
  }, []);

  // Filter sold projects for successful case showcase
  const soldProjects = useMemo(() => {
    return PROYECTOS_DATA.filter(p => p.entrega === 'vendido');
  }, []);

  // Filter active projects by selected tab
  const filteredActive = useMemo(() => {
    if (activeTab === 'todos') return activeProjects;
    return activeProjects.filter(p => p.entrega === activeTab);
  }, [activeTab, activeProjects]);

  const getRegionText = (region: RegionType) => {
    switch (region) {
      case 'rm': return 'región metropolitana';
      case 'v': return 'v región';
      case 'vi': return 'vi región';
    }
  };

  const formatUF = (val: number) => {
    return new Intl.NumberFormat('es-CL').format(val);
  };

  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/5 relative" id="catalog-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3">portafolio premium</span>
          <h2 className="hero-title text-[9vw] md:text-[5vw] font-medium text-white mb-4 lowercase">
            nuestros proyectos activos
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-lg font-light lowercase">
            diseños vanguardistas concebidos para trascender, con terminaciones de alta gama
          </p>
        </div>

        {/* TABS of quick-filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-16" id="projects-tab-container">
          <button
            onClick={() => setActiveTab('todos')}
            className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeTab === 'todos'
                ? 'bg-white text-black font-medium'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            todos
          </button>
          <button
            onClick={() => setActiveTab('inmediata')}
            className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeTab === 'inmediata'
                ? 'bg-white text-black font-medium'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            entrega inmediata
          </button>
          <button
            onClick={() => setActiveTab('futura')}
            className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeTab === 'futura'
                ? 'bg-white text-black font-medium'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            entrega futura (en verde/blanco)
          </button>
        </div>

        {/* ACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24" id="active-catalog-grid">
          {filteredActive.map((p) => {
            // Encode message for WhatsApp
            const waMsg = encodeURIComponent(
              `hola, estoy interesado en el proyecto "${p.nombre}" que vi en el nuevo sitio de costa pacífico. ¿podría enviarme más información, por favor?`
            );
            const waLink = `https://wa.me/${p.ejecutivaFono.replace(/\+/g, '')}?text=${waMsg}`;

            return (
              <article
                key={p.id}
                className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)] transition-all duration-300 flex flex-col h-full"
                id={`catalog-card-${p.id}`}
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 select-none">
                  <img
                    src={p.imagenUrl}
                    alt={p.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out p-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent z-10" />

                  {/* Top-Left: Delivery state badge */}
                  <div className="absolute top-4 left-4 z-20">
                    {p.entrega === 'inmediata' ? (
                      <span className="bg-white text-black text-[10px] uppercase tracking-widest font-medium rounded-full px-3 py-1.5 shadow-md">
                        entrega inmediata
                      </span>
                    ) : (
                      <span className="bg-black/80 backdrop-blur border border-white/20 text-white text-[10px] uppercase tracking-widest font-medium rounded-full px-3 py-1.5">
                        entrega futura
                      </span>
                    )}
                  </div>

                  {/* Top-Right: Price badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-black/80 backdrop-blur border border-white/15 text-white/95 text-[11px] font-normal rounded-full px-3 py-1.5">
                      desde {formatUF(p.precioDesdeUF)} uf
                    </span>
                  </div>

                  {/* Left bottom: location overlay */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-white/90">
                    <span className="text-[10px] bg-neutral-900/90 backdrop-blur px-2.5 py-1 rounded-full text-white/70 uppercase tracking-widest font-light">
                      {p.comuna}, {getRegionText(p.region)}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Title */}
                  <h3 className="text-lg font-medium text-white tracking-tight lowercase mb-2 group-hover:text-white/90 transition-colors">
                    {p.nombre}
                  </h3>

                  {/* Description snippet */}
                  <p className="text-white/50 text-xs leading-relaxed font-light mb-6 flex-grow lowercase">
                    {p.descripcion}
                  </p>

                  {/* Divider line */}
                  <div className="h-px bg-white/10 mb-4" />

                  {/* Amenities Row */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6" id={`amenities-${p.id}`}>
                    {p.dormitorios !== undefined && (
                      <div className="flex items-center gap-1.5 text-[11px] text-white/60 lowercase">
                        <Bed size={13} className="text-white/30" />
                        <span>{p.dormitorios} dorms</span>
                      </div>
                    )}
                    {p.banos !== undefined && (
                      <div className="flex items-center gap-1.5 text-[11px] text-white/60 lowercase">
                        <Bath size={13} className="text-white/30" />
                        <span>{p.banos} {p.banos === 1 ? 'baño' : 'baños'}</span>
                      </div>
                    )}
                    {p.superficie !== undefined && (
                      <div className="flex items-center gap-1.5 text-[11px] text-white/60 lowercase">
                        <Maximize size={13} className="text-white/30" />
                        <span>{p.superficie} m² útil</span>
                      </div>
                    )}
                    {p.terreno !== undefined && (
                      <div className="flex items-center gap-1.5 text-[11px] text-white/60 lowercase">
                        <Compass size={13} className="text-white/30" />
                        <span>{p.terreno} m² terr</span>
                      </div>
                    )}
                  </div>

                  {/* Executive assignment and WhatsApp link */}
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/5 pt-4" id={`cta-row-${p.id}`}>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-white/30 uppercase tracking-wider lowercase">ejecutiva asignada</span>
                      <span className="text-xs text-white/65 font-light lowercase">{p.ejecutivaNombre}</span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-neutral-900 border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-[11px] rounded-lg px-3 py-2 transition-all cursor-pointer"
                    >
                      <MessageCircle size={13} />
                      <span>whatsapp</span>
                    </a>
                  </div>

                  {/* Cotizar action direct link to bottom form */}
                  <button
                    onClick={() => onQuoteProject(p.nombre)}
                    className="w-full mt-4 bg-white/5 hover:bg-white text-white hover:text-black py-3 rounded-xl text-xs lowercase transition-all duration-300 font-light flex items-center justify-center gap-1"
                  >
                    <span>solicitar dossier comercial</span>
                    <ArrowRight size={11} />
                  </button>

                </div>
              </article>
            );
          })}
        </div>

        {/* PROYECTOS ENTREGADOS / HISTORIAL DE ÉXITO (VENDIDOS) */}
        {soldProjects.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-16">
            <div className="text-center mb-12">
              <span className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.25em] mb-2 block">casos de éxito de la inmobiliaria</span>
              <h3 className="hero-title text-2xl md:text-3xl text-white font-medium lowercase">proyectos entregados con éxito</h3>
              <p className="text-white/40 text-xs mt-2 font-light lowercase">la consolidación de nuestra trayectoria reflejada en ventas completadas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {soldProjects.map((p) => (
                <div 
                  key={p.id}
                  className="bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex flex-col h-full"
                  id={`sold-card-${p.id}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 select-none">
                    <img 
                      src={p.imagenUrl} 
                      alt={p.nombre} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-red-950/80 border border-red-500/30 text-red-100 text-[9px] uppercase tracking-widest font-normal rounded-full px-2.5 py-1">
                        100% vendido
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 text-white/50 text-[10px] uppercase tracking-widest">
                      {p.comuna}, {getRegionText(p.region)}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-normal text-white/60 lowercase mb-1.5">{p.nombre}</h4>
                      <p className="text-white/40 text-[11px] font-light leading-relaxed mb-4 lowercase">
                        {p.descripcion}
                      </p>
                    </div>
                    <div className="border-t border-white/5 pt-3.5 flex justify-between items-center text-[10px] text-white/30">
                      <span>valor histórico final: {formatUF(p.precioDesdeUF)} uf</span>
                      <span>diseño entregado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
