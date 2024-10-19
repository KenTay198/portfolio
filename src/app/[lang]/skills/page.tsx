import skillsContent from "@dictionaries/skills.content";
import React from "react";
import SkillsList from "@modules/skills/organisms/SkillsList";
import { capitalize } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = skillsContent[params.lang];

  return {
    title: capitalize(dictionary.title) + " | John-Kenneth TAYLOR AFONAH",
    description: dictionary.meta.description,
  };
};

function Skills({ params }: { params: { lang: string } }) {
  const dictionary = skillsContent[params.lang];

  return (
    <div className="pb-24 px-5">
      <h1 className="text-center max-[410px]:break-words">
        {dictionary.title}
      </h1>

      <SkillsList />
    </div>
  );
}

export default Skills;
