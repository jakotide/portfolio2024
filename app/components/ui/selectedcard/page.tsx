import React from "react";
import styles from "./selectedcard.module.scss";

interface SelectedCardProps {
  className?: string;
  videoSrc: string;
  projectTitle: string;
  projectType: string;
  projectNumber: string;
}

export const SelectedCard: React.FC<SelectedCardProps> = ({
  className,
  videoSrc,
  projectTitle,
  projectType,
  projectNumber,
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
        <div className={styles.selected__number__container}>
          <span className={styles.selected__number}>{projectNumber}</span>
          <div className={styles.selected__type}>{projectType}</div>
        </div>
        <div className={styles.selected__project__title}>{projectTitle}</div>
      </div>
    </div>
  );
};
