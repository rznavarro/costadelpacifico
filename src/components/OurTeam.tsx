import { useRef } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

interface Executive {
  nombre: string;
  cargo: string;
  telefono: string;
  telefonoLlamada: string;
  proyectos: string[];
  bio: string;
  imagenUrl: string;
}

export function OurTeam() {
  const ejecutivas: Executive[] = [
    {
      nombre: 'ailleen muñoz',
      cargo: 'ejecutiva senior',
      telefono: '+56 9 5202 7697',
      telefonoLlamada: '+56952027697',
      proyectos: ['vistas de san damián ii', 'haras polo de machalí'],
      bio: '+10 años en mercado de la vi región',
      imagenUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80'
    },
    {
      nombre: 'ludmila dávila c.',
      cargo: 'asesora comercial',
      telefono: '+56 9 6661 8238',
      telefonoLlamada: '+56966618238',
      proyectos: ['edificio nexus vespucio', 'los prunos'],
      bio: 'especialista en proyectos residenciales rm',
      imagenUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80'
    },
    {
      nombre: 'claudy aponte',
      cargo: 'asesora comercial',
      telefono: '+56 9 3860 7327',
      telefonoLlamada: '+56938607327',
      proyectos: ['vista sur iv'],
      bio: 'atención personalizada en rancagua y sectores aledaños',
      imagenUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80'
    },
    {
      nombre: 'noelia osorio',
      cargo: 'asesora comercial',
      telefono: '+56 9 3439 6154',
      telefonoLlamada: '+56934396154',
      proyectos: ['haras polo de machalí', 'ayres de pinares'],
      bio: 'experta en condominios cerrados en machalí',
      imagenUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 px-6 border-t border-white/5 relative" id="equipo">
      <div className="max-w-6xl mx-auto">
        
        {/* Header centrado */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3">atención exclusiva</span>
          <h2 className="hero-title text-[9vw] md:text-[5vw] font-medium text-white mb-4 lowercase">
            nuestro equipo
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-xl font-light lowercase">
            asesoras inmobiliarias especializadas. cada proyecto tiene una ejecutiva dedicada que te acompaña desde la primera visita hasta la entrega de llaves.
          </p>
        </div>

        {/* Grid de ejecutivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ejecutivas.map((exec, idx) => {
            const waMsg = encodeURIComponent(
              `hola ${exec.nombre}, estoy interesado en conocer más sobre los proyectos de costa pacífico.`
            );
            const waUrl = `https://wa.me/${exec.telefonoLlamada.replace(/\+/g, '')}?text=${waMsg}`;

            return (
              <motion.article
                key={exec.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.01)] transition-all duration-300 group flex flex-col h-full"
                id={`exec-card-${idx}`}
              >
                {/* Imagen */}
                <div className="aspect-[4/5] relative overflow-hidden bg-neutral-900 select-none">
                  <img
                    src={exec.imagenUrl}
                    alt={exec.nombre}
                    loading="lazy"
                    referrerPolicy="referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-out p-0"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                </div>

                {/* Cuerpo */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-base font-medium text-white tracking-tight lowercase">
                      {exec.nombre}
                    </h3>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                      {exec.cargo}
                    </p>
                    <p className="text-white/50 text-[11px] font-light mt-2 leading-relaxed lowercase">
                      {exec.bio}
                    </p>
                  </div>

                  {/* Proyectos a cargo */}
                  <div className="mt-auto pt-3 border-t border-white/5">
                    <span className="text-[9px] uppercase tracking-wider text-white/30 block mb-1.5 lowercase">
                      proyectos asignados:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exec.proyectos.map((proy) => (
                        <span
                          key={proy}
                          className="bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 text-[10px] text-white/70 lowercase font-light"
                        >
                          {proy}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-white/5 my-3" />

                    {/* Bloque contacto */}
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={`tel:${exec.telefonoLlamada}`}
                        className="flex items-center gap-1 text-white/35 hover:text-white/60 text-[11px] transition-colors lowercase"
                      >
                        <Phone size={11} />
                        <span>{exec.telefono}</span>
                      </a>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/5 hover:bg-white text-white/80 hover:text-black hover:font-normal rounded-lg px-2.5 py-1.5 text-[11px] border border-white/10 transition-all cursor-pointer"
                      >
                        <MessageCircle size={11} />
                        <span>whatsapp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
