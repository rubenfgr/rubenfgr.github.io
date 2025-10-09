import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web modernas y escalables con las últimas tecnologías: Angular, React, Node.js, NestJS.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>`,
    features: [
      'Single Page Applications (SPA)',
      'Server-Side Rendering (SSR)',
      'Progressive Web Apps (PWA)',
      'Responsive Design',
      'API REST & GraphQL',
    ],
    price: 'Desde 500€',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 1,
  },
  {
    slug: 'desarrollo-movil',
    title: 'Desarrollo Móvil',
    description:
      'Aplicaciones móviles nativas y multiplataforma para iOS y Android con Ionic, React Native o Flutter.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>`,
    features: [
      'Apps iOS y Android',
      'Desarrollo multiplataforma',
      'Integración con APIs',
      'Notificaciones push',
      'Sincronización offline',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 2,
  },
  {
    slug: 'consultoria-iot',
    title: 'Consultoría IoT',
    description:
      'Soluciones IoT completas: prototipado, desarrollo e integración de sistemas embebidos.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
    </svg>`,
    features: [
      'Prototipado IoT',
      'Integración MQTT/WebSockets',
      'Arduino, ESP32, Raspberry Pi',
      'Dashboards en tiempo real',
      'Monitorización y alertas',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 3,
  },
  {
    slug: 'integracion-sistemas',
    title: 'Integración de Sistemas',
    description:
      'Conecta tus sistemas y aplicaciones para automatizar procesos y mejorar la eficiencia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>`,
    features: [
      'APIs REST',
      'Microservicios',
      'Mensajería (RabbitMQ, MQTT)',
      'Integración de terceros',
      'Migración de datos',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 4,
  },
  {
    slug: 'devops-cicd',
    title: 'DevOps & CI/CD',
    description: 'Automatización de despliegues y gestión de infraestructura para desarrollo ágil.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`,
    features: [
      'Docker & Docker Compose',
      'Pipelines CI/CD',
      'GitLab, GitHub Actions',
      'Administración Linux',
      'Monitorización y logs',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 5,
  },
  {
    slug: 'inteligencia-artificial',
    title: 'Inteligencia Artificial',
    description:
      'Integración de IA y automatizaciones inteligentes en tus aplicaciones y procesos de negocio.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h-4l-3 5.73"></path>
      <path d="M6.12 11C6.6 9.4 8.14 8.24 10 8.07V5.73A2 2 0 1 1 12 4v1.73a7.03 7.03 0 0 1 2 .27"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 15v2.27"></path>
    </svg>`,
    features: [
      'Integración de APIs',
      'Chatbots y asistentes virtuales',
      'Automatización de procesos con IA',
      'Procesamiento de lenguaje natural',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 6,
  },
  {
    slug: 'diseno-ui-ux',
    title: 'Diseño UI/UX',
    description:
      'Interfaces modernas, intuitivas y centradas en el usuario con Figma y herramientas de diseño.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>`,
    features: [
      'Diseño de interfaces',
      'Prototipado interactivo',
      'Sistemas de diseño',
      'Responsive design',
      'Accesibilidad (a11y)',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 7,
  },
];
