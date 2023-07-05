export interface Courses {
  year: number;
  courses: Course[];
}

export interface Course {
  title: string;
  duration: string;
  url: string;
}

export const courses: Courses[] = [
  {
    year: 2018,
    courses: [
      {
        title: "Fundamentos de programación",
        duration: "3.5 horas",
        url: "https://www.udemy.com/certificate/UC-JIDBR435/",
      },
      {
        title: "Aprende Programación con C# y Visual Studio desde cero",
        duration: "8 horas",
        url: "https://www.udemy.com/certificate/UC-YQG2GJ3S/",
      },
    ],
  },
  {
    year: 2019,
    courses: [
      {
        title: "Curso JavaFX. Aplicaciones de Escritorio Modernas",
        duration: "1.5 horas",
        url: "https://www.udemy.com/certificate/UC-293AWPBJ/",
      },
    ],
  },
  {
    year: 2020,
    courses: [
      {
        title: "Visual Studio Code: Mejora tu velocidad para codificar",
        duration: "1.5 horas",
        url: "https://www.udemy.com/certificate/UC-9cb44ef2-5479-4174-9dd5-72bab93c7517/",
      },
      {
        title: "GIT+GitHub: Todo un sistema de control de versiones",
        duration: "7 horas",
        url: "https://www.udemy.com/certificate/UC-Q1LT0B0L/",
      },
      {
        title: "Master en JavaScript: Aprender JS, jQuery, Angular 9, NodeJS",
        duration: "31.5 horas",
        url: "https://www.udemy.com/certificate/UC-4756d56d-37a6-474a-be5c-d615bd43790c/",
      },
      {
        title: "Aprende Python desde cero",
        duration: "4 horas",
        url: "https://www.udemy.com/certificate/UC-2600bccc-9532-4af5-81a8-5d932e8113eb/",
      },
      {
        title: "Node: De cero a experto",
        duration: "20 horas",
        url: "https://www.udemy.com/certificate/UC-493ecf05-94db-4c6e-87a8-e94c1a57888f/",
      },
      {
        title: "Aprende JavaFX desde cero",
        duration: "6.5 horas",
        url: "https://www.udemy.com/certificate/UC-b3df8713-b281-42c5-baca-2a5d72b458c2/",
      },
      {
        title: "Docker, de principiante a experto",
        duration: "8.5 horas",
        url: "https://www.udemy.com/certificate/UC-78804b08-04b2-4d1c-8e59-966b5e505a4b/",
      },
    ],
  },
  {
    year: 2021,
    courses: [
      {
        title: "Angular: De cero a experto - (Edición 2022)",
        duration: "41.5 horas",
        url: "https://www.udemy.com/certificate/UC-08f57055-c0d7-4138-b41b-763ad5a73cae/",
      },
      {
        title: "REDUX en Angular con NGRX: Desde las bases hasta la práctica",
        duration: "12.5 horas",
        url: "https://www.udemy.com/certificate/UC-c2d8dbb4-d6ff-435e-bb96-d669bba40543/",
      },
      {
        title: "Aprende a crear una API RESTful con Laravel",
        duration: "9.5 horas",
        url: "https://www.udemy.com/certificate/UC-5ff61f9e-9e77-466f-b2d2-b87038c2bfdc/",
      },
    ],
  },
  {
    year: 2023,
    courses: [
      {
        title:
          "SSH, Figma, Introducción a OpenShift, Introducción a Cloud Computing",
        duration: "51 horas",
        url: "https://openwebinars.net/@Aorbk8Ao/",
      },
      {
        title: "Angular: Aplicaciones en tiempo real con sockets y rest",
        duration: "9.5 horas",
        url: "https://www.udemy.com/certificate/UC-dea253f7-94c6-482d-88b4-f779201f4642/",
      },
    ],
  },
];
