interface IHomeContent {
  meta: { description: string },
  job: string,
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
        "Développeur full-stack junior de 20 ans ayant pour envie d'en apprendre toujours plus sur le monde du développement.",
    },
    job: "Développeur Full-Stack junior français",
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
        "20-year-old junior full-stack developer willing to learn more and more about the world of development.",
    },
    job: "French junior Full-Stack developer",
    nextPage: "Click for more information !",
    images: {
      logo: {
        alt: "John-Kenneth Logo",
      },
    },
  },
};

export default homeContent;
