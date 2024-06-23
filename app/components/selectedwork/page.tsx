import React, { useRef } from "react";
import styles from "./selectedwork.module.scss";
import { useInView, motion } from "framer-motion";
import { revealh1 } from "./anim";
import { SelectedCard } from "../ui/";
import { cardData1, cardData2 } from "../ui/selectedcard/cardData";

interface SelectedWorkProps {
  isCircleInView: boolean;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  isCircleInView,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      className={`${styles.selected__container} ${
        isCircleInView ? styles.moreBg : ""
      }`}
    >
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
            isCircleInView={isCircleInView}
          />
          <SelectedCard
            className={styles.selected__card__2}
            videoSrc={cardData2.videoSrc}
            projectTitle={cardData2.projectTitle}
            projectNumber={cardData2.projectNumber}
            projectType={cardData2.projectType}
            isCircleInView={isCircleInView}
          />
        </div>

        <div className={styles.spacer}></div>
      </div>
    </section>
  );
};
