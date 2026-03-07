"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    ],
  },
  {
    title: "Base de Datos",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    ],
  },
  {
    title: "Otros",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      {
        name: "Cloudinary",
        icon: "https://cdn.simpleicons.org/cloudinary/3448C5",
      },
    ],
  },
];

export default function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación al esperar a que el componente esté montado
  useEffect(() => setMounted(true), []);

  return (
    <section id="about" className="py-32 px-6 max-w-3xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="space-y-6 leading-relaxed text-lg">
          <h3 className="text-4xl font-bold text-foreground tracking-tight">
            Sobre mi
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted"
          >
            Soy{" "}
            <span className="text-foreground font-medium">
              Analista de Sistemas
            </span>{" "}
            y{" "}
            <span className="text-foreground font-medium">
              Desarrollador Full Stack
            </span>
            . Mi enfoque principal es entender las necesidades del negocio para
            transformarlas en soluciones digitales que funcionen de verdad. No
            me limito solo a escribir código; me apasiona participar en todo el
            ciclo de vida del software, desde el relevamiento de requerimientos
            hasta el despliegue final en producción.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted"
          >
            Cuento con experiencia desarrollando aplicaciones robustas,
            integrando el backend{" "}
            <span className="text-foreground font-medium">
              (Node.js y Django)
            </span>{" "}
            con interfaces de usuario modernas en{" "}
            <span className="text-foreground font-medium">React</span> y{" "}
            <span className="text-foreground font-medium">Next.js</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted"
          >
            Además, manejo bases de datos tanto relacionales{" "}
            <span className="text-foreground font-medium">(SQL)</span> como no
            relacionales{" "}
            <span className="text-foreground font-medium">(NoSQL)</span>, lo que
            me permite elegir y diseñar la arquitectura de datos más eficiente
            para cada proyecto. Mi objetivo es siempre construir sistemas
            escalables, seguros y, sobre todo, útiles para quien los usa día a
            día
          </motion.p>

          <div className="pt-8 border-t border-border-custom space-y-8">
            <h4 className="text-foreground font-bold uppercase text-xs tracking-widest">
              Herramientas
            </h4>

            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h5 className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
                  {category.title}
                </h5>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center gap-3 px-4 py-2 rounded-xl bg-foreground/[0.03] border border-border-custom hover:bg-foreground/[0.06] transition-all"
                    >
                      <img 
                        src={
                          mounted && resolvedTheme === 'dark'
                            ? skill.name === 'Next.js' 
                              ? 'https://cdn.simpleicons.org/nextdotjs/white' 
                              : skill.name === 'Django' 
                                ? 'https://cdn.simpleicons.org/django/white' 
                                : skill.icon
                            : skill.name === 'Next.js'
                              ? 'https://cdn.simpleicons.org/nextdotjs/black'
                              : skill.icon
                        } 
                        alt={skill.name} 
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
