import styles from "./contact.module.scss";

import React from "react";

export const Contact = () => {
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
            <div typeof="submit" className={styles.send__btn}>
              Send
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
