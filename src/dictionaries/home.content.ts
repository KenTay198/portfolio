import { getMyAge } from "@utils/functions";

const age = getMyAge();

interface IHomeContent {
  meta: { description: string },
  job: string,
  description: string;
  nextPage: string,
  images: {
    logo: {
      alt: string
    }
  }
}

const homeContent: Record<string, IHomeContent> = {
  fr: {
    meta: {
      description:
        `Développeur full-stack junior de ${age} ans ayant pour envie d'en apprendre toujours plus sur le monde du développement.`,
    },
    job: "Développeur Full-Stack junior français",
    description: `Développeur full-stack junior de ${age} ans désireux d'en apprendre toujours plus sur le monde du développement. Passionné de la manipulation de données et de la réalisation de sites web toujours plus créatifs, je veux atteindre les limites du développement Web et les maîtriser.`,
    nextPage: "Cliquez pour en savoir plus !",
    images: {
      logo: {
        alt: "Logo de John-Kenneth",
      },
    },
  },
  en: {
    meta: {
      description:
        `${age}-year-old junior full-stack developer willing to learn more and more about the world of development.`,
    },
    job: "French junior Full-Stack developer",
    description: `${age}-year-old junior full-stack developer keen to learn more the world of development. I'm passionate about manipulating data and creating creative websites, I want to reach the limits of web development and master them.`,
    nextPage: "Click for more information !",
    images: {
      logo: {
        alt: "John-Kenneth Logo",
      },
    },
  },
};

export default homeContent;
