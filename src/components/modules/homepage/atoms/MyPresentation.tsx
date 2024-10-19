"use client";
import homeContent from "@dictionaries/home.content";
import Portrait from "@images/photos/john/portrait_john.png";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import BlobContainer from "../../../shared/atoms/BlobContainer";
import SocialNetworks from "../../../shared/atoms/SocialNetworks";
import { useDarkModeState } from "src/context/DarkModeContext";
import Button from "@atoms/Button";
import { useLocaleState } from "src/context/LocaleContext";

const MyPresentation = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const { darkMode } = useDarkModeState();
  const { presentation, images } = homeContent[locale as keyof object];

  return (
    <section {...props} className="duration-150 bg-white dark:bg-primary">
      <BlobContainer
        after={{
          color: darkMode ? "accent" : "secondary",
          type: "outlined",
          height: 387,
          width: 418,
          number: 1,
          placement: { top: -114, right: -122 },
          className : "max-[870px]:hidden"
        }}
        before={{
          color: darkMode ? "secondary" : "primary",
          type: "outlined",
          height: 387,
          width: 418,
          number: 1,
          placement: { bottom: -129, left: -161 },
          className: "max-[1700px]:hidden",
        }}
        className="flex gap-[120px] flex-wrap justify-center items-center px-3 mx-auto py-[105px]"
      >
        <div className="max-w-[800px]">
          <h1 className="text-accent mb-0">
            JOHN-KENNETH
            <br />
            TAYLOR AFONAH
          </h1>
          <h2 className="font-bold text-black dark:text-white">
            {presentation.job}
          </h2>
          <h3 className="mb-2 text-justify text-black dark:text-white">
            {presentation.description}
          </h3>

          <SocialNetworks className="mb-2" />

          <div className="flex items-center gap-2.5">
            <Button
              type="filled"
              template={darkMode ? "accent" : "primary"}
              href="/contact"
            >
              {presentation.buttons.contactMe}
            </Button>
            <Button
              type="filled"
              template={darkMode ? "accent" : "primary"}
              href="/CV"
            >
              {presentation.buttons.myResumte}
            </Button>
          </div>
        </div>
        <Image
          src={Portrait}
          alt={images.portrait.alt}
          width={400}
          className="shadow-xl rounded-full"
          unoptimized
        />
      </BlobContainer>
    </section>
  );
};

export default MyPresentation;
