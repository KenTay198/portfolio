0;
import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useState, useEffect, useRef } from "react";
import { useColorTheme } from "@context/ColorThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
