interface INavLink { href: string, label: string, subLinks?: INavLink[] }

interface ILayoutContent {
  navbar: INavLink[]
  loadingMessage: string
}

const layoutContent: Record<string, ILayoutContent> = {
  fr: {
    navbar: [
      { href: "/", label: "Accueil" },
      { href: "/skills", label: "Compétences" },
      { href: "/experiences", label: "Expériences" },
      { href: "/projects", label: "Projets" },
      { href: "/contact", label: "Contact" },
      { href: "/CV", label: "CV" },
    ],
    loadingMessage: "Votre demande est en train d'être envoyée. Veuillez patienter s'il vous plaît !"
  },
  en: {
    navbar: [
      { href: "/", label: "Home" },
      { href: "/skills", label: "Skills" },
      { href: "/experiences", label: "Experiences" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
      { href: "/CV", label: "CV" },
    ],
    loadingMessage: "Your request is being sent. Votre demande est en train d'être envoyée. Please wait !"
  },
};

export default layoutContent;
