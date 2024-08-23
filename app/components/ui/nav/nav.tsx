"use client";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { navReveal } from "./anim.jsx";
import React from "react";
import { useCursor } from "../../context";
import { useLenis } from "@studio-freight/react-lenis";

export const Navigation = () => {
  const { handleHoverEnd, handleHoverNavItem } = useCursor();

  const lenis = useLenis();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section);
    }
  };

  const scrollToContactSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section, { offset: 1100 });
    }
  };

  return (
    <motion.nav
      variants={navReveal}
      initial="initial"
      animate="animate"
      className={styles.nav}
    >
      <div
        className={styles.nav__left}
        onMouseEnter={() => handleHoverNavItem("#19aad1")}
        onMouseLeave={handleHoverEnd}
        onClick={() => scrollToSection("hero")}
      >
        tidemand_folio2024
      </div>

      <menu className={styles.nav__menu}>
        <li
          onMouseEnter={() => handleHoverNavItem("#ff8788")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToSection("works")}
        >
          works
        </li>
        <li
          onMouseEnter={() => handleHoverNavItem("#aee0bc")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToSection("about")}
        >
          about
        </li>
        <li
          onMouseEnter={() => handleHoverNavItem("#f0cf61")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToSection("skills")}
        >
          skills
        </li>
        <li
          onMouseEnter={() => handleHoverNavItem("#19aad1")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToContactSection("contact")}
        >
          contact
        </li>
      </menu>
    </motion.nav>
  );
};
