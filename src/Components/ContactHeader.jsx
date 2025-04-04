import React from "react";
import styles from "../DesignFiles/ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.contentColumn}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Contact Us - We're Here to Help!</h1>
          <p className={styles.description}>
            Need assistance? Have questions? Get in touch with us anytime. We
            are here to support and guide you.
          </p>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0bb60ef7b102f7d2f4322a55650a057c8d0f3e99ff3dfd6a23fd09968609d6?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
          alt="Contact support illustration"
          className={styles.headerImage}
        />
      </div>
    </header>
  );
};

export default ContactHeader;
