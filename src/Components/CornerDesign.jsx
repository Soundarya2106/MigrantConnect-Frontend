import React from "react";
import styles from "../DesignFiles/ServicesContainer.module.css";

const CornerDesign = () => {
  return (
    <div className={styles.cornerDesign}>
      <div className={styles.cornertopLeft} />
      <div className={styles.cornerbottomLeft} />
      <div className={styles.cornerbottomRight} />
      <div className={styles.cornertopRight} />
    </div>
  );
};

export default CornerDesign;
