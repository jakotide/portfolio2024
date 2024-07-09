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
import { useCursor } from "../../context/cursorContext/page";

export const Navigation = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();

  return (
    <motion.nav
      variants={navReveal}
      initial="initial"
      animate="animate"
      className={styles.nav}
    >
      <div>tidemand_folio2024</div>
      <menu className={styles.nav__menu}>
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
