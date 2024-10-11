import { getMyAge } from "@utils/functions";

const age = getMyAge();

interface IHomeContent {
  meta: { description: string };
  presentation: {
    job: string;
    description: string;
    buttons: {
      contactMe: string;
      myResumte: string;
    };
  };
  favoriteTechnologies: {
    title: string;
  };
  skills: {
    title: string;
    frontend: string[];
    backend: string[];
    technologies: string;
    allSkills: string;
  };
  projects: {
    title: string;
    allProjects: string;
  };
  images: {
    logo: {
      alt: string;
    };
    portrait: {
      alt: string;
    };
  };
}

const homeContent: Record<string, IHomeContent> = {
  fr: {
    meta: {
      description: `Développeur full-stack junior de ${age} ans ayant pour envie d'en apprendre toujours plus sur le monde du développement.`,
    },
    presentation: {
      job: "Développeur web Full-Stack junior",
      description: `Développeur full-stack junior de ${age} ans désireux d'en apprendre toujours plus sur le monde du développement. Passionné de la manipulation de données et de la réalisation de sites web toujours plus créatifs, je veux atteindre les limites du développement Web et les maîtriser.`,
      buttons: {
        contactMe: "Me contacter",
        myResumte: "Mon CV",
      },
    },
    images: {
      logo: {
        alt: "Logo de John-Kenneth",
      },
      portrait: {
        alt: "Portrait photo de John-Kenneth",
      },
    },
    favoriteTechnologies: {
      title: "Technologies favorites",
    },
    skills: {
      title: "Mes compétences",
      frontend: [
        "J'aime manipuler des données et des APIs. J'ai déjà pu mettre en place plusieurs infrastructures complètes au travers de divers projets scolaires et professionnels.",
        "J'aime énormément la sensation de satisfaction après avoir réussi à finaliser une situation ou un programme complexe, et c'est une des choses que je recherche dans le back-end.",
      ],
      backend: [
        "Je vois le front-end comme la consécration de tout le travail que j'ai réalisé côté back. J'ai une attache particulière avec les applications webs dynamiques et créatives.",
        "Allier le CSS et le JavaScript pour réaliser des créations uniques est comme un jeu pour moi, j'essaie d'utiliser le moins de librairies externes pour ne pas me retirer ce plaisir ! ",
      ],
      technologies: "TECHNOLOGIES",
      allSkills: "Toutes mes compétences",
    },
    projects: {
      title: "Mes projets",
      allProjects: "Tous mes projets"
    }
  },
  en: {
    meta: {
      description: `${age}-year-old junior full-stack developer willing to learn more and more about the world of development.`,
    },
    presentation: {
      job: "Junior Full-Stack web developer",
      description: `${age}-year-old junior full-stack developer who wants to learn more about the world of development. I'm passionate about manipulating data and creating creative websites, and I want to push the boundaries of web development.`,
      buttons: {
        contactMe: "Contact me",
        myResumte: "My resume",
      },
    },
    images: {
      logo: {
        alt: "John-Kenneth Logo",
      },
      portrait: {
        alt: "Portrait photo of John-Kenneth",
      },
    },
    favoriteTechnologies: {
      title: "Favorites technologies",
    },
    skills: {
      title: "My skills",
      frontend: [
        "I really like to manipulate datas and APIs. I have already setup several complete web infrastructures through various school and professional projects.",
        "I love the feeling of satisfaction when you successfully complete a complex situation or programme, and that's something I really look for when I'm doing back-end work.",
      ],
      backend: [
        "I see the front-end as a consecration of all the work I have done in the back-end. My favorite part is developing creative and dynamic web applications.",
        "Combining CSS and JavaScript to make unique creations is like a game, I try to use as few external libraries as possible to challenge myself and be the complete master of what I create. ",
      ],
      technologies: "TECHNOLOGIES",
      allSkills: "All my skills",
    },
    projects: {
      title: "My projects",
      allProjects: "All my projects"
    }
  },
};

export default homeContent;
