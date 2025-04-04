import React from "react";
import styles from "../RegistrationComponents/ConsentComponents/InputDesign.module.css";

const SplCategory = ({ checked, onChange, label }) => {
    return (
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checked}
          onChange={onChange}
          aria-label={label}
        />
        <p className={styles.checkboxText}>{label}</p>
      </div>
    );
  };

export default SplCategory;
