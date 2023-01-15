0;
import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useEffect } from "react";
import { useColorTheme } from "context/ColorThemeContext";
import PageWrapper from "./PageWrapper/PageWrapper";

interface LayoutProps {
  mainclass?: string;
  mode?: String;
  children: React.ReactNode;
}

const Layout = ({ mode, mainclass, children }: LayoutProps) => {
  const [{ theme, initialized }, dispatch] = useColorTheme();

  useEffect(() => {
    if (!initialized) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      dispatch({
        type: "INITIALIZE_THEME",
        payload: { theme: prefersDark ? "dark" : "light" },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className={styles.layout}>
      <Navbar mode={mode} />
      {/* <PageWrapper> */}
        <main className={mainclass}>{children}</main>
      {/* </PageWrapper> */}
    </div>
  );
};

export default Layout;
