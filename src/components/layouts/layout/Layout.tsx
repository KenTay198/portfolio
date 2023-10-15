"use client";
import React from "react";
import Header from "./Header/Header";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
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
  const hasPrevious = index > 0;
  const hasNext = index !== -1 && index < navbar.length - 1;

  return (
    <div className={["relative h-full", className].join(" ")}>
      <Header lang={lang} />
      <div className="relative px-2 pt-24 h-full">
        <div className={`flex`}>
          {hasPrevious && (
            <Link href={`/${lang}${navbar[index - 1].href}`}>
              <p className="flex cursor-pointer items-center justify-center gap-2 duration-200 hover:-translate-x-1">
                <FaArrowLeft size={20} className="text-secondary" />
                <span>{navbar[index - 1].label}</span>
              </p>
            </Link>
          )}
          {hasNext && (
            <Link href={`/${lang}${navbar[index + 1].href}`} className="ml-auto">
              <p className="flex cursor-pointer items-center justify-center gap-2 duration-200 hover:translate-x-1">
                <span>{navbar[index + 1].label}</span>
                <FaArrowRight size={20} className="text-secondary" />
              </p>
            </Link>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
