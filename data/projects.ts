export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string; // Ruta a la imagen en /public
  size: "large" | "small";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión de Empleados",
    description: "Proyecto final de Tecnicatura para la Empresa Nuevas Energias(Salta).",
    tags: ["React", "Django Api Rest Framework", "PostgreSQL"],
    link: "https://drive.google.com/file/d/1dTjXSjOPdl7xDg8Tdw7pTpvoUzz11aGb/view?usp=sharing",
    image: "/proyectos/nextcms.png", // Guardala en public/proyectos/tesis.png
    size: "large"
  },
  {
    id: 2,
    title: "ChoccoLovers",
    description: "Catalogo de productos para emprendimiento de Salta, con panel de administracion para que el cliente pueda manejar su catalogo.",
    tags: ["React", "Tailwind CSS", "Firebase", "Cloudinary"],
    link: "https://choccolovers.com.ar",
    image: "/proyectos/choccolovers.png",
    size: "small"
  },
  {
    id: 3,
    title: "Portafolio Marketing Digital",
    description: "SPA para cliente que trabaja en marketing digital.",
    tags: ["React", "Tailwind CSS"],
    link: "https://celestevillagran.com.ar",
    image: "/proyectos/portafolio-marketing.png",
    size: "small"
  },
  {
    id: 4,
    title: "Next CMS",
    description: "Proyecto sistema de gestión de contenidos (CMS) moderno utilizando Next.js para optimizar el rendimiento y SEO.",
    tags: ["Next.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
    link: "https://next-cms-orcin-mu.vercel.app/",
    image: "/proyectos/nextcms.png",
    size: "small"
  },
];