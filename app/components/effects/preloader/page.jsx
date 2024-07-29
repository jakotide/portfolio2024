"use client";
import React, { useState, useEffect } from "react";
import styles from "./preloader.module.scss";
import { motion } from "framer-motion";
import { counterReveal, slide, textReveal } from "./anim";

export const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [exit, setExit] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // useEffect(() => {
  //   let currentValue = 0;

  //   const interval = setInterval(() => {
  //     currentValue += Math.floor(Math.random() * 10) + 1;

  //     if (currentValue > 100) {
  //       currentValue = 100;
  //     }

  //     setCounter(currentValue);

  //     if (currentValue === 100) {
  //       clearInterval(interval);
  //       setTimeout(() => {
  //         setExit(true);
  //       }, 600);
  //     }
  //   }, 80);

  //   return () => clearInterval(interval);
  // }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slide}
      initial="initial"
      exit="exit"
      className={styles.preloader__container}
    >
      {dimension.height > 0 && (
        <>
          <motion.div
            className={styles.loader__hello}
            variants={textReveal}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Hello!
          </motion.div>
          {/* <motion.div
            className={`${styles.counter} ${
              exit ? styles.counter__hidden : ""
            }`}
          >
            {counter}
          </motion.div> */}
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};
