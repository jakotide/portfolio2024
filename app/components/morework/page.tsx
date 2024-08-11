import styles from "./morework.module.scss";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { moreCard } from "../ui/morecard/cardData";
import { MoreCard, MoreCardMobile } from "../ui";
import { ModalHover, BlurReveal, TransitionLink } from "../effects/";
import { useMediaQuery } from "../hooks";

interface MoreWorkProps {
  updateNavStyle: boolean;
  id: string;
  scrollYProgress: any;
}

export const MoreWork: React.FC<MoreWorkProps> = ({ id, scrollYProgress }) => {
  const [modal, setModal] = useState({ active: true, index: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isTabletL = useMediaQuery("(max-width: 960px)");

  const scale = useTransform(
    scrollYProgress,
    [0, 250 / window.innerHeight],
    [0.5, 1]
  );
  // const rotate = useTransform(
  //   scrollYProgress,
  //   [0, 250 / window.innerHeight],
  //   [-40, 0]
  // );
  return (
    <motion.section className={styles.more__section} id={id} style={{ scale }}>
      <motion.div className={styles.more__content}>
        <BlurReveal isInView={isInView} duration={1.2} delay={0}>
          <h1 ref={ref} className={styles.more__h1}>
            More Projects
          </h1>
        </BlurReveal>

        {isTabletL ? (
          <div className={styles.mobile__card__container}>
            {moreCard.map((card, i) => (
              <MoreCardMobile
                key={i}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                projectTitle={card.projectTitle}
                projectType={card.projectType}
                description={card.description}
                cardNumber={card.cardNumber}
              />
            ))}
          </div>
        ) : (
          <div className={styles.more__flex__container}>
            <div className={styles.hover__container}>
              <ModalHover modal={modal}></ModalHover>
            </div>
            <div className={styles.more__card__container}>
              {moreCard.map((card, i) => (
                <TransitionLink
                  href={`/project/${card.id}`}
                  key={card.cardNumber}
                  className={styles.more__card__link}
                >
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
                    isActive={modal.active && modal.index === i}
                  />
                </TransitionLink>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};
