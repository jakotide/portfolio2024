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
  setModal: (modalState: { active: boolean; index: number }) => void;
  index: number;
}

export const MoreCard: React.FC<MoreCardProps> = ({
  imageSrc,
  imageAlt,
  cardNumber,
  projectTitle,
  description,
  projectType,
  setModal,
  index,
}) => {
  return (
    <div
      className={styles.morecard__container}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <div className={styles.number__container}>
        <div className={styles.card__number}>
          0<span>{cardNumber}</span>
        </div>
      </div>

      <div className={styles.card__content}>
        <div className={styles.more__image}></div>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{projectTitle}</div>
          <div className={styles.description__container}>
            <p className={styles.more__description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
