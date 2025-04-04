import React from "react";
import styles from "../DesignFiles/AboutSection.module.css";
import { PinIcon } from "../Components/PinIcon";

export function FlipCard({ type, image, altText, title, items }) {
  return (
    <article className={styles[`card${type}Card`]}>
      <div className={styles.cardInner}>
      <div className={styles.cardFront}>
        <img src={image} alt={altText} className={styles.cardImage} />
        <div className={styles.cardOverlay} />
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <div className={styles.cardBack}>
        <h3 className={styles.backTitle}>{title}</h3>
        <div className={styles.backContent}>
          {items.map((item, index) => (
            <div key={index} className={styles.contentItem}>
              <PinIcon />
              <p className={styles.itemText}>{item}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </article>
  );
}
