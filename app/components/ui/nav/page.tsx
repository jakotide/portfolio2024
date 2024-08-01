"use client";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { navReveal } from "./anim.jsx";
import React from "react";
import { useCursor, useScrollProvider } from "../../context/";
import { useLenis } from "@studio-freight/react-lenis";
import { useMediaQuery } from "../../hooks";
import { MobileNav } from "../index";

export const Navigation = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const { navStyle } = useScrollProvider();
  const isTablet = useMediaQuery("(max-width: 796px)");
  const lenis = useLenis();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section);
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
        style={navStyle ? { color: "white" } : { color: "black" }}
        className={styles.nav__left}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onClick={() => scrollToSection("hero")}
      >
        tidemand_folio2024
      </div>
      {isTablet ? (
        <MobileNav />
      ) : (
        <menu
          className={styles.nav__menu}
          style={navStyle ? { color: "white" } : { color: "black" }}
        >
          <li
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            onClick={() => scrollToSection("works")}
          >
            works
          </li>
          <li
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            onClick={() => scrollToSection("about")}
          >
            about
          </li>
          <li
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            onClick={() => scrollToSection("skills")}
          >
            skills
          </li>
          <li
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            onClick={() => scrollToSection("contact")}
          >
            contact
          </li>
        </menu>
      )}
    </motion.nav>
  );
};
