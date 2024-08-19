import styles from "./about.module.scss";
import Image from "next/image";
import React, { useRef } from "react";
import { BlurReveal } from "../effects";
import { useInView, motion } from "framer-motion";
import { useMediaQuery } from "../hooks";

interface AboutProps {
  id?: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobileL = useMediaQuery("(max-width: 560px)");

  return (
    <section className={styles.about__container} id={id}>
      <div className={styles.noise__container__white}></div>
      <div className={styles.about__content}>
        <div className={styles.about__left}>
          <BlurReveal isInView={isInView} delay={0} duration={1.2}>
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
          <div className={styles.quote}>
            Hello! I'm Jakob. A front-end developer and a generally geeky dude
            who loves <span className={styles.bg__orangeIsh}>creativity</span>{" "}
            and design.
          </div>
          <div>
            I am currently working as a freelance web developer. I love
            designing websites with a beautiful and solid user{" "}
            <span className={styles.bg__green}>experience.</span>
          </div>
          <div>
            Whether you're looking for a sleek and modern design, a vibrant and
            dynamic interface, or a classic and timeless look, I am dedicated to
            bringing your <span className={styles.bg__yellow}>vision</span> to
            life.
          </div>
          <div>
            If I am not coding you will probably find me produce music, play the
            guitar or scavenge the internet for{" "}
            <span className={styles.bg__blue}>inspiration.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
