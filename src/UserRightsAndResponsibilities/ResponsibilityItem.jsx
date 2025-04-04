import React from "react";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";

const ResponsibilityItem = ({ title, details, prohibited, allowed }) => {
  return (
    <article className={styles.responsibilityItem}>
      <i className={`ti-check ${styles.i2}`} />
      <div>
        <h6 className={styles.responsibilityTitle}>{title}</h6>
        <div className={styles.responsibilityDetails}>
          {details &&
            details.map((detail, index) => (
              <React.Fragment key={index}>
                <span>{detail}</span>
                {index < details.length - 1 && <br />}
              </React.Fragment>
            ))}
          {prohibited && (
            <>
              <div className={styles.doNot}>Don'ts:</div>
              <ul className={styles.prohibitedList}>
                {prohibited.map((item, index) => (
                  <li key={index}>
                    <i className={`ti-x ${styles.i5}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          {allowed && (
            <>
              <div className={styles.do}>Do's:</div>
              <ul className={styles.allowedList}>
                {allowed.map((item, index) => (
                  <li key={index}>
                    <i className={`ti-check ${styles.i8}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default ResponsibilityItem;
