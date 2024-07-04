"use client";
import styles from "./skills.module.scss";
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { rowData } from "./data";
import { motion } from "framer-motion";
import { containerReveal } from "./data";

export const Skills = () => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const [activeButton, setActiveButton] = useState("chaos");

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
        xPercent += 0.05 * row.direction;
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
            <div>HTML</div>
            <div>CSS/SCSS</div>
            <div>Javascript</div>
            <div>React</div>
            <div>Tailwind</div>
            <div>Next.js</div>
          </div>
          <div>
            <div className={styles.readable__category}>Tools:</div>
            <div>Figma</div>
            <div>Git</div>
            <div>Github</div>
            <div>Trello</div>
          </div>
          <div>
            <div className={styles.readable__category}>Animation:</div>
            <div>Framer Motion</div>
            <div>GSAP</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
// "use client";
// import styles from "./skills.module.scss";
// import React, { useRef, useState, useCallback, useEffect } from "react";
// import gsap from "gsap";
// import { rowData } from "./data";
// import { motion } from "framer-motion";
// import { containerReveal } from "./data";

// export const Skills = () => {
//   const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const animationFrameId = useRef<number | null>(null);

//   const [isHovered, setIsHovered] = useState(false); // State to manage hover status

//   const handleMouseEnter = () => {
//     console.log("Hello");
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const animate = () => {
//     rowRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const row = rowData[Math.floor(index / 2)];
//         let xPercent = gsap.getProperty(ref, "xPercent") as number | string;
//         xPercent =
//           typeof xPercent === "string" ? parseFloat(xPercent) : xPercent;
//         xPercent += 0.05 * row.direction;
//         if (xPercent <= -100) xPercent = 0;
//         if (xPercent >= 100) xPercent = 0;
//         gsap.set(ref, { xPercent });
//       }
//     });
//     animationFrameId.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     animationFrameId.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameId.current !== null) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []);

//   return (
//     <section className={styles.skills__section}>
//       <h1 className={styles.skills__h1}>Skills</h1>
//       <div className={styles.skills__btn__container}>
//         <div className={styles.view}>View</div>
//         <div>Chaos</div>
//         <button
//           aria-label="Chaos button"
//           className={styles.checkbox__btn}
//         ></button>
//         <div>Readable</div>
//         <div
//           aria-label="Readable div"
//           className={styles.checkbox__btn}
//           onClick={handleMouseEnter} // Attach onMouseEnter handler
//           onMouseLeave={handleMouseLeave} // Attach onMouseLeave handler
//         ></div>
//       </div>
//       <motion.div className={styles.marquee__container}>
//         {rowData.map((row, rowIndex) => (
//           <div key={rowIndex} className={styles.rowWrapper}>
//             {[0, 1].map((duplicateIndex) => (
//               <div
//                 key={duplicateIndex}
//                 className={`${styles.row__container} ${
//                   row.direction === 1 && duplicateIndex === 1
//                     ? styles.leftNegative
//                     : ""
//                 }`}
//                 ref={(el) => {
//                   if (el && !rowRefs.current[rowIndex * 2 + duplicateIndex]) {
//                     rowRefs.current[rowIndex * 2 + duplicateIndex] = el;
//                   }
//                 }}
//               >
//                 {row.skills.map((skill, colIndex) => (
//                   <div
//                     key={colIndex}
//                     className={`${styles.column} ${
//                       styles[row.colors[colIndex]]
//                     }`}
//                     style={{
//                       width: `${row.widths[colIndex]}%`,
//                       color: ["black", "dark-grey", "dark-blue"].includes(
//                         row.colors[colIndex]
//                       )
//                         ? "#FFF"
//                         : "#171717",
//                     }}
//                   >
//                     {skill && (
//                       <div className={styles.centered__word}>{skill}</div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ))}
//       </motion.div>
//       {/* <motion.div
//         className={styles.readable__container}
//         // initial="initial"
//         // animate={activeButton === "readable" ? "animate" : "initial"}
//         // variants={containerReveal}
//       >
//         <div>Skills:</div>
//         <div>HTML</div>
//         <div>CSS</div>
//         <div>Javascript</div>
//       </motion.div> */}

//       {/* Render "Hello" div based on hover status */}
//       {isHovered && <div className={styles.readable__container}>Hello</div>}
//     </section>
//   );
// };
