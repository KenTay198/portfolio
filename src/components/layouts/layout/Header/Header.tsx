"use client";
import Image from "next/image";
import Logo from "@images/logos/casquette-beige.png";
import layoutContent from "src/dictionaries/layout.content";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@atoms/Button";
import { FaBars } from "react-icons/fa";

function Header({ lang }: { lang: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dictionary = layoutContent[lang as keyof object];
  const pathname = usePathname().substring(3) || "/";
  const pathSplit = pathname.split("/");

  const isActive = (href: string) =>
    !href.split("/").some((e, i) => pathSplit[i] !== e);

  return (
    <div className="fixed top-0 left-0 flex justify-between items-center w-full px-2 py-1 h-24 z-10 backdrop-blur-md">
      <div className="flex gap-1 h-full items-center">
        <Link className="flex h-full" href={`/${lang}`}>
          <Image
            src={Logo}
            alt="Logo de John-Kenneth"
            className="h-full w-auto rotate hover:animate-none"
          />
        </Link>
        <Button
          template="secondary"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-fit min-[880px]:hidden"
        >
          <FaBars />
        </Button>
      </div>
      <ul
        className={`flex gap-2 duration-200 overflow-hidden max-[880px]:flex-col max-[880px]:fixed max-[880px]:left-0 max-[880px]:top-0 max-[880px]:z-10 max-[880px]:bg-secondary-0.8 max-[880px]:w-50px max-[880px]:h-screen max-[880px]:py-10 ${
          isExpanded
            ? "max-[880px]:px-2 max-[880px]:max-w-full"
            : "max-[880px]:max-w-0"
        }`}
      >
        <button
          onClick={() => setIsExpanded(false)}
          className="text-primary absolute top-0 right-3 text-4xl font-bold duration-200 hover:scale-110 min-[880px]:hidden"
        >
          &times;
        </button>
        {dictionary?.navbar.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <Link key={href} href={href}>
              <li
                className={`relative px-2 rounded-md cursor-pointer font-bold text-xl max-[880px]:text-3xl ${
                  isExpanded
                    ? ""
                    : "max-[880px]:opacity-0 max-[880px]:pointer-events-none"
                } ${
                  active
                    ? "bg-secondary text-primary max-[880px]:text-secondary max-[880px]:bg-primary"
                    : "max-[880px]:text-primary after:duration-200 after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:w-0 after:border-b-2 after:border-secondary hover:after:w-full max-[880px]:after:border-primary"
                }`}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>
      <div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}

export default Header;
