"use client";
import React from "react";
import Header from "./Header/Header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import layoutContent from "@dictionaries/layout.content";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  lang: string;
  className?: string;
}

function Layout({ children, lang, className }: IProps) {
  const { navbar } = layoutContent[lang];
  const pathname = usePathname().substring(3) || "/";
  const index = navbar.findIndex(({ href }) => href === pathname);

  return (
    <div className={["relative h-full", className].join(" ")}>
      <Header lang={lang} />
      <div className="pt-20">
        {index > 0 && (
          <Link href={`/${lang}${navbar[index - 1].href}`}>
            <span className="flex cursor-pointer items-center justify-center translate-y-1/2 absolute bottom-1/2 left-3 p-2 bg-secondary rounded-full">
              <FaChevronLeft size={30} className="text-primary" />
            </span>
          </Link>
        )}
        {children}
        {index !== -1 && index < navbar.length - 1 && (
          <Link href={`/${lang}${navbar[index + 1].href}`}>
            <span className="flex cursor-pointer items-center justify-center translate-y-1/2 absolute bottom-1/2 right-3 p-2 bg-secondary rounded-full">
              <FaChevronRight size={30} className="text-primary" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Layout;
