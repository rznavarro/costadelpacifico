import { ArrowRight } from 'lucide-react';

interface InvestorSectionProps {
  onAdvisorClick: () => void;
}

export function InvestorSection({ onAdvisorClick }: InvestorSectionProps) {
  return (
    <section 
      className="bg-[#0A0A0A] py-20 md:py-28 border-t border-white/5 relative" 
      id="inversionistas"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16" id="investor-header">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3">comercial & multifamily</span>
          <h2 className="hero-title text-[8vw] md:text-[5vw] font-medium text-white mb-4 lowercase text-center">
            invierte inteligente
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-md font-light lowercase">
            proyectos estratégicos diseñados con rentabilidad verificada en zonas de altísima plusvalía
          </p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center" id="investor-grid">
          
          {/* Left Column: Core arguments */}
          <div className="space-y-8 md:space-y-10" id="investor-arguments">
            
            {/* Arguement 1 */}
            <div className="group" id="arg-1">
              <div className="text-3xl font-light text-white/10 tracking-tight select-none select-none">
                01
              </div>
              <h3 className="text-base font-medium text-white mt-1.5 mb-2 lowercase">
                plusvalía sostenida
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light lowercase">
                nuestros proyectos emblemáticos en machalí, rancagua y rm han mostrado una plusvalía promedio consolidada de 8-12% anual durante los últimos 5 años.
              </p>
            </div>

            {/* Arguement 2 */}
            <div className="group" id="arg-2">
              <div className="text-3xl font-light text-white/10 tracking-tight select-none select-none">
                02
              </div>
              <h3 className="text-base font-medium text-white mt-1.5 mb-2 lowercase">
                arriendo inmediato
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light lowercase">
                proyectos residenciales premium como nexus vespucio en la cisterna gozan de una acelerada absorción de alquiler y altísima tasa de ocupación por su alta conectividad de transporte público y comercial.
              </p>
            </div>

            {/* Arguement 3 */}
            <div className="group" id="arg-3">
              <div className="text-3xl font-light text-white/10 tracking-tight select-none select-none">
                03
              </div>
              <h3 className="text-base font-medium text-white mt-1.5 mb-2 lowercase">
                asesoría completa
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light lowercase">
                te asesoramos de manera integral en calcular tu retorno anual, cap rate real y la estructuración del financiamiento para tu apalancamiento bancario óptimo.
              </p>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <button
                onClick={onAdvisorClick}
                className="w-full md:w-auto bg-white text-black text-xs uppercase tracking-widest font-normal rounded-full px-8 py-4 hover:bg-neutral-200 transition-all active:scale-95 duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:shadow-sm"
              >
                hablar con un asesor
                <ArrowRight size={13} />
              </button>
            </div>

          </div>

          {/* Right Column: Premium High Quality Photo */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 group shadow-2xl" id="investor-picture-frame">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
              alt="Costa Pacifico Premium Architecture" 
              className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none p-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            
            {/* Absolute caption */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/75 backdrop-blur-md rounded-xl border border-white/10">
              <span className="text-[10px] text-white/35 uppercase tracking-widest block mb-1">destacado inversión</span>
              <span className="text-white text-xs font-normal tracking-wide lowercase block">diseño de vanguardia en condominios cerrados de baja densidad</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
