import styles from "./projectnav.module.scss";
import React from "react";
import { TransitionLink } from "../../effects";
import { useCursor } from "../../context";

export const ProjectNav = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();

  return (
    <nav className={styles.project__nav}>
      <TransitionLink href="/#works" className={styles.project__link}>
        <div onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
          Home
        </div>
      </TransitionLink>
    </nav>
  );
};
