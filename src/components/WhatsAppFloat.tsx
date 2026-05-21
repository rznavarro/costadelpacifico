import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const waMsg = encodeURIComponent(
      'hola, me interesa conocer más sobre las propiedades premium de costa pacífico y recibir asesoría personalizada.'
    );
    window.open(`https://wa.me/56952027697?text=${waMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 group flex items-center"
          id="whatsapp-float-widget"
        >
          {/* Tooltip on left (desktop only) */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 mr-2 bg-[#111] border border-white/10 px-3.5 py-2 rounded-xl text-[11px] text-white/90 shadow-2xl transition-all duration-300 md:block hidden whitespace-nowrap select-none lowercase">
            hablar por whatsapp
          </div>

          <button
            onClick={handleClick}
            className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center cursor-pointer shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] active:scale-95 transition-all duration-300 ease-out border border-white/10"
            aria-label="Contactar por WhatsApp"
          >
            {/* Custom pulsating ring effect */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-[#25D366]"
              style={{
                animation: 'pulse-ring 2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite',
                pointerEvents: 'none'
              }}
            />

            {/* Custom pulse CSS loaded in style */}
            <style>{`
              @keyframes pulse-ring {
                0% {
                  transform: scale(0.95);
                  opacity: 1;
                }
                100% {
                  transform: scale(1.6);
                  opacity: 0;
                }
              }
            `}</style>
            
            <MessageCircle size={26} className="fill-white stroke-[#25D366]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
