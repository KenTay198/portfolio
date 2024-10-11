import SiteElikya from "@images/photos/projects/site_elikya.png";
import SiteFormations from "@images/photos/projects/site_formations.png";
import SiteE7 from "@images/photos/projects/site_e7.png";
import FrameElikya from "@images/photos/projects/frame_site_elikya.png";
import FrameFormations from "@images/photos/projects/frame_site_formations.png";
import FrameE7 from "@images/photos/projects/frame_site_e7.png";
import { StaticImageData } from "next/image";

export interface IProject {
  label: string;
  technos: string[];
  image: StaticImageData;
  frame: StaticImageData;
  href: string;
}

const projects : IProject[] = [
  {
    label: "Elikya Academy",
    technos: ["NextJS"],
    image: SiteElikya,
    frame: FrameElikya,
    href: "https://elikya-academy.com",
  },
  {
    label: "Elikya Academy Formations",
    technos: ["NextJS"],
    image: SiteFormations,
    frame: FrameFormations,
    href: "https://formations.elikya-academy.com",
  },
  {
    label: "Epic Seven Helper",
    technos: ["NextJS"],
    image: SiteE7,
    frame: FrameE7,
    href: "https://epic-seven-helper.vercel.app",
  },
];

export default projects;
