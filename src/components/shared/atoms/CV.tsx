"use client";
import React from "react";
import { Locale } from "src/i18n.config";

interface IProps {
  lang: Locale;
}

const CV = ({ lang }: IProps) => {
  return (
    <iframe
      className="w-full max-w-[1300px] h-screen mx-auto"
      src={`/documents/CV${lang === "en" ? "_en" : ""}.pdf`}
    ></iframe>
  );
};

export default CV;
