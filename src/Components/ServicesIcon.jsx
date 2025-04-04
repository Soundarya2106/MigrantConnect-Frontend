import React from "react";
import styles from "../DesignFiles/ServicesContainer.module.css";

const ServiceIcon = ({ svgContent, className }) => {
  return (
    <div className={`${styles.serviceIconContainer} ${className}`}>
      <div className={styles.serviceIcon} dangerouslySetInnerHTML={{ __html: svgContent }} />
    </div>
  );
};

export default ServiceIcon;
