import type { Skill } from './types';

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript/TypeScript', level: 100, category: 'frontend' },
  { name: 'Angular', level: 100, category: 'frontend' },
  { name: 'Ionic', level: 100, category: 'frontend' },
  { name: 'React, React Native, TanStack, Next', level: 100, category: 'frontend' },
  { name: 'HTML, CSS, Sass', level: 100, category: 'frontend' },
  { name: 'Tailwind, Bootstrap', level: 100, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 100, category: 'backend' },
  { name: 'NestJS', level: 100, category: 'backend' },
  { name: 'Laravel', level: 100, category: 'backend' },

  // Database
  { name: 'SQL', level: 100, category: 'database' },
  { name: 'MySQL, MariaDB', level: 100, category: 'database' },
  { name: 'PostgreSQL, PGVector', level: 100, category: 'database' },
  { name: 'Redis', level: 100, category: 'database' },
  { name: 'Mongo', level: 100, category: 'database' },

  // Tools & DevOps
  { name: 'Git, GitHub, GitLab, CI/CD', level: 100, category: 'tools' },
  { name: 'Docker, Docker Compose', level: 100, category: 'tools' },
  { name: 'Linux, Shell, SSH', level: 100, category: 'tools' },
  { name: 'Jest', level: 100, category: 'tools' },

  // Design
  { name: 'UI/UX, Figma', level: 100, category: 'design' },
  { name: 'Canva, Photoshop, Inkscape', level: 70, category: 'design' },

  // Other
  { name: 'Websockets, MQTT, SSE, RabbitMQ', level: 100, category: 'other' },
  { name: 'Raspberry Pi', level: 80, category: 'other' },
  { name: 'CMS, WordPress', level: 80, category: 'other' },
  { name: 'IoT, Arduino, ESP32', level: 50, category: 'other' },
];
