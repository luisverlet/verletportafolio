export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "mentesegura-mobile",
    title: "MenteSegura Mobile",
    description: "Aplicaci\u00f3n m\u00f3vil desarrollada en React Native y Expo para el seguimiento del bienestar estudiantil. Incorpora evaluaciones cl\u00ednicas como el PHQ-9 con c\u00e1lculo de riesgo automatizado en tiempo real.",
    tags: ["React Native", "TypeScript", "Expo", "Context API", "Rest API"],
    image: "/images/projects/mentesegura-mobile.jpg",
    featured: true
  },
  {
    id: "jookerp-demand",
    title: "JookERP - M\u00f3dulo de Demanda",
    description: "Microservicio integrado en un ecosistema ERP para la predicci\u00f3n de demanda de inventarios. Implementa modelos de series temporales basados en Prophet de Meta.",
    tags: ["Python", "Prophet", "Docker", "REST API", "Next.js"],
    image: "/images/projects/jookerp-forecast.jpg",
    featured: true
  },
  {
    id: "sistema-firmas",
    title: "Sistema de Firmas Digitales",
    description: "Plataforma web para la gesti\u00f3n y validaci\u00f3n de firmas digitales dentro de procesos institucionales, garantizando seguridad e integridad documental.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/images/projects/sistema-firmas.jpg",
    featured: false
  }
];
