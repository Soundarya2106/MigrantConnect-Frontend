"use client";
import React from "react";
import styles from "../RegistrationComponents/ConsentComponents/InputDesign.module.css";

const CheckBox = ({ checked, onChange }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
        aria-label="Accept terms and conditions"
      />
      <p className={styles.checkboxText}>
        I confirm that the information provided is accurate and agree to share it with relevant authorities for resolution.
      </p>
    </div>
  );
};

export default CheckBox;
