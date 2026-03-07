'use client';

import { motion } from 'framer-motion';
import { projects } from './data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold mb-12 tracking-tight">Proyectos Seleccionados</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-card p-8 flex flex-col justify-end transition-all hover:border-accent/30 ${
              project.featured ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'
            }`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className={`${project.featured ? 'text-3xl' : 'text-xl'} font-bold mb-2`}>
                {project.title}
              </h4>
              <p className="text-muted text-sm line-clamp-2 group-hover:text-foreground/80 transition-colors">
                {project.description}
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7l10 10M17 7H7v10" /></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}