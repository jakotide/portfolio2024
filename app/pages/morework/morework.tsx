"use client";
import styles from "./morework.module.scss";
import { motion, useInView, useTransform, useMotionValue } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { moreCard } from "../../components/ui/morecard/cardData";
import { MoreCard, MoreCardMobile } from "../../components/ui";
import {
  ModalHover,
  BlurReveal,
  TransitionLink,
} from "../../components/effects";
import { useMediaQuery } from "../../components/hooks";

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
  const [windowHeight, setWindowHeight] = useState(1000);

  const scale = useTransform(
    scrollYProgress,
    [0, 250 / windowHeight],
    [0.9, 1]
  );

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <motion.section className={styles.more__section} id={id} style={{ scale }}>
      <div className={styles.noise__container__white}></div>
      <motion.div className={styles.more__content}>
        <BlurReveal isInView={isInView} duration={1.2} delay={0}>
          <h1
            ref={ref}
            className={styles.more__h1}
            aria-label="More Projects (03)"
          >
            <span className={styles.more__word}>More</span>
            <div className={styles.flex}>
              <div className={styles.projects__word}>Projects</div>
              <span className={styles.more__amount}>(03)</span>
            </div>
          </h1>
        </BlurReveal>

        {isTabletL ? (
          <div className={styles.mobile__card__container}>
            {moreCard.map((card, i) => (
              <TransitionLink
                href={`/project/${card.id}`}
                key={card.cardNumber}
                className={styles.more__card__link}
              >
                <MoreCardMobile
                  key={i}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  projectTitle={card.projectTitle}
                  projectType={card.projectType}
                  description={card.description}
                  cardNumber={card.cardNumber}
                />
              </TransitionLink>
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
