import "../styles/globals.scss";
import "../styles/transitions.scss";
import type { AppProps } from "next/app";
import Transition from "transitions/Transition";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}

export default MyApp;
