import React from "react";
import styles from "./MainTitle.module.css";

function MainTitle({ title, subTitle }) {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
      <div className={styles.virticleLine}></div>
      <div className={styles.circle}></div>
    </div>
  );
}

export default MainTitle;
