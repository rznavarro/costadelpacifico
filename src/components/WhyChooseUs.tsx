export function WhyChooseUs() {
  const cards = [
    {
      num: '01',
      title: 'experiencia consolidada',
      desc: 'más de 15 años liderando el desarrollo inmobiliario en la zona central de chile. cientos de familias confían en nosotros.'
    },
    {
      num: '02',
      title: 'presencia estratégica',
      desc: 'proyectos exclusivos en la región metropolitana, v y vi región. ubicaciones seleccionadas por su plusvalía y calidad de vida.'
    },
    {
      num: '03',
      title: 'arquitectura de alto estándar',
      desc: 'diseño contemporáneo, funcionalidad superior y materiales de excelencia en cada proyecto que desarrollamos.'
    },
    {
      num: '04',
      title: 'gestión transparente',
      desc: 'proceso de compra claro, sin letra chica. te acompañamos desde la cotización hasta la entrega de llaves.'
    },
    {
      num: '05',
      title: 'sustentabilidad integrada',
      desc: 'proyectos concebidos en armonía con el paisaje y la vida moderna. eficiencia energética y espacios verdes.'
    },
    {
      num: '06',
      title: 'facilidades de pago',
      desc: 'planes de financiamiento flexibles, asesoría en créditos hipotecarios y acompañamiento bancario personalizado.'
    }
  ];

  return (
    <section className="bg-black py-20 md:py-28 text-white border-t border-white/5 relative" id="nosotros">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16" id="why-header">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3">valores corporativos</span>
          <h2 className="hero-title text-[8vw] md:text-[5vw] font-medium text-white mb-4 lowercase text-center">
            por qué elegirnos
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-md font-light lowercase">
            más de 15 años construyendo solidez, transparencia y plusvalía residencial garantizada
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto" id="why-grid">
          {cards.map((c) => (
            <div
              key={c.num}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/25 hover:shadow-[0_8px_30px_rgba(255,255,255,0.01)] transition-all duration-300"
              id={`why-card-${c.num}`}
            >
              {/* Card number */}
              <div className="text-4xl font-light text-white/10 mb-4 tracking-tight select-none select-none">
                {c.num}
              </div>

              {/* Card title */}
              <h3 className="text-base font-medium text-white mb-3 tracking-tight lowercase">
                {c.title}
              </h3>

              {/* Card description */}
              <p className="text-sm text-white/50 leading-relaxed font-light lowercase">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
