import React from "react";
import Image from "next/image";
import Notfound from "@images/svg/404.svg";
import notFoundContent from "@dictionaries/not-found.content";
import Layout from "@components/layouts/layout/Layout";
import { i18n } from "src/i18n.config";

function NotFound() {
  const lang = i18n.defaultLocale;
  const dictionary = notFoundContent[lang];

  return (
    <Layout lang={lang}>
      <div className="flex flex-col items-center justify-center max-w-[1000px] mx-auto text-center pb-24">
        <Image src={Notfound} alt="Styled 404" />
        <h2 className="text-5xl font-bold">{dictionary.title}</h2>
        <p className="text-2xl">{dictionary.text}</p>
      </div>
    </Layout>
  );
}

export default NotFound;
