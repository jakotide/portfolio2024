import styles from "./mobilenav.module.scss";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useState } from "react";
import { useScrollProvider } from "../../context/";
import { motion } from "framer-motion";
import { showMobileNav } from "./anim";

export const MobileNav = () => {
  const lenis = useLenis();
  const { navStyle } = useScrollProvider();
  const [isClicked, setIsClicked] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section);
    }
  };

  return (
    <div className={styles.nav__menu__mobile__container}>
      <motion.menu
        variants={showMobileNav}
        initial="closed"
        animate={isClicked ? "open" : "closed"}
        className={styles.nav__menu__mobile}
        style={navStyle ? { color: "white" } : { color: "black" }}
      >
        <li onClick={() => scrollToSection("works")}>works</li>
        <li onClick={() => scrollToSection("about")}>about</li>
        <li onClick={() => scrollToSection("skills")}>skills</li>
        <li onClick={() => scrollToSection("contact")}>contact</li>
      </motion.menu>
      <button
        className={styles.mobile__menu__btn}
        onClick={() => setIsClicked(true)}
      >
        Menu
      </button>
    </div>
  );
};
