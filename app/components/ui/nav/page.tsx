// "use client";
// import styles from "./nav.module.scss";
// import { motion } from "framer-motion";
// import { navReveal } from "./anim.jsx";
// import React from "react";

// // interface NavProps {
// //   isCircleInView: boolean;
// // }

// export const Navigation: React.FC = () => {
//   return (
//     <motion.nav
//       variants={navReveal}
//       initial="initial"
//       animate="animate"
//       className={`${styles.nav}`}
//     >
//       <div>tidemand_folio2024</div>

//       <menu className={styles.nav__menu}>
//         <li>works</li>
//         <li>about</li>
//         <li>contact</li>
//       </menu>
//     </motion.nav>
//   );
// };
"use client";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { navReveal } from "./anim.jsx";
import React from "react";
import { useCursor, useScrollProvider } from "../../context/";

export const Navigation = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const { navStyle } = useScrollProvider();
  return (
    <motion.nav
      variants={navReveal}
      initial="initial"
      animate="animate"
      className={styles.nav}
    >
      <div
        style={navStyle ? { color: "white" } : { color: "black" }}
        className={styles.nav__left}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        tidemand_folio2024
      </div>
      <menu
        className={styles.nav__menu}
        style={navStyle ? { color: "white" } : { color: "black" }}
      >
        <li onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
          works
        </li>
        <li onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
          about
        </li>
        <li onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
          contact
        </li>
      </menu>
    </motion.nav>
  );
};
