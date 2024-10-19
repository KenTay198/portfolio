export interface ISkillGroup {
  name: string;
  skills: ISkill[];
  descriptions?: string[];
}

export interface ISkill {
  name: string;
  label: string;
  value: number;
}

interface ISkillsContent {
  title: string;
  notationModal: {
    title: string;
    notations: string[];
  };
  showDetails: string;
  skillsGroup: ISkillGroup[];
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
        descriptions: [
          "J'ai découvert le HTML en 3ème, en même temps que le CSS, par hasard en naviguant sur mon ordinateur. Je suis tombé sur Codecademy où j'ai commencé à m'initier à ce langage qui m'a particulièrement intéressé.",
          "Au travers de l'enseignement d'exploration ICN (Informatique et Création Numérique), puis de la spécialité ISN (Informatique et Science du Numérique) du BAC Scientifique, j'ai pu en apprendre plus sur ce langage et ainsi y développer un plus grand intérêt.",
          "Au fur et à mesure de ma progression à l'IUT et à Ynov, j'ai appris à utiliser et à manipuler les différentes balises et éléments.",
        ],
      },
      {
        name: "Style",
        skills: [
          { name: "css", label: "CSS", value: 5 },
          { name: "sass", label: "Sass", value: 5 },

          { name: "tailwind", label: "TailwindCSS", value: 4.5 },
        ],
        descriptions: [
          "En même temps que ma découverte et mon développement au HTML, j'ai également pu travailler sur du CSS.",
          "Pendant ma période d'IUT, j'ai eu plus de difficultés à assimiler les spécificités du CSS, étant donné le peu de cours que l'on avait.",
          "C'est en étant livré à moi-même lors de mon alternance chez Elikya Academy Group, que j'ai pu expérimenter beaucoup de choses en CSS et notamment découvrir le SASS, qui m'a offert un confort de développement.",
          "S'en est suivi la découverte de Tailwind qui a énormément augmenté ma productivité, étant donné l'éxpérience du CSS que j'avais accumulée.",
        ],
      },
      {
        name: "JavaScript",
        skills: [
          { name: "next", label: "Next.js", value: 4.5 },
          { name: "react", label: "React.js", value: 4.5 },
          { name: "typescript", label: "Typescript", value: 4.5 },
          { name: "express", label: "Express.js", value: 4.5 },
          { name: "node", label: "Node.js", value: 4 },
          { name: "jquery", label: "Jquery", value: 4 },
          { name: "vue", label: "Vue.js", value: 3.5 },
        ],
        descriptions: [
          "Par rapport au HTML / CSS, j'ai découvert le JavaScript assez tard, en dernière année de DUT. Malgré cela, c'est ce langage qui m'a définitivement orienté vers le développement web.",
          "J'ai commencé par travailler majoritairement en JavaScript natif et avec JQuery. C'est pendant les cours chez Ynov que j'ai découvert les frameworks, principalement React, et que j'ai approfondi pendant l'alternance.",
          "Côté back, Node.js / Express.js est le premier environnement dans lequel j'ai travaillé en arrivant à Ynov. Je me suis par la suite familiarisé avec pendant les 3 années suivantes.",
          "Côté front, Je me suis spécialisé sur Next.js directement après en avoir entendu parler, grâce à un intervenant en entreprise qui m'a initié au référencement SEO. En parallèle, j'utilisais les projets de cours en groupe pour apprendre Vue.js.",
        ],
      },
      {
        name: "Base de données",
        skills: [
          { name: "sql", label: "SQL", value: 4.5 },
          { name: "mongo", label: "MongoDB", value: 4 },
        ],
        descriptions: [
          "J'ai appris le SQL à l'IUT et j'ai commencé à l'implémenter directement quand j'ai rejoins Elikya Academy. J'ai créé et maintenu toute leur architecture, ainsi que mis en place un back-office pour leur permettre de contrôler certains éléments de leurs sites.",
          "C'est seulement à Ynov que j'ai découvert MongoDB, qui est par la suite devenu mon préféré grâce à sa simplicité d'utilisation et la flexibilité des documents.",
        ],
      },
      {
        name: "CI / CD",
        skills: [
          { name: "git", label: "GIT", value: 4 },
          { name: "docker", label: "Docker", value: 2.5 },
        ],
        descriptions: [
          "J'ai découvert GIT à l'IUT et depuis lors, je l'ai utilisé dans tous les projets que j'ai réalisés. J'ai pu découvrir ainsi plusieurs types de déploiements pendant mon temps chez Elikya Academy. J'ai utilisé principalement Vercel pour les applications front-end grâce à son intégration naturelle avec Next.js, mais j'ai aussi pu utiliser les Github Actions pour déployer des applications Node sur CPanel, car leurs sites étaient déjà hébergés dessus.",
          "Pendant les cours à Ynov, j'ai découvert Docker et ai appris à créer des images basiques pour des petits projets.",
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "flutter", label: "Flutter", value: 3.5 },
          { name: "dart", label: "Dart", value: 3 },
        ],
        descriptions: [
          "Ma première expérience en développement mobile a été à Ynov lors d'un cours sur Flutter. J'ai plutôt apprécié donc j'ai un peu travaillé dessus, même dans mon alternance.",
        ],
      },
      {
        name: "Autres",
        skills: [
          { name: "office", label: "Microsoft Office 365", value: 5 },
          { name: "canva", label: "Canva", value: 4.5 },
          { name: "meta", label: "Réseaux sociaux Meta", value: 3.5 },
          { name: "seo", label: "SEO", value: 3.5 },
          { name: "photoshop", label: "Photoshop", value: 3 },
          { name: "bash", label: "Bash", value: 2.5 },
          { name: "adobe", label: "Suite Adobe", value: 2 },
        ],
        descriptions: [
          "J'ai développé d'autres compétences variées tout le long de ma vie, que ce soit à l'école ou pendant mon temps libre.",
          "J'ai notamment appris à utiliser des outils tels que Canva et la suite Adobe pour créer des visuels adaptés à la charte graphique de l'entreprise et gérer des réseaux sociaux.",
        ],
      },
    ],
    showDetails: "Cliquez sur une compétence pour afficher des détails !",
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
        descriptions: [
          "I discovered HTML in 3ème, at the same time as CSS, randomly while I was surfing on my computer. I came across Codecademy where I started to learn this language which I found really interesting.",
          "Through IT courses at high school, I was able to learn more about the language and became more interested in it.",
          "While I was developing my skills at IUT and at Ynov, I learned how to use and work with the different tags and elements.",
        ],
      },
      {
        name: "Styling",
        skills: [
          { name: "css", label: "CSS", value: 5 },
          { name: "sass", label: "Sass", value: 5 },
          { name: "tailwind", label: "TailwindCSS", value: 4.5 },
        ],
        descriptions: [
          "At the same time as I was discovering and developing my skills in HTML, I was also working on CSS.",
          "During IUT, I struggled to master the specifics of CSS, mainly due to the small number of courses we had.",
          "It's when I was all by myself during my internship at Elikya Academy Group that I really experimented many things in CSS, including discovering SASS, which offered me a real comfort of development.",
          "This was followed by the discovery of Tailwind, which greatly increased my productivity, thanks in part to the CSS experience I had accumulated.",
        ],
      },
      {
        name: "JavaScript",
        skills: [
          { name: "next", label: "Next.js", value: 4.5 },
          { name: "react", label: "React.js", value: 4.5 },
          { name: "typescript", label: "Typescript", value: 4.5 },
          { name: "express", label: "Express.js", value: 4.5 },
          { name: "node", label: "Node.js", value: 4 },
          { name: "jquery", label: "Jquery", value: 4 },
          { name: "vue", label: "Vue.js", value: 3.5 },
        ],
        descriptions: [
          "Compared to HTML / CSS, I discovered JavaScript quite late, in my last year at IUT. It was this language that definitely oriented me towards web development.",
          "I started working mainly in native JavaScript with JQuery. It was during courses at Ynov that I discovered frameworks, mainly React, and I went deeper into it during my internship.",
          "On the back-end side, Node.js / Express is the first environment I worked in when I joined Ynov. I got used to it during the 3 next years.",
          "Front-end side, I specialised in Next.js directly as soon as I heard about it, thanks to a professional who came to Elikya Academy and introduced me to SEO referencing. In parallel, I used the group course projects to learn more about Vue.js.",
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "sql", label: "SQL", value: 4.5 },
          { name: "mongo", label: "MongoDB", value: 4 },
        ],
        descriptions: [
          "I learned about SQL at IUT and started implementing it straight away when I joined Elikya Academy. I created and maintained all their architecture and set up a back-office to allow them to control some elements in their websites.",
          "It was only at Ynov that I discovered MongoDB, which became my favorite because of its easy of use and the flexibility of documents.",
        ],
      },
      {
        name: "CI / CD",
        skills: [
          { name: "git", label: "GIT", value: 4 },
          { name: "docker", label: "Docker", value: 2.5 },
        ],
        descriptions: [
          "I was introduced to GIT at IUT and since then, I used it in every project I made. During my time at Elikya Academy, I was able to discover many types of deployments. I've mainly used Vercel for front-end applications because of it's natural integration with Next.js, but I've also used Github Actions to deploy to CPanel for Node applications because their websites were already hosted there.",
          "During courses at Ynov, I discovered Docker and learned how to create basic images for small projects.",
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "flutter", label: "Flutter", value: 3.5 },
          { name: "dart", label: "Dart", value: 3 },
        ],
        descriptions: [
          "My first experience with mobile development was at Ynov when we made a course about Flutter. I liked it so I tried to work on it even in my internship.",
        ],
      },
      {
        name: "Others",
        skills: [
          { name: "office", label: "Microsoft Office 365", value: 5 },
          { name: "canva", label: "Canva", value: 4.5 },
          { name: "meta", label: "Meta networks", value: 3.5 },
          { name: "seo", label: "SEO", value: 3.5 },
          { name: "photoshop", label: "Photoshop", value: 3 },
          { name: "bash", label: "Bash", value: 2.5 },
          { name: "adobe", label: "Adobe Suite", value: 2 },
        ],
        descriptions: [
          "I developed various other skills through my life, at school or during my free time.",
          "In particular, I learned to use tools such as Canva and Adobe suite to create visuals adapted to the graphic charter of the company and manage social networks.",
        ],
      },
    ],
    showDetails: "Click on a skill group to show some details !",
  },
};

export default skillsContent;
