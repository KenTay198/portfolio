"use client";
import projects from "@datas/projects";
import projectsContent from "@dictionaries/projects.content";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { useLocaleState } from "src/context/LocaleContext";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  /* Props go here */
}

const ProjectBanner = ({ ...props }: IProps) => {
  const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 3);
  const { locale } = useLocaleState();
  const dictionary = projectsContent[locale];

  return (
    <div
      {...props}
      className="w-full items-center flex gap-5 px-5 relative h-[400px] bg-primary mb-10"
    >
      <div className="h-full flex items-center">
        <h1 className="text-accent text-center">{dictionary.title}</h1>
      </div>

      <div className="relative flex-1 h-[500px]">
        {randomProjects.map(({ frame, label }, i) => (
          <div key={`project-banner-${label}`}>
            <Image
              src={frame}
              alt={`${label} screenshot`}
              className="absolute animate-pulse"
              height={500}
              style={{ top: 0, left: 200 * i, animationDuration : `${3}s`, animationDelay: `${300 * i}ms` }}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBanner;
