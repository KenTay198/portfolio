"use client";
import React, { useEffect } from "react";
import Header from "./Header/Header";
import layoutContent from "@dictionaries/layout.content";
import { useLoadingState } from "src/context/LoadingContext";
import { TinySpinner } from "@atoms/Spinner";
import Footer from "./Footer";
import Lenis from "lenis";

interface IProps {
  children: React.ReactNode;
  lang: string;
  className?: string;
}

function Layout({ children, lang, className }: IProps) {
  const { isLoading } = useLoadingState();
  const dictionary = layoutContent[lang];

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className={["relative h-full", className].join(" ")}>
        {isLoading && (
          <span className="flex flex-col gap-2 items-center justify-center fixed bg-[rgba(0,0,0,0.8)] h-full w-full z-20 top-0 left-0">
            <TinySpinner />
            <p>{dictionary?.loadingMessage}</p>
          </span>
        )}

        <Header lang={lang} />

        <div className="relative pt-24 min-h-full">
          {children}
        </div>
        <Footer />
      </div>
  );
}

export default Layout;
