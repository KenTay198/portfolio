import React from "react";
import homeContent from "@dictionaries/home.content";
import MyPresentation from "@modules/homepage/atoms/MyPresentation";
import FavoriteTechnologies from "@modules/homepage/atoms/FavoriteTechnologies";
import MySkills from "@modules/homepage/atoms/MySkills";
import MyProjects from "@modules/homepage/atoms/MyProjects";
import { getMetadata } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = homeContent[params.lang as keyof object];

  return getMetadata(dictionary, "/", params.lang);
};

function Home() {
  return (
    <div className="overflow-hidden">
      <MyPresentation />
      <FavoriteTechnologies />
      <MySkills className="mb-[80px]" />
      <MyProjects />
    </div>
  );
}

export default Home;
