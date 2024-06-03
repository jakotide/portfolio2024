import React from "react";
import styles from "./selectedwork.module.scss";
import { SelectedCard } from "../ui/selectedcard/page";
import { cardData, cardDataTwo } from "../ui/selectedcard/data";

export const SelectedWork: React.FC = () => {
  return (
    <section className={styles.selected__container}>
      <div className={styles.pattern__container}>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {/* Repeat as needed */}
      </div>
      <div className={styles.selected__block}></div>
      <div className={styles.selected__block__red}></div>
      <div className={styles.selected__content__container}>
        <div>
          <h1 className={styles.selected__h1}>
            <span>Selected</span>
            <span>Works</span>
          </h1>
          <div>
            <SelectedCard
              key={cardData.id}
              imageSrc={cardData.imageSrc}
              number={cardData.number}
              type={cardData.type}
              title={cardData.title}
              description={cardData.description}
              className={cardData.className}
            />
          </div>
        </div>
        <div>
          {" "}
          <SelectedCard
            key={cardDataTwo.id}
            imageSrc={cardDataTwo.imageSrc}
            number={cardDataTwo.number}
            type={cardDataTwo.type}
            title={cardDataTwo.title}
            description={cardDataTwo.description}
            className={cardDataTwo.className}
          />
        </div>
      </div>
    </section>
  );
};
