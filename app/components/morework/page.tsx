import styles from "./morework.module.scss";
import {
  useScroll,
  useTransform,
  motion,
  useAnimation,
  LayoutGroup,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { MoreCardData, moreCard } from "../ui/morecard/cardData";
import { MoreCard } from "../ui";
import { ModalHover } from "../effects/modalHover/page";
import { LineTransition } from "../effects/linesTransition/page";

interface MoreWorkProps {
  setIsCircleInView: (isInView: boolean) => void;
}

export const MoreWork: React.FC<MoreWorkProps> = ({ setIsCircleInView }) => {
  const container = useRef(null);
  const circleRef = useRef(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["-300px end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.5], [0, 90]);

  const circleYProgress = useScroll({
    target: circleRef,
    offset: ["-500px center", "end center"],
  }).scrollYProgress;

  useEffect(() => {
    const handleChange = (latest: number) => {
      if (latest > 0.5) {
        setIsCircleInView(true);
      } else {
        setIsCircleInView(false);
      }
    };

    const unsubscribe = circleYProgress.on("change", handleChange);

    return () => {
      unsubscribe();
    };
  }, [circleYProgress, setIsCircleInView]);

  return (
    <div className={styles.more__outer} ref={container}>
      <motion.div className={styles.circle__cont} style={{ height }}>
        <div className={styles.circle} ref={circleRef}></div>
      </motion.div>
      <motion.section className={styles.more__section}>
        <motion.div className={styles.more__content}>
          <h1 className={styles.more__h1}>More Projects</h1>
          <div className={styles.more__flex__container}>
            <div className={styles.hover__container}>
              <ModalHover modal={modal}></ModalHover>
            </div>
            <div className={styles.more__card__container}>
              {moreCard.map((card, i) => (
                <MoreCard
                  key={i}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  projectTitle={card.projectTitle}
                  projectType={card.projectType}
                  description={card.description}
                  cardNumber={card.cardNumber}
                  setModal={setModal}
                  index={i}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <LineTransition />
      </motion.section>
    </div>
  );
};
