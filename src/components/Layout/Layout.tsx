0;
import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
