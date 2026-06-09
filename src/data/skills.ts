import type { SkillGroup } from '../types/content';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces ordenadas, rápidas y responsivas, pensadas para usuarios reales y flujos claros.',
    items: ['React', 'Astro', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    description: 'APIs, servicios y lógica de negocio construidos para conectar datos, producto y operación.',
    items: ['Spring Boot', 'Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs']
  },
  {
    title: 'Bases de datos',
    description: 'Modelado y consultas orientadas a mantener información consistente, útil y fácil de escalar.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Herramientas',
    description: 'Flujos de trabajo prácticos para diseñar, versionar, probar y colaborar con orden.',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'Linux', 'Windows']
  },
  {
    title: 'QA / Pruebas',
    description: 'Validación funcional, documentación y revisión de detalle para reducir riesgos antes de entregar.',
    items: ['Pruebas QA', 'Pruebas funcionales', 'Documentación', 'Casos de prueba']
  },
  {
    title: 'DevOps / Despliegue',
    description: 'Preparación, empaquetado y despliegue de aplicaciones listas para entornos reales.',
    items: ['Vercel', 'Docker', 'CI/CD básico']
  }
];

export const skillMarquee = [
  'Astro',
  'React',
  'TypeScript',
  'Spring Boot',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Vercel',
  'Pruebas QA',
  'REST APIs'
];
