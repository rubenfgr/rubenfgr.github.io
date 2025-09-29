import type { Education, Course } from './types';

export const education: Education[] = [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    institution: "I.E.S Al-Ándalus",
    period: "2020-2022",
    grade: "Nota media: 9.85"
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "I.E.S Al-Ándalus",
    period: "2018-2020",
    grade: "Nota media: 9.65"
  }
];

export const courses: Course[] = [
  // 2023
  { title: "SSH, Figma, Introducción a OpenShift, Introducción a Cloud Computing", duration: "51 horas", year: 2023 },
  { title: "Angular: Aplicaciones en tiempo real con sockets y rest", duration: "9.5 horas", year: 2023 },

  // 2021
  { title: "Angular: De cero a experto - (Edición 2022)", duration: "41.5 horas", year: 2021 },
  { title: "REDUX en Angular con NGRX: Desde las bases hasta la práctica", duration: "12.5 horas", year: 2021 },
  { title: "Aprende a crear una API RESTful con Laravel", duration: "9.5 horas", year: 2021 },

  // 2020
  { title: "Master en JavaScript: Aprender JS, jQuery, Angular 9, NodeJS", duration: "31.5 horas", year: 2020 },
  { title: "Node: De cero a experto", duration: "20 horas", year: 2020 },
  { title: "Docker, de principiante a experto", duration: "8.5 horas", year: 2020 },
  { title: "GIT+GitHub: Todo un sistema de control de versiones", duration: "7 horas", year: 2020 },
  { title: "Aprende JavaFX desde cero", duration: "6.5 horas", year: 2020 },
  { title: "Aprende Python desde cero", duration: "4 horas", year: 2020 },
  { title: "Visual Studio Code: Mejora tu velocidad para codificar", duration: "1.5 horas", year: 2020 },

  // 2019
  { title: "Curso JavaFX. Aplicaciones de Escritorio Modernas", duration: "1.5 horas", year: 2019 },

  // 2018
  { title: "Aprende Programación con C# y Visual Studio desde cero", duration: "8 horas", year: 2018 },
  { title: "Fundamentos de programación", duration: "3.5 horas", year: 2018 }
];
