import { useState } from 'react';
import { useIndicadores } from '../hooks/useIndicadores';
import { Calculator, Percent, Landmark, HelpCircle, ArrowRight } from 'lucide-react';

interface DividendCalculatorProps {
  onQuoteClick: () => void;
}

export function DividendCalculator({ onQuoteClick }: DividendCalculatorProps) {
  const { data: indicadores } = useIndicadores();
  
  // Real active UF value or fallback
  const ufValor = indicadores?.uf || 40146;

  // Slider inputs state
  const [precioUF, setPrecioUF] = useState<number>(5650);
  const [piePct, setPiePct] = useState<number>(20);
  const [plazoAnios, setPlazoAnios] = useState<number>(20);
  const [tasaAnual, setTasaAnual] = useState<number>(4.5);

  const formatCLP = (val: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(val).toLowerCase();
  };

  const formatUFNum = (val: number) => {
    return new Intl.NumberFormat('es-CL').format(val);
  };

  // Math variables
  const precioClp = precioUF * ufValor;
  const pieClp = precioClp * (piePct / 100);
  const pieUF = precioUF * (piePct / 100);
  const creditoClp = precioClp - pieClp;
  const creditoUF = precioUF - pieUF;

  // Financial formula
  const calcularDividendo = (monto: number, tasa: number, plazo: number): number => {
    const tasaMensual = (tasa / 100) / 12;
    const n = plazo * 12;

    if (tasaMensual === 0) return monto / n;

    const factor = Math.pow(1 + tasaMensual, n);
    return (monto * tasaMensual * factor) / (factor - 1);
  };

  const dividendoEstimado = calcularDividendo(creditoClp, tasaAnual, plazoAnios);

  return (
    <section className="bg-neutral-950 py-20 md:py-28 text-white border-t border-white/5 relative" id="calculadora">
      
      {/* Decorative center accent line */}
      <div className="absolute top-0 left-[25%] w-[1px] h-10 bg-white/5" />

      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16" id="calc-header">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3">simulador financiero</span>
          <h2 className="hero-title text-[8vw] md:text-[5vw] font-medium text-white mb-4 lowercase text-center">
            ¿cuánto sería tu dividendo?
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-lg font-light lowercase">
            simula tu crédito hipotecario con datos del mercado habitacional chileno actualizado en tiempo real
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden" id="calculator-box">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input 1 - Precio Propiedad (UF) */}
            <div className="flex flex-col">
              <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                precio en uf
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1000"
                  max="50000"
                  value={precioUF || ''}
                  onChange={(e) => setPrecioUF(Number(e.target.value))}
                  placeholder="ej: 5.650"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-lg text-white font-medium focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
                />
              </div>
              <span className="text-[10px] text-white/25 mt-1.5 font-light lowercase">
                uf actual = {formatCLP(ufValor)} clp (valor banco central)
              </span>
            </div>

            {/* Input 2 - Pie (Porcentaje Slider) */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] text-white/40 uppercase tracking-widest lowercase">
                  pie a pagar (%)
                </label>
                <span className="text-sm font-medium text-white">{piePct}%</span>
              </div>
              <div className="py-2 flex items-center">
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="5"
                  value={piePct}
                  onChange={(e) => setPiePct(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-[9px] text-white/20 mt-1 select-none font-mono">
                <span>10% ({formatUFNum(precioUF * 0.1)} uf)</span>
                <span>20% ({formatUFNum(precioUF * 0.2)} uf)</span>
                <span>40% ({formatUFNum(precioUF * 0.4)} uf)</span>
              </div>
            </div>

            {/* Input 3 - Plazo (Años buttons) */}
            <div className="flex flex-col">
              <label className="text-[10px] text-white/40 uppercase tracking-widest mb-3.5 lowercase">
                plazo de financiamiento (años)
              </label>
              <div className="flex gap-2">
                {[15, 20, 25, 30].map((anio) => (
                  <button
                    key={anio}
                    type="button"
                    onClick={() => setPlazoAnios(anio)}
                    className={`flex-1 rounded-lg py-3 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      plazoAnios === anio
                        ? 'bg-white text-black font-medium'
                        : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {anio} años
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4 - Tasa Anual (%) */}
            <div className="flex flex-col">
              <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                tasa de interés anual (%)
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="15"
                value={tasaAnual || ''}
                onChange={(e) => setTasaAnual(Number(e.target.value))}
                placeholder="ej: 4.5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-lg text-white font-medium focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
              />
              <span className="text-[10px] text-white/25 mt-1.5 font-light flex items-center gap-1">
                <HelpCircle size={11} />
                <span>tasa referencial estimada del mercado hipotecario actual</span>
              </span>
            </div>

          </div>

          {/* Divider */}
          <div className="h-[1px] bg-white/15 my-8 md:my-10" />

          {/* RESULTS DISPLAY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left" id="calc-results-block">
            
            {/* Col 1 - Crédito hipotecario */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 md:p-5">
              <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1.5 font-light block">
                crédito hipotecario ({formatUFNum(creditoUF)} uf)
              </div>
              <div className="text-xl md:text-2xl font-light text-white tracking-tight transition-all duration-300">
                {formatCLP(creditoClp)}
              </div>
              <span className="text-[9px] text-white/20 mt-1 block lowercase">monto financiado por banco</span>
            </div>

            {/* Col 2 - Dividendo mensual */}
            <div className="bg-white/[0.05] border border-white/10 rounded-xl p-4 md:p-5 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/10 text-white/70 text-[8px] uppercase tracking-wider rounded px-1.5 py-0.5 select-none font-medium">
                estimado
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1.5 font-light block">
                dividendo mensual
              </div>
              <div className="text-xl md:text-2xl font-medium text-white tracking-tight transition-all duration-300">
                {formatCLP(dividendoEstimado)}
              </div>
              <span className="text-[9px] text-white/25 mt-1 block lowercase">valor dividendo base (sin seguros)</span>
            </div>

            {/* Col 3 - Pie a pagar */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 md:p-5">
              <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1.5 font-light block">
                pie / ahorro propio ({formatUFNum(pieUF)} uf)
              </div>
              <div className="text-xl md:text-2xl font-light text-white tracking-tight transition-all duration-300">
                {formatCLP(pieClp)}
              </div>
              <span className="text-[9px] text-white/20 mt-1 block lowercase">monto inicial de su propio pie</span>
            </div>

          </div>

          {/* CTA Trigger */}
          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={onQuoteClick}
              className="w-full bg-white text-black text-xs uppercase tracking-widest font-normal rounded-xl py-4 hover:bg-neutral-200 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-lg active:shadow-sm"
              id="calc-action"
            >
              quiero cotizar este proyecto
              <ArrowRight size={13} />
            </button>
            <p className="text-[10px] text-white/20 mt-3 font-light max-w-xs text-center select-none lowercase">
              * simulación de carácter netamente referencial. las condiciones finales están sujetas a evaluación bancaria de su perfil crediticio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
