import React, { useRef } from "react";
import styles from "./selectedwork.module.scss";
import { useInView, motion } from "framer-motion";
import { revealh1 } from "./anim";
import { SelectedCard } from "../ui/";
import { cardData1, cardData2 } from "../ui/selectedcard/cardData";

export const SelectedWork: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section className={styles.selected__container}>
      <div className={styles.selected__content__container}>
        <motion.h1
          className={styles.selected__h1}
          ref={ref}
          variants={revealh1}
          initial="initial"
          animate={isInView ? "animate" : ""}
        >
          <span>Selected</span>
          <div className={styles.flex}>
            <span className={styles.selected__work}>Work</span>
            <span className={styles.selected__amount}>(02)</span>
          </div>
        </motion.h1>
        <div className={styles.selected__projects__container}>
          <SelectedCard
            className={styles.selected__card__1}
            videoSrc={cardData1.videoSrc}
            projectTitle={cardData1.projectTitle}
            projectNumber={cardData1.projectNumber}
            projectType={cardData1.projectType}
          />
          <SelectedCard
            className={styles.selected__card__2}
            videoSrc={cardData2.videoSrc}
            projectTitle={cardData2.projectTitle}
            projectNumber={cardData2.projectNumber}
            projectType={cardData2.projectType}
          />
        </div>

        <div className={styles.spacer}></div>
      </div>
    </section>
  );
};
