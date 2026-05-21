import { motion } from 'motion/react';
import { Quote, ExternalLink, Star } from 'lucide-react';

interface Testimonio {
  quote: string;
  autor: string;
  proyecto: string;
  iniciales: string;
}

export function Testimonials() {
  const testimonios: Testimonio[] = [
    {
      quote: 'encontramos nuestra casa ideal en vistas de san damián. ailleen nos acompañó desde la primera visita hasta la entrega de llaves. cero sorpresas, cero letra chica.',
      autor: 'familia muñoz cortés',
      proyecto: 'vistas de san damián ii · machalí',
      iniciales: 'mc'
    },
    {
      quote: 'invertimos en nexus vespucio buscando rentabilidad por arriendo. en 6 meses la propiedad ya está arrendada con un cap rate del 7% anual. ludmila nos asesoró en cada paso.',
      autor: 'rodrigo y carolina vergara',
      proyecto: 'nexus vespucio · la cisterna',
      iniciales: 'rv'
    },
    {
      quote: 'haras polo es exactamente lo que buscábamos: tranquilidad, espacio, naturaleza. noelia conoce machalí como nadie. volveríamos a comprar con costa pacífico sin dudarlo.',
      autor: 'felipe y javiera rodríguez',
      proyecto: 'haras polo de machalí',
      iniciales: 'fr'
    }
  ];

  return (
    <section className="bg-black py-20 md:py-28 px-6 border-t border-white/5 relative" id="testimonios">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3 block">testimonios verificados</span>
          <h2 className="hero-title text-[9vw] md:text-[5vw] font-medium text-white mb-4 lowercase">
            lo que dicen las familias
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto mb-4" />
          <p className="text-white/50 text-sm md:text-base font-light lowercase">
            +500 familias confían en costa pacífico desde 2009. testimonios reales que respaldan nuestra trayectoria.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, idx) => (
            <motion.div
              key={t.autor}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.01)] transition-all duration-300"
              id={`testimonio-card-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote size={24} className="text-white/25" />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={11} className="text-white/80 fill-white" />
                    ))}
                  </div>
                </div>

                <p className="text-white/85 text-[13px] md:text-sm leading-relaxed font-light mb-6 lowercase">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="h-px bg-white/5 mb-4" />
                <div className="flex items-center gap-3">
                  {/* Avatar Circular */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-white/50 select-none uppercase">
                    {t.iniciales}
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-medium tracking-wide lowercase">
                      {t.autor}
                    </h4>
                    <p className="text-white/40 text-[10px] mt-0.5 lowercase">
                      {t.proyecto}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="mt-16 text-center">
          <a
            href="https://maps.google.com" // Link placeholder to google maps / business representation
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black text-xs uppercase tracking-widest font-normal rounded-full px-7 py-3 py-3.5 hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg active:scale-95 duration-200"
          >
            <span>ver más opiniones en google</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
