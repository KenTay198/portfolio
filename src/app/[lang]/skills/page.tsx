"use client";
import Button from "@atoms/Button";
import skillsContent from "@dictionaries/skills.content";
import NotationModal from "@molecules/NotationModal/NotationModal";
import React from "react";
import { useState } from "react";
import { FaInfo, FaStar, FaStarHalf } from "react-icons/fa";

const skillsList = [
  {
    name: "HTML",
    skills: [{ name: "html", label: "HTML", value: 5 }],
  },
  {
    name: "Styling",
    skills: [
      { name: "css", label: "CSS", value: 5 },
      { name: "sass", label: "Sass", value: 5 },

      { name: "tailwind", label: "TailwindCSS", value: 4 },
    ],
  },
  {
    name: "JavaScripts",
    skills: [
      { name: "next", label: "Next.js", value: 4.5 },
      { name: "typescript", label: "Typescript", value: 4 },
      { name: "react", label: "React.js", value: 4.5 },
      { name: "vue", label: "Vue.js", value: 2.5 },
      { name: "jquery", label: "Jquery", value: 4 },
      { name: "node", label: "Node.js", value: 4 },
      { name: "express", label: "Express.js", value: 4.5 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "sql", label: "SQL", value: 4 },
      { name: "mongo", label: "MongoDB", value: 4 },
    ],
  },
  {
    name: "CI / CD",
    skills: [{ name: "git", label: "GIT", value: 4 }, { name: "docker", label: "Docker", value: 2 }],
  },
  {
    name: "Mobile",
    skills: [
      { name: "flutter", label: "Flutter", value: 3.5 },
      { name: "dart", label: "Dart", value: 3 },
    ],
  },
  {
    name: "Others",
    skills: [
      { name: "office", label: "Microsoft Office 365", value: 5 },
      { name: "photoshop", label: "Photoshop", value: 2.5 },
      { name: "seo", label: "SEO", value: 3.5 },
      { name: "bash", label: "Bash", value: 3.5 },
    ],
  },
];

function Skills({ params }: { params: { lang: string } }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const dictionary = skillsContent[params.lang];

  return (
    <>
      <div>
        <h1 className="mb-2">{dictionary?.title}</h1>
        <Button
          template="secondary"
          className="flex gap-2 items-center justify-center mb-2"
          Icon={FaInfo}
          onClick={() => setDetailsOpen(true)}
        >
          {dictionary.notationModal.title}
        </Button>
        <div className="flex flex-wrap gap-3">
          {skillsList.map(({ name, skills }) => (
            <div className="mb-2 flex-1 basis-[30%]" key={`group-${name}`}>
              <p className="text-4xl font-bold text-secondaryAlt">{name}</p>
              <ul className="pl-3">
                {skills
                  .sort((a, b) => b.value - a.value)
                  .map(({ name, label, value }) => {
                    const hasHalf = value - Math.floor(value) !== 0;
                    return (
                      <li
                        key={`skill-${name}`}
                        className="flex items-center gap-2"
                      >
                        <p className="font-bold text-2xl">{label}</p>
                        <div className="flex">
                          {Array.from(new Array(Math.floor(value)).keys()).map(
                            (i) => (
                              <FaStar key={`skill-${name}-star-${i}`} />
                            )
                          )}
                          {hasHalf && <FaStarHalf />}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <NotationModal
        isOpen={detailsOpen}
        close={() => setDetailsOpen(false)}
        title={dictionary.notationModal.title}
        notations={dictionary.notationModal.notations}
      />
    </>
  );
}

export default Skills;
