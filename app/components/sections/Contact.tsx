'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('pending');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
      (event.target as HTMLFormElement).reset();
      // Volver al estado inicial después de unos segundos
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Ocurrió un error inesperado.');
    }
  }

  return (
    <section id="contacto" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Columna Izquierda: Info Profesional */}
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-bold tracking-tight mb-6">Hablemos.</h3>
              <p className="text-muted text-lg leading-relaxed">
                Estoy abierto a nuevas oportunidades, colaboraciones o simplemente a charlar sobre tecnología. 
                Si tienes un buen desafio, me gustaria escucharlo.
              </p>
            </div>
           <div className="space-y-6">
              <a href="mailto:maximiliano.guaymas480@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-40">Email</p>
                  <p className="font-medium">maximiliano.guaymas480@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/maximiliano-guaymas-079b85220/" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-40">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/maximiliano-guaymas-079b85220</p>
                </div>
              </a>

              <a href="https://github.com/maxiguaymas" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-40">GitHub</p>
                  <p className="font-medium">github.com/maxiguaymas</p>
                </div>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border-custom p-8 md:p-12 rounded-[2.5rem] shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Nombre</label>
                  <input name="name" required type="text" className="w-full p-4 rounded-2xl bg-foreground/[0.03] border border-border-custom focus:border-foreground/30 outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Email</label>
                  <input name="email" required type="email" className="w-full p-4 rounded-2xl bg-foreground/[0.03] border border-border-custom focus:border-foreground/30 outline-none transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Mensaje</label>
                <textarea name="message" required rows={5} className="w-full p-4 rounded-2xl bg-foreground/[0.03] border border-border-custom focus:border-foreground/30 outline-none transition-all resize-none" placeholder="¿En qué puedo ayudarte?"></textarea>
              </div>

              {status === 'success' && (
                <p className="text-green-500 text-sm font-medium animate-pulse">¡Mensaje enviado con éxito! Revisá tu casilla de correo.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
              )}

              <button 
                type="submit"
                disabled={status === 'pending'}
                className="w-full py-5 bg-foreground text-background font-bold rounded-2xl shadow-2xl shadow-foreground/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'pending' ? 'Enviando...' : 'Enviar Mensaje'}
                {status !== 'pending' && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section> 
   
  );
}
