import React from "react";
import styles from "./selectedcard.module.scss";
import { useCursor, useScrollProvider } from "../../context/";

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
  const { handleSelectedHoverCard, handleHoverEnd } = useCursor();
  const { bgColor } = useScrollProvider();

  return (
    <div
      className={`${styles.selected__card} ${className}`}
      onMouseEnter={handleSelectedHoverCard}
      onMouseLeave={handleHoverEnd}
      onClick={handleHoverEnd}
    >
      <video
        className={styles.selected__video}
        src={videoSrc}
        autoPlay
        muted
        loop
      ></video>

      <div
        className={styles.selected__card__info}
        style={
          bgColor === "#171717" ? { color: "white" } : { color: "#171717" }
        }
      >
        <div
          className={styles.selected__number__container}
          style={
            bgColor === "#171717" ? { color: "white" } : { color: "#5f5f5f" }
          }
        >
          <span className={styles.selected__number}>{projectNumber}</span>
          <div className={styles.selected__type}>{projectType}</div>
        </div>
        <div className={styles.selected__project__title}>{projectTitle}</div>
        <div
          className={styles.view__more__btn}
          style={
            bgColor === "#171717" ? { color: "white" } : { color: "#171717" }
          }
        >
          View more
        </div>
      </div>
    </div>
  );
};
