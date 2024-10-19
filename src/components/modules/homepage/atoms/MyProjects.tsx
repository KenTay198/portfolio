"use client";
import Button from "@atoms/Button";
import homeContent from "@dictionaries/home.content";
import React, { HTMLAttributes } from "react";
import { useDarkModeState } from "src/context/DarkModeContext";
import { useLocaleState } from "src/context/LocaleContext";
import projectsDatas from "@datas/projects";
import ProjectCard from "@modules/projects/atoms/ProjectCard";

const MyProjects = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const { darkMode } = useDarkModeState();
  const { projects } = homeContent[locale as keyof object];

  return (
    <section
      {...props}
      className={[
        "pb-[120px] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[321px] after:duration-150 after:bg-primary dark:after:bg-accent after:z-0",
        className,
      ].join(" ")}
    >
      <h2 className="text-center font-bold mb-[30px] relative z-[1] px-5 pt-[140px]">
        {projects.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-[30px] relative z-[1] px-5 mb-[30px]">
        {projectsDatas.slice(0, 3).map((project) => (
          <ProjectCard key={`project-${project.label}`} project={project} />
        ))}
      </div>

      <Button
        template={darkMode ? "primary" : "accent"}
        type="filled"
        className="h3 flex mx-auto relative z-[1]"
        href="/projects"
      >
        {projects.allProjects}
      </Button>
    </section>
  );
};

export default MyProjects;
