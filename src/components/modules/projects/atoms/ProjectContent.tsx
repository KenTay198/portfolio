"use client";
import { IProject } from "@datas/projects";
import projectsContent, {
  IProjectDescription,
} from "@dictionaries/projects.content";
import React, { HTMLAttributes } from "react";
import { useLocaleState } from "src/context/LocaleContext";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
}

const ProjectContent = ({ project, ...props }: IProps) => {
  const { locale } = useLocaleState();
  const { technoCategories, projects, ...dictionary } = projectsContent[locale];
  const { name } = project;
  const content = projects[name as keyof object] as
    | IProjectDescription
    | undefined;

  if (!content) return null;

  return (
    <div {...props} className="text-black">
      <p className="mb-2">{content.description}</p>

      <div className="mb-2">
        <p className="h4 font-bold">{dictionary.titles.technos} :</p>

        <ul className="pl-6 list-disc">
          {Object.entries(content.technos).map(([key, values], i) => (
            <li key={`selected-${name}-technos-${i}`}>
              <span className="font-semibold">
                {technoCategories[key as keyof object]} :{" "}
              </span>
              <span>{values.join(", ")}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="h4 font-bold">{dictionary.titles.skills} :</p>
        <ul className="pl-6 list-disc">
          {content.skills.map((t, i) => (
            <li key={`selected-${name}-skills-${i}`}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectContent;
