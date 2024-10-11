"use client";
import LocaleSwitcher from "@atoms/LocaleSwitcher";
import React, { useState } from "react";
import Button from "@atoms/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeSwitcher from "@atoms/DarkModeSwitcher";
import NavLinks from "./NavLinks";
import { useDarkModeState } from "src/context/DarkModeContext";
import Logo from "@atoms/Logo";

function Header({ lang }: { lang: string }) {
  const { darkMode } = useDarkModeState();
  const [isExpanded, setIsExpanded] = useState(false);
  const ExpandIcon = isExpanded ? FaTimes : FaBars;

  return (
    <div className="fixed top-0 left-0 flex justify-between items-center w-full max-w-screen px-2 py-1 h-24 z-10 bg-secondary/50 dark:bg-primary/50 backdrop-blur-md">
      <div className="flex gap-1 h-full items-center">
        <Logo />
      </div>

      <div className="flex gap-5 items-center">
        <NavLinks
          expanded={isExpanded}
          setExpanded={setIsExpanded}
          lang={lang}
        />

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <DarkModeSwitcher />
          <Button
            id="navbar-toggler"
            template={darkMode ? "secondary" : "primary"}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-[42px] h-[42px] min-[1000px]:hidden"
          >
            <ExpandIcon size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
