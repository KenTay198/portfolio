"use client";
import homeContent from "@dictionaries/home.content";
import React, { HTMLAttributes } from "react";
import { useLocaleState } from "src/context/LocaleContext";
import Express from "@icons/technologies/expressjs.png";
import Next from "@icons/technologies/nextjs.png";
import Node from "@icons/technologies/nodejs.png";
import Typescript from "@icons/technologies/typescript.png";
import Image from "next/image";

const FavoriteTechnologies = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const { favoriteTechnologies } = homeContent[locale as keyof object];

  return (
    <section {...props} className="bg-primary py-2.5 px-5">
      <h2 className="text-center font-bold mb-2.5">{favoriteTechnologies.title}</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Image title="Next.js" src={Next} alt="Logo NextJs" width={100} />
        <Image title="Typescript" src={Typescript} alt="Logo Typescript" width={100} />
        <Image title="Node.js" src={Node} alt="Logo NodeJs" width={100} />
        <Image title="Express.js" src={Express} alt="Logo ExpressJs" width={100} />
      </div>
    </section>
  );
};

export default FavoriteTechnologies;
