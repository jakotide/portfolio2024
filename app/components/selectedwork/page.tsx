import React, { useEffect, useRef } from "react";
import styles from "./selectedwork.module.scss";
import { useInView, motion } from "framer-motion";
import { SelectedCard } from "../ui/";
import { cardData1, cardData2 } from "../ui/selectedcard/cardData";
import { projects } from "../project/projectData";
import { BlurReveal, TransitionLink } from "../effects/index";
import { useScrollProvider } from "../context/scrollContext/page";

interface SelectedWorkProps {
  id: string;
  isInView: boolean;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ id }) => {
  const ref = useRef(null);
  const selectedRef = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  // const selectedInView = useInView(selectedRef, {
  //   margin: "500px 0px 0px 0px",
  // });
  // const { updateBgColor, bgColor } = useScrollProvider();

  // useEffect(() => {
  //   if (selectedInView) {
  //     updateBgColor("#f9f7e8");

  //     console.log("SELECTED");
  //   }
  // }, [selectedInView]);

  return (
    <section
      id={id}
      // className={`${styles.selected__container} ${
      //   bgColor === "black" ? styles.black : ""
      // }`}
      className={styles.selected__container}
    >
      <div className={styles.selected__content__container}>
        <BlurReveal isInView={isInView} duration={1} delay={0}>
          <motion.h1 className={styles.selected__h1} ref={ref}>
            <span>Selected</span>
            <div className={styles.flex}>
              <span className={styles.selected__work}>Work</span>
              <span className={styles.selected__amount}>(02)</span>
            </div>
          </motion.h1>
        </BlurReveal>
        <div className={styles.selected__projects__container}>
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              className={styles[`card__group__${index + 1}`]}
            >
              <TransitionLink
                key={project.id}
                href={`/project/${project.id}`}
                className={styles.transition__link}
              >
                <SelectedCard
                  key={project.id}
                  className={styles[`selected__card__${index + 1}`]}
                  videoSrc={
                    index === 0 ? cardData1.videoSrc : cardData2.videoSrc
                  }
                  projectTitle={
                    index === 0
                      ? cardData1.projectTitle
                      : cardData2.projectTitle
                  }
                  projectNumber={
                    index === 0
                      ? cardData1.projectNumber
                      : cardData2.projectNumber
                  }
                  projectType={
                    index === 0 ? cardData1.projectType : cardData2.projectType
                  }
                />
              </TransitionLink>
            </div>
          ))}
        </div>
        <div ref={selectedRef}></div>
      </div>
    </section>
  );
};
