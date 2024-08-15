import styles from "./buttonnav.module.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { circleTransform } from "./anim";
import { SlideMenu } from "../index";

export const ButtonNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBtn(scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${styles.button__nav} ${showBtn ? styles.show__btn : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`${styles.burger} ${
            isActive ? styles.burger__active : ""
          }`}
        ></div>
        <motion.div
          variants={circleTransform}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className={styles.hover__circle}
        ></motion.div>
      </div>
      <SlideMenu isActive={isActive} />
    </div>
  );
};
