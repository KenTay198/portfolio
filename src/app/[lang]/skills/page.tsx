import skillsContent from "@dictionaries/skills.content";
import React from "react";
import SkillsList from "@modules/skills/organisms/SkillsList";
import { getMetadata } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = skillsContent[params.lang];

  return getMetadata(dictionary, "/skills", params.lang);
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
