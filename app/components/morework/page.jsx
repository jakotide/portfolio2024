import styles from "./morework.module.scss";
import {
  useScroll,
  useTransform,
  motion,
  useAnimationControls,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export const MoreWork = () => {
  const container = useRef(null);
  // const controls = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["-300px end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.5], [0, 90]);
  // const scale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  // useEffect(() => {
  //   scrollYProgress.onChange((progress) => {
  //     if (progress > 0.1) {
  //       controls.start("visible");
  //       console.log("hello");
  //     } else if (progress < 0.3) {
  //       controls.start("hidden");
  //     }
  //   });
  // }, [scrollYProgress, controls]);

  // const fadeIn = {
  //   hidden: { opacity: 0, filter: "blur(20px)" },
  //   visible: { opacity: 1, filter: "blur(0)" },
  // };

  return (
    <div className={styles.test} ref={container}>
      <motion.div className={styles.circle__cont} style={{ height }}>
        <div className={styles.circle}></div>
      </motion.div>
      <motion.section
        className={styles.more__section}
        // style={{ scale }}
        // ref={container}
      >
        {/* <div className={styles.circle__cont}>
          <div className={styles.circle}></div>
        </div> */}
        {/* <div className={styles.radial__gradient}></div> */}
        <motion.div
          className={styles.more__content}
          // variants={fadeIn}
          // animate={controls}
          // initial="hidden"
          // transition={{ duration: 0.5 }}
        >
          <h1 className={styles.more__h1}>More Projects</h1>
        </motion.div>
      </motion.section>
    </div>
  );
};
