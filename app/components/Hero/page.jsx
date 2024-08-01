import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import { HeroHeader } from "../ui/heroheader/page";
import { useOsloTime, useMediaQuery } from "../hooks/";

import {
  textSlideUp,
  opacityReveal,
  opacityRevealTwo,
  opacityRevealThree,
} from "./anim";

export const Hero = ({ id }) => {
  const osloTime = useOsloTime();
  const isTablet = useMediaQuery("(max-width: 796px)");

  return (
    <div className={`${styles.hero__container} ${styles.noise}`} id={id}>
      <div className={styles.hero__content__container}>
        <div className={styles.hero__mid}>
          {isTablet ? (
            ""
          ) : (
            <motion.div
              variants={opacityReveal}
              initial="initial"
              animate="animate"
              className={styles.hero__info__container}
            >
              <p>Available for employment and freelance opportunities</p>
              <div>
                <div>Based in Oslo</div>
                <div>{osloTime}</div>
              </div>
              <p>Frontend developer with a passion for design</p>
            </motion.div>
          )}

          <div className={styles.h1__container}>
            {isTablet ? (
              <motion.div
                variants={opacityRevealThree}
                initial="initial"
                animate="animate"
              >
                <div>Jakob</div>
                <h1>Tidemand</h1>
              </motion.div>
            ) : (
              <HeroHeader />
            )}
            {isTablet ? (
              <motion.div
                variants={opacityRevealTwo}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className={styles.hero__subheader__mobile}
                  variants={opacityRevealTwo}
                  initial="initial"
                  animate="animate"
                >
                  Frontend Developer with a passion for design
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                variants={opacityRevealTwo}
                initial="initial"
                animate="animate"
              >
                <div className={styles.hero__subheader}>Frontend Developer</div>
              </motion.div>
            )}
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
