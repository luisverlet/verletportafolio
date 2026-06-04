import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: "mentesegura-mobile",
    title: "MenteSegura",
    category: "Bienestar estudiantil",
    description:
      "Plataforma web para acompañar el bienestar estudiantil mediante evaluaciones clínicas como PHQ-9, seguimiento de respuestas y cálculo automatizado de riesgo en tiempo real.",
    tags: ["React", "TypeScript", "Context API", "REST API", "Vercel"],
    image: "/images/projects/mentesegura-mobile.jpg",
    demoUrl: "https://mente-segura-git-develop-luisverlets-projects.vercel.app",
    featured: true
  },
  {
    id: "jookerp-demand",
    title: "JookERP",
    category: "Gestión empresarial",
    description:
      "ERP desarrollado para organizar procesos internos, centralizar información operativa y apoyar decisiones empresariales con módulos conectados, servicios backend y flujos claros de trabajo.",
    tags: ["Python", "Prophet", "Docker", "REST API", "Next.js"],
    image: "/images/projects/jookerp-forecast.jpg",
    featured: true
  },
  {
    id: "sistema-firmas",
    title: "Sistema de Firmas Digitales",
    category: "Proyecto QA",
    description:
      "Plataforma orientada a gestionar, validar y documentar firmas digitales dentro de procesos institucionales, priorizando trazabilidad, seguridad e integridad documental.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/images/projects/sistema-firmas.jpg",
    featured: false
  }
];
