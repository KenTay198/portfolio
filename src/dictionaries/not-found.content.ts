interface IAboutContent {
  title: string;
  text: string;
}

const notFoundContent: Record<string, IAboutContent> = {
  fr: {
    title: "Cette page est introuvable",
    text: "La page que vous recherchez n'existe pas. Nous vous prions de retourner sur la page d'accueil en cliquant sur le bouton ci-dessous.",
  },
  en: {
    title: "Page not found",
    text: "The page you were looking doesn't exists. Please go back to the homepage by clicking on the button just below.",
  },
};

export default notFoundContent;
