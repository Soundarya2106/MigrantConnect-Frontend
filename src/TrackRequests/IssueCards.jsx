import React from "react";
import styles from "./Cards.module.css";

const IssueCard = ({ id, date, submittedDate, status, progress }) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.alertIcon}>⚠️</span> Issue ID: #{id}
      </div>
      <div className={styles.details}>
        <p>
          <strong>Issue Date:</strong> {date}
        </p>
        <p>
          <strong>Submitted Date:</strong> {submittedDate}
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

export default IssueCard;
