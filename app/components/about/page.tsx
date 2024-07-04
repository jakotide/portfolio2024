import styles from "./about.module.scss";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className={styles.about__container}>
      <div className={styles.about__content}>
        <div className={styles.about__left}>
          <h1 className={styles.about__h1}>
            <span className={styles.a__little}>A Little</span>
            <div className={styles.about__me}>About Me</div>
          </h1>
          <Image
            src="/images/cvbilde.jpg"
            width={500}
            height={450}
            alt="Of me"
            className={styles.about__image}
          />
        </div>
        <div className={styles.about__right}>
          <p className={styles.about__intro}>
            Hello! I'm Jakob. A front-end development student at Noroff and a
            generally geeky dude who loves creativity and design.
          </p>
          <p className={styles.about__p1}>
            After five years of working in a kindergarten for children with
            special needs and initially aspiring to become a nurse, I had a
            change of heart and decided to study front-end development. The
            journey with code and design has been both fun and challenging, but
            I can confidently say I took the right descision. Other than coding
            and design, I enjoy cooking, playing the guitar, produce music and
            play video games.
          </p>
          <p className={styles.about__p2}>
            After five years of working in a kindergarten for children with
            special needs and initially aspiring to become a nurse, I had a
            change of heart and decided to study front-end development. The
            journey with code and design has been both fun and challenging, but
            I can confidently say I took the right descision. Other than coding
            and design, I enjoy cooking, playing the guitar, produce music and
            play video games.
          </p>
          <p className={styles.about__p2}>
            After five years of working in a kindergarten for children with
            special needs and initially aspiring to become a nurse, I had a
            change of heart and decided to study front-end development. The
            journey with code and design has been both fun and challenging, but
            I can confidently say I took the right descision. Other than coding
            and design, I enjoy cooking, playing the guitar, produce music and
            play video games.
          </p>
        </div>
      </div>
    </section>
  );
};
