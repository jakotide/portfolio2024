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
  width?: number;
  height?: number;
}

export const SelectedCard: React.FC<selectedCardProps> = ({
  imageSrc,
  number,
  type,
  title,
  description,
  className,
  width = 300,
  height = 500,
}) => {
  return (
    <div className={`${styles.selected__card__container} ${className}`}>
      <Image
        src={imageSrc}
        alt={title}
        width={width}
        height={height}
        className={styles.selected__image}
        layout="responsive"
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
