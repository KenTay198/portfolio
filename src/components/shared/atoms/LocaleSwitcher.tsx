import Button from "@components/shared/atoms/Button";
import React, { useEffect, useRef, useState } from "react";
import { i18n } from "src/i18n.config";
import { FaGlobe } from "react-icons/fa";
import { useDarkModeState } from "src/context/DarkModeContext";
import { useLocaleState } from "src/context/LocaleContext";

const localeLabel = {
  fr: "Français",
  en: "English",
};

export default function LocaleSwitcher() {
  const [expanded, setExpanded] = useState(false);
  const { darkMode } = useDarkModeState();
  const menuRef = useRef<HTMLDivElement>(null);
  const { changeLanguage, locale } = useLocaleState();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        onClick={() => setExpanded(!expanded)}
        template={darkMode ? "secondary" : "primary"}
      >
        <FaGlobe size={30} />
      </Button>
      <ul
        className={`absolute shadow bg-secondary top-[110%] rounded-sm overflow-hidden right-0 flex flex-col gap-x-3 ${
          expanded ? "" : "hidden"
        }`}
      >
        {i18n.locales.map((l) => {
          return (
            <li
              className={`${
                l === locale ? "text-accent" : "text-secondary dark:text-primary"
              } bg-primary dark:bg-secondary py-1 px-4 font-bold text-xl duration-200 hover:brightness-75 cursor-pointer`}
              key={l}
              onClick={() => {
                changeLanguage(l);
                setExpanded(false);
              }}
            >
              {localeLabel[l]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
