interface INavLink { href: string, label: string, subLinks?: INavLink[] }

interface ILayoutContent {
  navbar: INavLink[]
}

const layoutContent: Record<string, ILayoutContent> = {
  fr: {
    navbar: [
      { href: "/", label: "Accueil" },
      { href: "/about", label: "À propos de moi" },
      { href: "/skills", label: "Compétences" },
      { href: "/experiences", label: "Expériences" },
      { href: "/contact", label: "Contact" },
      { href: "/CV", label: "CV" },
    ],
  },
  en: {
    navbar: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About me" },
      { href: "/skills", label: "Skills" },
      { href: "/experiences", label: "Experiences" },
      { href: "/contact", label: "Contact" },
      { href: "/CV", label: "CV" },
    ],
  },
};

export default layoutContent;
