"use client";
import styles from "./slidemenu.module.scss";
import React, { useState } from "react";
import { GravityCanvas } from "../../effects/index";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { showMobileNav, scaleSpan, itemSlide } from "./anim.jsx";

export const SlideMenu = ({ isActive, setIsActive }) => {
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const lenis = useLenis();

  const scrollToSection = (sectionId) => {
    setIsActive(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section && lenis) {
        lenis.scrollTo(section, { offset: 0, duration: 0.3 });
      }
    }, 300);
  };

  const scrollToContactSection = (sectionId) => {
    setIsActive(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section && lenis) {
        lenis.scrollTo(section, { offset: 1100, duration: 0.3 });
      }
    }, 300);
  };

  const rectangles = [
    { className: `${styles.deco__rectangel} ${styles.deco__rectangel__blue}` },
    { className: `${styles.deco__rectangel} ${styles.deco__rectangel__red}` },
    { className: `${styles.deco__rectangel} ${styles.deco__rectangel__green}` },
  ];

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
          <div className={styles.left__container}>
            <div className={styles.left__text}>Portfolio 2024</div>
            <div className={styles.left__text}>Jakob Tidemand</div>
            <div className={styles.rectangles__container}>
              {rectangles.map((rect, index) => (
                <div key={index} className={rect.className}></div>
              ))}
            </div>
          </div>
          <div className={styles.nav__menu__flex}>
            <div className={styles.menu__header}>Menu</div>
            <div className={styles.menu__list__items}>
              <div className={styles.list__flex}>
                <motion.span
                  className={styles.hover__dot}
                  variants={scaleSpan}
                  animate={isWorkHovered ? "hovered" : "initial"}
                />
                <motion.li
                  variants={itemSlide}
                  onClick={() => scrollToSection("works")}
                  whileHover="hovered"
                  onHoverStart={() => setIsWorkHovered(true)}
                  onHoverEnd={() => setIsWorkHovered(false)}
                  className={styles.menu__item}
                  initial="initial"
                >
                  works
                </motion.li>
              </div>
              <div className={styles.list__flex}>
                <motion.span
                  className={styles.hover__dot}
                  variants={scaleSpan}
                  animate={isAboutHovered ? "hovered" : "initial"}
                />
                <motion.li
                  variants={itemSlide}
                  onClick={() => scrollToSection("about")}
                  whileHover="hovered"
                  onHoverStart={() => setIsAboutHovered(true)}
                  onHoverEnd={() => setIsAboutHovered(false)}
                  className={styles.menu__item}
                  initial="initial"
                >
                  about
                </motion.li>
              </div>
              <div className={styles.list__flex}>
                <motion.span
                  className={styles.hover__dot}
                  variants={scaleSpan}
                  animate={isSkillsHovered ? "hovered" : "initial"}
                />
                <motion.li
                  variants={itemSlide}
                  onClick={() => scrollToSection("skills")}
                  whileHover="hovered"
                  onHoverStart={() => setIsSkillsHovered(true)}
                  onHoverEnd={() => setIsSkillsHovered(false)}
                  className={styles.menu__item}
                  initial="initial"
                >
                  skills
                </motion.li>
              </div>
              <div className={styles.list__flex}>
                <motion.span
                  className={styles.hover__dot}
                  variants={scaleSpan}
                  animate={isContactHovered ? "hovered" : "initial"}
                />
                <motion.li
                  variants={itemSlide}
                  onClick={() => scrollToContactSection("contact")}
                  whileHover="hovered"
                  onHoverStart={() => setIsContactHovered(true)}
                  onHoverEnd={() => setIsContactHovered(false)}
                  className={styles.menu__item}
                  initial="initial"
                >
                  contact
                </motion.li>
              </div>
            </div>
            <div className={styles.nav__contacts}>
              <div>tidemand.dev@gmail.com</div>
              <div>+47 47864047</div>
            </div>
          </div>
          <div className={styles.right__container}>
            <div>LinkedIn</div>
            <div>Github</div>
          </div>
        </motion.menu>
      </div>
    </AnimatePresence>
  );
};
