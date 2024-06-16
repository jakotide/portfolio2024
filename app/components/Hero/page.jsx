import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import { HeroHeader } from "../ui/heroheader/page";

import {
  textSlideUp,
  opacityReveal,
  opacityRevealTwo,
  opacityRevealThree,
} from "./anim";

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__content__container}>
        <div className={styles.hero__mid}>
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
            <HeroHeader />

            <motion.div
              variants={opacityRevealTwo}
              initial="initial"
              animate="animate"
            >
              <div className={styles.hero__subheader}>Frontend Developer</div>
            </motion.div>
          </div>
        </div>

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
        <motion.div
          variants={textSlideUp}
          initial="initial"
          animate="animate"
          className={styles.scroll__down}
        >
          <div>(scroll down for more)</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
