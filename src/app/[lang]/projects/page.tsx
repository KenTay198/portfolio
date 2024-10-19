import React from "react";
import ProjectBanner from "@modules/projects/atoms/ProjectsBanner";
import ProjectsList from "@modules/projects/organisms/ProjectsList";
import projectsContent from "@dictionaries/projects.content";
import { capitalize } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = projectsContent[params.lang];

  return {
    title: capitalize(dictionary.title) + " | John-Kenneth TAYLOR AFONAH",
    description: dictionary.meta.description,
  };
};

function Projects() {
  return (
    <div className="pb-24">
      <ProjectBanner />
      <ProjectsList />
    </div>
  );
}

export default Projects;
