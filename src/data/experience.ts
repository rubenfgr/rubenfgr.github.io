import type { Experience } from './types';

export const experience: Experience[] = [
  {
    id: "seyte",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    position: "Desarrollador FullStack Senior",
    period: "2021-Actualidad",
    description: "Desarrollo de aplicaciones web y móviles empresariales, sistemas de gestión, integraciones IoT y soluciones tecnológicas personalizadas para diversos sectores.",
    projectIds: [
      "sistema-gestion-nominas",
      "contabilidad-ifrs-16",
      "gestion-becas-universitarias",
      "agricultura-precision-prototipo",
      "control-cerraduras-sistema",
      "control-produccion-cooperativas"
    ],
    achievements: [
      "Lideré el desarrollo de 6 proyectos empresariales complejos",
      "Implementé arquitecturas escalables con Docker y microservicios",
      "Desarrollé soluciones IoT innovadoras para agricultura de precisión",
      "Integré sistemas externos (APIs, MQTT, bases de datos legacy)"
    ]
  },
  {
    id: "regantes",
    company: "Comunidad de Regantes las 4 Vegas de Almería",
    position: "Desarrollador de Sistemas y Administrador IT",
    period: "2018-2021",
    description: "Desarrollo de sistemas internos, implementación de soluciones IoT para control remoto, gestión de infraestructura tecnológica y redes de comunicación.",
    projectIds: [
      "control-inventario",
      "control-remoto-iot",
      "red-videovigilancia"
    ],
    achievements: [
      "Diseñé e implementé una red IoT completa para control remoto",
      "Desarrollé sistema de inventario integrado con sistemas legacy",
      "Establecí infraestructura de red de largo alcance (varios km)",
      "Implementé sistema de videovigilancia distribuido"
    ]
  }
];
