import React from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import { HeroHeader } from "../../components/ui/heroheader/heroheader.jsx";
import { useOsloTime, useMediaQuery } from "../../components/hooks";
import Link from "next/link";

import {
  textSlideUp,
  opacityReveal,
  opacityRevealTwo,
  opacityRevealThree,
} from "./anim";

export const Hero = ({ id }) => {
  const osloTime = useOsloTime();
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div className={`${styles.hero__container} ${styles.noise}`} id={id}>
      <div className={styles.noise__container}></div>
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
                <div className={styles.h1__jakob}>Jakob</div>
                <h1 className={styles.h1__tidemand}>Tidemand</h1>
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
                <div className={styles.mobile__time}>{osloTime}, Oslo</div>
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
        <div className={styles.bottom__container}>
          <div className={styles.bottom__space__between}>
            <motion.div
              variants={textSlideUp}
              initial="initial"
              animate="animate"
              className={styles.bottom__links}
            >
              <Link
                href="https://www.linkedin.com/in/jakob-tidemand-a46095307/"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/jakotide"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                Github
              </Link>
              <Link
                href="https://drive.google.com/file/d/1CvTK2FKs83Y93wk1IH7T_9jOrNmpXfLZ/view?usp=sharing"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                CV
              </Link>
            </motion.div>
            <motion.div
              variants={textSlideUp}
              initial="initial"
              animate="animate"
              className={styles.scroll__down}
            >
              (scroll down for more)
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
