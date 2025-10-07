import type { Experience } from './types';

export const experience: Experience[] = [
  {
    id: 'digio',
    company: 'Digio',
    position: 'Desarrollador FullStack Senior',
    period: '2025-Actualidad',
    description:
      'Desarrollo de aplicaciones web y multiplataforma empresariales con metodología Scrum. Aplicación avanzada de IA para el desarrollo y automatización de procesos.',
    projectIds: [
      'plataforma-educativa-deporte',
      'app-inventario-barcode',
      'sistema-gestion-ruido-iot',
      'nps-casas-alquiler',
      'integracion-crm-erp-ia',
    ],
    achievements: [
      'Implementé soluciones con IA generativa para automatización de procesos',
      'Trabajé sistema IoT complejo para gestión de niveles de ruido con múltiples integraciones',
      'Trabajé con stack moderno: TanStack Start, NestJS, React Native, Angular',
      'Integré CRM/ERP con IA y n8n para automatización de pedidos',
      'Apliqué metodología Scrum en todos los proyectos',
    ],
  },
  {
    id: 'seyte',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    position: 'Desarrollador FullStack Senior',
    period: '2021-2025',
    description:
      'Desarrollo de aplicaciones web y móviles empresariales, sistemas de gestión, integraciones IoT y soluciones tecnológicas personalizadas para diversos sectores.',
    projectIds: [
      // 2024
      'gestion-becas-universitarias',
      'centro-lenguas-ual',
      'gestion-inmobiliaria',
      // 2023
      'sistema-gestion-nominas',
      'traspaso-vehiculos',
      'agricultura-precision-prototipo',
      // 2022
      'contabilidad-ifrs-16',
      'control-cerraduras-sistema',
      // 2021
      'control-produccion-cooperativas',
    ],
    achievements: [
      'Lideré el desarrollo de 9 proyectos empresariales complejos',
      'Implementé arquitecturas escalables con Docker y microservicios',
      'Desarrollé soluciones IoT innovadoras para agricultura de precisión',
      'Integré sistemas externos (APIs, MQTT, bases de datos legacy, cerraduras inteligentes)',
    ],
  },
  {
    id: 'regantes',
    company: 'Comunidad de Regantes las 4 Vegas de Almería',
    position: 'Desarrollador de Sistemas y Administrador IT',
    period: '2018-2021',
    description:
      'Desarrollo de sistemas internos, implementación de soluciones IoT para control remoto, gestión de infraestructura tecnológica y redes de comunicación.',
    projectIds: ['control-inventario', 'control-remoto-iot', 'red-videovigilancia'],
    achievements: [
      'Diseñé e implementé una red IoT completa para control remoto',
      'Desarrollé sistema de inventario integrado con sistemas legacy',
      'Establecí infraestructura de red de largo alcance (varios km)',
      'Implementé sistema de videovigilancia distribuido',
    ],
  },
];
