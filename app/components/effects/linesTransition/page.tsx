import styles from "./linetransition.module.scss";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const lineVariants = (initialHeight: string) => ({
  initial: {
    height: initialHeight,
  },
  animate: {
    height: "100%",
    transition: {
      duration: 0.8,
      // delay: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
});

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const LineTransition = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={controls}
      className={styles.red__line__container}
      ref={lineRef}
    >
      <div className={styles.line__0__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__1}`}
        ></motion.div>
      </div>
      <div className={styles.line__1__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__1}`}
        ></motion.div>
      </div>
      <div className={styles.line__2__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__2}`}
        ></motion.div>
      </div>
      <div className={styles.line__3__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__3}`}
        ></motion.div>
      </div>
      <div className={styles.line__4__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__4}`}
        ></motion.div>
      </div>
      <div className={styles.line__5__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__4}`}
        ></motion.div>
      </div>
      <div className={styles.line__6__container}>
        <motion.div
          variants={lineVariants("1px")}
          className={`${styles.red__line} ${styles.line__4}`}
        ></motion.div>
      </div>

      {/* <motion.div
        variants={lineVariants}
        className={`${styles.red__line} ${styles.line__2}`}
      ></motion.div>
      <motion.div
        variants={lineVariants}
        className={`${styles.red__line} ${styles.line__3}`}
      ></motion.div>
      <motion.div
        variants={lineVariants}
        className={`${styles.red__line} ${styles.line__4}`}
      ></motion.div>
      <motion.div
        variants={lineVariants}
        className={`${styles.red__line} ${styles.line__5}`}
      ></motion.div>
      <motion.div
        variants={lineVariants}
        className={`${styles.red__line} ${styles.line__6}`}
      ></motion.div>
      <motion.div
        variants={lineVariants}
        className={`${styles.red__line} ${styles.line__7}`}
      ></motion.div> */}
    </motion.div>
  );
};
