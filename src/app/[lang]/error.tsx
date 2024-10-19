"use client";
import errorContent from "@dictionaries/error.content";
import React from "react";

interface IProps {
  params: {
    lang: string;
  };
}

function Error({ params }: IProps) {
  const dictionary = errorContent[params.lang];

  return (
    <div className="flex flex-col px-5 items-center justify-center max-w-[1000px] mx-auto text-center pb-24">
      <h2 className="text-5xl font-bold">{dictionary.title}</h2>
      <p className="text-2xl">{dictionary.text}</p>
    </div>
  );
}

export default Error;
