import type { ContactInfo, PersonalInfo, SocialLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Rubén Rosales',
  title: 'Desarrollador de Aplicaciones Web y Multiplataforma',
  // Bio: Resumen corto para la sección Hero
  bio: 'Desarrollador FullStack con más de 5 años de experiencia especializándome en TypeScript/JavaScript, Angular, Node.js y NestJS. Experto en crear aplicaciones web y multiplataforma escalables, con sólida experiencia en DevOps y arquitectura de software.',
  // Summary: Descripción más detallada para la sección About
  summary:
    'Desarrollador FullStack con más de 5 años de experiencia profesional en dos empresas líderes, especializándome en el desarrollo de aplicaciones web y multiplataforma de alto rendimiento. Mi stack principal incluye Angular, Node.js y NestJS, con dominio avanzado en React, React Native y Flutter. Poseo amplia experiencia en arquitectura de software, diseño e implementación de soluciones DevOps, desarrollo de interfaces UI/UX intuitivas, y gestión de infraestructura con Docker. Trabajo diariamente con bases de datos SQL, MongoDB y Redis, sistemas de comunicación en tiempo real mediante MQTT, WebSockets y SSE, e integración de IA generativa y automatizaciones con n8n. Aplico la metodología SCRUM en mi día a día, combinando prácticas ágiles con las mejores técnicas de desarrollo para entregar soluciones robustas, escalables y de alto impacto que superan las expectativas de los usuarios finales.',
  profileImage: '/img/profile-avatar.png',
  // Estadísticas clave
  stats: [
    { value: '5+', label: 'Años de experiencia' },
    { value: '15+', label: 'Proyectos completados' },
    { value: '30+', label: 'Tecnologías dominadas' },
  ],
  // Características/especialidades
  features: [
    {
      icon: 'code',
      title: 'Desarrollo FullStack',
      description: 'Angular, Node.js, NestJS. React, React Native, Flutter.',
    },
    {
      icon: 'layers',
      title: 'DevOps & Arquitectura',
      description: 'Docker, CI/CD, arquitectura escalable. SCRUM.',
    },
    {
      icon: 'iot',
      title: 'Tiempo Real & IoT',
      description: 'MQTT, WebSockets, SSE. Integración IoT.',
    },
    {
      icon: 'zap',
      title: 'IA Generativa & Automatizaciones',
      description: 'Integración de IA. Automatización con n8n.',
    },
    {
      icon: 'database',
      title: 'Bases de Datos',
      description: 'SQL, MongoDB, Redis.',
    },
  ],
};

export const contactInfo: ContactInfo = {
  email: 'rubenfranciscogr@gmail.com',
  location: 'Almería, España',
  phone: '+34 686 37 83 35',
  whatsapp: '+34 686 37 83 35',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rub%C3%A9n-francisco-gazquez-rosales-45b788160',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rubenfgr',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/rubenfrancisco.gazquezrosales',
  },
];
