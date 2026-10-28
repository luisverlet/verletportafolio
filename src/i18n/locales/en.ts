import type { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  seo: {
    title: 'Luis Vergel | Full Stack Developer',
    description:
      'Portfolio of Luis Vergel, a Full Stack Developer focused on building clear, robust, maintainable web applications with care for technical detail and user experience.'
  },
  profile: {
    name: 'Luis Vergel',
    role: 'Full Stack Developer',
    subtitle: 'Web solutions with product judgment',
    description:
      'Portfolio of Luis Vergel, a Full Stack Developer focused on building clear, robust, maintainable web applications with care for technical detail and user experience.',
    email: 'luisverlet@gmail.com',
    location: 'Colombia'
  },
  languageSwitcher: {
    ariaLabel: 'Select language',
    spanish: 'Español',
    english: 'English'
  },
  navbar: {
    ariaLabel: 'Main',
    settingsLabel: 'Open settings',
    items: [
      { name: 'Home', url: '#inicio' },
      { name: 'Projects', url: '#proyectos' },
      { name: 'Skills', url: '#skills' },
      { name: 'About', url: '#sobre-mi' },
      { name: 'Contact', url: '#contacto' }
    ]
  },
  hero: {
    title: 'Luis Vergel.',
    availability: 'Available',
    subtitle: 'Full Stack Developer focused on product, detail and execution.'
  },
  projects: {
    title: 'Projects',
    subtitle: 'Selected cases',
    card: {
      participationLabel: 'Participation',
      participationValue: 'Technical design and Full Stack development',
      stackLabel: 'Stack',
      explore: 'Explore project ->'
    },
    items: [
      {
        id: 'mentesegura-mobile',
        title: 'MenteSegura',
        category: 'Student wellbeing',
        description:
          'Web platform designed to support student well-being through clinical assessments (like PHQ-9), response tracking, and automated real-time risk scoring.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        image: '/images/projects/mentesegura-mobile.jpg',
        demoUrl: 'https://mente-segura-eight.vercel.app/login',
        featured: true
      },
      {
        id: 'jookerp-demand',
        title: 'JookERP',
        category: 'Business management',
        description:
          'ERP designed to streamline internal processes, centralize operational data, and support business decisions through integrated modules, backend services, and structured workflows.',
        tags: ['Next.js', 'React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        image: '/images/projects/jookerp-forecast.jpg',
        demoUrl: 'https://www.youtube.com/playlist?list=PLgKYQw99Yuj1_IwJQCpXdAQ3HpqhAAHh1',
        featured: true
      },
      {
        id: 'sistema-firmas',
        title: 'Digital Signature System',
        category: 'QA project',
        description:
          'Platform designed to manage, validate, and document digital signatures within institutional processes, prioritizing traceability, security, and document integrity.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: '/images/projects/sistema-firmas.jpg',
        featured: false
      },
      {
        id: 'jook-erp-landing',
        title: 'JookERP Landing',
        category: 'Frontend Showcase / Landings',
        description:
          'Design and development of a modern landing page for the JookERP system, focused on conversion, performance, and user experience.',
        tags: ['Astro', 'Tailwind CSS'],
        image: '/images/projects/jookerp-forecast.jpg',
        demoUrl: 'https://landing-jook-erp.vercel.app',
        featured: true
      },
      {
        id: 'jook-three-landing',
        title: 'Jook Three Landing',
        category: 'Frontend Showcase / Landings',
        description:
          'Interactive landing page with advanced visual components to highlight services and product features in an engaging and dynamic way.',
        tags: ['Astro', 'Tailwind CSS'],
        image: '/images/projects/jookerp-forecast.jpg',
        demoUrl: 'https://landing-jook-three.vercel.app',
        featured: true
      },
      {
        id: 'medsis',
        title: 'MED SIS',
        category: 'Medical Management / Patient & Clinical Records',
        description:
          'Comprehensive Python-powered management platform for clinical user stories and patient records. Architected with flexible execution across local setups and web deployments.',
        tags: ['Python', 'FastAPI', 'HTML5', 'CSS3', 'PostgreSQL', 'Local & Web'],
        image: '/images/projects/medisis.png',
        featured: true
      }
    ]
  },
  skills: {
    eyebrow: 'STACK AND METHOD',
    title: 'Full Stack Tools & Technologies',
    description:
      'Comprehensive web & cloud development stack: from software architecture and frontend to cloud deployment and quality assurance.',
    marqueeAriaLabel: 'Main stack',
    groups: [
      {
        title: 'Modern Frontend',
        description: 'Clean, lightning-fast, and responsive interfaces built with the latest web standards and ecosystems.',
        items: ['React 19', 'Next.js 15', 'Astro', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5 / CSS3']
      },
      {
        title: 'Backend & APIs',
        description: 'Modular monolithic and microservice architectures, secure RESTful APIs, and scalable business logic.',
        items: ['Spring Boot', 'Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'Prisma']
      },
      {
        title: 'Cloud & AWS',
        description: 'Cloud infrastructure for scalable storage, serverless computing, content distribution, and production deployments.',
        items: ['AWS S3', 'AWS EC2', 'AWS Lambda', 'AWS CloudFront', 'Docker', 'Vercel']
      },
      {
        title: 'QA & Automated Testing',
        description: 'Quality assurance engineering, end-to-end automation, and comprehensive test suite design.',
        items: ['Playwright', 'Cypress', 'Jest', 'Postman', 'Test Cases', 'E2E Testing', 'Swagger']
      },
      {
        title: 'Databases',
        description: 'Relational and non-relational database design, query optimization, and mission-critical consistency.',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Redis']
      },
      {
        title: 'Tools & DevOps',
        description: 'Agile collaboration, version control, CI/CD automated pipelines, and infrastructure as code.',
        items: ['Git', 'GitHub', 'CI/CD (Actions)', 'Docker', 'Figma', 'Linux']
      },
      {
        title: 'AI Tools',
        description: 'Integrating artificial intelligence and code assistants to optimize software development and solve problems.',
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
      'QA testing',
      'REST APIs',
      'Tailwind CSS',
      'Postman',
      'GitHub Copilot',
      'Claude',
      'ChatGPT'
    ]
  },
  about: {
    eyebrow: 'Human profile',
    title: 'About me',
    photoAlt: 'Luis Vergel',
    sliderAriaLabel: 'Personal facts',
    paragraphs: [
      'I am Luis Vergel, a Full Stack Developer and final-semester Systems Engineering student. I am passionate about building functional, well-structured web applications that offer a great user experience.',
      'I work with curiosity, judgment, and attention to detail. Before writing code, I focus on thoroughly understanding the problem, then translating that clarity into intuitive interfaces, robust services, and sustainable workflows.'
    ],
    highlights: [
      {
        label: 'City',
        title: 'Cucuta, Colombia',
        text: 'From Cucuta, I work with a practical mindset: understanding the context, solving clearly, and building with purpose.',
        marker: '7.8939° N'
      },
      {
        label: 'University',
        title: 'University of Santander',
        text: 'My education at UDES has strengthened my discipline, technical foundation, and capacity to analyze complex problems in real-world systems.',
        marker: 'UDES'
      },
      {
        label: 'Profile',
        title: 'Full Stack Developer',
        text: 'I integrate interface design, business logic, and data management to create stable, clear, and maintainable digital products.',
        marker: 'DEV'
      },
      {
        label: 'Detail',
        title: 'Care for well-made work',
        text: 'I care about structure, navigation flow, and user interface, believing that a great user experience lies in simplicity and fluid design.',
        marker: 'UX'
      },
      {
        label: 'Cooking',
        title: 'Italy, France and desserts',
        text: 'Gastronomy reminds me that technique and creativity coexist: measuring precisely, experimenting, adjusting, and perfecting.',
        marker: 'CHEF'
      },
      {
        label: 'Games and sport',
        title: 'TBOI, Warcraft III and soccer',
        text: 'I enjoy TBOI, Warcraft III, and soccer for their dynamism: they require quick situational reading, constant rhythm, and strategic decision-making under pressure.',
        marker: 'PLAY'
      },
      {
        label: 'Family',
        title: 'My biggest motivation',
        text: 'My family is my main support system; for me, professional growth goes hand in hand with building a life project with purpose.',
        marker: 'HOME'
      },
      {
        label: 'Animals',
        title: 'Respect for life',
        text: 'Empathy and respect for animals reflect my personal values and how I prefer to collaborate in teams: with ethics, respect, and mutual care.',
        marker: 'LIFE'
      }
    ]
  },
  contact: {
    title: 'Let’s talk',
    subtitle: 'Next step',
    heading: 'Let’s schedule a video call.',
    description: 'Choose an available time and let’s talk about opportunities, projects or collaborations.',
    calendarButton: 'Schedule video call',
    emailLink: 'I prefer to email',
    emailLabel: 'Email',
    locationLabel: 'Location'
  },
  footer: {
    copyright: 'All rights reserved.'
  },
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/luisverlet',
      ariaLabel: 'View GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/luisverlet',
      ariaLabel: 'View LinkedIn profile'
    }
  ],
  theme: {
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode'
  },
  emailWidget: {
    idleMessage: 'Click to copy email',
    copiedMessage: 'Email copied! Ready to talk.',
    errorMessage: 'Could not copy',
    copyEmailLabel: 'Copy email',
    petAlt: 'Sleeping cat'
  },
  assistant: {
    ariaLabel: 'Portfolio assistant',
    closeLabel: 'Hide assistant',
    petAlt: 'Sleeping cat',
    messages: [
      {
        id: 'inicio',
        message: 'Welcome. Here Luis shows how he thinks, builds, and pays attention to every detail.',
        state: 'sleeping'
      },
      {
        id: 'proyectos',
        message: 'These projects reflect his methodology: defining a clear problem, designing a useful solution, and solid execution.'
      },
      {
        id: 'skills',
        message: 'This stack is his toolkit; the value is in how it is used.'
      },
      {
        id: 'sobre-mi',
        message: 'Here you will meet the person behind the code: his habits, technical judgment, and genuine motivation.'
      },
      {
        id: 'contacto',
        message: 'If you have an idea you want to turn into a digital product, this is the perfect place to start the conversation.',
        state: 'happy'
      }
    ]
  }
};
