import Link from "next/link";
import React from "react";
import fr from "@locales/layout/fr";
import en from "@locales/layout/en";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import CasquetteBeige from "@assets/images/casquette-beige.png";

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = locale === "fr" ? fr : en;

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <nav className={styles["navbar"]}>
      <ul>
        {pageContent.navbar.map((link, idx) => {
          return (
            <li key={`nav-link${idx}`}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          );
        })}
        <li>
          <select
            className={styles.languageSelect}
            value={locale}
            onChange={changeLanguage}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
