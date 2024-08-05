import styles from "./morecardmobile.module.scss";
import React from "react";

interface MoreCardMobileProps {
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
}

export const MoreCardMobile: React.FC<MoreCardMobileProps> = ({
  imageSrc,
  imageAlt,
  cardNumber,
  projectTitle,
  description,
  projectType,
}) => {
  return (
    <div className={styles.mobile__card}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.mobile__card__image}
      />
      <div className={styles.mobile__card__info}>
        <div className={styles.mobile__card__number}>{cardNumber}</div>
        <div className={styles.mobile__card__title}>{projectTitle}</div>
      </div>
      <div className={styles.mobile__card__type}>{projectType}</div>
      <div className={styles.mobile__card__desc}>{description}</div>
      <div className={styles.mobile__card__border}></div>
    </div>
  );
};
