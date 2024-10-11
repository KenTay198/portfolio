"use client";
import Button from "@components/shared/atoms/Button";
import skillsContent from "@dictionaries/skills.content";
import NotationModal from "@components/shared/molecules/NotationModal/NotationModal";
import React, { useMemo } from "react";
import { useState } from "react";
import { FaInfo, FaTimes } from "react-icons/fa";
import SkillGroupCard from "@components/modules/skills/atoms/SkillGroupCard";
import { useDarkModeState } from "src/context/DarkModeContext";

function Skills({ params }: { params: { lang: string } }) {
  const { darkMode } = useDarkModeState();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const dictionary = skillsContent[params.lang];
  const { skillsGroup } = dictionary;
  const selected = useMemo(
    () => skillsGroup.find((e) => e.name === selectedGroup),
    [skillsGroup, selectedGroup]
  );

  return (
    <>
      <div className="pb-24 px-5">
        <h1 className="text-black dark:text-secondary text-center">
          {dictionary?.title}
        </h1>

        <section className="flex justify-center mx-auto gap-[105px]">
          <div className="flex flex-col gap-3">
            <Button
              template={darkMode ? "secondary" : "accent"}
              type="filled"
              className="flex gap-2 items-center justify-center mb-2"
              Icon={FaInfo}
              onClick={() => setDetailsOpen(true)}
            >
              {dictionary.notationModal.title}
            </Button>

            {dictionary.skillsGroup.map((group) => {
              const isSelected = selectedGroup === group.name;
              return (
                <SkillGroupCard
                  key={`skill-group-${group.name}`}
                  skillGroup={group}
                  selected={isSelected}
                  onClick={() => setSelectedGroup(isSelected ? "" : group.name)}
                />
              );
            })}
          </div>

          <div
            className={`min-[1080px]:hidden min-[1080px]:pointer-events-none z-[2] top-0 left-0 w-screen h-screen bg-black/50 ${
              selectedGroup ? "fixed" : "hidden"
            }`}
            onClick={() => setSelectedGroup("")}
          ></div>

          <div
            className={`top-28 sticky z-[3] bg-white text-black w-[98%] min-[1080px]:max-w-[500px] rounded-lg p-2.5 h-fit shadow animate-slide-in-bottom-top ${
              selected
                ? "max-[1080px]:fixed max-[1080px]:max-h-screen"
                : "max-[1080px]:hidden"
            }`}
          >
            <span
              className="absolute top-3 right-3 font-bold min-[1080px]:hidden duration-150 cursor-pointer hover:scale-110"
              onClick={() => setSelectedGroup("")}
            >
              <FaTimes size={25} />
            </span>

            {selected ? (
              <div className="">
                <h3 className="uppercase font-bold">{selected.name}</h3>
                <div className="flex flex-col gap-2">
                  {selected.descriptions?.map((text, i) => (
                    <p key={`selected-group-${selected.name}-${i}`}>{text}</p>
                  ))}
                </div>
              </div>
            ) : (
              <p>{dictionary.showDetails}</p>
            )}
          </div>
        </section>
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
