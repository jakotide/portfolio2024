import React from "react";
import { moreCard } from "../../ui/morecard/cardData";
import Image from "next/image";
import styles from "./modalhover.module.scss";
import { motion } from "framer-motion";

interface ModalHoverProps {
  modal: { active: boolean; index: number };
}

// const scaleImage = {
//   initial: {
//     scale: 0,
//   },
//   animate: {
//     scale: 1,
//     transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//   },
// };

export const ModalHover: React.FC<ModalHoverProps> = ({ modal }) => {
  const { active, index } = modal;

  return (
    <motion.div
      // variants={scaleImage}
      // initial={"initial"}
      // animate={active ? "animate" : "closed"}
      className={styles.modal__container}
    >
      <div
        style={{ top: modal.index * -100 + "%" }}
        className={styles.modal__slider}
      >
        {moreCard.map((card, i) => {
          const { imageSrc, imageAlt } = card;
          return (
            <div key={i} className={styles.modal}>
              <Image
                src={imageSrc}
                width={500}
                height={650}
                alt={imageAlt}
                quality={100}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
