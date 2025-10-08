import type { Project } from './types';

export const projects: Project[] = [
  // Proyectos de Digio (2025 - Actualidad)
  {
    id: 'plataforma-educativa-deporte',
    title: 'Plataforma educativa de Fitness, Nutrición y Salud',
    summary:
      'Plataforma educativa enfocada en el deporte con gestión de contenidos, usuarios y seguimiento de progreso',
    slug: 'plataforma-educativa-deporte',
    longDescription:
      'Continuación y desarrollo de plataforma educativa especializada en deportes. Sistema completo con gestión de cursos, seguimiento de alumnos, evaluaciones y contenido multimedia. Desarrollada con Angular para el frontend y Node.js para el backend.',
    technologies: ['Angular', 'Node.js', 'TypeScript', 'PostgreSQL'],
    type: 'web',
    company: 'Digio',
    year: 2025,
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'app-inventario-barcode',
    title: 'App de Inventario con Código de Barras',
    summary:
      'Aplicación móvil multiplataforma para gestión de inventario con escaneo de códigos de barras',
    slug: 'app-inventario-barcode',
    longDescription:
      'Continuación de aplicación móvil React Native para gestión de inventario empresarial. Incluye escaneo de códigos de barras mediante cámara, gestión offline-first, sincronización automática y reporting en tiempo real.',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'REST API'],
    type: 'mobile',
    company: 'Digio',
    year: 2025,
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'sistema-gestion-ruido-iot',
    title: 'Sistema IoT de Gestión de Ruido',
    summary:
      'Plataforma IoT para monitorización de niveles de ruido con alertas, configuración Bluetooth y análisis en tiempo real',
    slug: 'sistema-gestion-ruido-iot',
    longDescription:
      'Sistema avanzado IoT para gestión y monitorización de niveles de ruido. Incluye configuración de dispositivos vía Bluetooth, sistema de alertas en tiempo real, dashboards de análisis, gestión de umbrales y reporting histórico. Stack tecnológico: NestJS para el backend, React para el frontend, Redis para caching y colas, CrateDB para series temporales y PostgreSQL para datos estructurados.',
    technologies: ['NestJS', 'React', 'Redis', 'CrateDB', 'PostgreSQL', 'Bluetooth', 'IoT'],
    type: 'iot',
    company: 'Digio',
    year: 2025,
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'nps-casas-alquiler',
    title: 'Sistema NPS para Casas de Alquiler',
    summary:
      'Plataforma de Net Promoter Score para evaluación de satisfacción en alquileres vacacionales',
    slug: 'nps-casas-alquiler',
    longDescription:
      'Sistema completo de NPS (Net Promoter Score) para gestión de satisfacción de clientes en casas de alquiler vacacional. Incluye envío automatizado de encuestas, análisis de feedback, dashboards de métricas y reporting. Desarrollado con TanStack Start (framework moderno de React) y PostgreSQL.',
    technologies: ['TanStack Start', 'React', 'PostgreSQL', 'TypeScript'],
    type: 'web',
    company: 'Digio',
    year: 2025,
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'integracion-crm-erp-ia',
    title: 'Integración CRM/ERP con IA',
    summary:
      'Sistema de automatización de entrada de pedidos mediante IA generativa e integración con CRM/ERP SaaS',
    slug: 'integracion-crm-erp-ia',
    longDescription:
      'Proyecto de integración avanzada con CRM/ERP SaaS para automatizar la entrada de nuevos pedidos de clientes utilizando IA generativa y workflows con n8n. El sistema procesa automáticamente emails, documentos y comunicaciones de clientes, extrae información relevante mediante IA, valida datos y crea pedidos automáticamente en el sistema ERP.',
    technologies: ['IA Generativa', 'n8n', 'Node.js', 'REST API', 'TypeScript'],
    type: 'web',
    company: 'Digio',
    year: 2025,
    featured: true,
    status: 'in-progress',
  },

  // Proyectos de Seyte (ordenados por año: más recientes primero)

  // 2024
  {
    id: 'gestion-becas-universitarias',
    title: 'Sistema de Gestión de Becas Universitarias',
    summary:
      'Proyecto completo para la gestión de becas y ayudas de universidades. Incluye integración con concrete y sistemas externos de autenticación y correo',
    slug: 'gestion-becas-universitarias',
    longDescription:
      'Sistema integral para la gestión de becas universitarias con flujos de solicitud, verificación documental, integración con sistemas de autenticación universitaria y notificaciones por correo.',
    technologies: ['Angular', 'NestJS', 'OracleDB'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2024,
    featured: true,
    status: 'maintained',
  },
  {
    id: 'centro-lenguas-ual',
    title: 'Web Centro de Lenguas UAL',
    summary:
      'Web informativa para el Centro de Lenguas de la Universidad de Almería con panel de administración para gestionar contenidos multiidioma',
    slug: 'centro-lenguas-ual',
    longDescription:
      'Plataforma web informativa con panel de administración completo para gestionar contenidos en varios idiomas. Desarrollada con NestJS y Angular con Server-Side Rendering (SSR) para optimizar el SEO y rendimiento. Incluye gestión de cursos, horarios, profesores y recursos educativos.',
    technologies: ['NestJS', 'Angular SSR', 'PostgreSQL', 'Docker'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2024,
    featured: true,
    status: 'maintained',
  },
  {
    id: 'gestion-inmobiliaria',
    title: 'Sistema de Gestión Inmobiliaria',
    summary:
      'Plataforma de gestión inmobiliaria con planos 3D, integración con cerraduras Nuki, generación de informes y firma digital',
    slug: 'gestion-inmobiliaria',
    longDescription:
      'Sistema completo de gestión inmobiliaria que incluye gestión de planos en 3 dimensiones con Canvas, integración con sistema de cerraduras inteligentes Nuki para control de accesos, generación automatizada de informes personalizados, firma digital de contratos y documentos, gestión de propiedades, inquilinos y pagos.',
    technologies: ['Angular', 'NestJS', 'Canvas', 'Nuki API', 'PostgreSQL', 'Docker'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2024,
    featured: true,
    status: 'maintained',
  },

  // 2023
  {
    id: 'sistema-gestion-nominas',
    title: 'Sistema de Gestión de Nóminas',
    summary:
      'Proyecto completo para la gestión de nóminas de empleados. Incluye integración con la API de Woffu, exportación a excel y envío de correos',
    slug: 'sistema-gestion-nominas',
    longDescription:
      'Sistema para gestionar nóminas y permisos de empleados con integración a servicios externos (Woffu), generación de informes en Excel y comunicaciones automáticas por correo. Incluye gestión de usuarios, roles y exportaciones personalizadas.',
    technologies: ['Angular', 'Laravel', 'MySQL', 'Docker'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2023,
    featured: true,
    status: 'maintained',
  },
  {
    id: 'traspaso-vehiculos',
    title: 'Sistema de Traspaso de Vehículos',
    summary:
      'Plataforma para el traspaso de vehículos con solicitud de informes, notificaciones de venta, altas y bajas, matriculación y duplicado de permisos de circulación y carnet de conducir',
    slug: 'traspaso-vehiculos',
    longDescription:
      'Sistema completo para gestionar el traspaso de vehículos con integración a sistemas externos vía API. Permite transmitir vehículos, solicitar informes oficiales, gestionar notificaciones de venta, realizar altas y bajas, procesos de matriculación, y solicitar duplicados de permisos de circulación y carnet de conducir.',
    technologies: ['Laravel', 'Angular', 'MySQL', 'API REST'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2023,
    featured: true,
    status: 'maintained',
  },
  {
    id: 'agricultura-precision-prototipo',
    title: 'Prototipo de Agricultura de Precisión',
    summary:
      'Proyecto prototipo para agricultura de precisión, lectura de sensores con ESP32, envío via LoRa a la plataforma de TTN que expone topics MQTT que recoge telegraph para enviarlos a InfluxDB',
    slug: 'agricultura-precision-prototipo',
    longDescription:
      'Prototipo que recoge datos de sensores en campo mediante ESP32 y LoRa, publicando en TTN y almacenando series temporales en InfluxDB a través de Telegraf. Incluye dashboards de visualización y alertas.',
    technologies: ['ESP32', 'LoRa', 'MQTT', 'InfluxDB', 'Telegraph'],
    type: 'iot',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2023,
    featured: true,
    status: 'completed',
  },

  // 2022
  {
    id: 'contabilidad-ifrs-16',
    title: 'Sistema de Contabilidad IFRS 16',
    summary: 'Proyecto completo de contabilidad IFRS 16 para la gestión de contratos de alquiler',
    slug: 'contabilidad-ifrs-16',
    longDescription:
      'Plataforma para el tratamiento contable de contratos según la normativa IFRS16. Incluye registro de contratos, cálculo de amortizaciones, reporting y exportes contables para integración con ERPs.',
    technologies: ['Angular', 'Laravel', 'MySQL', 'Docker'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2022,
    featured: true,
    status: 'maintained',
  },
  {
    id: 'control-cerraduras-sistema',
    title: 'Sistema de Control de Cerraduras',
    summary:
      'Proyecto para el control de cerraduras y alarmas que dispone de panel web administrativo y app Android e iOS. Colas y cacheo con Redis e integraciones con sistemas externos',
    slug: 'control-cerraduras-sistema',
    longDescription:
      'Sistema híbrido con panel web y apps móviles para gestión de cerraduras y alarmas; incorpora colas para procesos asincrónicos y caching con Redis, así como integraciones de terceros.',
    technologies: ['Angular', 'NestJS', 'React Native', 'Redis'],
    type: 'mobile',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2022,
    featured: true,
    status: 'maintained',
  },

  // 2021
  {
    id: 'control-produccion-cooperativas',
    title: 'Sistema de Control de Producción',
    summary: 'Soporte en proyecto de control de producción de cooperativas',
    slug: 'control-produccion-cooperativas',
    longDescription:
      'Soporte en la plataforma de control de producción que integra sensores de planta, reporting y módulos de trazabilidad para cooperativas.',
    technologies: ['React', 'Laravel', 'Raspberry Pi'],
    type: 'web',
    company: 'Seyte. Servicios Empresariales y Tecnológicos',
    year: 2021,
    status: 'completed',
  },

  // Proyectos de Comunidad de Regantes
  {
    id: 'control-inventario',
    title: 'Sistema de Control de Inventario',
    summary: 'Proyecto para el control de inventario con integración con sistema externo',
    slug: 'control-inventario',
    longDescription:
      'Aplicación de inventario con integración a sistemas externos para sincronización automática de stock y reporting por almacén.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'Docker'],
    type: 'desktop',
    company: 'Comunidad de Regantes las 4 Vegas de Almería',
    year: 2020,
    status: 'completed',
  },
  {
    id: 'control-remoto-iot',
    title: 'Sistema de Control Remoto IoT',
    summary:
      'Proyecto para el control remoto con MQTT, Arduino, ESP32, Raspberry PI, módulos GSM/4G con tarjetas SIM m2m, sensores y actuadores',
    slug: 'control-remoto-iot',
    longDescription:
      'Solución IoT para control remoto con comunicaciones MQTT, gateways GSM y recopilación de telemetría, permitiendo control y monitorización remota de equipos.',
    technologies: [
      'NestJS',
      'Angular',
      'MariaDB',
      'Docker',
      'MQTT',
      'Arduino',
      'ESP32',
      'Raspberry Pi',
    ],
    type: 'iot',
    company: 'Comunidad de Regantes las 4 Vegas de Almería',
    year: 2020,
    featured: true,
    status: 'completed',
  },
  {
    id: 'red-videovigilancia',
    title: 'Red de Videovigilancia',
    summary:
      'Extensión de la red local a varios km con antenas PTP y PTMTP para la instalación de un sistema de videovigilancia con iSpy dockerizado',
    slug: 'red-videovigilancia',
    longDescription:
      'Diseño e implementación de red de videovigilancia de largo alcance con enlaces punto a punto y solución dockerizada de gestión de cámaras.',
    technologies: ['Docker', 'iSpy', 'Redes'],
    type: 'infrastructure',
    company: 'Comunidad de Regantes las 4 Vegas de Almería',
    year: 2019,
    status: 'completed',
  },
];
