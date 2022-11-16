import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();

  return (
    <div className={styles.layout}>
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
