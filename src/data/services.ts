import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'inteligencia-artificial',
    title: 'Inteligencia Artificial & Automatización',
    description:
      'Soluciones avanzadas de IA para potenciar tu negocio. Desde chatbots inteligentes hasta automatización de procesos complejos con las últimas tecnologías.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h-4l-3 5.73"></path>
      <path d="M6.12 11C6.6 9.4 8.14 8.24 10 8.07V5.73A2 2 0 1 1 12 4v1.73a7.03 7.03 0 0 1 2 .27"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 15v2.27"></path>
    </svg>`,
    features: [
      'Integración OpenAI, Anthropic, Gemini',
      'Chatbots y asistentes virtuales IA',
      'Automatización inteligente de procesos',
      'Análisis predictivo y ML',
      'Procesamiento de lenguaje natural (NLP)',
      'Computer Vision y análisis de imágenes',
    ],
    price: 'Desde 800€',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 1,
  },
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo Web',
    description:
      'Creación de aplicaciones web modernas y escalables con las últimas tecnologías y mejores prácticas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>`,
    features: [
      'Desarrollo Frontend con Angular, React',
      'Backend con Node.js, NestJS',
      'APIs RESTful y GraphQL',
      'Bases de datos SQL y NoSQL',
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA) y SSR',
    ],
    price: 'Desde 500€',
    ctaText: 'Ver Proyectos',
    ctaUrl: '#projects',
    order: 2,
  },
  {
    slug: 'desarrollo-movil',
    title: 'Desarrollo Móvil',
    description:
      'Aplicaciones móviles nativas y multiplataforma para iOS y Android con excelente rendimiento.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>`,
    features: [
      'Apps híbridas con React Native (Expo), FLutter o Ionic + Capacitor',
      'Integración con servicios cloud',
      'Push notifications y geolocalización',
      'Publicación en App Store y Google Play',
      'Diseño responsive y adaptativo',
    ],
    price: 'Desde 1.200€',
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
      'APIs REST y GraphQL',
      'Arquitectura de microservicios',
      'Mensajería (RabbitMQ, Kafka, MQTT)',
      'Integración con servicios externos',
      'Migración y sincronización de datos',
      'ETL y procesamiento de datos',
      'Tiempo real con WebSockets y SSE',
    ],
    price: 'A consultar',
    ctaText: 'Consultar',
    ctaUrl: '#contact',
    order: 4,
  },
  {
    slug: 'devops',
    title: 'DevOps & CI/CD',
    description:
      'Implementación de prácticas DevOps para acelerar el desarrollo y despliegue de aplicaciones.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`,
    features: [
      'Pipelines CI/CD (GitHub Actions, GitLab CI)',
      'Docker y Kubernetes',
      'Monitorización y logging avanzado',
      'Cloud AWS, Azure, Google Cloud',
    ],
    price: 'A consultar',
    ctaText: 'Saber Más',
    ctaUrl: '#contact',
    order: 5,
  },
];
