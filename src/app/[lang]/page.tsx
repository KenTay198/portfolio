import React from "react";
import homeContent from "@dictionaries/home.content";
import MyPresentation from "@components/modules/homepage/atoms/MyPresentation";
import FavoriteTechnologies from "@components/modules/homepage/atoms/FavoriteTechnologies";
import MySkills from "@components/modules/homepage/atoms/MySkills";
import MyProjects from "@components/modules/homepage/atoms/MyProjects";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = homeContent[params.lang as keyof object];

  return {
    title: "John-Kenneth TAYLOR AFONAH",
    description: dictionary.meta.description,
  };
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
