import styles from "./Projects.module.scss";
import projectsContent from "@dictionaries/projects.content";
import SiteElikya from "@images/photos/site_elikya.png";
import SiteFormations from "@images/photos/site_formations.png";
import SiteE7 from "@images/photos/site_e7.png";
import Image from "next/image";
import Link from "next/link";

const proj = [
  {
    label: "Elikya Academy",
    technos: ["NextJS"],
    image: SiteElikya,
    href: "https://elikya-academy.com",
  },
  {
    label: "Elikya Academy Formations",
    technos: ["NextJS"],
    image: SiteFormations,
    href: "https://formations.elikya-academy.com",
  },
  {
    label: "Epic Seven Helper",
    technos: ["NextJS"],
    image: SiteE7,
    href: "https://epic-seven-helper.vercel.app",
  },
];

function Projects({ params }: { params: { lang: string } }) {
  const dictionary = projectsContent[params.lang];
  return (
    <div className={styles["projects"]}>
      <h1 className="mb-2">{dictionary?.title}</h1>
      <div className="flex flex-wrap gap-2 w-fit mx-auto">
        {proj.map(({ label, image, technos, href }, i) => (
          <Link href={href} key={`project-${i}`}>
            <div
              className={`${styles["project"]} relative flex-1 basis-[500px] rounded-xl overflow-hidden shadow-lg duration-200 hover:shadow-2xl max-w-[600px]`}
            >
              <Image
                src={image}
                alt={label}
                className="rounded-lg aspect-video object-cover duration-200"
                unoptimized
              />
              <div className="absolute left-0 bottom-0 p-1 text-center font-bold text-primary bg-secondaryAlt-0.8 w-full">
                <p className="text-2xl">{label}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {technos.map((t) => (
                    <p
                      className="text-secondary bg-primary w-fit h-fit px-2 rounded-lg text-base"
                      key={`techno-${t}`}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
