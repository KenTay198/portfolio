import Link from "next/link";
import React, { useState } from "react";
import content from "locales/layout.content";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatedSlideDown } from "components/Animated/EnterAnimations";
import Select from "components/StyledComponents/Select";

interface Props {
  mode?: String;
}

const Navbar = ({ mode }: Props) => {
  const router = useRouter();
  const { locale, asPath } = router;
  const pageContent = content[locale as keyof typeof content];
  const [expanded, setExpanded] = useState(false);
  const animationDelay = 0.05;

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  const isActive = (path: String) => {
    const [, pagePath] = asPath.split("/");
    const currentPath = path.replace("/", "");
    return currentPath === pagePath;
  };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-inner"]}>
        <div
          className={`${styles["nav-links"]} ${
            expanded ? `${styles["expanded"]} ${styles["dark"]}` : ""
          }`}
        >
          {pageContent.navbar.map(({ path, label }, idx) => {
            const active = isActive(path);
            return (
              <AnimatedSlideDown
                key={`nav-link${idx}`}
                delay={animationDelay * idx}
                className={`${styles["nav-item"]} ${styles["nav-link"]} ${
                  active ? styles["active"] : "hover-effect-1"
                }`}
              >
                <Link href={path}>{label}</Link>
              </AnimatedSlideDown>
            );
          })}
          <button
            className={styles["navbar-close"]}
            onClick={() => setExpanded(false)}
          >
            <FaTimes />
          </button>
        </div>
        <div className={styles["nav-actions"]}>
          <AnimatedSlideDown
            delay={animationDelay * pageContent.navbar.length}
            className={`${styles["language"]} ${styles["nav-item"]}`}
          >
            <Select
              id="select"
              options={[
                { value: "fr", label: "Français" },
                { value: "en", label: "English" },
              ]}
              selectTheme={{
                background_color: "transparent",
                transition_duration: "0.5s",
                border_size: "0",
                width: "100%",
                height: "100%",
              }}
              optionTheme={{
                focus_background_color: styles["primary_alt"],
              }}
              value={locale}
              onChange={changeLanguage}
            />
          </AnimatedSlideDown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
