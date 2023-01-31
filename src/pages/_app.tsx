import "../styles/globals.scss";
import "../styles/transitions.scss";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;
