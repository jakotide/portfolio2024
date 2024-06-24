"use client";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { navReveal } from "./anim.jsx";
import React from "react";

interface NavProps {
  isCircleInView: boolean;
}

export const Navigation: React.FC<NavProps> = () => {
  return (
    <motion.nav
      variants={navReveal}
      initial="initial"
      animate="animate"
      className={`${styles.nav}`}
    >
      <div>tidemand_folio2024</div>

      <menu className={styles.nav__menu}>
        <li>works</li>
        <li>about</li>
        <li>contact</li>
      </menu>
    </motion.nav>
  );
};
