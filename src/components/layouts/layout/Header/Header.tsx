"use client";
import Image from "next/image";
import Logo from "@images/logos/casquette-beige.png";
import layoutContent from "src/dictionaries/layout.content";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header({ lang }: { lang: string }) {
  const dictionary = layoutContent[lang as keyof object];

  const pathname = usePathname().substring(3) || "/";

  const pathSplit = pathname.split("/");

  const isActive = (href: string) =>
    !href.split("/").some((e, i) => pathSplit[i] !== e);

  return (
    <div className="fixed top-0 left-0 flex justify-between items-center w-full h-20 z-10 px-2">
      <Link className="flex h-full" href={`/${lang}`}>
        <Image
          src={Logo}
          alt="Logo de John-Kenneth"
          className="h-full w-auto"
        />
      </Link>
      <ul className="flex gap-2">
        {dictionary?.navbar.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <Link key={href} href={href}>
              <li
                className={`relative px-2 rounded-md cursor-pointer font-bold text-xl ${
                  active
                    ? "bg-secondary text-primary"
                    : "after:duration-200 after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:w-0 after:border-b-2 after:border-secondary hover:after:w-full"
                }`}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>
      <LocaleSwitcher />
    </div>
  );
}

export default Header;
