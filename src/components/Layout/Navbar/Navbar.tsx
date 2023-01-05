import Link from "next/link";
import React, { useState } from "react";
import fr from "@locales/layout/fr";
import en from "@locales/layout/en";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import { useColorTheme } from "@context/ColorThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [{ theme }, dispatch] = useColorTheme();
  const router = useRouter();
  const { locale, asPath } = router;
  const pageContent = locale === "fr" ? fr : en;
  const [expanded, setExpanded] = useState(false);

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  };

  const isActive = (path: String) => {
    const [, pagePath] = asPath.split("/");
    const currentPath = path.replace("/", "");
    return currentPath === pagePath;
  };

  const toggleColorTheme = () => {
    document.body.classList.remove(theme);
    dispatch({ type: "TOGGLE_THEME" });
  };

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <nav
      className={`${styles["navbar"]} ${
        theme === "dark" ? styles["dark"] : ""
      }`}
    >
      <div className={styles["navbar-inner"]}>
        <div
          className={`${styles["nav-links"]} ${
            expanded ? `${styles["expanded"]} ${styles["dark"]}` : ""
          }`}
        >
          {pageContent.navbar.map(({ path, label }, idx) => {
            const active = isActive(path);
            return (
              <div
                key={`nav-link${idx}`}
                className={`${theme} ${styles["nav-item"]} ${
                  styles["nav-link"]
                } ${active ? styles["active"] : "hover-effect-1"}`}
              >
                <Link href={path}>{label}</Link>
              </div>
            );
          })}
          <button
            className={styles["navbar-close"]}
            onClick={() => setExpanded(false)}
          >
            <FaTimes />
          </button>
        </div>
        <button className={styles["navbar-toggler"]} onClick={toggleExpanded}>
          <FaBars />
        </button>
        <div className={styles["nav-actions"]}>
          <div className={`${styles["language"]} ${styles["nav-item"]}`}>
            <select value={locale} onChange={changeLanguage}>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className={`${styles["color-theme"]} ${styles["nav-item"]}`}>
            <button onClick={toggleColorTheme}>
              {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
