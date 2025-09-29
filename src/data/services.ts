import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'desarrollo-web',
    icon: 'code',
    features: ['SPA', 'SSR', 'PWA'],
    price: { from: '500', currency: 'EUR' },
    ctaUrl: '/contact',
    order: 1
  },
  {
    slug: 'consultoria-iot',
    icon: 'wifi',
    features: ['Prototipado', 'Integración MQTT', 'Dashboards'],
    ctaUrl: '/contact',
    order: 2
  },
  {
    slug: 'integracion-sistemas',
    icon: 'puzzle',
    features: ['APIs REST', 'Microservicios', 'Mensajería'],
    price: 'Bajo presupuesto - consultar',
    ctaUrl: '/contact',
    order: 3
  }
];
