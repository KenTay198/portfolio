import React from "react";
import ProjectBanner from "@modules/projects/atoms/ProjectsBanner";
import ProjectsList from "@modules/projects/organisms/ProjectsList";

function Projects() {
  return (
    <div className="pb-24">
      <ProjectBanner />
      <ProjectsList />
    </div>
  );
}

export default Projects;
