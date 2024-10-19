interface IProjectTechnos {
  language: string[];
  frameworks: string[];
  style: string[];
  database?: string[];
  others?: string[];
}

export interface IProjectDescription {
  description: string;
  skills: string[];
  technos: IProjectTechnos;
}

interface IProjectsContent {
  title: string;
  meta: {
    description: string;
  };
  goToSite: string;
  titles: {
    skills: string;
    technos: string;
  };
  technoCategories: {
    language: string;
    frameworks: string;
    style: string;
    others: string;
    database: string;
  };
  projects: {
    elikya: IProjectDescription;
    gamerhub: IProjectDescription;
    elikya_formations: IProjectDescription;
    channy: IProjectDescription;
    bantudojo: IProjectDescription;
    extranet: IProjectDescription;
    elikya_admin: IProjectDescription;
  };
}

const projectsContent: Record<string, IProjectsContent> = {
  fr: {
    title: "MES PROJETS",
    meta : {
      description : "Consultez la liste des projets que j'ai réalisé, en groupe ou individuellement !" 
    },
    goToSite: "Visiter le site",
    projects: {
      elikya: {
        description:
          "C'est le site global de l'entreprise Elikya Academy. Il présente toutes les activités réalisées, diffuse les prochains événements qui s'y dérouleront et permet de s'inscrire aux différentes branches.",
        skills: [
          "Développement individuel",
          "Intégration d'un site web à partir d'une maquette",
          "Amélioration continue du design",
          "Alimentation régulière de contenus",
          "Affichage de contenus médias et textuels à partir d'un back-office",
          "Optimisation SEO",
          "Système d'inscription sur-mesure lié à une base de donnée Notion et à un envoi de mails automatiques",
          "Formulaire de cours d'essais sur mesure lié à une base de donnée Notion et à un envoi de mails avec envoi de mails automatiques",
          "Formulaire de contact sur-mesure avec envoi de mails automatiques",
          "Barre de recherche sur mesure",
          "Architecture atomique",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "DaisyUI", "Styled components"],
          others: ["Axios"],
        },
      },
      gamerhub: {
        description:
          "GamerHub est le projet de fin d'année de Mastère 2 réalisé avec mon groupe à Ynov Lyon. C'est une plateforme de jeux en ligne multijoueurs configurables qui utilise des éléments de la pop-culture d'Internet.",
        skills: [
          "Développement en équipe",
          "Gestion de projet",
          "Intégration d'un site à partir d'une maquette",
          "Système d'authentification",
          "Mise en place d'une connexion en temps réel par Web Sockets",
          "Mise en place de parties multijoueurs",
          "Implémentation complète de plusieurs systèmes de jeux différents",
          "Sauvegarde de données de jeu avec MongoDB",
          "Mise en place d'un ChatBot pour recueillir des bugs et des requêtes",
          "Intégration multi-langue",
          "Développement d'une API",
          "Mise en place de cache côté serveur",
          "Gestion de paiement en ligne",
          "Mise en place d'une PWA",
          "Mise en place d'un service de modération des utilisateurs et des parties",
          "Mise en place de tests fonctionnels",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["VueJS", "NodeJS", "ExpressJS"],
          style: ["TailwindCSS", "Sass", "HeadlessUI"],
          database: ["MongoDB"],
          others: [
            "Socket.IO",
            "TypeBot",
            "Pinia",
            "Dragonfly",
            "Stripe",
            "Vue i18n",
          ],
        },
      },
      elikya_formations: {
        description:
          "C'est le site spécialisé sur les formations professionnelles d'Elikya Academy. Il présente les différentes catégories et modalités de formation et permet aux apprenants de s'inscrire.",
        skills: [
          "Développement individuel",
          "Création du design",
          "Amélioration continue du design",
          "Alimentation régulière de contenus",
          "Affichage de contenus médias et textuels à partir d'un back-office",
          "Optimisation SEO",
          "Système d'inscription sur-mesure lié à un envoi de mails automatiques",
          "Formulaire de contact sur-mesure avec envoi de mails automatiques",
          "Barre de recherche sur mesure",
          "Architecture atomique",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
          others: ["Axios"],
        },
      },
      channy: {
        description: "Un site vitrine pour l'association Channy Dance & Music.",
        skills: [
          "Développement individuel",
          "Création du design",
          "Optimisation SEO",
          "Architecture atomique",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
        },
      },
      bantudojo: {
        description: "Un site vitrine pour l'association Bantu Dojo Warriors.",
        skills: [
          "Développement individuel",
          "Création du design",
          "Optimisation SEO",
          "Architecture atomique",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
        },
      },
      extranet: {
        description:
          "L'extranet est une application web interne qui gère les cours des différentes branches d'Elikya Academy. À partir de la plateforme, l'équipe peut gérer les emplois du temps et les professeurs, faire des factures, faire l'appel, ...",
        skills: [
          "Développement individuel",
          "Création du design",
          "Système d'authentification sur-mesure",
          "Récupération de données depuis une API",
          "Manipulation de données",
          "Génération de factures",
          "Gestion de base de données",
          "Formulaires",
          "Architecture atomique",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
          others: ["Axios"],
        },
      },
      elikya_admin: {
        description:
          "Cet application est un back-office qui permet à l'équipe Elikya Academy de de gérer des contenus sur les différents sites Internet. Ils ont également accès à d'autres outils comme un générateur de facture, un outil pour gérer des locations, ...",
        skills: [
          "Développement individuel",
          "Création du design",
          "Système d'authentification sur-mesure",
          "Récupération de données depuis une API",
          "Manipulation de données",
          "Génération de factures",
          "Gestion de base de données",
          "Formulaires",
          "Emails automatiques",
          "Architecture atomique",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
          others: ["Axios"],
        },
      },
    },
    titles: {
      skills: "Compétences mobilisées",
      technos: "Technologies & Bibliothèques",
    },
    technoCategories: {
      language: "Langage",
      frameworks: "Frameworks",
      style: "Style",
      others: "Autres",
      database: "Base de données",
    },
  },
  en: {
    title: "MY PROJECTS",
    meta : {
      description : "See the list of all the projects I have done, in groups or alone !" 
    },
    goToSite: "Visit website",
    projects: {
      elikya: {
        description:
          "This is the general website of Elikya Academy. It presents all the activities, announces the next events that will take place and allows customers to register for their courses.",
        skills: [
          "Individual development",
          "Website integration from a mockup",
          "Continuous design improvement",
          "Regular supply of content",
          "Display of media and text content from a back-office",
          "SEO optimisation",
          "Customised registration system linked to a Notion database and automated emails",
          "Customised trial courses form linked to a Notion database and automated emails",
          "Customised contact form linked to automated emails",
          "Customised search bar",
          "Atomic design",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "DaisyUI", "Styled components"],
          others: ["Axios"],
        },
      },
      gamerhub: {
        description:
          "GamerHub is the end-of-year project I did with my group at Ynov Lyon in Mastère 2. It's a multiplayer online game platform that uses elements from Internet pop-culture.",
        skills: [
          "Team development",
          "Project management",
          "Website integration from a mockup",
          "Authentication system",
          "Real time connexion setup with Web Sockets",
          "Multiplayer games setup",
          "Multiple game systems complete implementation from scratch",
          "Game data save with MongoDB",
          "ChatBot setup to receive bugs and requests",
          "Multiple languages integration",
          "API development",
          "Server-side cache setup",
          "Online payment management",
          "PWA setup",
          "Users and games moderation setup",
          "Functional tests setup",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["VueJS", "NodeJS", "ExpressJS"],
          style: ["TailwindCSS", "Sass", "HeadlessUI"],
          database: ["MongoDB"],
          others: [
            "Socket.IO",
            "TypeBot",
            "Pinia",
            "Dragonfly",
            "Stripe",
            "Vue i18n",
          ],
        },
      },
      elikya_formations: {
        description:
          "This is the website specialized in the professionnal trainings of Elikya Academy. It presents all the categories, terms and allows customers to register.",
        skills: [
          "Individual development",
          "Design creation",
          "Continuous design improvement",
          "Regular supply of content",
          "Display of media and text content from a back-office",
          "SEO optimisation",
          "Customised registration system linked to automated emails",
          "Customised contact form linked to automated emails",
          "Customised search bar",
          "Atomic design",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
          others: ["Axios"],
        },
      },
      channy: {
        description: "A website for the association Channy Dance & Music.",
        skills: [
          "Individual development",
          "Design creation",
          "SEO optimisation",
          "Atomic design",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
        },
      },
      bantudojo: {
        description: "A website for the association Bantu Dojo Warriors.",
        skills: [
          "Individual development",
          "Design creation",
          "SEO optimisation",
          "Atomic design",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
        },
      },
      extranet: {
        description:
          "This extranet is an internal web app which allows Elikya Academy team to manage their courses. On this platform, the team can handle timetables and teachers, generate invoices, take attendance, ...",
        skills: [
          "Individual development",
          "Design creation",
          "Customised authentication system",
          "Data fetching from an API",
          "Data manipulation",
          "Invoice generation",
          "Database management",
          "Forms",
          "Atomic design",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
          others: ["Axios"],
        },
      },
      elikya_admin: {
        description:
          "This app is a back-office chichs allows Elikya Academy team to manage some contents on their websites. They also have access to several tools such as an invoice generator, a tool to manage locations, ...",
        skills: [
          "Individual development",
          "Design creation",
          "Customised authentication system",
          "Data fetching from an API",
          "Data manipulation",
          "Invoice generation",
          "Database management",
          "Forms",
          "Automatic emails",
          "Atomic design",
        ],
        technos: {
          language: ["TypeScript"],
          frameworks: ["NextJS", "ReactJS"],
          style: ["Sass", "TailwindCSS", "Styled components"],
          others: ["Axios"],
        },
      },
    },
    titles: {
      skills: "Skills used",
      technos: "Technologies & Libraries",
    },
    technoCategories: {
      language: "Language",
      frameworks: "Frameworks",
      style: "Style",
      others: "Others",
      database: "Database",
    },
  },
};

export default projectsContent;
