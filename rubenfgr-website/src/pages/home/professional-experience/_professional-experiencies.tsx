import { v4 } from "uuid";

export interface ProfessionalExperience {
  id: string;
  durationRange: string;
  company: string;
  experiencies: {
    type: ProfessionalExperienceType;
    description: string;
  }[];
}

export enum ProfessionalExperienceType {
  PROJECT = "Proyecto",
  SUPPORT = "Soporte",
}

export const professionalExperiencies: ProfessionalExperience[] = [
  {
    id: v4(),
    durationRange: "2018-2021",
    company: "Comunidad de Regantes las 4 Vegas de Almería",
    experiencies: [
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto para el control de inventario con Java, JavaFX, MySQL y Docker e integración con sistema externo",
      },
      {
        type: ProfessionalExperienceType.SUPPORT,
        description:
          "Desarrollo y mantenimiento de software, equipos informáticos y redes",
      },
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto para el control remoto con NestJS, Angular, MariaDB, Docker y Compose, MQTT, Arduino, ESP32, Raspberry PI, módulos GSM/4G con tarjetas SIM m2m, sensores y actuadores",
      },
      {
        type: ProfessionalExperienceType.SUPPORT,
        description:
          "Extensión de la red local a varios km con antenas PTP y PTMTP para la instalación de un sistema de videovigilancia con iSpy dockerizado",
      },
    ],
  },
  {
    id: v4(),
    durationRange: "2021-XXXX",
    company: "Seyte. Servicios Empresariales y Tecnológicos",
    experiencies: [
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto completo para la gestión de nóminas de empleados con Angular, Laravel, MySQL y Docker. Incluye integración con la API de Woffu, exportación a excel y envío de correos",
      },
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto completo de contabilidad IFRS 16 para la gestión de contratos de alquiler con Angular, Laravel, MySQL y Docker",
      },
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto completo para la gestión de becas y ayudas de universidades con Angular, Nest y OracleDB. Incluye integración con concrete y sistemas externos de autenticación y correo",
      },
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto prototipo para agricultura de precisión, lectura de sensores con ESP32, envío via LoRa a la plataforma de TTN que expone topics MQTT que recoge telegraph para enviarlos a InfluxDB",
      },
      {
        type: ProfessionalExperienceType.SUPPORT,
        description:
          "Soporte en proyecto de control de producción de cooperativas con React, Laravel y raspberrypi",
      },
      {
        type: ProfessionalExperienceType.PROJECT,
        description:
          "Proyecto para el control de cerraduras y alarmas con Angular, NestJS y React Native que dispone de panel web administrativo y app Android e iOS. Colas y cacheo con Redis e integraciones con sistemas externos",
      },
    ],
  },
];
