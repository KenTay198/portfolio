"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { i18n } from "src/i18n.config";

interface ILocaleContext {
  locale: "fr" | "en";
  changeLanguage: (val: "fr" | "en") => void;
}

//@ts-ignore
const LocaleContext = createContext<ILocaleContext>({});

export const useLocaleState = () => {
  const context = useContext(LocaleContext);
  return context;
};

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<"fr" | "en">(i18n.defaultLocale);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const pathLocale: any = pathname.split("/")[1];
    if (pathLocale !== locale && i18n.locales.includes(pathLocale))
      setLocale(pathLocale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const redirectedPathName = (locale: "fr" | "en") => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const changeLanguage = (locale: "fr" | "en") => {
    setLocale(locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    const newPath = redirectedPathName(locale);
    router.push(newPath);
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
}
