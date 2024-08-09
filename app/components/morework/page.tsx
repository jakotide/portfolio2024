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
  id: string;
}

export const MoreWork: React.FC<MoreWorkProps> = ({ id }) => {
  const [modal, setModal] = useState({ active: true, index: 0 });
  const { updateBgColor, bgColor } = useScrollProvider();
  const ref = useRef(null);
  const moreRef = useRef(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [shouldRevert, setShouldRevert] = useState(false);
  const isInView = useInView(ref, { once: true });
  const isTabletL = useMediaQuery("(max-width: 960px)");

  // const moreInView = useInView(moreRef, {
  //   amount: 0.2, // 20% of the element is in view
  //   once: false, // Allow the element to trigger the in-view event multiple times
  // });

  // useEffect(() => {
  //   if (moreInView) {
  //     if (!hasBeenInView) {
  //       setHasBeenInView(true);
  //     }
  //     updateBgColor("#171717"); // Color when the section is in view
  //     console.log("MORE");
  //   } else if (!moreInView && hasBeenInView) {
  //     // Only revert if scrolling back up and not further down
  //     updateBgColor("#f9f7e8"); // Revert color when scrolling back up past the section
  //     console.log("PRIMARY");
  //   }
  // }, [moreInView, hasBeenInView, updateBgColor]);

  return (
    <motion.section className={styles.more__section} id={id}>
      <motion.div className={styles.more__content}>
        <BlurReveal isInView={isInView} duration={1.2} delay={0}>
          <h1 ref={ref} className={styles.more__h1}>
            More Projects
          </h1>
        </BlurReveal>

        {isTabletL ? (
          <div className={styles.mobile__card__container} ref={moreRef}>
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
