"use client";
import styles from "./skills.module.scss";
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { rowData } from "./data";

export const Skills = () => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const [activeButton, setActiveButton] = useState("chaos");

  const handleActiveBtn = (button: string) => {
    setActiveButton(button);
  };

  // const animate = useCallback(() => {
  //   rowRefs.current.forEach((ref, index) => {
  //     if (ref) {
  //       const row = rowData[Math.floor(index / 2)];
  //       let xPercent = gsap.getProperty(ref, "xPercent") as number | string;
  //       xPercent =
  //         typeof xPercent === "string" ? parseFloat(xPercent) : xPercent;
  //       xPercent += 0.1 * row.direction;
  //       if (xPercent <= -100) xPercent = 0;
  //       if (xPercent >= 100) xPercent = 0;
  //       gsap.set(ref, { xPercent });
  //     }
  //   });
  //   animationFrameId.current = requestAnimationFrame(animate);
  // }, []);

  // useEffect(() => {
  //   if (activeButton === "chaos") {
  //     animationFrameId.current = requestAnimationFrame(animate);
  //   } else {
  //     if (animationFrameId.current !== null) {
  //       cancelAnimationFrame(animationFrameId.current);
  //       animationFrameId.current = null;
  //     }
  //   }

  //   return () => {
  //     if (animationFrameId.current !== null) {
  //       cancelAnimationFrame(animationFrameId.current);
  //       animationFrameId.current = null;
  //     }
  //   };
  // }, [activeButton, animate]);

  const animate = () => {
    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        const row = rowData[Math.floor(index / 2)];
        let xPercent = gsap.getProperty(ref, "xPercent") as number | string;
        xPercent =
          typeof xPercent === "string" ? parseFloat(xPercent) : xPercent;
        xPercent += 0.1 * row.direction;
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

  return (
    <section className={styles.skills__section}>
      <h1 className={styles.skills__h1}>Skills</h1>
      <div className={styles.skills__btn__container}>
        <div className={styles.view}>View</div>
        <div>Chaos</div>
        <button
          aria-label="Checkbox button"
          className={`${styles.checkbox__btn} ${
            activeButton === "chaos" ? styles.active : ""
          }`}
          onClick={() => handleActiveBtn("chaos")}
        ></button>
        <div>Readable</div>
        <button
          aria-label="Checkbox button"
          className={`${styles.checkbox__btn} ${
            activeButton === "readable" ? styles.active : ""
          }`}
          onClick={() => handleActiveBtn("readable")}
        ></button>
      </div>
      <div
        className={`${styles.marquee__container} ${
          activeButton === "chaos" ? "" : styles.hidden
        }`}
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
      </div>
      <div
        className={`${styles.readable__container} ${
          activeButton === "readable" ? "" : styles.hidden
        }`}
      >
        <div>Skills:</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Javascript</div>
      </div>
    </section>
  );
};
