import styles from "./mobilenav.module.scss";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { showMobileNav, buttonTextVariants } from "./anim";
import { SlideMenu } from "../slidemenu/page";

export const MobileNav = () => {
  const lenis = useLenis();
  const [isClicked, setIsClicked] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section);
    }
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

      {/* <motion.div
        className={styles.mobile__menu__btn}
        onClick={() => setIsClicked(!isClicked)}
        style={isClicked ? { color: "White" } : { color: "black" }}
      >
        <AnimatePresence mode="wait">
          {isClicked ? (
            <motion.div
              key="close"
              variants={buttonTextVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className={styles.mobile__close__btn}
            >
              close
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              variants={buttonTextVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              menu
            </motion.div>
          )}
        </AnimatePresence> */}
      {/* </motion.div> */}
    </div>
  );
};
