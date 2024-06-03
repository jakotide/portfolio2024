import React from "react";
import styles from "./selectedcard.module.scss";
import Image from "next/image";

interface selectedCardProps {
  imageSrc: string;
  number: string;
  type: string;
  title: string;
  description: string;
  className?: string;
}

export const SelectedCard: React.FC<selectedCardProps> = ({
  imageSrc,
  number,
  type,
  title,
  description,
  className,
}) => {
  return (
    <div className={`${styles.selected__card__container} ${className}`}>
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={500}
        className={styles.selected__image}
      />
      <div>
        <div>{number}</div>
        <div>{type}</div>
      </div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
