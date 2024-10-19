interface IErrorContent {
  title: string;
  text: string;
}

const errorContent: Record<string, IErrorContent> = {
  fr: {
    title: "OOPS ! Une erreur est survenue",
    text: "On dirait qu'une erreur est survenue sur la ressource que vous souhaitez consulter. Nous vous prions de retourner sur la page d'accueil en cliquant sur le bouton ci-dessous.",
  },
  en: {
    title: "OOPS ! An error has occured",
    text: "It seems an error has occured on the ressource you are trying to see. Please go back to the homepage by clicking on the button just below.",
  },
};

export default errorContent;
