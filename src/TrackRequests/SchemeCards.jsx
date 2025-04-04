import React from "react";
import styles from "./Cards.module.css";

const SchemeCard = ({ id, name, appliedDate, status, progress }) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.schemeIcon}>📜</span> Scheme ID: #{id}
      </div>
      <div className={styles.details}>
        <p>
          <strong>Scheme Name:</strong> {name}
        </p>
        <p>
          <strong>Applied Date:</strong> {appliedDate}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Progress:</strong>
        </p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SchemeCard;
