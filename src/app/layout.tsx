import React from "react";
import "@styles/globals.scss";
import { i18n } from "src/i18n.config";
import "react-toastify/dist/ReactToastify.css";
import LoadingProvider from "src/context/LoadingContext";
import { ToastContainer } from "react-toastify";
import DarkModeProvider from "src/context/DarkModeContext";
import LocaleProvider from "src/context/LocaleContext";
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "John-Kenneth TAYLOR AFONAH",
  creator: 'John-Kenneth TAYLOR AFONAH',
  publisher: 'John-Kenneth TAYLOR AFONAH',
  icons : {
    icon : "/favicon.ico"
  },
  openGraph: {
    title: 'John-Kenneth TAYLOR AFONAH',
    description: 'Portfolio de John-Kenneth TAYLOR AFONAH.',
    url: 'https://www.johnkennethtaylor.com/fr',
    type: 'website',
    images: [
      {
        url: '/images/photos/john/portrait_john.png',
        width: 897,
        height: 897,
        alt: 'Portrait de John-Kenneth TAYLOR AFONAH',
      },
      {
        url: '/favicon.ico',
        width: 48,
        height: 48,
        alt: 'Logo de John-Kenneth TAYLOR AFONAH',
      },
    ],
  },
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
      <Analytics />
      <body className="duration-150 bg-secondary text-black dark:bg-primary dark:text-white">
        <LocaleProvider>
          <LoadingProvider>
            <DarkModeProvider>{children}</DarkModeProvider>
          </LoadingProvider>
        </LocaleProvider>
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
      </body>
    </html>
  );
}
