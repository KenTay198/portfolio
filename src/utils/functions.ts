import IDefaultContent from "@dictionaries/default.content";
import { Metadata } from "next";
import { i18n, Locale } from "src/i18n.config";

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);

export const isValidEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return regex.test(phone);
};

export const getMyAge = () =>
  new Date(
    new Date().getTime() - new Date("2002-07-29").getTime()
  ).getUTCFullYear() - 1970;

export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const getMetadata = (
  { title, meta }: IDefaultContent,
  path: string,
  lang: string
): Metadata => {
  const languages: Partial<Record<Locale, string>> = {};

  const locales = i18n.locales.filter((l) => l !== lang);

  for (const locale of locales) {
    languages[locale] = `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}${path}`;
  }

  return {
    title: `${
      title ? capitalize(title) + " | " : ""
    }John-Kenneth TAYLOR AFONAH`,
    description: meta.description,
    alternates: {
      canonical : `${process.env.NEXT_PUBLIC_SITE_URL}/fr${path}`,
      languages,
    },
  };
};
