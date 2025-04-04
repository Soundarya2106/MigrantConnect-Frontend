import React from "react";
import styles from "../ProfilePageDesignFiles/DetailsCard.module.css";

const DetailsCard = ({ title, details }) => {
  return (
    <section className={styles.detailCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.detailsGrid}>
        {details.map((detail, index) => {
          const isFile = detail.value.match(/\.(pdf)$/i);
          return (
            <div key={index} className={styles.detailItem}>
              <span className={styles.label}>{detail.label}</span>
              
              {/* Show "Tap to View" button for files */}
              {isFile ? (
                <div className={styles.fileContainer}>
                  <span className={styles.fileName}>{detail.value}</span>
                  <button
                    className={styles.viewButton}
                  >
                    Tap to View
                  </button>
                </div>
              ) : (
                <span className={styles.value}>{detail.value}</span>
              )}
            </div>
          );
        })}
      </div>
      <button className={styles.editButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a344e868334df6e7062b52cdbde21ff95aa08c2bd775a3c742d017aefbb4627c?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
          alt="Edit"
          className={styles.editIcon}
        />
        <span>Edit</span>
      </button>
    </section>
  );
};

export default DetailsCard;
