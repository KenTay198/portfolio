import experiencesContent from "@dictionaries/experiences.content";
import React from "react";
import ExperienceTimeline from "@modules/experiences/molecules/ExperienceTimeline";

function Experiences({ params }: { params: { lang: string } }) {
  const dictionary = experiencesContent[params.lang];

  return (
    <div className="pb-24">
      <h1 className="mb-2 break-words text-center">{dictionary.title}</h1>
      <ExperienceTimeline />
    </div>
  );
}

export default Experiences;
