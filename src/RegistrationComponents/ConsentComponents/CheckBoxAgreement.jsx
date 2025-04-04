"use client";
import React from "react";
import styles from "../ConsentComponents/InputDesign.module.css";

const CheckBoxAgreement = ({ checked, onChange }) => {
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
        I agree to the above{" "}
        <button className={styles.link}>term and conditions</button>
      </p>
    </div>
  );
};

export default CheckBoxAgreement;
