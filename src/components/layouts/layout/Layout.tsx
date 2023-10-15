"use client";
import React from "react";
import Header from "./Header/Header";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import layoutContent from "@dictionaries/layout.content";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { useLoadingState } from "src/context/LoadingContext";
import { TinySpinner } from "@atoms/Spinner";

interface IProps {
  children: React.ReactNode;
  lang: string;
  className?: string;
}

function Layout({ children, lang, className }: IProps) {
  const { isLoading } = useLoadingState();
  const dictionary = layoutContent[lang];
  const pathname = usePathname().substring(3) || "/";
  const index = dictionary?.navbar.findIndex(({ href }) => href === pathname);
  const hasPrevious = index > 0;
  const hasNext = index !== -1 && index < dictionary?.navbar.length - 1;

  return (
    <div className={["relative h-full", className].join(" ")}>
      {isLoading && (
        <span className="flex flex-col gap-2 items-center justify-center fixed bg-[rgba(0,0,0,0.8)] h-full w-full z-20 top-0 left-0">
          <TinySpinner />
          <p>{dictionary?.loadingMessage}</p>
        </span>
      )}
      <Header lang={lang} />
      <div className="relative px-2 pt-24 pb-5 min-h-full">
        <div className="flex py-2">
          {hasPrevious && (
            <Link href={`/${lang}${dictionary?.navbar[index - 1].href}`}>
              <p className="flex cursor-pointer items-center justify-center gap-2 duration-200 hover:-translate-x-1">
                <FaArrowLeft size={20} className="text-secondary" />
                <span>{dictionary?.navbar[index - 1].label}</span>
              </p>
            </Link>
          )}
          {hasNext && (
            <Link
              href={`/${lang}${dictionary?.navbar[index + 1].href}`}
              className="ml-auto"
            >
              <p className="flex cursor-pointer items-center justify-center gap-2 duration-200 hover:translate-x-1">
                <span>{dictionary?.navbar[index + 1].label}</span>
                <FaArrowRight size={20} className="text-secondary" />
              </p>
            </Link>
          )}
        </div>
        {children}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        theme="colored"
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default Layout;
