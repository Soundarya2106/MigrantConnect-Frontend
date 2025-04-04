import React from "react";
import styles from "../DesignFiles/ServicesContainer.module.css";
import ServiceIcon from "../Components/ServicesIcon";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceContent}>
        <ServiceIcon svgContent={icon} className="iconstyle"/>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
