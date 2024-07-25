import styles from "./projectnav.module.scss";
import React from "react";
import { TransitionLink } from "../../effects";
import { useCursor, useScrollProvider } from "../../context/";

export const ProjectNav = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const { navStyle } = useScrollProvider();
  return (
    <nav className={styles.project__nav}>
      <TransitionLink href="/" className={styles.project__link}>
        <div onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
          Home
        </div>
      </TransitionLink>
    </nav>
  );
};
