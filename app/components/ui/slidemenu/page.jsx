"use client";
import styles from "./slidemenu.module.scss";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import {
  showMobileNav,
  scaleSpan,
  itemSlide,
  itemReveal,
  revealBoxes,
} from "./anim.jsx";
import { createNavItems } from "./data.jsx";

export const SlideMenu = ({ isActive, setIsActive }) => {
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const lenis = useLenis();

  const scrollToSection = (sectionId, defaultOffset = 0) => {
    setIsActive(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section && lenis) {
        const offset = sectionId === "contact" ? 1100 : defaultOffset;
        lenis.scrollTo(section, { offset: offset, duration: 0.3 });
      }
    }, 300);
  };

  const navItems = createNavItems(
    isWorkHovered,
    setIsWorkHovered,
    isAboutHovered,
    setIsAboutHovered,
    isSkillsHovered,
    setIsSkillsHovered,
    isContactHovered,
    setIsContactHovered
  );

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
            <motion.div
              variants={revealBoxes}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.rectangles__container}
            >
              {rectangles.map((rect, index) => (
                <motion.div
                  variants={{
                    initial: { opacity: 0.1 },
                    revealed: { opacity: 1 },
                  }}
                  key={index}
                  className={rect.className}
                ></motion.div>
              ))}
            </motion.div>
          </div>
          <div className={styles.nav__menu__flex}>
            <div className={styles.menu__header}>Menu</div>
            <motion.div
              variants={itemReveal}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.menu__list__items}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.list__flex}
                  variants={{
                    initial: { x: "60px", opacity: 0.5 },
                    revealed: { x: "0px", opacity: 1 },
                  }}
                >
                  <motion.span
                    className={styles.hover__dot}
                    variants={scaleSpan}
                    animate={item.hoverState ? "hovered" : "initial"}
                  />
                  <motion.li
                    variants={itemSlide}
                    onClick={() => scrollToSection(item.id, 0)}
                    whileHover="hovered"
                    onHoverStart={() => item.setHoverState(true)}
                    onHoverEnd={() => item.setHoverState(false)}
                    className={styles.menu__item}
                    initial="initial"
                  >
                    {item.text}
                  </motion.li>
                </motion.div>
              ))}
            </motion.div>
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
