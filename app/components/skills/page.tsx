"use client";
import styles from "./skills.module.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface RowData {
  colors: string[];
  widths: number[];
  skills: string[];
  direction: number;
}

export const Skills = () => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const rowData: RowData[] = [
    {
      colors: ["blue", "green", "orange-ish", "dark-blue"],
      widths: [30, 50, 20, 20],
      skills: ["", "JavaScript", "", ""],
      direction: -1,
    },
    {
      colors: ["grey-blue", "yellow", "white", "cream"],
      widths: [30, 50, 20, 20],
      skills: ["", "CSS", "", "Git"],
      direction: 1,
    },
    {
      colors: ["dark-blue", "brown", "red", "light-green"],
      widths: [25, 25, 25, 25],
      skills: ["React", "", "HTML", ""],
      direction: -1,
    },
    {
      colors: ["red", "cream", "black", "grey"],
      widths: [30, 40, 30, 40],
      skills: ["Node.js", "", "GSAP", ""],
      direction: 1,
    },
    {
      colors: ["dark-grey", "orange", "yellow", "teal"],
      widths: [60, 10, 20, 20],
      skills: ["Framer Motion", "", "Github", ""],
      direction: -1,
    },
    {
      colors: ["light-green", "cream", "light-green", "pink"],
      widths: [30, 30, 20, 20],
      skills: ["", "Next.js", "", "Typescript"],
      direction: 1,
    },
  ];

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
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section className={styles.skills__section}>
      <h1 className={styles.skills__h1}>Skills</h1>
      <div className={styles.marquee__container}>
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
                  if (!rowRefs.current[rowIndex * 2 + duplicateIndex]) {
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
    </section>
  );
};
