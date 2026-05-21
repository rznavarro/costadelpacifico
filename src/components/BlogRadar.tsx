import { motion } from 'motion/react';
import { ArrowRight, Newspaper, Bookmark } from 'lucide-react';

interface Article {
  categoria: 'inversión' | 'mercado' | 'asesoría';
  titulo: string;
  excerpt: string;
  imagen: string;
  fecha: string;
}

export function BlogRadar() {
  const articulos: Article[] = [
    {
      categoria: 'inversión',
      titulo: 'guía completa para invertir en uf en 2026',
      excerpt: 'por qué el resguardo en unidades de fomento sigue liderando el mercado inmobiliario chileno frente al clp, y cómo calcular el retorno real anual.',
      imagen: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80',
      fecha: '20 de mayo, 2026'
    },
    {
      categoria: 'mercado',
      titulo: 'machalí: la nueva zona premium de la vi región',
      excerpt: 'la consolidación urbana del durban, conectividad vial de alto nivel y el gran crecimiento habitacional que posiciona a la comuna en el tope de la plusvalía central.',
      imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80',
      fecha: '12 de mayo, 2026'
    },
    {
      categoria: 'asesoría',
      titulo: 'qué revisar antes de firmar tu promesa de compraventa',
      excerpt: 'desde los plazos de entrega hasta las pólizas de garantía por pie diferido. un checklist práctico y legal indispensable antes de estampar la firma.',
      imagen: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=500&q=80',
      fecha: '04 de mayo, 2026'
    }
  ];

  return (
    <section className="bg-black py-20 md:py-28 px-6 border-t border-white/5 relative" id="blog">
      <div className="max-w-6xl mx-auto">
        
        {/* Header con layout flex horizontal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] block mb-2">radar inmobiliario</span>
            <h2 className="hero-title text-3xl md:text-5xl font-medium text-white lowercase">
              artículos del mercado
            </h2>
          </div>
          
          <div className="hidden md:block">
            <span className="text-white/40 hover:text-white text-xs lowercase border-b border-white/10 pb-1 font-light transition-colors cursor-pointer flex items-center gap-1.5 select-none">
              <Newspaper size={12} />
              <span>suscribirse a boletín bursátil</span>
            </span>
          </div>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articulos.map((art, idx) => (
            <motion.article
              key={art.titulo}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              id={`article-card-${idx}`}
            >
              {/* Imagen del artículo */}
              <div className="aspect-[16/10] overflow-hidden bg-neutral-900 select-none relative">
                <img
                  src={art.imagen}
                  alt={art.titulo}
                  loading="lazy"
                  referrerPolicy="referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out p-0"
                />
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Micro Category Overlay */}
                <span className="absolute top-4 left-4 bg-black/85 backdrop-blur border border-white/15 text-[10px] text-white/80 rounded-full px-2.5 py-1 uppercase tracking-wider font-light">
                  {art.categoria}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base md:text-lg font-medium text-white lowercase leading-snug group-hover:text-white/90 transition-colors mb-3 line-clamp-2">
                    {art.titulo}
                  </h3>
                  
                  <p className="text-white/50 text-[13px] leading-relaxed font-light lowercase line-clamp-3 mb-6">
                    {art.excerpt}
                  </p>
                </div>

                {/* Footer card */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-white/30 lowercase font-light">
                    {art.fecha}
                  </span>
                  
                  <span className="text-xs text-white/60 group-hover:text-white transition-colors flex items-center gap-1.5 lowercase">
                    <span>leer artículo</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
