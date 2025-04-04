import React from "react";
import styles from "../ConsentComponents/InputDesign.module.css";

const CheckIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0003 2.16675C7.04199 2.16675 2.16699 7.04175 2.16699 13.0001C2.16699 18.9584 7.04199 23.8334 13.0003 23.8334C18.9587 23.8334 23.8337 18.9584 23.8337 13.0001C23.8337 7.04175 18.9587 2.16675 13.0003 2.16675ZM10.8337 18.4167L5.41699 13.0001L6.94449 11.4726L10.8337 15.3509L19.0562 7.12841L20.5837 8.66675L10.8337 18.4167Z"
      fill="#47B44E"
    />
  </svg>
);

const ConsentSection = ({ title, children, className }) => {
  return (
    <section className={className}>
      <header className={styles.consentHeader}>
        <CheckIcon />
        <h2 className={styles.title}>{title}</h2>
      </header>
      <p className={styles.consentText}>{children}</p>
    </section>
  );
};

export default ConsentSection;
