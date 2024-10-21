import experiencesContent from "@dictionaries/experiences.content";
import React from "react";
import ExperienceTimeline from "@modules/experiences/molecules/ExperienceTimeline";
import {  getMetadata } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = experiencesContent[params.lang];

  return getMetadata(dictionary, "/experiences", params.lang);
};

function Experiences({ params }: { params: { lang: string } }) {
  const dictionary = experiencesContent[params.lang];

  return (
    <div className="pb-24">
      <h1 className="break-words text-center px-5">{dictionary.title}</h1>
      <p className="min-[600px]:hidden text-center px-2 mb-2 ">
        {dictionary.clickToSwitch}
      </p>
      <ExperienceTimeline />
    </div>
  );
}

export default Experiences;
