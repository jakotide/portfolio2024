import React, { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./selectedcard.module.scss";

const clipPathValues = [
  "polygon(10% 0, 0 0, 0% 100%, 10% 100%)",
  "polygon(20% 0, 10% 0, 10% 100%, 20% 100%)",
  "polygon(30% 0, 20% 0, 20% 100%, 30% 100%)",
  "polygon(40% 0, 30% 0, 30% 100%, 40% 100%)",
  "polygon(50% 0, 40% 0, 40% 100%, 50% 100%)",
  "polygon(60% 0, 50% 0, 50% 100%, 60% 100%)",
  "polygon(70% 0, 60% 0, 60% 100%, 70% 100%)",
  "polygon(80% 0, 70% 0, 70% 100%, 80% 100%)",
  "polygon(90% 0, 80% 0, 80% 100%, 90% 100%)",
  "polygon(100% 0, 90% 0, 90% 100%, 100% 100%)",
];

export const SelectedCard = () => {
  useEffect(() => {
    setTimeout(() => {
      const masks = document.querySelectorAll(`.${styles.mask}`);
      masks.forEach((mask, index) => {
        gsap.to(mask, {
          clipPath: clipPathValues[index],
          duration: 1,
          delay: index * 0.1,
        });
      });
    }, 5000);
  }, []);

  return (
    <div className={styles.selected__card}>
      <h1>
        FSE<span>001</span>
      </h1>
      <div>description</div>
      <div>lang</div>
      <div>visit site</div>
      <div className={styles.card__img}>
        {clipPathValues.map((_, index) => (
          <div key={index} className={styles.mask}></div>
        ))}
      </div>
    </div>
  );
};
