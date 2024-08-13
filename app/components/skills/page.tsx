"use client";
import styles from "./skills.module.scss";
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { rowData } from "./data";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { containerReveal } from "./data";

interface SkillsProps {
  id: string;
  scrollYProgress: any;
}

export const Skills: React.FC<SkillsProps> = ({ id, scrollYProgress }) => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const [activeButton, setActiveButton] = useState("chaos");
  const [windowHeight, setWindowHeight] = useState(1000);

  const handleButtonClick = useCallback(
    (buttonType: string) => {
      if (activeButton !== buttonType) {
        setActiveButton(buttonType);
      }
    },
    [activeButton]
  );

  const animate = () => {
    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        const row = rowData[Math.floor(index / 2)];
        let xPercent = gsap.getProperty(ref, "xPercent") as number | string;
        xPercent =
          typeof xPercent === "string" ? parseFloat(xPercent) : xPercent;
        xPercent += 0.09 * row.direction;
        if (xPercent <= -100) xPercent = 0;
        if (xPercent >= 100) xPercent = 0;
        gsap.set(ref, { xPercent });
      }
    });
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (activeButton === "chaos") {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [activeButton]);

  // const scale = useTransform(
  //   scrollYProgress,
  //   [0, 950 / window.innerHeight],
  //   [1, 0.9]
  // );

  const scale = useTransform(
    scrollYProgress,
    [0, 950 / windowHeight],
    [1, 0.95]
  );

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <motion.section
      className={styles.skills__section}
      id={id}
      style={{ scale }}
    >
      <h1 className={styles.skills__h1}>Skills</h1>
      <div className={styles.skills__btn__container}>
        <div className={styles.view}>View</div>
        <div>Chaos</div>
        <div
          aria-label="Chaos button"
          className={`${styles.checkbox__btn} ${
            activeButton === "chaos" ? styles.activeClass : ""
          }`}
          onClick={() => handleButtonClick("chaos")}
        ></div>
        <div>Readable</div>
        <div
          aria-label="Readable button"
          className={`${styles.checkbox__btn} ${
            activeButton === "readable" ? styles.activeClass : ""
          }`}
          onClick={() => handleButtonClick("readable")}
        ></div>
      </div>
      <motion.div
        className={styles.marquee__container}
        initial="initial"
        animate={activeButton === "chaos" ? "animate" : "initial"}
        variants={containerReveal}
      >
        {rowData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.rowWrapper}>
            {[0, 1].map((duplicateIndex) => (
              <div
                key={duplicateIndex}
                className={`${styles.row__container} ${
                  row.direction === 1 && duplicateIndex === 1
                    ? styles.leftNegative
                    : ""
                }`}
                ref={(el) => {
                  if (el && !rowRefs.current[rowIndex * 2 + duplicateIndex]) {
                    rowRefs.current[rowIndex * 2 + duplicateIndex] = el;
                  }
                }}
              >
                {row.skills.map((skill, colIndex) => (
                  <div
                    key={colIndex}
                    className={`${styles.column} ${
                      styles[row.colors[colIndex]]
                    }`}
                    style={{
                      width: `${row.widths[colIndex]}%`,
                      color: ["black", "dark-grey", "dark-blue"].includes(
                        row.colors[colIndex]
                      )
                        ? "#FFF"
                        : "#171717",
                    }}
                  >
                    {skill && (
                      <div className={styles.centered__word}>{skill}</div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.div
        className={styles.readable__container}
        initial="initial"
        animate={activeButton === "readable" ? "animate" : "initial"}
        variants={containerReveal}
      >
        <div className={styles.readable__flex}>
          <div>
            <div className={styles.readable__category}>Skills:</div>
            <div className={styles.list__skills}>
              <div>HTML</div>
              <div>CSS/SCSS</div>
              <div>Javascript</div>
              <div>React</div>
              <div>Tailwind</div>
              <div>Next.js</div>
              <div>Typescript</div>
            </div>
          </div>
          <div>
            <div className={styles.readable__category}>Tools:</div>
            <div className={styles.list__skills}>
              <div>Figma</div>
              <div>Git</div>
              <div>Github</div>
              <div>Trello</div>
            </div>
          </div>
          <div>
            <div className={styles.readable__category}>Animation:</div>
            <div className={styles.list__skills}>
              <div>Framer Motion</div>
              <div>GSAP</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
