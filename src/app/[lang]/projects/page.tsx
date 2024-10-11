import React from "react";
import projectsContent from "@dictionaries/projects.content";
import projects from "@datas/projects";
import ProjectCard from "@components/modules/projects/atoms/ProjectCard";
import ProjectBanner from "@components/modules/projects/atoms/ProjectsBanner";

function Projects({ params }: { params: { lang: string } }) {
  const dictionary = projectsContent[params.lang];
  return (
    <div>
      <ProjectBanner />
      <div className="flex flex-wrap gap-2 w-fit mx-auto">
        {projects.map((project) => (
          <ProjectCard key={`project-${project.label}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
