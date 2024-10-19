"use client";
import projects from "@datas/projects";
import React, { HTMLAttributes, useEffect, useMemo, useState } from "react";
import ProjectCard from "../atoms/ProjectCard";
import ProjectsFilters, {
  IProjectsFilters,
} from "../molecules/ProjectsFilters";
import Button from "@atoms/Button";
import { scrollTo } from "@utils/functions";
import projectsContent from "@dictionaries/projects.content";
import { useLocaleState } from "src/context/LocaleContext";
import ProjectContent from "../atoms/ProjectContent";

const ProjectsList = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const dictionary = projectsContent[locale];
  const [selected, setSelected] = useState("");
  const [filters, setFilters] = useState<IProjectsFilters>({});

  const filteredProjects = useMemo(() => {
    const { technos, types } = filters;
    return projects.filter((p) => {
      if (technos && technos.length > 0) {
        if (technos.some((t) => !p.technos.includes(t))) return false;
      }

      if (types && types.length > 0) {
        if (!types.includes(p.type)) return false;
      }

      return true;
    });
  }, [filters]);

  useEffect(() => {
    if (selected) scrollTo("selected");
  }, [selected]);

  return (
    <section {...props} className="px-5">
      <ProjectsFilters filters={filters} handleChange={setFilters} />

      <div className="flex flex-wrap gap-2 mx-auto">
        {filteredProjects.map((project) => {
          const { name, label, href } = project;

          const isSelected = selected === name;

          return (
            <React.Fragment key={`project-${name}`}>
              <ProjectCard
                project={project}
                onClick={() => setSelected(isSelected ? "" : name)}
              />

              {isSelected && (
                <div id="selected" className="w-full scroll-m-24 py-3">
                  <div className="bg-accent p-2 rounded-lg">
                    <h2 className="mb-2 font-bold text-black">{label}</h2>
                    {href && (
                      <Button
                        href={href}
                        template="primary"
                        className="mb-2"
                        type="filled"
                        target="_blank"
                      >
                        {dictionary.goToSite}
                      </Button>
                    )}

                    <ProjectContent project={project} />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;
