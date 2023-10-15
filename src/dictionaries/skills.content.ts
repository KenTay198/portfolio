interface ISkillsContent {
  title: string;
  notationModal: {
    title: string;
    notations: string[];
  };
  skillsGroup: {
    name: string
    skills: { name: string, label: string, value: number }[]
  }[]
}

const skillsContent: Record<string, ISkillsContent> = {
  fr: {
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
    skillsGroup: [
      {
        name: "HTML",
        skills: [{ name: "html", label: "HTML", value: 5 }],
      },
      {
        name: "Style",
        skills: [
          { name: "css", label: "CSS", value: 5 },
          { name: "sass", label: "Sass", value: 5 },

          { name: "tailwind", label: "TailwindCSS", value: 4 },
        ],
      },
      {
        name: "JavaScript",
        skills: [
          { name: "next", label: "Next.js", value: 4.5 },
          { name: "typescript", label: "Typescript", value: 4 },
          { name: "react", label: "React.js", value: 4.5 },
          { name: "vue", label: "Vue.js", value: 2.5 },
          { name: "jquery", label: "Jquery", value: 4 },
          { name: "node", label: "Node.js", value: 4 },
          { name: "express", label: "Express.js", value: 4.5 },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "sql", label: "SQL", value: 4 },
          { name: "mongo", label: "MongoDB", value: 4 },
        ],
      },
      {
        name: "CI / CD",
        skills: [
          { name: "git", label: "GIT", value: 4 },
          { name: "docker", label: "Docker", value: 2 },
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "flutter", label: "Flutter", value: 3.5 },
          { name: "dart", label: "Dart", value: 3 },
        ],
      },
      {
        name: "Autres",
        skills: [
          { name: "office", label: "Microsoft Office 365", value: 5 },
          { name: "photoshop", label: "Photoshop", value: 2.5 },
          { name: "seo", label: "SEO", value: 3.5 },
          { name: "bash", label: "Bash", value: 3.5 },
          { name: "canva", label: "Canva", value: 4.5 },
        ],
      },
    ]
  },
  en: {
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
    skillsGroup: [
      {
        name: "HTML",
        skills: [{ name: "html", label: "HTML", value: 5 }],
      },
      {
        name: "Styling",
        skills: [
          { name: "css", label: "CSS", value: 5 },
          { name: "sass", label: "Sass", value: 5 },

          { name: "tailwind", label: "TailwindCSS", value: 4 },
        ],
      },
      {
        name: "JavaScript",
        skills: [
          { name: "next", label: "Next.js", value: 4.5 },
          { name: "typescript", label: "Typescript", value: 4 },
          { name: "react", label: "React.js", value: 4.5 },
          { name: "vue", label: "Vue.js", value: 2.5 },
          { name: "jquery", label: "Jquery", value: 4 },
          { name: "node", label: "Node.js", value: 4 },
          { name: "express", label: "Express.js", value: 4.5 },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "sql", label: "SQL", value: 4 },
          { name: "mongo", label: "MongoDB", value: 4 },
        ],
      },
      {
        name: "CI / CD",
        skills: [
          { name: "git", label: "GIT", value: 4 },
          { name: "docker", label: "Docker", value: 2 },
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "flutter", label: "Flutter", value: 3.5 },
          { name: "dart", label: "Dart", value: 3 },
        ],
      },
      {
        name: "Others",
        skills: [
          { name: "office", label: "Microsoft Office 365", value: 5 },
          { name: "photoshop", label: "Photoshop", value: 2.5 },
          { name: "seo", label: "SEO", value: 3.5 },
          { name: "bash", label: "Bash", value: 3.5 },
        ],
      },
    ]
  },
};

export default skillsContent;
