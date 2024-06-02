import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import {
  textSlideUp,
  letterAnimation,
  containerAnimation,
  opacityReveal,
  opacityRevealTwo,
} from "./anim";

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span key={index} variants={letterAnimation}>
      {char}
    </motion.span>
  ));
};

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.pattern__container}>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.hero__block}></div>
      <motion.div
        variants={textSlideUp}
        initial="initial"
        animate="animate"
        className={styles.bottom__links}
      >
        <div>LinkedIn</div>
        <div>Github</div>
        <div>CV</div>
      </motion.div>
      <div className={styles.hero__content__container}>
        <motion.div
          variants={opacityReveal}
          initial="initial"
          animate="animate"
          className={styles.hero__info__container}
        >
          <div>Freelance</div>
          <div>
            <div>Based in Oslo</div>
            <div>5:43pm</div>
          </div>
          <p>Frontend developer with a passion for design</p>
        </motion.div>
        <div className={styles.h1__container}>
          <div className={styles.hidden__box}>
            <motion.div
              variants={containerAnimation}
              initial="initial"
              animate="animate"
              className={styles.hero__h1}
            >
              {splitText("Jakob Tidemand")}
            </motion.div>
          </div>
          <motion.div
            variants={opacityRevealTwo}
            initial="initial"
            animate="animate"
          >
            <div className={styles.hero__subheader}>Frontend Developer</div>
            <div className={styles.hero__subheader__small}>Portfolio 2024</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
