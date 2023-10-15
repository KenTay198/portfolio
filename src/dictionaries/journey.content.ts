import { IconType } from "react-icons";
import { FaCode, FaSchool, FaSuitcase } from "react-icons/fa";

interface IAboutContent {
  title: string;
  presentation: { Icon: IconType; description: string }[];
}

const journeyContent: Record<string, IAboutContent> = {
  fr: {
    title: "MON PARCOURS",
    presentation: [
      {
        Icon: FaSchool,
        description:
          "J'ai découvert l'informatique lors de mon année de seconde principalement avec du Python et du HTML & CSS basique. Pendant mes 3 années de lycée, j'ai commencé à apprécier de plus en plus développer, au point de vouloir en faire mon futur métier.",
      },
      {
        Icon: FaCode,
        description:
          "J'ai passé 2 ans à l'IUT Lyon 1 où j'ai pu découvrir toutes les spécialités de l'informatique, et c'est également à cette période que j'ai choisi définitivement le développement web grâce à un cours de JavaScript.",
      },
      {
        Icon: FaSuitcase,
        description:
          "Après un stage que j'ai réalisé d'avril 2021 à Juillet 2021 en tant que développeur web chez Elikya Academy, j'ai rejoint l'école Ynov Lyon pour poursuivre mon apprentissage du développement web en alternance.",
      },
    ],
  },
  en: {
    title: "MY JOURNEY",
    presentation: [
      {
        Icon: FaSchool,
        description:
          "I discovered computer science during my first year of high school mainly with Python and basic HTML & CSS. During my 3 years of high school, I enjoyed more and more developing, to the point of wanting to make it my future profession.",
      },
      {
        Icon: FaCode,
        description:
          "I spent 2 years in IUT Lyon 1 where I was able to discover all the specialities of computer science, and it was also during this period that I definitively chose web development thanks to a JavaScript course.",
      },
      {
        Icon: FaSuitcase,
        description:
          "After an internship that I did from April 2021 to July 2021 as a web developer at Elikya Academy, I joined the Ynov Lyon school to continue my learning of web development as an apprentice.",
      },
    ],
  },
};

export default journeyContent;