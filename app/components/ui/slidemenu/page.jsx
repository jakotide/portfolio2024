import styles from "./slidemenu.module.scss";
import React from "react";
import { GravityCanvas } from "../../effects/index";
import { motion, AnimatePresence } from "framer-motion";
import { showMobileNav } from "../mobilenav/anim";

export const SlideMenu = ({ isActive }) => {
  return (
    <AnimatePresence>
      <div className={styles.slide__menu__container}>
        <motion.menu
          key="mobile-menu"
          variants={showMobileNav}
          initial="closed"
          animate={isActive ? "open" : "closed"}
          exit="closed"
          className={styles.nav__menu__mobile}
        >
          <div className={styles.nav__menu__flex}>
            <div className={styles.menu__list__items}>
              <li onClick={() => scrollToSection("works")}>works</li>
              <li onClick={() => scrollToSection("about")}>about</li>
              <li onClick={() => scrollToSection("skills")}>skills</li>
              <li onClick={() => scrollToSection("contact")}>contact</li>
            </div>
            <div
              className={styles.gravity__container}
              style={{ width: "100%", height: "100%" }}
            >
              <GravityCanvas />
            </div>
          </div>
        </motion.menu>
      </div>
    </AnimatePresence>
  );
};
