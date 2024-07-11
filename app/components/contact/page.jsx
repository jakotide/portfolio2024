import styles from "./contact.module.scss";
import { useCursor } from "../context/cursorContext/page";
import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useScrollProvider } from "../context";

export const Contact = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const ref = useRef(null);
  const contactInView = useInView(ref, { threshold: 0.1 });
  const { updateNavStyle, resetNavStyle } = useScrollProvider();

  useEffect(() => {
    if (contactInView) {
      resetNavStyle();
    } else {
      updateNavStyle();
    }
  }, [contactInView, updateNavStyle, resetNavStyle]);

  return (
    <section className={styles.contact__section}>
      <div className={styles.contact__grid}>
        <div className={`${styles.box} ${styles.box__line__side}`}></div>
        <div className={`${styles.box} ${styles.box__line}`}></div>
        <div className={`${styles.box} ${styles.box__1}`}></div>
        <div className={`${styles.box} ${styles.box__2}`}></div>
        <div className={`${styles.box} ${styles.box__3}`}></div>
        <div className={`${styles.box} ${styles.box__4}`}>
          <h1 className={styles.contact__h1}>Contact</h1>
        </div>
        <div className={`${styles.box} ${styles.box__5}`}></div>
        <div className={`${styles.box} ${styles.box__6}`}>
          <form action="" className={styles.contact__form}>
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" />
            <label htmlFor="name">Email*</label>
            <input type="text" id="email" />
            <label htmlFor="name">Your Message*</label>
            <textarea name="message" id="message"></textarea>
            <div
              typeof="submit"
              className={styles.send__btn}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              ref={ref}
            >
              Send
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
