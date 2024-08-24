import styles from "./mobilenav.module.scss";
import { useLenis } from "@studio-freight/react-lenis";
import React from "react";

export const MobileNav = () => {
  const lenis = useLenis();

  const scrollToSection = (sectionId: string, defaultOffset = 0) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section && lenis) {
        const offset = sectionId === "contact" ? 1100 : defaultOffset;
        lenis.scrollTo(section, { offset: offset, duration: 0.3 });
      }
    }, 300);
  };

  return (
    <div className={styles.nav__menu__mobile__container}>
      <div
        className={styles.nav__mobile__home__btn}
        onClick={() => scrollToSection("hero")}
      >
        folio2024
      </div>
      <div className={styles.nav__mobile__links}>
        <div onClick={() => scrollToSection("works")}>works</div>
        <div onClick={() => scrollToSection("about")}>about</div>
        <div onClick={() => scrollToSection("skills")}>skills</div>
        <div onClick={() => scrollToSection("contact")}>contact</div>
      </div>
    </div>
  );
};
