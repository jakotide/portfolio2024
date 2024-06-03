import React, { useState, useEffect } from "react";
import styles from "./preloader.module.scss";
import { motion } from "framer-motion";
import { counterReveal, slide, textReveal } from "./anim";

export const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let currentValue = 0;

    const interval = setInterval(() => {
      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      setCounter(currentValue);

      if (currentValue === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setExit(true);
        }, 600);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      variants={slide}
      initial="initial"
      exit="exit"
      className={styles.preloader__container}
    >
      <div></div>
      <motion.div
        className={styles.loader__hello}
        variants={textReveal}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Hello!
      </motion.div>
      <motion.div
        // variants={counterReveal}
        // initial="initial"
        // animate="animate"
        // exit="exit"
        className={`${styles.counter} ${exit ? styles.counter__hidden : ""}`}
      >
        {counter}
      </motion.div>
    </motion.div>
  );
};
