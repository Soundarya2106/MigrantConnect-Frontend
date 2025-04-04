import React from "react";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";

const RightItem = ({ icon, title, details }) => {
  return (
    <article className={styles.rightItem}>
      <i className={`ti-${icon} ${styles.i}`} />
      <div>
        <h6 className={styles.rightTitle}>{title}</h6>
        <div className={styles.rightDetails}>
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <span>{detail}</span>
              {index < details.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};

export default RightItem;
