import type { TranslationSchema } from '../types';

export const es: TranslationSchema = {
  seo: {
    title: 'Luis Vergel | Desarrollador Full Stack',
    description:
      'Portafolio de Luis Vergel, desarrollador Full Stack enfocado en crear aplicaciones web claras, robustas y mantenibles, con atención al detalle técnico y a la experiencia de usuario.'
  },
  profile: {
    name: 'Luis Vergel',
    role: 'Desarrollador Full Stack',
    subtitle: 'Soluciones web con criterio de producto',
    description:
      'Portafolio de Luis Vergel, desarrollador Full Stack enfocado en crear aplicaciones web claras, robustas y mantenibles, con atención al detalle técnico y a la experiencia de usuario.',
    email: 'luisverlet@gmail.com',
    location: 'Colombia'
  },
  languageSwitcher: {
    ariaLabel: 'Seleccionar idioma',
    spanish: 'Español',
    english: 'English'
  },
  navbar: {
    ariaLabel: 'Principal',
    settingsLabel: 'Abrir ajustes',
    items: [
      { name: 'Inicio', url: '#inicio' },
      { name: 'Proyectos', url: '#proyectos' },
      { name: 'Tecnologías', url: '#skills' },
      { name: 'Sobre mí', url: '#sobre-mi' },
      { name: 'Contacto', url: '#contacto' }
    ]
  },
  hero: {
    title: 'Luis Vergel.',
    availability: 'Disponible',
    subtitle: 'Full Stack Developer enfocado en producto, detalle y ejecución.'
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Casos seleccionados',
    card: {
      participationLabel: 'Participación',
      participationValue: 'Diseño técnico y desarrollo Full Stack',
      stackLabel: 'Stack',
      explore: 'Explorar proyecto ->'
    },
    items: [
      {
        id: 'mentesegura-mobile',
        title: 'MenteSegura',
        category: 'Bienestar estudiantil',
        description:
          'Plataforma web diseñada para el seguimiento del bienestar estudiantil mediante evaluaciones clínicas como PHQ-9, con registro de respuestas y cálculo automatizado de riesgo en tiempo real.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        image: '/images/projects/mentesegura-mobile.jpg',
        demoUrl: 'https://mente-segura-eight.vercel.app/login',
        featured: true
      },
      {
        id: 'jookerp-demand',
        title: 'JookERP',
        category: 'Gestión empresarial',
        description:
          'ERP desarrollado para la organización de procesos internos, centralización de información operativa y toma de decisiones empresariales mediante módulos conectados, servicios backend y flujos de trabajo eficientes.',
        tags: ['Next.js', 'React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        image: '/images/projects/jookerp-forecast.jpg',
        demoUrl: 'https://www.youtube.com/playlist?list=PLgKYQw99Yuj1_IwJQCpXdAQ3HpqhAAHh1',
        featured: true
      },
      {
        id: 'sistema-firmas',
        title: 'Sistema de Firmas Digitales',
        category: 'Proyecto QA',
        description:
          'Plataforma orientada a la gestión, validación y documentación de firmas digitales dentro de procesos institucionales, priorizando la trazabilidad, seguridad e integridad documental.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: '/images/projects/sistema-firmas.jpg',
        featured: false
      },
      {
        id: 'jook-erp-landing',
        title: 'Landing JookERP',
        category: 'Muestra Frontend / Landings',
        description:
          'Diseño y desarrollo de landing page moderna para la presentación del sistema JookERP, enfocada en la conversión, el rendimiento y la experiencia de usuario.',
        tags: ['Astro', 'Tailwind CSS'],
        image: '/images/projects/jookerp-forecast.jpg',
        demoUrl: 'https://landing-jook-erp.vercel.app',
        featured: true
      },
      {
        id: 'jook-three-landing',
        title: 'Landing Jook Three',
        category: 'Muestra Frontend / Landings',
        description:
          'Landing page interactiva con componentes visuales avanzados para destacar servicios y características del producto de forma atractiva y dinámica.',
        tags: ['Astro', 'Tailwind CSS'],
        image: '/images/projects/jookerp-forecast.jpg',
        demoUrl: 'https://landing-jook-three.vercel.app',
        featured: true
      },
      {
        id: 'medsis',
        title: 'MED SIS',
        category: 'Gestión médica / Historias de usuario y pacientes',
        description:
          'Sistema integral desarrollado en Python para la administración de historias de usuario clínicas y directorio de pacientes. Diseñado con arquitectura adaptable para operar con total fluidez tanto en despliegue web como en entorno local.',
        tags: ['Python', 'FastAPI', 'HTML5', 'CSS3', 'PostgreSQL', 'Local & Web'],
        image: '/images/projects/medisis.png',
        featured: true
      }
    ]
  },
  skills: {
    eyebrow: 'STACK Y MÉTODO',
    title: 'Herramientas y Tecnologías Full Stack',
    description:
      'Stack integral de desarrollo web y cloud: desde el diseño y arquitectura de software hasta el despliegue y aseguramiento de calidad.',
    marqueeAriaLabel: 'Stack principal',
    groups: [
      {
        title: 'Frontend Moderno',
        description: 'Interfaces limpias, rápidas y adaptables con las versiones y estándares más recientes del ecosistema web.',
        items: ['React 19', 'Next.js 15', 'Astro', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5 / CSS3']
      },
      {
        title: 'Backend & APIs',
        description: 'Arquitecturas de microservicios y monolitos modulares, APIs seguras y lógica de negocio orientada a escalabilidad.',
        items: ['Spring Boot', 'Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'Prisma']
      },
      {
        title: 'Cloud & AWS',
        description: 'Servicios en la nube para almacenamiento, computación sin servidor, distribución de contenido y despliegues productivos.',
        items: ['AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS CloudFront', 'Docker', 'Vercel']
      },
      {
        title: 'QA & Testing Automatizado',
        description: 'Estrategias de calidad, automatización integral de pruebas funcionales, E2E y pruebas unitarias de extremo a extremo.',
        items: ['Playwright', 'Cypress', 'Jest', 'Postman', 'Casos de prueba', 'Pruebas E2E', 'Swagger']
      },
      {
        title: 'Bases de datos',
        description: 'Modelado relacional y no relacional, optimización de consultas y consistencia de datos de misión crítica.',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Redis']
      },
      {
        title: 'Herramientas & DevOps',
        description: 'Flujos de trabajo ágiles, control de versiones, integración continua e infraestructura como código.',
        items: ['Git', 'GitHub', 'CI/CD (Actions)', 'Docker', 'Figma', 'Linux']
      },
      {
        title: 'Herramientas de IA',
        description: 'Integración de inteligencia artificial y asistentes de código para optimizar el desarrollo de software y agilizar la resolución de problemas.',
        items: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor', 'Prompt Engineering']
      }
    ],
    marquee: [
      'AWS',
      'React 19',
      'Next.js 15',
      'Astro',
      'TypeScript',
      'Spring Boot',
      'Node.js',
      'Python',
      'FastAPI',
      'Playwright',
      'Cypress',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Vercel',
      'Pruebas QA',
      'REST APIs',
      'Tailwind CSS',
      'Postman',
      'GitHub Copilot',
      'Claude',
      'ChatGPT'
    ]
  },
  about: {
    eyebrow: 'Perfil humano',
    title: 'Sobre mí',
    photoAlt: 'Luis Vergel',
    sliderAriaLabel: 'Datos personales',
    paragraphs: [
      'Soy Luis Vergel, desarrollador Full Stack y estudiante de último semestre de Ingeniería de Sistemas. Me apasiona construir aplicaciones web funcionales, bien estructuradas y con una excelente experiencia de usuario.',
      'Trabajo con curiosidad, criterio y atención al detalle. Antes de escribir código, me aseguro de entender a fondo el problema para luego traducir esa claridad en interfaces intuitivas, servicios robustos y flujos de trabajo sostenibles.'
    ],
    highlights: [
      {
        label: 'Ciudad',
        title: 'Cúcuta, Colombia',
        text: 'Desde Cúcuta, trabajo con un enfoque práctico: comprender el contexto, proponer soluciones claras y desarrollar con propósito.',
        marker: '7.8939° N'
      },
      {
        label: 'Universidad',
        title: 'Universidad de Santander',
        text: 'Mi formación en la UDES ha fortalecido mi disciplina, bases técnicas y la capacidad de analizar problemas complejos en sistemas reales.',
        marker: 'UDES'
      },
      {
        label: 'Perfil',
        title: 'Full Stack Developer',
        text: 'Integro el diseño de interfaces, la lógica de negocio y la gestión de datos para crear productos digitales estables, claros y mantenibles.',
        marker: 'DEV'
      },
      {
        label: 'Detalle',
        title: 'Pasión por lo bien hecho',
        text: 'Cuido la estructura, el flujo de navegación y la interfaz, convencido de que una buena experiencia de usuario radica en la simplicidad y la fluidez.',
        marker: 'UX'
      },
      {
        label: 'Cocina',
        title: 'Italia, Francia y postres',
        text: 'La gastronomía me recuerda que la técnica y la creatividad coexisten: medir con precisión, experimentar, ajustar y perfeccionar.',
        marker: 'CHEF'
      },
      {
        label: 'Juegos y deporte',
        title: 'TBOI, Warcraft III y fútbol',
        text: 'Disfruto de TBOI, Warcraft III y el fútbol por su dinamismo: requieren una lectura rápida de la situación, ritmo constante y toma de decisiones estratégicas bajo presión.',
        marker: 'PLAY'
      },
      {
        label: 'Familia',
        title: 'Mi mayor motivación',
        text: 'Mi familia es mi principal pilar de apoyo; para mí, el crecimiento profesional va de la mano con la construcción de un proyecto de vida con propósito.',
        marker: 'HOME'
      },
      {
        label: 'Animales',
        title: 'Respeto por la vida',
        text: 'La empatía y el respeto por los animales reflejan mis valores personales y mi forma de colaborar en equipo: con ética, respeto y atención mutua.',
        marker: 'LIFE'
      }
    ]
  },
  contact: {
    title: 'Hablemos',
    subtitle: 'Próximo paso',
    heading: 'Agendemos una videollamada.',
    description: 'Escoge un horario disponible y conversemos sobre oportunidades, proyectos o colaboraciones.',
    calendarButton: 'Agendar videollamada',
    emailLink: 'Prefiero escribir por correo',
    emailLabel: 'Correo electrónico',
    locationLabel: 'Ubicación'
  },
  footer: {
    copyright: 'Todos los derechos reservados.'
  },
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/luisverlet',
      ariaLabel: 'Ver perfil de GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/luisverlet',
      ariaLabel: 'Ver perfil de LinkedIn'
    }
  ],
  theme: {
    switchToDark: 'Cambiar a modo oscuro',
    switchToLight: 'Cambiar a modo claro'
  },
  emailWidget: {
    idleMessage: 'Haz clic para copiar el correo',
    copiedMessage: '¡Correo copiado! Listo para hablar.',
    errorMessage: 'No se pudo copiar',
    copyEmailLabel: 'Copiar correo',
    petAlt: 'Gato dormido'
  },
  assistant: {
    ariaLabel: 'Asistente del portafolio',
    closeLabel: 'Ocultar asistente',
    petAlt: 'Gato dormido',
    messages: [
      {
        id: 'inicio',
        message: 'Bienvenido/a. Aquí Luis muestra cómo piensa, construye y cuida cada detalle.',
        state: 'sleeping'
      },
      {
        id: 'proyectos',
        message: 'Estos proyectos reflejan su metodología de trabajo: definición clara del problema, diseño de una solución útil y ejecución impecable.'
      },
      {
        id: 'skills',
        message: 'Este stack es su caja de herramientas; el valor está en cómo se usa.'
      },
      {
        id: 'sobre-mi',
        message: 'Aquí conocerás a la persona detrás del código: sus hábitos, criterio técnico y motivaciones.'
      },
      {
        id: 'contacto',
        message: 'Si tienes una idea que quieres transformar en un producto digital, este es el lugar ideal para iniciar la conversación.',
        state: 'happy'
      }
    ]
  }
};
