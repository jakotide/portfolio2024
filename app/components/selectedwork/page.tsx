import React from "react";
import styles from "./selectedwork.module.scss";
import { SelectedCard } from "../ui/selectedcard/page";
import { cardData } from "../ui/selectedcard/data";

export const SelectedWork: React.FC = () => {
  return (
    <section className={styles.selected__container}>
      {/* <div className={styles.pattern__container}>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
        </div>
      </div> */}
      <div className={styles.selected__block}></div>
      <div className={styles.selected__block__red}></div>
      <div className={styles.selected__content__container}>
        <h1 className={styles.selected__h1}>
          <span>Selected</span>
          <span>Work</span>
        </h1>
        <div className={styles.selected__card__container}>
          {cardData.map((card) => (
            <SelectedCard
              key={card.id}
              imageSrc={card.imageSrc}
              number={card.number}
              type={card.type}
              title={card.title}
              description={card.description}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
