"use client";
import Button from "@atoms/Button";
import skillsContent from "@dictionaries/skills.content";
import NotationModal from "@molecules/NotationModal/NotationModal";
import React from "react";
import { useState } from "react";
import { FaInfo, FaStar, FaStarHalf } from "react-icons/fa";

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
          {dictionary.skillsGroup.map(({ name, skills }) => (
            <div
              className="bg-secondary mb-2 flex-1 basis-[30%] p-2 rounded-lg"
              key={`group-${name}`}
            >
              <p className="text-4xl font-bold text-primaryAlt">{name}</p>
              <ul className="text-primary pl-3">
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
