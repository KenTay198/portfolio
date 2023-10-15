import "@styles/globals.scss";
import { i18n } from "src/i18n.config";
import "react-toastify/dist/ReactToastify.css";
import LoadingProvider from "src/context/LoadingContext";

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
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
