import type { ContactInfo, PersonalInfo, SocialLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Rubén Rosales',
  title: 'Desarrollador de Aplicaciones Web y Multiplataforma',
  // Bio: Resumen corto para la sección Hero
  bio: 'Desarrollador FullStack especializado en TypeScript/JavaScript con más de 4 años de experiencia creando soluciones web escalables y eficientes. Apasionado por la innovación tecnológica y la mejora continua.',
  // Summary: Descripción más detallada para la sección About
  summary:
    'Con experiencia profesional en desarrollo FullStack, me especializo en crear aplicaciones web robustas y escalables utilizando tecnologías modernas. Mi stack principal incluye TypeScript, Node.js, NestJS y Angular, con conocimientos sólidos en React, React Native y Laravel. Tengo competencias en arquitectura de software, diseño UI/UX, containerización con Docker, gestión de bases de datos SQL y Redis, desarrollo IoT con MQTT, y metodologías ágiles. Mi enfoque está en desarrollar soluciones de alta calidad que generen impacto real en los usuarios finales.',
  profileImage: '/img/profile-avatar.png',
  // Estadísticas clave
  stats: [
    { value: '4+', label: 'Años de experiencia' },
    { value: '15+', label: 'Proyectos completados' },
    { value: '25+', label: 'Tecnologías dominadas' },
  ],
  // Características/especialidades
  features: [
    {
      icon: 'code',
      title: 'Desarrollo FullStack',
      description:
        'Experiencia en desarrollo frontend con Angular y React, y backend con Node.js, NestJS y Laravel.',
    },
    {
      icon: 'design',
      title: 'UI/UX Design',
      description:
        'Diseño de interfaces modernas e intuitivas con herramientas como Figma, enfocado en la experiencia del usuario.',
    },
    {
      icon: 'iot',
      title: 'IoT & Sistemas',
      description:
        'Desarrollo de soluciones IoT con MQTT, WebSockets y sistemas embebidos como Arduino y ESP32.',
    },
    {
      icon: 'layers',
      title: 'DevOps & Cloud',
      description:
        'Implementación de pipelines CI/CD, containerización con Docker y despliegue en entornos cloud.',
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
