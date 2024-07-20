import styles from "./about.module.scss";
import Image from "next/image";
import React, { useRef } from "react";
import { BlurReveal } from "../effects";
import { useInView, motion } from "framer-motion";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.about__container}>
      <div className={styles.about__content}>
        <div className={styles.about__left}>
          <BlurReveal isInView={isInView}>
            <h1 className={styles.about__h1} ref={ref}>
              <span className={styles.a__little}>A Little</span>
              <div className={styles.about__me}>About Me</div>
            </h1>
          </BlurReveal>

          <Image
            src="/images/cvbilde.jpg"
            width={500}
            height={450}
            alt="Of me"
            className={styles.about__image}
          />
        </div>
        <div className={styles.about__right}>
          <div>
            Hello! I'm Jakob. A front-end developer and a generally geeky dude
            who loves <span className={styles.bg__orangeIsh}>creativity</span>{" "}
            and design.
          </div>
          <div>
            I am currently working as a freelance web developer. I love
            designing websites with a beautiful and solid{" "}
            <span className={styles.bg__blue}>user experience.</span>
          </div>
          <div>
            Whether you're looking for a sleek and modern design, a vibrant and
            dynamic interface, or a classic and timeless look, I am dedicated to
            bringing your <span className={styles.bg__green}>vision</span> to
            life. Let's work together to create something exceptional that
            resonates with your audience and stands out in the digital
            landscape.
          </div>
        </div>
      </div>
    </section>
  );
};
