import SiteElikya from "@images/photos/projects/site_elikya.png";
import SiteFormations from "@images/photos/projects/site_formations.png";
import Gamerhub from "@images/photos/projects/gamerhub.png";
import SiteBantuDojo from "@images/photos/projects/bantudojo.png";
import SiteChanny from "@images/photos/projects/channy.png";
import FrameElikya from "@images/photos/projects/frame_site_elikya.png";
import FrameFormations from "@images/photos/projects/frame_site_formations.png";
import FrameBantuDojo from "@images/photos/projects/frame_bantudojo.png";
import FrameChanny from "@images/photos/projects/frame_channy.png";
import FrameGamerhub from "@images/photos/projects/frame_gamerhub.png";
import { StaticImageData } from "next/image";

export interface IProject {
  name: string;
  label: string;
  technos: string[];
  image: StaticImageData;
  frame: StaticImageData;
  href?: string;
}

const projects: IProject[] = [
  {
    label: "Elikya Academy",
    technos: ["NextJS"],
    image: SiteElikya,
    frame: FrameElikya,
    href: "https://elikya-academy.com",
    name: "elikya",
  },
  {
    label: "GamerHub",
    technos: ["VueJS"],
    image: Gamerhub,
    frame: FrameGamerhub,
    href: "https://gamerhub.lucashost.fr",
    name: "gamerhub",
  },
  {
    label: "Elikya Academy Formations",
    technos: ["NextJS"],
    image: SiteFormations,
    frame: FrameFormations,
    href: "https://formations.elikya-academy.com",
    name : "elikya_formations"
  },
  {
    label: "Bantu Dojo Warriors",
    technos: ["NextJS"],
    image: SiteBantuDojo,
    frame: FrameBantuDojo,
    href: "https://bantudojowarriors.com",
    name: "bantudojo",
  },
  {
    label: "Channy Dance & Music",
    technos: ["NextJS"],
    image: SiteChanny,
    frame: FrameChanny,
    href: "https://channydanceandmusic.com",
    name: "channy",
  },
];

export default projects;
