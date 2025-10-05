import type { ContactInfo, PersonalInfo, SocialLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Rubén Rosales',
  title: 'Desarrollador de Aplicaciones Web y Multiplataforma',
  bio: 'Desarrollador FullStack especializado en TypeScript/JavaScript, con experiencia en NodeJS, NestJS y Angular, y conocimientos en React, React Native y Laravel. Competencias en UI/UX, Docker, Linux, bases de datos SQL y Redis, IoT y sistemas de mensajería con MQTT y RabbitMQ. Trabajo con Scrum y tengo experiencia en CI/CD con GitLab, Git y GitHub. Manejo herramientas de diseño como Figma, Canva, Photoshop, Inkscape y edición de video con Shotcut. Enfocado en la creación de soluciones escalables y eficientes, siempre buscando la mejora continua e innovación tecnológica.',
  profileImage: '/img/profile-avatar.png',
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
