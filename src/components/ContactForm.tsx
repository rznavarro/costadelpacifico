import { useState, useEffect, FormEvent } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, User, Mail, Calendar, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  selectedProject: string; 
  onResetSelectedProject: () => void;
}

export function ContactForm({ selectedProject, onResetSelectedProject }: ContactFormProps) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [proyecto, setProyecto] = useState('todos');
  const [tipoContacto, setTipoContacto] = useState('información general');
  const [mensaje, setMensaje] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Sync selected project from parent (e.g. catalog click)
  useEffect(() => {
    if (selectedProject) {
      if (selectedProject === 'general') {
        setProyecto('todos');
      } else {
        setProyecto(selectedProject);
      }
    }
  }, [selectedProject]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !telefono.trim()) {
      return;
    }

    setLoading(true);

    // Simulate luxury API integration
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setShowToast(true);

      // Auto dismiss toast after 4s
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);

      // Reset fields
      setNombre('');
      setEmail('');
      setTelefono('');
      setMensaje('');
      onResetSelectedProject();
    }, 1100);
  };

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5 relative" id="contacto">
      
      {/* Decorative center accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10" />

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-3xl mx-auto" id="contact-header">
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] mb-3 block">agenda una visita</span>
          <h2 className="hero-title text-[9vw] md:text-[5vw] font-medium text-white mb-4 lowercase">
            habla con nosotros
          </h2>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-xl font-light lowercase">
            te respondemos en menos de 24 horas. sin compromiso, sin costo. solo información clara sobre el proyecto que te interesa.
          </p>
        </div>

        {/* Form Main Box */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative" id="contact-form-box">
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="py-12 flex flex-col items-center text-center" 
                id="success-submitted"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-white animate-pulse" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white lowercase mb-2">¡solicitud enviada con éxito!</h3>
                <p className="text-white/50 text-xs md:text-sm max-w-md lowercase font-light mb-8 leading-relaxed">
                  hemos recibido tus datos. la ejecutiva de ventas asignada a tu consulta se pondrá en contacto a la brevedad para entregarte el dossier comercial exclusivo.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-white text-black text-xs uppercase tracking-widest font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                
                {/* Nombre completo */}
                <div className="flex flex-col">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                    nombre completo *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <User size={13} />
                    </span>
                    <input
                      required
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="ej: cristóbal valdés"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                    correo electrónico *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <Mail size={13} />
                    </span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ej: c.valdes@inversiones.cl"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                {/* Telefono/WhatsApp */}
                <div className="flex flex-col">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                    teléfono / whatsapp *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <Phone size={13} />
                    </span>
                    <input
                      required
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="+56 9 ..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                {/* Proyecto de interés select */}
                <div className="flex flex-col">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                    proyecto de interés
                  </label>
                  <select
                    value={proyecto}
                    onChange={(e) => setProyecto(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white select-none appearance-none cursor-pointer focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
                  >
                    <option value="todos">todos los proyectos</option>
                    <option value="Vistas de San Damián II">vistas de san damián ii</option>
                    <option value="Edificio Nexus Vespucio">edificio nexus vespucio</option>
                    <option value="Haras Polo de Machalí">haras polo de machalí</option>
                    <option value="Vista Sur IV">vista sur iv</option>
                    <option value="Los Prunos">los prunos</option>
                  </select>
                </div>

                {/* Tipo de contacto select */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                    tipo de contacto o requerimiento
                  </label>
                  <select
                    value={tipoContacto}
                    onChange={(e) => setTipoContacto(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white select-none appearance-none cursor-pointer focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all"
                  >
                    <option value="información general">información general</option>
                    <option value="visita presencial">visita presencial agendada</option>
                    <option value="cotización formal">cotización formal de unidad</option>
                    <option value="asesoría financiera">asesoría de crédito / financiamiento</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 lowercase">
                    mensaje adicional (opcional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-white/30">
                      <MessageSquare size={13} />
                    </span>
                    <textarea
                      rows={4}
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="cuéntanos qué buscas, presupuesto aproximado en uf, timing de la decisión..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-white/30 focus:outline-none focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="md:col-span-2 mt-4 flex flex-col items-center">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-white hover:bg-neutral-200 text-black text-xs uppercase tracking-widest font-normal rounded-xl py-4 transition-all duration-250 ease-out cursor-pointer flex items-center justify-center gap-2 font-medium active:scale-[0.99]"
                  >
                    <span>{loading ? 'procesando de forma segura...' : 'enviar solicitud de contacto'}</span>
                    <Send size={11} />
                  </button>
                  
                  {/* Micro copy */}
                  <span className="text-[10px] text-white/30 mt-4 font-light text-center flex items-center gap-1.5 lowercase">
                    <span>respuesta en menos de 24 horas hábiles · sin costo · sin compromiso</span>
                  </span>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Floating success toast bottom-right (independent from page scroll) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 bg-[#111] border border-white/20 rounded-xl p-4 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <div className="flex flex-col">
              <span className="text-white text-xs font-medium lowercase">listo. te contactaremos pronto.</span>
              <span className="text-white/40 text-[9px] lowercase">solicitud registrada en costa pacífico</span>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-auto text-white/30 hover:text-white text-xs cursor-pointer px-1 pr-0"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
