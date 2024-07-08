import styles from "./footer.module.scss";

import React from "react";

export const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div>Developed/Designed by: Jakob Tidemand</div>
      <div>&copy;2024</div>
    </div>
  );
};
