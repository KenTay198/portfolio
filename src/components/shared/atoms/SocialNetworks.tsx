"use client";
import Image from "next/image";
import React, { HTMLAttributes, useState } from "react";
import Linkedin from "@icons/networks/linkedin.png";
import Github from "@icons/networks/github.png";
import GithubWhite from "@icons/networks/github_white.png";
import Gmail from "@icons/networks/gmail.png";
import { useDarkModeState } from "src/context/DarkModeContext";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  withPhone?: boolean;
  darkBg? : boolean;
}

const SocialNetworks = ({ className, withPhone, darkBg, ...props }: IProps) => {
  const [mailOpened, setMailOpened] = useState(false);
  const [phoneOpened, setPhoneOpened] = useState(false);
  const { darkMode } = useDarkModeState();

  return (
    <div
      {...props}
      className={["flex w-fit flex-wrap items-center gap-2", className].join(" ")}
    >
      <Link
        href="https://github.com/KenTay198"
        target="_blank"
        className="duration-150 hover:scale-110"
      >
        <Image
          src={darkMode || darkBg ? GithubWhite : Github}
          title="Github"
          alt="Github icon"
          width={40}
        />
      </Link>

      <Link
        href="https://www.linkedin.com/in/john-kenneth-taylor-afonah-54a053197"
        target="_blank"
        className="duration-150 hover:scale-110"
      >
        <Image src={Linkedin} title="Linkedin" alt="Linkedin icon" width={40} />
      </Link>

      <div className="flex items-center gap-2 max-[310px]:flex-col max-[310px]:justify-center">
        <Image
          src={Gmail}
          title="Gmail"
          alt="Gmail icon"
          width={40}
          onClick={() => setMailOpened(!mailOpened)}
          className="cursor-pointer duration-150 hover:scale-110"
        />
        {mailOpened && <p className="animate-expand">johnkta7@gmail.com</p>}
      </div>

      {withPhone && (
        <div className="flex items-center gap-2 max-[310px]:flex-col max-[310px]:justify-center">
          <div className="cursor-pointer duration-150 hover:scale-110">
            <BsFillTelephoneFill
              size={38}
              onClick={() => setPhoneOpened(!phoneOpened)}
            />
          </div>
          {phoneOpened && <p className="animate-expand">+33613947276</p>}
        </div>
      )}
    </div>
  );
};

export default SocialNetworks;
