import layoutContent from "@dictionaries/layout.content";
import { MetadataRoute } from "next";
import { i18n, Locale } from "src/i18n.config";

const url = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [];

  const { defaultLocale, locales } = i18n;

  const links = layoutContent[defaultLocale].navbar.map(({ href }) => href);

  for (const link of links) {
    const alternates: Partial<Record<Locale, string>> = {};

    for (const locale of locales) {
      alternates[locale] = `${url}/${locale}${link}`;
    }


    urls.push({
      url: `${url}/${defaultLocale}${link}`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      alternates,
    });
  }

  return urls as MetadataRoute.Sitemap;
}
