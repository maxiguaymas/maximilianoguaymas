'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold tracking-tight">Proyectos Destacados</h2>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`bento-card group flex flex-col overflow-hidden !p-0 ${
              project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
            }`}
          >
            {/* Contenedor de Imagen */}
            <div className="relative w-full h-64 md:h-80 bg-muted/10 overflow-hidden">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Contenido de Texto */}
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase font-bold tracking-tighter px-2 py-1 border border-foreground/10 rounded-md opacity-40">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-medium tracking-tight mb-2">{project.title}</h3>
              <p className="text-sm font-light opacity-50 leading-relaxed mb-6">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold uppercase tracking-widest inline-block border-b border-foreground/20 pb-1"
              >
                {project.id === 1 ? 'Ir a la demo' : 'Ir a la web'} →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}