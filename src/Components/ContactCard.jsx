import React from "react";
import styles from "../DesignFiles/ContactCard.module.css";

const ContactCard = ({ icon, title, description, contactInfo, type }) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={`${title} icon`} className={styles.icon} />
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {type === "phone" ? (
        <a href={`tel:${contactInfo}`} className={styles.contactInfo}>
          {contactInfo}
        </a>
      ) : (
        <a href={`mailto:${contactInfo}`} className={styles.contactInfo}>
          {contactInfo}
        </a>
      )}
    </article>
  );
};

export default ContactCard;
