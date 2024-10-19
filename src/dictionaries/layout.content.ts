import { IconType } from "react-icons";
import { FaFileAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { BsFileEarmarkPersonFill, BsFillTelephoneFill  } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

export interface INavLink {
  href: string;
  label: string;
  subLinks?: INavLink[];
  Icon: IconType;
}

interface ILayoutContent {
  navbar: INavLink[];
  loadingMessage: string;
}

const layoutContent: Record<string, ILayoutContent> = {
  fr: {
    navbar: [
      { href: "/", label: "Accueil", Icon: IoMdHome },
      { href: "/skills", label: "Compétences", Icon: AiFillCode },
      { href: "/experiences", label: "Expériences", Icon: BsFileEarmarkPersonFill },
      { href: "/projects", label: "Projets", Icon: CgWebsite },
      { href: "/contact", label: "Contact", Icon: BsFillTelephoneFill  },
      { href: "/CV", label: "CV", Icon: FaFileAlt },
    ],
    loadingMessage:
      "Votre demande est en train d'être envoyée. Veuillez patienter s'il vous plaît !",
  },
  en: {
    navbar: [
      { href: "/", label: "Home", Icon: IoMdHome },
      { href: "/skills", label: "Skills", Icon: AiFillCode },
      { href: "/experiences", label: "Experiences", Icon: BsFileEarmarkPersonFill },
      { href: "/projects", label: "Projects", Icon: CgWebsite },
      { href: "/contact", label: "Contact", Icon: BsFillTelephoneFill  },
      { href: "/CV", label: "CV", Icon: FaFileAlt },
    ],
    loadingMessage:
      "Your request is being sent. Votre demande est en train d'être envoyée. Please wait !",
  },
};

export default layoutContent;
