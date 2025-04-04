"use client";
import Header from "../UserRightsAndResponsibilities/Header";
import ReportIcon from "../assets/reportIcon.png";
import styles from "../ReportIssue/ReportIssue.module.css";
import React from "react";

const ReportIssue2 = () => {
  // Sample issue details (Replace with dynamic data)
  const issueDetails = {
    id: "#123456",
    title: "Unsafe Working Condition",
    status: "Submitted / Under Review",
    submittedOn: "22-01-2025",
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header title="Report an Issue" icon={ReportIcon} />
          <p className={styles.subtitle}>
            "Track the progress of your reported issues in real time. Stay
            updated on status changes, resolutions, and any required actions."
          </p>
        </div>

        <div className={styles.ackContainer}>
          <div className={styles.ackBox}>
            <h2 className={styles.ackTitle}>Issue Submitted Successfully</h2>

            <div className={styles.ackContent}>
              <p>
                <span>🔹 Issue ID:</span> {issueDetails.id}
              </p>
              <p>
                <span>🔹 Issue Title:</span> {issueDetails.title}
              </p>
              <p>
                <span>🔹 Status:</span> {issueDetails.status}
              </p>
              <p>
                <span>🔹 Submitted On:</span> {issueDetails.submittedOn}
              </p>
            </div>

            <div className={styles.ackLinks}>
              <a href="/homePageContainer" className={styles.ackLink}>
                Back to Home
              </a>
              <span className={styles.divider}>|</span>
              <a href="/trackpage" className={styles.ackLink}>
                Track Report Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportIssue2;
