import styles from "./linetransition.module.scss";
import React from "react";

export const LineTransition = () => {
  return (
    <div className={styles.red__line__container}>
      <div className={`${styles.red__line} ${styles.line__1}`}></div>
      <div className={`${styles.red__line} ${styles.line__2}`}></div>
      <div className={`${styles.red__line} ${styles.line__3}`}></div>
      <div className={`${styles.red__line} ${styles.line__4}`}></div>
      <div className={`${styles.red__line} ${styles.line__5}`}></div>
      <div className={`${styles.red__line} ${styles.line__6}`}></div>
      <div className={`${styles.red__line} ${styles.line__7}`}></div>
    </div>
  );
};
