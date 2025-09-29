import type { Project } from './types';

export const projects: Project[] = [
  // Proyectos de Seyte
  {
    id: "sistema-gestion-nominas",
    title: "Sistema de Gestión de Nóminas",
    summary: "Proyecto completo para la gestión de nóminas de empleados. Incluye integración con la API de Woffu, exportación a excel y envío de correos",
    slug: "sistema-gestion-nominas",
    longDescription: "Sistema para gestionar nóminas y permisos de empleados con integración a servicios externos (Woffu), generación de informes en Excel y comunicaciones automáticas por correo. Incluye gestión de usuarios, roles y exportaciones personalizadas.",
    technologies: ["Angular", "Laravel", "MySQL", "Docker"],
    type: "web",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    year: 2023,
    featured: true,
    status: "maintained"
  },
  {
    id: "contabilidad-ifrs-16",
    title: "Sistema de Contabilidad IFRS 16",
    summary: "Proyecto completo de contabilidad IFRS 16 para la gestión de contratos de alquiler",
    slug: "contabilidad-ifrs-16",
    longDescription: "Plataforma para el tratamiento contable de contratos según la normativa IFRS16. Incluye registro de contratos, cálculo de amortizaciones, reporting y exportes contables para integración con ERPs.",
    technologies: ["Angular", "Laravel", "MySQL", "Docker"],
    type: "web",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    year: 2022,
    featured: true,
    status: "maintained"
  },
  {
    id: "gestion-becas-universitarias",
    title: "Sistema de Gestión de Becas Universitarias",
    summary: "Proyecto completo para la gestión de becas y ayudas de universidades. Incluye integración con concrete y sistemas externos de autenticación y correo",
    slug: "gestion-becas-universitarias",
    longDescription: "Sistema integral para la gestión de becas universitarias con flujos de solicitud, verificación documental, integración con sistemas de autenticación universitaria y notificaciones por correo.",
    technologies: ["Angular", "NestJS", "OracleDB"],
    type: "web",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    year: 2024,
    featured: true,
    status: "maintained"
  },
  {
    id: "agricultura-precision-prototipo",
    title: "Prototipo de Agricultura de Precisión",
    summary: "Proyecto prototipo para agricultura de precisión, lectura de sensores con ESP32, envío via LoRa a la plataforma de TTN que expone topics MQTT que recoge telegraph para enviarlos a InfluxDB",
    slug: "agricultura-precision-prototipo",
    longDescription: "Prototipo que recoge datos de sensores en campo mediante ESP32 y LoRa, publicando en TTN y almacenando series temporales en InfluxDB a través de Telegraf. Incluye dashboards de visualización y alertas.",
    technologies: ["ESP32", "LoRa", "MQTT", "InfluxDB", "Telegraph"],
    type: "iot",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    year: 2023,
    featured: true,
    status: "completed"
  },
  {
    id: "control-cerraduras-sistema",
    title: "Sistema de Control de Cerraduras",
    summary: "Proyecto para el control de cerraduras y alarmas que dispone de panel web administrativo y app Android e iOS. Colas y cacheo con Redis e integraciones con sistemas externos",
    slug: "control-cerraduras-sistema",
    longDescription: "Sistema híbrido con panel web y apps móviles para gestión de cerraduras y alarmas; incorpora colas para procesos asincrónicos y caching con Redis, así como integraciones de terceros.",
    technologies: ["Angular", "NestJS", "React Native", "Redis"],
    type: "mobile",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    year: 2022,
    featured: true,
    status: "maintained"
  },
  {
    id: "control-produccion-cooperativas",
    title: "Sistema de Control de Producción",
    summary: "Soporte en proyecto de control de producción de cooperativas",
    slug: "control-produccion-cooperativas",
    longDescription: "Soporte en la plataforma de control de producción que integra sensores de planta, reporting y módulos de trazabilidad para cooperativas.",
    technologies: ["React", "Laravel", "Raspberry Pi"],
    type: "web",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    year: 2021,
    status: "completed"
  },

  // Proyectos de Comunidad de Regantes
  {
    id: "control-inventario",
    title: "Sistema de Control de Inventario",
    summary: "Proyecto para el control de inventario con integración con sistema externo",
    slug: "control-inventario",
    longDescription: "Aplicación de inventario con integración a sistemas externos para sincronización automática de stock y reporting por almacén.",
    technologies: ["Java", "JavaFX", "MySQL", "Docker"],
    type: "desktop",
    company: "Comunidad de Regantes las 4 Vegas de Almería",
    year: 2020,
    status: "completed"
  },
  {
    id: "control-remoto-iot",
    title: "Sistema de Control Remoto IoT",
    summary: "Proyecto para el control remoto con MQTT, Arduino, ESP32, Raspberry PI, módulos GSM/4G con tarjetas SIM m2m, sensores y actuadores",
    slug: "control-remoto-iot",
    longDescription: "Solución IoT para control remoto con comunicaciones MQTT, gateways GSM y recopilación de telemetría, permitiendo control y monitorización remota de equipos.",
    technologies: ["NestJS", "Angular", "MariaDB", "Docker", "MQTT", "Arduino", "ESP32", "Raspberry Pi"],
    type: "iot",
    company: "Comunidad de Regantes las 4 Vegas de Almería",
    year: 2020,
    featured: true,
    status: "completed"
  },
  {
    id: "red-videovigilancia",
    title: "Red de Videovigilancia",
    summary: "Extensión de la red local a varios km con antenas PTP y PTMTP para la instalación de un sistema de videovigilancia con iSpy dockerizado",
    slug: "red-videovigilancia",
    longDescription: "Diseño e implementación de red de videovigilancia de largo alcance con enlaces punto a punto y solución dockerizada de gestión de cámaras.",
    technologies: ["Docker", "iSpy", "Redes"],
    type: "infrastructure",
    company: "Comunidad de Regantes las 4 Vegas de Almería",
    year: 2019,
    status: "completed"
  }
];
