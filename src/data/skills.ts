import type { Skill } from './types';

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript/TypeScript', level: 100, category: 'frontend' },
  { name: 'Angular', level: 100, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'React Native', level: 90, category: 'frontend' },
  { name: 'HTML, CSS, Sass', level: 100, category: 'frontend' },
  { name: 'Bootstrap', level: 100, category: 'frontend' },
  { name: 'Tailwind', level: 80, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 100, category: 'backend' },
  { name: 'NestJS', level: 100, category: 'backend' },
  { name: 'Laravel', level: 100, category: 'backend' },

  // Database
  { name: 'SQL', level: 100, category: 'database' },
  { name: 'MySQL', level: 95, category: 'database' },
  { name: 'MariaDB', level: 95, category: 'database' },
  { name: 'OracleDB', level: 85, category: 'database' },
  { name: 'Redis', level: 90, category: 'database' },

  // Tools & DevOps
  { name: 'Git, GitHub, GitLab, CI/CD', level: 100, category: 'tools' },
  { name: 'Docker, Docker Compose', level: 90, category: 'tools' },
  { name: 'Linux, Shell, SSH', level: 70, category: 'tools' },
  { name: 'Jest', level: 90, category: 'tools' },

  // Design
  { name: 'UI/UX, Figma', level: 100, category: 'design' },
  { name: 'Canva, Photoshop, Inkscape', level: 80, category: 'design' },

  // Other
  { name: 'Websockets, MQTT', level: 100, category: 'other' },
  { name: 'IoT, Arduino, ESP32', level: 50, category: 'other' },
  { name: 'Raspberry Pi', level: 50, category: 'other' },
  { name: 'WordPress Divi', level: 80, category: 'other' },
];
