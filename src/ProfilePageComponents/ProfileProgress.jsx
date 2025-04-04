import React from "react";
import styles from "../ProfilePageDesignFiles/ProfileProgress.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const ProfileProgress = () => {
  // Profile completion data
  const profileData = [
    { label: "Basic Information", completed: 4, total: 4 },
    { label: "Address Details", completed: 3, total: 3 },
    { label: "Work Information", completed: 3, total: 4 },
    { label: "Bank Details", completed: 3, total: 3 },
    { label: "Document Upload", completed: 4, total: 6 },
    { label: "Family Details", completed: 2, total: 2 },
    { label: "Emergency Contact", completed: 1, total: 2 },
  ];

  // Calculate completion percentage
  const totalFields = profileData.reduce((sum, item) => sum + item.total, 0);
  const completedFields = profileData.reduce(
    (sum, item) => sum + item.completed,
    0
  );
  const completionPercentage = Math.round((completedFields / totalFields) * 100);

  return (
    <div className={styles.progressContainer}>
      {/* Progress Circle */}
      <div className={styles.progressCircle}>
        <CircularProgressbar
          value={completionPercentage}
          text={`${completionPercentage}%`}
          className={styles.percentageText}
          styles={buildStyles({
            pathColor: "#4CAF50",
            textColor: "#000",
            trailColor: "#ddd",
            textSize: "22px",
          })}
        />
        <p className={styles.completeText}>Complete</p>
      </div>

      {/* Profile Section List */}
      <ul className={styles.progressList}>
        {profileData.map((item, index) => {
          const isComplete = item.completed === item.total;
          return (
            <li key={index} className={styles.progressItem}>
              <span className={isComplete ? styles.completedIcon : styles.incompleteIcon}>
                {isComplete ? <FaCheckCircle /> : <FaClock />}
              </span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.count}>{`${item.completed}/${item.total}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileProgress;
