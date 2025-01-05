"use client";
import projects, { projectGroups } from "@datas/projects";
import React, { HTMLAttributes, useEffect, useState } from "react";
import ProjectCard from "../atoms/ProjectCard";
import Button from "@atoms/Button";
import { scrollTo } from "@utils/functions";
import projectsContent, { IProjectGroup } from "@dictionaries/projects.content";
import { useLocaleState } from "src/context/LocaleContext";
import ProjectContent from "../atoms/ProjectContent";
import { FaInfoCircle } from "react-icons/fa";
import Modal from "@molecules/Modal/Modal";
import ProjectGroupInfo from "../molecules/ProjectGroupInfo/ProjectGroupInfo";
import { useDarkModeState } from "src/context/DarkModeContext";

const ProjectsList = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const { darkMode } = useDarkModeState();
  const dictionary = projectsContent[locale];
  const [selected, setSelected] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<IProjectGroup>();

  useEffect(() => {
    if (selected) scrollTo("selected");
  }, [selected]);

  return (
    <>
      <section {...props} className="px-5">
        <div>
          {projectGroups.map(({ name, ...g }) => {
            const thisProjects = projects.filter((e) =>
              g.projects.includes(e.name)
            );
            const group = dictionary.groups[
              name as keyof object
            ] as IProjectGroup;
            if (!group) return null;

            return (
              <div
                key={`project-group-${name}`}
                className="flex flex-col gap-5 mb-5"
              >
                <div className="border-b flex items-center w-full gap-5">
                  <h2>{group.label}</h2>
                  <Button
                    onClick={() => setSelectedGroup(group)}
                    type="filled"
                    template={darkMode ? "secondary" : "primary"}
                  >
                    <FaInfoCircle size={30} />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mx-auto">
                  {thisProjects.map((project) => {
                    const { name, label, href } = project;

                    const isSelected = selected === name;

                    return (
                      <React.Fragment key={`project-${name}`}>
                        <ProjectCard
                          project={project}
                          onClick={() => setSelected(isSelected ? "" : name)}
                        />

                        {isSelected && (
                          <div
                            id="selected"
                            className="w-full scroll-m-24 py-3"
                          >
                            <div className="bg-accent p-2 rounded-lg">
                              <h2 className="mb-2 font-bold text-black">
                                {label}
                              </h2>
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
              </div>
            );
          })}
        </div>
      </section>
      <Modal
        title={selectedGroup?.label}
        width={800}
        isOpen={!!selectedGroup}
        close={() => setSelectedGroup(undefined)}
      >
        <ProjectGroupInfo group={selectedGroup} />
      </Modal>
    </>
  );
};

export default ProjectsList;
