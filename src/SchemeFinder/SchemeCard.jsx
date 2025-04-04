import React from "react";
import styles from "./SchemeFinder.module.css";

const SchemeCard = ({ title, eligibility, deadline, description }) => {
  return (
    <div className={styles.schemeCard}>
      <div className={styles.schemeHeader}>{title}</div>

      <div className={styles.schemeContent}>
        <p className={styles.schemeEligibility}>
          <span className={styles.schemeIcon}>✅</span>
          <strong>Eligibility:</strong>
        </p>
        <ul className={styles.schemeList}>
          {eligibility.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className={styles.schemeDeadline}>
          <span className={styles.schemeIcon}>📌</span>
          <strong>Application Deadline:</strong> {deadline}
        </p>

        <p className={styles.schemeDescription}>
          <strong>📄 Brief Description:</strong> {description}
        </p>
      </div>

      <div className={styles.schemeButtonContainer}>
        <button className={styles.schemeApplyButton}>Apply Now</button>
      </div>
    </div>
  );
};

export default SchemeCard;
