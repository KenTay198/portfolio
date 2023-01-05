import "../styles/globals.scss";
import "../styles/transitions.scss";
import type { AppProps } from "next/app";
import Transition from "@transitions/Transition";
import { ColorThemeProvider } from "@context/ColorThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Transition>
    <ColorThemeProvider>
      <Component {...pageProps} />
    </ColorThemeProvider>
    // {/* </Transition> */}
  );
}

export default MyApp;
