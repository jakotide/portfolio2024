import React from "react";
import styles from "./selectedcard.module.scss";

interface SelectedCardProps {
  className?: string;
  videoSrc: string;
  projectTitle: string;
  projectType: string;
  projectNumber: string;
  isCircleInView: boolean;
}

export const SelectedCard: React.FC<SelectedCardProps> = ({
  className,
  videoSrc,
  projectTitle,
  projectType,
  projectNumber,
  isCircleInView,
}) => {
  return (
    <div className={`${styles.selected__card} ${className}`}>
      <div className={styles.selected__image}>
        <video
          className={styles.selected__video}
          src={videoSrc}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={styles.selected__card__info}>
        <div
          className={`${styles.selected__number__container} ${
            isCircleInView ? styles.moreColorNumb : ""
          }`}
        >
          <span className={styles.selected__number}>{projectNumber}</span>
          <div className={styles.selected__type}>{projectType}</div>
        </div>
        <div
          className={`${styles.selected__project__title} ${
            isCircleInView ? styles.moreColor : ""
          }`}
        >
          {projectTitle}
        </div>
      </div>
    </div>
  );
};
