import { useState, useMemo } from 'react';
import { PROYECTOS_DATA } from '../data';
import { Proyecto, RegionType, EntregaType } from '../types';
import { MapPin, Calendar, Compass, ArrowRight, Check } from 'lucide-react';

interface ProjectFinderProps {
  onQuoteProject: (proyectoNombre: string) => void;
}

export function ProjectFinder({ onQuoteProject }: ProjectFinderProps) {
  // State for filters
  const [entrega, setEntrega] = useState<string>('all');
  const [region, setRegion] = useState<string>('all');
  const [maxPrecio, setMaxPrecio] = useState<number>(30000);
  
  // Search state to flash or highlight updates
  const [searchFeedback, setSearchFeedback] = useState<string>('');
  const [selectedSpecProject, setSelectedSpecProject] = useState<Proyecto | null>(null);

  // Compute filtered projects based on state
  const filteredProjects = useMemo(() => {
    return PROYECTOS_DATA.filter(p => {
      const matchEntrega = entrega === 'all' || p.entrega === entrega;
      const matchRegion = region === 'all' || p.region === region;
      const matchPrecio = p.precioDesdeUF <= maxPrecio;
      return matchEntrega && matchRegion && matchPrecio;
    });
  }, [entrega, region, maxPrecio]);

  const handleSearch = () => {
    // Show a premium visual alert or feedback
    setSearchFeedback(`mostrando ${filteredProjects.length} de ${PROYECTOS_DATA.length} proyectos exclusivos`);
    const resultsElement = document.getElementById('search-results-anchor');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => setSearchFeedback(''), 4000);
  };

  const formatUF = (val: number) => {
    return new Intl.NumberFormat('es-CL').format(val);
  };

  const getRegionName = (reg: RegionType) => {
    switch (reg) {
      case 'rm': return 'región metropolitana';
      case 'v': return 'v región (valparaíso)';
      case 'vi': return 'vi región (o\'higgins)';
    }
  };

  return (
    <section className="bg-black py-20 md:py-28 text-white relative" id="proyectos">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16" id="finder-header">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3">portafolio cospac</span>
          <h2 className="hero-title text-[9vw] md:text-[5vw] font-medium text-white mb-4 lowercase">
            encuentra tu proyecto
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-lg font-light lowercase">
            filtra por entrega, ubicación y presupuesto para iniciar tu inversión
          </p>
        </div>

        {/* Buscador Form Wrapper */}
        <div className="max-w-4xl mx-auto mb-16" id="finder-form-container">
          <div className="bg-neutral-900/90 backdrop-blur-md rounded-2xl border border-white/10 p-5 md:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Top decorative micro border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col md:flex-row gap-6 items-end">
              
              {/* FILTRO 1: Entrega */}
              <div className="w-full flex-1">
                <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2.5 lowercase">
                  plazo de entrega
                </label>
                <div className="relative">
                  <select
                    value={entrega}
                    onChange={(e) => setEntrega(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs tracking-wider text-white select-none appearance-none cursor-pointer focus:border-white/30 focus:bg-white/10 focus:outline-none transition-all duration-200"
                    id="filter-entrega"
                  >
                    <option value="all" className="bg-neutral-900 text-white">todas las entregas</option>
                    <option value="inmediata" className="bg-neutral-900 text-white">entrega inmediata</option>
                    <option value="futura" className="bg-neutral-900 text-white">entrega futura (en verde/blanco)</option>
                  </select>
                </div>
              </div>

              {/* FILTRO 2: Región */}
              <div className="w-full flex-1">
                <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2.5 lowercase">
                  zona de interés
                </label>
                <div className="relative">
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs tracking-wider text-white select-none appearance-none cursor-pointer focus:border-white/30 focus:bg-white/10 focus:outline-none transition-all duration-200"
                    id="filter-region"
                  >
                    <option value="all" className="bg-neutral-900 text-white">todas las regiones</option>
                    <option value="rm" className="bg-neutral-900 text-white">región metropolitana</option>
                    <option value="v" className="bg-neutral-900 text-white">v región</option>
                    <option value="vi" className="bg-neutral-900 text-white">vi región</option>
                  </select>
                </div>
              </div>

              {/* FILTRO 3: Presupuesto Slider */}
              <div className="w-full flex-2 min-w-[200px]">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest lowercase">
                    presupuesto máximo
                  </span>
                  <span className="text-xs font-medium text-white/90">
                    hasta {formatUF(maxPrecio)} uf
                  </span>
                </div>
                <div className="py-2.5 flex items-center">
                  <input
                    type="range"
                    min="2000"
                    max="30000"
                    step="500"
                    value={maxPrecio}
                    onChange={(e) => setMaxPrecio(Number(e.target.value))}
                    className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer range-track-white"
                    id="filter-precio"
                  />
                </div>
                <div className="flex justify-between text-[9px] text-white/20 select-none">
                  <span>2.000 uf</span>
                  <span>15.000 uf</span>
                  <span>30.000 uf</span>
                </div>
              </div>

              {/* BUTTON BUSCAR */}
              <div className="w-full md:w-auto">
                <button
                  onClick={handleSearch}
                  className="w-full bg-white text-black text-xs uppercase tracking-widest font-normal rounded-xl px-8 py-4 hover:bg-neutral-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  buscar
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          </div>

          {/* Feedback banner */}
          {searchFeedback && (
            <div className="mt-4 text-center text-xs text-white/60 tracking-wider animate-fade-in" id="search-feedback">
              {searchFeedback}
            </div>
          )}
        </div>

        {/* Results Anchor */}
        <div id="search-results-anchor" className="scroll-mt-28" />

        {/* PROJECTS GRID DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <article 
                key={p.id}
                className="group bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 flex flex-col h-full"
                id={`project-card-${p.id}`}
              >
                
                {/* Media frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={p.imagenUrl}
                    alt={p.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out p-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Badges container */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-black/80 backdrop-blur text-[9px] uppercase tracking-wider text-white font-normal px-2.5 py-1.5 rounded-full border border-white/10 select-none">
                      {p.entrega === 'inmediata' ? 'entrega inmediata' : 'entrega futura'}
                    </span>
                  </div>

                  {/* Commune and Region layout */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
                    <MapPin size={11} className="text-white/50" />
                    <span className="text-[11px] font-light lowercase tracking-wide">
                      {p.comuna}, {getRegionName(p.region)}
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Title and price row */}
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-base font-medium tracking-tight text-white group-hover:text-white/95 transition-colors">
                      {p.nombre}
                    </h3>
                  </div>

                  {/* Price marker */}
                  <div className="mb-4">
                    <span className="text-white/40 text-[10px] uppercase tracking-wider block">desde</span>
                    <span className="text-lg font-light text-white tracking-wide">
                      {formatUF(p.precioDesdeUF)} uf
                    </span>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-white/60 text-xs leading-relaxed font-light mb-5 flex-grow lowercase">
                    {p.descripcion}
                  </p>

                  <div className="h-px bg-white/5 mb-4" />

                  {/* Bullet points feature list */}
                  <ul className="space-y-2 mb-6 text-[11px] text-white/55 font-light" id={`project-bullets-${p.id}`}>
                    {p.caracteristicas.map((char, index) => (
                      <li key={index} className="flex items-start gap-2 lowercase">
                        <Check size={11} className="text-white/30 mt-0.5" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Call to action button */}
                  <button
                    onClick={() => {
                      onQuoteProject(p.nombre);
                    }}
                    className="w-full border border-white/10 hover:border-white/30 text-white hover:bg-white text-xs lowercase py-3.5 rounded-xl transition-all font-normal flex items-center justify-center gap-2 group/btn hover:text-black active:scale-[0.98]"
                  >
                    solicitar cotización
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                </div>

              </article>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 border border-dashed border-white/10 rounded-2xl" id="no-projects-found">
              <span className="text-white/30 text-xs">no se encontraron proyectos en este rango. intenta mover la uf de presupuesto o cambiar filtros.</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
