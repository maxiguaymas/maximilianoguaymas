'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Github, Download, Code2, Terminal, Cpu, Database, Server } from 'lucide-react';

const techStack = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Terminal },
  { name: 'Node.js', icon: Cpu },
  { name: 'Django', icon: Server },
  { name: 'MySQL', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[90vh] flex-col md:flex-row items-center justify-between px-8 gap-12 pt-32 pb-20 md:py-20 scroll-mt-24">
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Hola, soy
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
           Maximiliano Guaymás <br />
          <span className="text-accent">Tec. Analista de Sistemas</span>
        </h1>
        <h2 className="text-xl md:text-2xl opacity-60 mt-2 font-light">
          Especializado en desarrollo Full-Stack
        </h2>

        {/* Skills Quick View */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {techStack.map((tech) => (
            <motion.div 
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium border border-border-custom rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-all"
            >
              <tech.icon size={14} className="text-accent" />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 md:justify-start">
          <motion.a 
            href="/CV.pdf" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-2xl shadow-foreground/10 hover:shadow-accent/40 hover:bg-accent hover:text-white"
          >
            Descargar CV <Download size={18} />
          </motion.a>

          <div className="flex gap-5 justify-center items-center">
            <a href="https://github.com/maxiguaymas" target="_blank" className="opacity-50 hover:opacity-100 hover:text-accent transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/maximiliano-guaymas-079b85220/" target="_blank" className="opacity-50 hover:opacity-100 hover:text-accent transition-all"><Linkedin size={24} /></a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Tu foto de perfil */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full rounded-[3rem] overflow-hidden border border-border-custom shadow-2xl"
        >
          <Image 
            src="/foto-perfil.jpg" // Guardala en public/mi-foto.jpg
            alt="Maximiliano"
            fill
            className="object-cover transition-all duration-700"
          />
        </motion.div>
        {/* Decoración sutil detrás */}
        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-border-custom rounded-[3rem]" />
      </motion.div>
    </section>
  );
}