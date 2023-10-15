import "@styles/globals.scss";
import Layout from "@components/layouts/layout/Layout";
import { i18n } from "src/i18n.config";

export const metadata = {
  title: "John-Kenneth TAYLOR AFONAH",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang ?? i18n.defaultLocale;

  return (
    <html lang={lang}>
      <body>
        <Layout lang={lang}>{children}</Layout>
      </body>
    </html>
  );
}
