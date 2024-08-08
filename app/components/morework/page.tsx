import styles from "./morework.module.scss";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { moreCard } from "../ui/morecard/cardData";
import { MoreCard, MoreCardMobile } from "../ui";
import { ModalHover, BlurReveal, TransitionLink } from "../effects/";
import { useScrollProvider } from "../context/scrollContext/page";
import { useMediaQuery } from "../hooks";

interface MoreWorkProps {
  updateNavStyle: boolean;
}

export const MoreWork: React.FC<MoreWorkProps> = ({}) => {
  const container = useRef(null);
  const [modal, setModal] = useState({ active: true, index: 0 });
  const { updateNavStyle, resetNavStyle } = useScrollProvider();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isTabletL = useMediaQuery("(max-width: 960px)");

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["-300px end", "end start"],
  // });

  // const height = useTransform(scrollYProgress, [0, 0.5], [0, 90]);

  // const circleYProgress = useScroll({
  //   target: circleRef,
  //   offset: ["-500px center", "end center"],
  // }).scrollYProgress;

  // useEffect(() => {
  //   const handleChange = (latest: number) => {
  //     if (latest > 0.5) {
  //       setIsCircleInView(true);
  //       updateNavStyle(true);
  //     } else {
  //       setIsCircleInView(false);
  //       resetNavStyle(false);
  //     }
  //   };

  //   const unsubscribe = circleYProgress.on("change", handleChange);

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [circleYProgress, setIsCircleInView]);

  return (
    <div className={styles.more__outer} ref={container}>
      {/* <motion.div className={styles.circle__cont} style={{ height }}>
        <div className={styles.circle} ref={circleRef}></div>
      </motion.div> */}
      <div></div>
      <motion.section className={styles.more__section}>
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
    </div>
  );
};
