import React, { useRef, useEffect } from "react";
import styles from "./selectedwork.module.scss";
import { SelectedCard } from "../ui/selectedcard/page";
// import { cardData } from "../ui/selectedcard/data";
import { useInView, motion } from "framer-motion";
import { revealh1 } from "./anim";
import ferdImage from "../../../public/images/ferdsss.jpg";
import Image from "next/image";

export const SelectedWork: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // margin: "0px 0px 50% 0px",
  });

  return (
    <section className={styles.selected__container}>
      <div className={styles.selected__content__container}>
        <motion.h1
          className={styles.selected__h1}
          ref={ref}
          variants={revealh1}
          initial="initial"
          animate={isInView ? "animate" : ""}
        >
          <span>Selected</span>
          <div className={styles.flex}>
            <span className={styles.selected__work}>Work</span>
            <span className={styles.selected__amount}>(02)</span>
          </div>
        </motion.h1>

        {/* <div className={styles.selected__card__container}>
          <SelectedCard />
        </div> */}

        <div>
          <div></div>
          <Image
            src={ferdImage}
            alt="Ferd image"
            className={styles.selected__image__1}
          />
        </div>
      </div>
    </section>
  );
};
