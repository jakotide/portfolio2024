import styles from "./footer.module.scss";

import React from "react";

export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.noise__container}></div>
      <div className={styles.footer__content}>
        <div>
          <div>Available for employment and </div>
          <div>freelance opportunities</div>
          <div>Feel free to send my a message</div>
        </div>
        <div className={styles.footer__left__tablet}>
          <div>Somewhere in Oslo</div>
          <div>tidemand.dev@gmail.com</div>
          <div>+47 47864047</div>
        </div>
        <div>
          <div>LinkedIn</div>
          <div>Instagram</div>
        </div>
        <div className={styles.footer__left__tablet}>
          <div>Developed/Designed by:</div>
          <div>Jakob Tidemand</div>
          <div>&copy;2024</div>
        </div>
      </div>
    </footer>
  );
};
