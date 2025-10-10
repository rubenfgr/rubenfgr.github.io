import type { ContactInfo, PersonalInfo, SocialLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Rubén Rosales',
  title: 'Desarrollador de Aplicaciones Web y Multiplataforma',
  // Bio: Resumen corto para la sección Hero
  bio: 'Desarrollador FullStack especializado en integración de IA y automatización inteligente. Más de 5 años de experiencia con TypeScript/JavaScript, Angular, Node.js y NestJS. Experto en crear aplicaciones web y multiplataforma escalables potenciadas con IA, DevOps y arquitectura de software moderna.',
  // Summary: Descripción más detallada para la sección About
  summary:
    'Desarrollador FullStack con más de 5 años de experiencia profesional en dos empresas líderes, especializado en integración de Inteligencia Artificial y desarrollo de aplicaciones web y multiplataforma de alto rendimiento. Mi enfoque principal está en potenciar aplicaciones con IA generativa, desarrollando chatbots inteligentes, asistentes virtuales y sistemas de automatización avanzada. Mi stack técnico incluye Angular, Node.js y NestJS como base, con dominio avanzado en React, React Native y Flutter. Poseo amplia experiencia en arquitectura de software, diseño e implementación de soluciones DevOps, desarrollo de interfaces UI/UX intuitivas, y gestión de infraestructura con Docker y Kubernetes. Trabajo diariamente con bases de datos SQL, MongoDB y Redis, sistemas de comunicación en tiempo real mediante MQTT, WebSockets y SSE, además de integración de IA generativa, RAG (Retrieval Augmented Generation), agentes IA y automatizaciones complejas con n8n. Aplico la metodología SCRUM en mi día a día, combinando prácticas ágiles con las últimas innovaciones en IA para entregar soluciones robustas, escalables, inteligentes y de alto impacto que superan las expectativas de los usuarios finales.',
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
