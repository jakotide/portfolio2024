import styles from "./morecardmobile.module.scss";
import React from "react";
import { useScrollProvider } from "../../context";

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
  const { bgColor } = useScrollProvider();

  return (
    <div
      className={styles.mobile__card}
      style={bgColor === "#171717" ? { color: "white" } : { color: "#171717" }}
    >
      <img src={imageSrc} alt={imageAlt} className={styles.mobile__card__img} />
      <div className={styles.mobile__card__info}>
        <div className={styles.mobile__card__number}>{cardNumber}</div>
        <div className={styles.mobile__card__title}>{projectTitle}</div>
      </div>
      <div className={styles.mobile__card__type}>{projectType}</div>
      <div className={styles.mobile__card__desc}>{description}</div>
      <div>View more</div>
      <div
        className={styles.mobile__card__border}
        style={
          bgColor === "#171717"
            ? { border: "1px solid #e57066" }
            : { border: "1px solid #62bfad" }
        }
      ></div>
    </div>
  );
};
