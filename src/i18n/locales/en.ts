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
    title: 'Projects with impact',
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
          'Web platform for supporting student wellbeing through clinical assessments such as PHQ-9, response tracking and automated real-time risk scoring.',
        tags: ['React', 'TypeScript', 'Context API', 'REST API', 'Vercel'],
        image: '/images/projects/mentesegura-mobile.jpg',
        demoUrl: 'https://mente-segura-git-develop-luisverlets-projects.vercel.app',
        featured: true
      },
      {
        id: 'jookerp-demand',
        title: 'JookERP',
        category: 'Business management',
        description:
          'ERP built to organize internal processes, centralize operational information and support business decisions through connected modules, backend services and clear workflows.',
        tags: ['Python', 'Prophet', 'Docker', 'REST API', 'Next.js'],
        image: '/images/projects/jookerp-forecast.jpg',
        featured: true
      },
      {
        id: 'sistema-firmas',
        title: 'Digital Signature System',
        category: 'QA project',
        description:
          'Platform designed to manage, validate and document digital signatures within institutional processes, prioritizing traceability, security and document integrity.',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: '/images/projects/sistema-firmas.jpg',
        featured: false
      }
    ]
  },
  skills: {
    eyebrow: 'STACK AND METHOD',
    title: 'Tools for building well',
    description:
      'I work with modern technologies, but the focus is always solving problems with clarity, structure and technical judgment.',
    marqueeAriaLabel: 'Main stack',
    groups: [
      {
        title: 'Frontend',
        description: 'Clean, fast and responsive interfaces designed for real users and clear flows.',
        items: ['React', 'Astro', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
      },
      {
        title: 'Backend',
        description: 'APIs, services and business logic built to connect data, product and operations.',
        items: ['Spring Boot', 'Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs']
      },
      {
        title: 'Databases',
        description: 'Modeling and queries aimed at keeping information consistent, useful and easy to scale.',
        items: ['MongoDB', 'PostgreSQL', 'MySQL']
      },
      {
        title: 'Tools',
        description: 'Practical workflows for designing, versioning, testing and collaborating with order.',
        items: ['Git', 'GitHub', 'Figma', 'Postman', 'Linux', 'Windows']
      },
      {
        title: 'QA / Testing',
        description: 'Functional validation, documentation and careful review to reduce risks before delivery.',
        items: ['QA testing', 'Functional testing', 'Documentation', 'Test cases']
      },
      {
        title: 'DevOps / Deployment',
        description: 'Preparation, packaging and deployment of applications ready for real environments.',
        items: ['Vercel', 'Docker', 'Basic CI/CD']
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
      'QA testing',
      'REST APIs'
    ]
  },
  about: {
    eyebrow: 'Human profile',
    title: 'About me',
    photoAlt: 'Luis Vergel',
    sliderAriaLabel: 'Personal facts',
    paragraphs: [
      'I am Luis Vergel, a Full Stack Developer and final-stage Systems Engineering student. I care about building functional, well-structured web applications that are easy to use.',
      'I work with curiosity, judgment and attention to detail. Before writing code, I try to understand the problem; then I turn that clarity into interfaces, services and flows that can last.'
    ],
    highlights: [
      {
        label: 'City',
        title: 'Cucuta, Colombia',
        text: 'From Cucuta, I work with a practical mindset: understand the context, solve clearly and build with intention.',
        marker: '7.8939° N'
      },
      {
        label: 'University',
        title: 'University of Santander',
        text: 'My time at UDES has strengthened my discipline, technical foundation and way of analyzing problems from real systems.',
        marker: 'UDES'
      },
      {
        label: 'Profile',
        title: 'Full Stack Developer',
        text: 'I enjoy connecting interface, logic and data so each product feels clear, stable and easy to maintain.',
        marker: 'DEV'
      },
      {
        label: 'Detail',
        title: 'Care for well-made work',
        text: 'I care about structure, flow and interface because a good experience is also felt in what does not get in the way.',
        marker: 'UX'
      },
      {
        label: 'Cooking',
        title: 'Italy, France and desserts',
        text: 'Cooking reminds me that technique and creativity can live together: measure, test, adjust and improve.',
        marker: 'CHEF'
      },
      {
        label: 'Games and sport',
        title: 'TBOI, Warcraft III and soccer',
        text: 'I like TBOI, Warcraft III and soccer for the same reason: reading the game, rhythm and decisions under pressure.',
        marker: 'PLAY'
      },
      {
        label: 'Family',
        title: 'My biggest motivation',
        text: 'My family is my support system; growing professionally also means building a life with purpose.',
        marker: 'HOME'
      },
      {
        label: 'Animals',
        title: 'Respect for life',
        text: 'Empathy and care for animals also reflect how I prefer to collaborate: with respect and attention.',
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
    idleMessage: 'One click and the email is yours',
    copiedMessage: 'Email copied. Ready to talk',
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
        message: 'Welcome. Here Luis shows how he thinks, builds and cares for every detail.',
        state: 'sleeping'
      },
      {
        id: 'proyectos',
        message: 'These projects summarize his way of working: clear problem, useful solution and complete execution.'
      },
      {
        id: 'skills',
        message: 'This stack is the toolkit; the value is in how it is used to solve things well.'
      },
      {
        id: 'sobre-mi',
        message: 'Here is the person behind the code: habits, judgment and real motivations.'
      },
      {
        id: 'contacto',
        message: 'If the idea deserves to become a product, this is the best place to start the conversation.',
        state: 'happy'
      }
    ]
  }
};
