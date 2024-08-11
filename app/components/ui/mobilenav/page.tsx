import styles from "./mobilenav.module.scss";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useState } from "react";
import { useScrollProvider } from "../../context/";
import { motion, AnimatePresence } from "framer-motion";
import { showMobileNav, buttonTextVariants } from "./anim";
import { GravityCanvas } from "../../effects";

export const MobileNav = () => {
  const lenis = useLenis();
  const { bgColor } = useScrollProvider();
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
      <AnimatePresence>
        <motion.menu
          key="mobile-menu"
          variants={showMobileNav}
          initial="closed"
          animate={isClicked ? "open" : "closed"}
          exit="closed"
          className={styles.nav__menu__mobile}
        >
          {isClicked && (
            <div className={styles.nav__menu__flex}>
              <div>
                <li onClick={() => scrollToSection("works")}>works</li>
                <li onClick={() => scrollToSection("about")}>about</li>
                <li onClick={() => scrollToSection("skills")}>skills</li>
                <li onClick={() => scrollToSection("contact")}>contact</li>
              </div>
              <div
                className={styles.gravity__container}
                style={{ width: "100%", height: "100%" }}
              >
                <GravityCanvas></GravityCanvas>
              </div>
            </div>
          )}
        </motion.menu>
      </AnimatePresence>
      <motion.div
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
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
