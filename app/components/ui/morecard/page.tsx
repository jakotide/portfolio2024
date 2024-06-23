import styles from "./morecard.module.scss";
import Image from "next/image";
import React from "react";

interface MoreCardProps {
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
}

export const MoreCard: React.FC<MoreCardProps> = ({
  imageSrc,
  imageAlt,
  cardNumber,
  projectTitle,
  description,
  projectType,
}) => {
  return (
    <div className={styles.morecard__container}>
      <div className={styles.number__container}>
        <div className={styles.card__number}>{cardNumber}</div>
      </div>

      <div className={styles.card__content}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          className={styles.more__image}
        ></Image>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{projectTitle}</div>
          <div className={styles.description__container}>
            <p className={styles.more__description}>{description}</p>
            <div>{projectType}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
