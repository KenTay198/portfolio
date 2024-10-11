"use client";
import React, { HTMLAttributes } from "react";
import LogoBeige from "@images/logos/casquette-beige.png";
import LogoBleu from "@images/logos/casquette-bleue.png";
import { useDarkModeState } from "src/context/DarkModeContext";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ ...props }: HTMLAttributes<HTMLAnchorElement>) => {
  const { darkMode } = useDarkModeState();
  const image = darkMode ? LogoBeige : LogoBleu;

  return (
    <Link {...props} className="flex h-full" href="/">
      <Image
        src={image}
        alt="Logo de John-Kenneth"
        className="h-full w-auto rotate hover:animate-none"
      />
    </Link>
  );
};

export default Logo;
