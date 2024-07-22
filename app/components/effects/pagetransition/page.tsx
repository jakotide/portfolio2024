// import styles from "./pagetransition.module.scss";
// import React, { useState, useEffect } from "react";
// import { useTransitionProvider } from "../../context";
// import { pageTransitionSlider } from "./anim";
// import { motion } from "framer-motion";

// export const PageTransition = () => {
//   const { transitionStage } = useTransitionProvider();
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setDimension({ width: window.innerWidth, height: window.innerHeight });
//   }, []);

//   const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
//     dimension.height
//   }  L0 0`;
//   const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

//   const curve = {
//     initial: {
//       d: targetPath,
//       height: 0,
//       transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
//     },
//     animate: {
//       d: initialPath,
//       // height: 0,
//       transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
//     },
//     exit: {
//       d: targetPath,
//       transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
//     },
//   };

//   return (
//     <motion.div
//       variants={pageTransitionSlider}
//       initial="initial"
//       animate={transitionStage}
//       className={styles.transition__container}
//     >
//       {/* <div className={styles.transition__text}>001</div> */}
//       <div className={styles.transition__boxes}>
//         <div className={styles.blue__box}></div>
//         <div className={styles.pink__box}></div>
//         <div className={styles.green__box}></div>
//       </div>
//       {dimension.height > 0 && (
//         <>
//           <svg className={styles.transition__curve}>
//             <motion.path
//               variants={curve}
//               initial="initial"
//               animate={transitionStage}
//               exit="exit"
//               fill="#1b66b1"
//             ></motion.path>
//           </svg>
//         </>
//       )}
//     </motion.div>
//   );
// };
import styles from "./pagetransition.module.scss";
import React, { useState, useEffect } from "react";
import { useTransitionProvider } from "../../context";
import { pageTransitionSlider } from "./anim";
import { motion } from "framer-motion";

export const PageTransition = () => {
  const { transitionStage } = useTransitionProvider();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${
    dimension.width / 2
  } 0 0 0 L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;

  const curve = {
    initial: {
      d: targetPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      d: initialPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={pageTransitionSlider}
      initial="initial"
      animate={transitionStage}
      className={`${styles.transition__container} ${styles[transitionStage]}`}
    >
      <div className={styles.transition__boxes}>
        <div className={styles.blue__box}></div>
        <div className={styles.pink__box}></div>
        <div className={styles.green__box}></div>
      </div>
      {dimension.height > 0 && (
        <>
          <svg className={styles.transition__curve}>
            <motion.path
              variants={curve}
              initial="initial"
              animate={transitionStage}
              exit="exit"
              fill="#1b66b1"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};
