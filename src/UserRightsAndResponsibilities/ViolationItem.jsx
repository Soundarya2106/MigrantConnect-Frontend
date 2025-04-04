import React from "react";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";

const ViolationItem = ({ title, details }) => {
  return (
    <article className={styles.violationItem}>
      <div className={styles.vvitem}>
        <h6><b>{title}</b></h6>
        <div className={styles.vitem}>
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

export default ViolationItem;
