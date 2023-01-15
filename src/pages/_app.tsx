import "../styles/globals.scss";
import "../styles/transitions.scss";
import type { AppProps } from "next/app";
import { ColorThemeProvider } from "context/ColorThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ColorThemeProvider>
        <Component {...pageProps} />
      </ColorThemeProvider>
  );
}

export default MyApp;
