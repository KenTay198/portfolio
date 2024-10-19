"use client";
import BlobContainer from "@atoms/BlobContainer";
import Button from "@atoms/Button";
import homeContent from "@dictionaries/home.content";
import React, { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";

import { useLocaleState } from "src/context/LocaleContext";

interface ICategory {
  Icon: IconType;
  value: "backend" | "frontend";
  title: string;
  technologies: string[];
}

const categories: ICategory[] = [
  {
    Icon: FaDatabase,
    value: "backend",
    title: "Back-end",
    technologies: [
      "TypeScript",
      "Node.js / Express.js",
      "MySQL / MongoDB",
      "Socket.IO",
    ],
  },
  {
    Icon: RiCodeBoxFill,
    value: "frontend",
    title: "Front-end",
    technologies: [
      "Typescript",
      "React.js / Next.js",
      "CSS / SCSS",
      "Tailwind",
    ],
  },
];

const MySkills = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const { skills } = homeContent[locale as keyof object];

  return (
    <section
      {...props}
      className={[
        "bg-transparent relative before:absolute before:top-0 before:left-0 before:w-full before:h-[367px] before:bg-primary before:z-0",
        className,
      ].join(" ")}
    >
      <BlobContainer
        after={{
          color: "secondary",
          type: "outlined",
          height: 643,
          width: 599,
          number: 2,
          placement: { top: -159, right: -268 },
          className : "max-[1100px]:hidden"
        }}
        before={{
          color: "accent",
          type: "outlined",
          height: 643,
          width: 599,
          number: 2,
          placement: { bottom: -87, left: -126 },
        }}
      >
        <h2 className="text-center font-bold mb-[30px] text-white relative z-[1] px-5 pt-[140px]">
          {skills.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-[30px] relative z-[1] px-5 mb-[30px]">
          {categories.map(({ value, title, technologies, Icon }) => (
            <div
              key={value}
              className="bg-white max-w-[520px] p-2.5 rounded-lg flex flex-col gap-5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <Icon size={42} className="text-primary mx-auto" />

              <h3 className="text-center font-bold text-primary">{title}</h3>

              <div className="flex flex-col gap-4 text-center">
                {skills[value].map((text, i) => (
                  <p key={`${value}-paragraph-${i}`} className="text-black">
                    {text}
                  </p>
                ))}
              </div>

              <div>
                <p className="font-bold text-primary text-center">
                  {skills.technologies}
                </p>

                <div className="flex flex-col gap-4">
                  {technologies.map((tech) => (
                    <p
                      key={`${value}-techno-${tech}`}
                      className="text-black text-center"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          template="accent"
          type="filled"
          className="h3 flex mx-auto relative z-[1]"
          href="/skills"
        >
          {skills.allSkills}
        </Button>
      </BlobContainer>
    </section>
  );
};

export default MySkills;
