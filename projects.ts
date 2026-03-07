export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión de Empresas",
    description: "Tesis de grado. Una solución empresarial robusta y escalable diseñada para optimizar procesos administrativos complejos.",
    stack: ["React", "Django REST", "PostgreSQL"],
    featured: true,
  },
  {
    id: 2,
    title: "ChoccoLovers E-commerce",
    description: "Plataforma de ventas con un catálogo interactivo de alta fidelidad y una experiencia de usuario (UX) optimizada para la conversión.",
    stack: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Portafolio Marketing Digital",
    description: "Web profesional de alto rendimiento con dominio propio, enfocada en la marca personal y captación de leads.",
    stack: ["React", "Framer Motion"],
  },
];