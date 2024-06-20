import styles from "./morework.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import React from "react";

export const MoreWork = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "200% start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.27], ["50%", "100%"]);
  return (
    <motion.section
      className={styles.more__section}
      style={{ width }}
      ref={container}
    >
      <div className={styles.more__content}>
        <h1 className={styles.more__h1}>More Projects</h1>
      </div>
    </motion.section>
  );
};
