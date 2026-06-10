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
    title: 'Proyectos con impacto',
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
          'Plataforma web para acompañar el bienestar estudiantil mediante evaluaciones clínicas como PHQ-9, seguimiento de respuestas y cálculo automatizado de riesgo en tiempo real.',
        tags: ['React', 'TypeScript', 'Context API', 'REST API', 'Vercel'],
        image: '/images/projects/mentesegura-mobile.jpg',
        demoUrl: 'https://mente-segura-git-develop-luisverlets-projects.vercel.app',
        featured: true
      },
      {
        id: 'jookerp-demand',
        title: 'JookERP',
        category: 'Gestión empresarial',
        description:
          'ERP desarrollado para organizar procesos internos, centralizar información operativa y apoyar decisiones empresariales con módulos conectados, servicios backend y flujos claros de trabajo.',
        tags: ['Python', 'Prophet', 'Docker', 'REST API', 'Next.js'],
        image: '/images/projects/jookerp-forecast.jpg',
        featured: true
      },
      {
        id: 'sistema-firmas',
        title: 'Sistema de Firmas Digitales',
        category: 'Proyecto QA',
        description:
          'Plataforma orientada a gestionar, validar y documentar firmas digitales dentro de procesos institucionales, priorizando trazabilidad, seguridad e integridad documental.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: '/images/projects/sistema-firmas.jpg',
        featured: false
      }
    ]
  },
  skills: {
    eyebrow: 'STACK Y MÉTODO',
    title: 'Herramientas para construir bien',
    description:
      'Trabajo con tecnologías modernas, pero el foco siempre está en resolver problemas con claridad, orden y criterio técnico.',
    marqueeAriaLabel: 'Stack principal',
    groups: [
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
    ],
    marquee: [
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
    ]
  },
  about: {
    eyebrow: 'Perfil humano',
    title: 'Sobre mí',
    photoAlt: 'Luis Vergel',
    sliderAriaLabel: 'Datos personales',
    paragraphs: [
      'Soy Luis Vergel, desarrollador Full Stack y estudiante de Ingeniería de Sistemas en etapa final. Me interesa construir aplicaciones web funcionales, bien estructuradas y fáciles de usar.',
      'Trabajo con curiosidad, criterio y atención al detalle. Antes de escribir código, busco entender el problema; después, convierto esa claridad en interfaces, servicios y flujos que se puedan sostener.'
    ],
    highlights: [
      {
        label: 'Ciudad',
        title: 'Cúcuta, Colombia',
        text: 'Desde Cúcuta trabajo con una mirada práctica: entender el contexto, resolver con claridad y construir con intención.',
        marker: '7.8939° N'
      },
      {
        label: 'Universidad',
        title: 'Universidad de Santander',
        text: 'Mi paso por la UDES ha reforzado mi disciplina, base técnica y forma de analizar problemas desde sistemas reales.',
        marker: 'UDES'
      },
      {
        label: 'Perfil',
        title: 'Full Stack Developer',
        text: 'Me gusta unir interfaz, lógica y datos para que cada producto se sienta claro, estable y fácil de mantener.',
        marker: 'DEV'
      },
      {
        label: 'Detalle',
        title: 'Pasión por lo bien hecho',
        text: 'Cuido estructura, flujo e interfaz porque una buena experiencia también se nota en lo que no estorba.',
        marker: 'UX'
      },
      {
        label: 'Cocina',
        title: 'Italia, Francia y postres',
        text: 'La cocina me recuerda que técnica y creatividad pueden convivir: medir, probar, ajustar y mejorar.',
        marker: 'CHEF'
      },
      {
        label: 'Juegos y deporte',
        title: 'TBOI, Warcraft III y fútbol',
        text: 'TBOI, Warcraft III y el fútbol me gustan por lo mismo: lectura del juego, ritmo y decisiones bajo presión.',
        marker: 'PLAY'
      },
      {
        label: 'Familia',
        title: 'Mi mayor motivación',
        text: 'Mi familia es mi punto de apoyo; crecer profesionalmente también significa construir una vida con propósito.',
        marker: 'HOME'
      },
      {
        label: 'Animales',
        title: 'Respeto por la vida',
        text: 'La empatía y el cuidado por los animales también hablan de cómo prefiero colaborar: con respeto y atención.',
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
    idleMessage: 'Un clic y tienes el correo',
    copiedMessage: 'Correo copiado. Listo para hablar',
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
        message: 'Bienvenido. Aquí Luis muestra cómo piensa, construye y cuida cada detalle.',
        state: 'sleeping'
      },
      {
        id: 'proyectos',
        message: 'Estos proyectos resumen su forma de trabajar: problema claro, solución útil y ejecución completa.'
      },
      {
        id: 'skills',
        message: 'Este stack es la caja de herramientas; el valor está en cómo se usa para resolver bien.'
      },
      {
        id: 'sobre-mi',
        message: 'Aquí aparece la persona detrás del código: hábitos, criterio y motivaciones reales.'
      },
      {
        id: 'contacto',
        message: 'Si la idea merece pasar a producto, este es el mejor punto para empezar la conversación.',
        state: 'happy'
      }
    ]
  }
};
