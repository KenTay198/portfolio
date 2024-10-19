export interface IExperience {
  date: string;
  title: string
  etablissement: string
  missions?: { label: string, href?: string }[]
}

interface IExperiencesContent {
  title: string,
  categories: {
    work: string;
    school: string;
  }
  work: (IExperience | undefined)[]
  school: (IExperience | undefined)[]
}

const experiencesContent: Record<string, IExperiencesContent> = {
  fr: {
    title: "MES EXPÉRIENCES",
    categories: {
      work: "Travail",
      school: "Formation",
    },
    work: [
      undefined,
      {
        date: "12/04/2021 - 02/07/2021",
        title: "Stage développeur web",
        etablissement: "Elikya Academy",
        missions: [
          {
            label: "Réalisation d'un site web de formations en PHP et JS (JQuery)",
          },
          {
            label: "Réalisation d'un back-office",
          },
        ],
      },
      {
        date: "01/10/2021 - 27/09/2024",
        title: "Alternance développeur web et mobile",
        etablissement: "Elikya Academy",
        missions: [
          {
            label: "Réalisation du site web global avec Next JS",
            href: "https://www.elikya-academy.com",
          },
          {
            label: "Refonte du site web de formations",
            href: "https://www.formations.elikya-academy.com",
          },
          {
            label: "Création d'une api avec NodeJS / ExpressJS",
          },
          {
            label: "Réalisation d'un back-office administrateur avec Next JS",
          },
          {
            label:
              "Réalisation d'une application mobile de gestion interne avec Flutter / Dart",
          },
          {
            label: "Administration de bases de données MySQL",
          },
          {
            label: "Mise en place d'un cloud et d'un CDN",
          },
        ],
      },
    ],
    school: [
      {
        date: "2016 - 2019",
        title: "Filière Scientifique - Spé ISN",
        etablissement: "Lycée Philibert Delorme",
        missions: [
          {
            label: "Découverte de Python, HTML et CSS",
          },
        ],
      },
      {
        date: "Septembre 2019 - Juillet 2021",
        title: "DUT Informatique",
        etablissement: "IUT Lyon 1",
        missions: [
          {
            label: "Découverte des différentes spécialités de l'informatique",
          },
          {
            label: "Apprentissage de HTML, CSS, PHP et JavaScript",
          },
        ],
      },
      {
        date: "29/10/2021 - Juillet 2024",
        title: "Mastère - Expert développement Full Stack",
        etablissement: "Ynov Lyon",
        missions: [
          {
            label: "Apprentissage de plusieurs technologies web comme React, Node, MongoDB, Docker, etc..."
          },
          {
            label: "Réalisation de multiple projets"
          }
        ]
      },
    ]
  },
  en: {
    title: "MY EXPERIENCES",
    categories: {
      work: "Work",
      school: "School",
    },
    work: [
      undefined,
      {
        date: "12/04/2021 - 02/07/2021",
        title: "Web development internship",
        etablissement: "Elikya Academy",
        missions: [
          {
            label: "Creation of a training website in PHP and JS (JQuery)",
          },
          {
            label: "Creation of a back-office",
          },
        ],
      },
      {
        date: "01/10/2021 - 27/09/2024",
        title: "Web and mobile development apprenticeship",
        etablissement: "Elikya Academy",
        missions: [
          {
            label: "Global website development with Next JS",
            href: "https://www.elikya-academy.com",
          },
          {
            label: "Redesign of the training website",
            href: "https://www.formations.elikya-academy.com",
          },
          {
            label: "Creating an api with NodeJS / ExpressJS",
          },
          {
            label: "Creating an administrator back-office with Next JS",
          },
          {
            label:
              "Creation of an internal management mobile application with Flutter / Dart",
          },
          {
            label: "MySQL database administration",
          },
          {
            label: "Cloud and CDN setup",
          },
        ],
      },
    ],
    school: [
      {
        date: "2016 - 2019",
        title: "Filière Scientifique - Spé ISN",
        etablissement: "Lycée Philibert Delorme",
        missions: [
          {
            label: "Discover Python, HTML et CSS",
          },
        ],
      },
      {
        date: "September 2019 - July 2021",
        title: "DUT Informatique",
        etablissement: "IUT Lyon 1",
        missions: [
          {
            label: "Discover the different specialties of IT",
          },
          {
            label: "Learn HTML, CSS, PHP and JavaScript",
          },
        ],
      },
      {
        date: "29/10/2021 - July 2024",
        title: "Mastère - Full Stack development expert",
        etablissement: "Ynov Lyon",
        missions: [
          {
            label: "Learning of multiple web technologies such as React, Node, MongoDB, Docker, etc..."
          },
          {
            label: "Multiple projects"
          }
        ]
      },
    ]
  },
};

export default experiencesContent;
