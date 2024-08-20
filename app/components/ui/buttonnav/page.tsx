import styles from "./buttonnav.module.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { circleTransform } from "./anim";
import { SlideMenu } from "../index";
import { Overlay } from "../../effects";
import { useScrollLock } from "../../hooks";

export const ButtonNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const handleOpenSlideNav = () => {
    setIsActive(!isActive);
  };

  useScrollLock(isActive, 700);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBtn(scrollY > 800);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonVisible = showBtn || isActive;

  return (
    <div>
      <div
        className={`${styles.button__nav} ${
          buttonVisible ? styles.show__btn : ""
        }`}
        onClick={handleOpenSlideNav}
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
          className={styles.active__circle}
        ></motion.div>
      </div>
      <SlideMenu isActive={isActive} setIsActive={setIsActive} />
      <Overlay isActive={isActive} />
    </div>
  );
};
