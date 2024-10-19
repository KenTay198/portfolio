"use client";
import layoutContent, { INavLink } from "@dictionaries/layout.content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes, useEffect, useRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
  expanded: boolean;
  setExpanded: (val: boolean) => void;
  lang: string;
}

const NavLinks = ({ expanded, lang, setExpanded, ...props }: IProps) => {
  const dictionary = layoutContent[lang as keyof object];
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navbarToggler = document.getElementById("navbar-toggler");

    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(target as Node) &&
        navbarToggler &&
        !navbarToggler?.contains(target as Node)
      ) {
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
  }, [expanded, setExpanded]);

  return (
    <ul
      {...props}
      ref={menuRef}
      className={`flex gap-2 duration-200 overflow-hidden relative max-[1000px]:bg-primary/60 max-[100px]:rounded-lg max-[1000px]:flex-col max-[1000px]:fixed max-[1000px]:right-0 max-[1000px]:top-[105%] max-[1000px]:z-10 max-[1000px]:w-full max-[1000px]:h-fit max-[1000px]:max-h-screen max-[1000px]:py-2  ${
        expanded
          ? "max-[1000px]:px-2 max-[1000px]:max-w-[200px]"
          : "max-[1000px]:max-w-0"
      }`}
    >
      {dictionary?.navbar.map((link) => (
        <NavLink
          key={`nav-link-${link.href}`}
          onClick={() => setExpanded(false)}
          expanded={expanded}
          link={link}
          lang={lang}
        />
      ))}
    </ul>
  );
};

interface INavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  expanded: boolean;
  link: INavLink;
  lang: string;
}

const NavLink = ({ expanded, link, lang, ...props }: INavLinkProps) => {
  const { href, label, Icon } = link;
  const pathname = usePathname().substring(3) || "/";
  const pathSplit = pathname.split("/");

  const isActive = (href: string) =>
    !href.split("/").some((e, i) => pathSplit[i] !== e);

  const active = isActive(href);

  const getClassName = () => {
    const classNames: string[] = [
      "flex items-center gap-[5px] relative p-2.5 rounded-lg cursor-pointer duration-200 overflow-hidden",
    ];

    if (active)
      classNames.push(
        "text-white bg-primary",
        "dark:text-primary dark:bg-accent"
      );
    else
      classNames.push(
        "text-black hover:text-white hover:bg-primary/60",
        "dark:text-white dark:hover:text-black dark:hover:bg-accent/60"
      );

    if (expanded) classNames.push("max-[1000px]:text-secondary");

    return classNames.join(" ");
  };

  return (
    <Link
      {...props}
      href={href.startsWith("http") ? href : `/${lang}/${href}`}
      target={href.endsWith(".pdf") ? "_blank" : ""}
    >
      <div className={getClassName()}>
        <Icon
          className={`max-[1000px]:whitespace-nowrap ${
            expanded ? "" : "max-[1000px]:invisible max-[1000px]:w-0"
          }`}
        />
        <li
          className={`max-[1000px]:whitespace-nowrap ${
            expanded ? "" : "max-[1000px]:invisible max-[1000px]:w-0"
          }`}
        >
          {label}
        </li>
      </div>
    </Link>
  );
};

export default NavLinks;
