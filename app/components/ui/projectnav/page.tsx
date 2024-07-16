import styles from "./projectnav.module.scss";
import Link from "next/link";
import React from "react";

export const ProjectNav = () => {
  return (
    <nav className={styles.project__nav}>
      <Link href="/">Home</Link>
    </nav>
  );
};
