import { useIndicadores } from '../hooks/useIndicadores';
import { Landmark, TrendingUp, DollarSign } from 'lucide-react';

export function IndicatorsTicker() {
  const { data, loading } = useIndicadores();

  const formatCLP = (val: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(val).toLowerCase(); // matches the lowercase aesthetic
  };

  return (
    <section 
      className="bg-black border-y border-white/5 py-4 overflow-hidden relative"
      id="inversionistas" // targets indicators / inversionistas anchor
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Real-time contextual label */}
        <div className="flex items-center gap-2 text-white/40 text-xs tracking-wider" id="ticker-label">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/20 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/40"></span>
          </span>
          <span className="uppercase tracking-[0.15em] text-[10px]">indicadores financieros uf clp</span>
        </div>

        {/* Right Side: Centered Indicators list */}
        <div 
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs font-normal"
          id="ticker-content"
        >
          {loading ? (
            <div className="flex items-center gap-4 animate-pulse">
              <span className="h-3 w-28 bg-white/10 rounded" />
              <span className="h-3 w-px bg-white/10" />
              <span className="h-3 w-28 bg-white/10 rounded" />
              <span className="h-3 w-px bg-white/10" />
              <span className="h-3 w-28 bg-white/10 rounded" />
            </div>
          ) : data ? (
            <>
              {/* UF */}
              <div className="flex items-center gap-2 group cursor-help transition-all duration-300">
                <Landmark size={12} className="text-white/30" />
                <span className="text-white/40 uppercase tracking-widest text-[10px]">uf</span>
                <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                  {formatCLP(data.uf)}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-3.5 bg-white/10" />

              {/* DÓLAR */}
              <div className="flex items-center gap-2 group cursor-help transition-all duration-300">
                <DollarSign size={12} className="text-white/30" />
                <span className="text-white/40 uppercase tracking-widest text-[10px]">usd</span>
                <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                  {formatCLP(data.dolar)}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-3.5 bg-white/10" />

              {/* UTM */}
              <div className="flex items-center gap-2 group cursor-help transition-all duration-300">
                <TrendingUp size={12} className="text-white/30" />
                <span className="text-white/40 uppercase tracking-widest text-[10px]">utm</span>
                <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                  {formatCLP(data.utm)}
                </span>
              </div>
            </>
          ) : (
            <span className="text-white/40">error al cargar indicadores</span>
          )}
        </div>

        {/* Small descriptive timestamp */}
        <div className="text-[9px] text-white/35 font-light" id="ticker-time">
          banco central de chile • {new Date().toLocaleDateString('es-CL')}
        </div>

      </div>
    </section>
  );
}
