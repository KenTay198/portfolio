interface ISkillsContent {
  meta: { description: string };
  title: string;
  notationModal: {
    title: string;
    notations: string[];
  };
}

const skillsContent: Record<string, ISkillsContent> = {
  fr: {
    meta: {
      description:
        "Développeur full-stack junior de 20 ans ayant pour envie d'en apprendre toujours plus sur le monde du développement.",
    },
    title: "MES COMPÉTENCES",
    notationModal: {
      title: "Notation",
      notations: [
        "Je suis débutant",
        "J'ai des notions de base",
        "Je maîtrise les fondamentaux",
        "Je suis un utilisateur avancé",
        "Je suis expert ou presque",
      ],
    },
  },
  en: {
    meta: {
      description:
        "20-year-old junior full-stack developer willing to learn more and more about the world of development.",
    },
    title: "MY SKILLS",
    notationModal: {
      title: "Notation",
      notations: [
        "I'm beginner",
        "I've got the basics",
        "I've mastered the basics",
        "I'm an advanced user",
        "I'm an expert or close to it",
      ],
    },
  },
};

export default skillsContent;
