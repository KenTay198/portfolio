"use client";
import Image from "next/image";
import React from "react";
import MapDark from "@images/photos/projects/elikya_map_dark.png";
import projectsContent from "@dictionaries/projects.content";
import { useLocaleState } from "src/context/LocaleContext";

const ElikyaProjectInfo = () => {
  const { locale } = useLocaleState();
  const { cartography } = projectsContent[locale].groups.elikya;

  return (
    <div>
      <h4>{cartography}</h4>
      <Image src={MapDark} alt={cartography} />
    </div>
  );
};

export default ElikyaProjectInfo;
