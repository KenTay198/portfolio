"use client";
import Button from "@atoms/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n } from "src/i18n.config";
import { FaGlobe } from "react-icons/fa";

const localeLabel = {
  fr: "Français",
  en: "English",
};

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const [expanded, setExpanded] = useState(false);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="relative">
      <Button onClick={() => setExpanded(!expanded)} template="secondary">
        <FaGlobe size={30} />
      </Button>
      <ul
        className={`absolute bg-secondary top-full rounded-sm overflow-hidden right-0 flex flex-col gap-x-3 ${
          expanded ? "" : "hidden"
        }`}
      >
        {i18n.locales.map((locale) => {
          return (
            <li
              className="text-primary bg-secondary px-2 font-bold text-xl duration-200 hover:brightness-75"
              key={locale}
            >
              <Link
                onClick={() => setExpanded(false)}
                href={redirectedPathName(locale)}
              >
                {localeLabel[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
