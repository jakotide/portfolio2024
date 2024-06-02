import React from "react";
import styles from "./hero.module.scss";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../assets/fonts/brownsugar.woff2" });

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
      <div className={styles.hero__content__container}>
        {/* <div className={styles.top__corner}></div>
        <div className={styles.bottom__corner}></div> */}
        <div className={styles.hero__info__container}>
          <div>Freelance</div>
          <div>
            <div>Based in Oslo</div>
            <div>5:43pm</div>
          </div>
          <p>Frontend developer with a passion for design</p>
        </div>
        <h1 className={styles.hero__h1}>Jakob Tidemand</h1>
      </div>
    </div>
  );
};

export default Hero;
