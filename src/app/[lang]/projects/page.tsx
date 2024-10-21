import React from "react";
import ProjectBanner from "@modules/projects/atoms/ProjectsBanner";
import ProjectsList from "@modules/projects/organisms/ProjectsList";
import projectsContent from "@dictionaries/projects.content";
import { getMetadata } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = projectsContent[params.lang];

  return getMetadata(dictionary, "/projects", params.lang);
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
