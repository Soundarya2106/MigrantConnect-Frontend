import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import { FaCheck } from "react-icons/fa"; 

const steps = [
  "Basic Information",
  "Address Details",
  "Work Information",
  "Bank Details",
  "Documents Upload",
  "Family Details",
  "Emergency Contact",
  "Submission",
];

const Sidebar = ({currentStep}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  }

  return (
    <aside className={styles.sidebarColumn}>
      <header className={styles.sidebarHeader}>
        <h1 className={styles.brandTitle}>
          <span className={styles.brandLetter}>M</span>
          <span className={styles.brandText}>igrant</span>
          <span className={styles.brandLetter}>C</span>
          <span className={styles.brandText}>onnect</span>
        </h1>
        <p className={styles.headerSubtitle}>
          Complete your profile to generate your Unique ID
        </p>
      </header>

      <nav className={styles.sidebarNav}>
        <ul className={styles.stepsList}>
          {steps.map((step, index) => (
            <li key={index} className={styles.stepItem}>
              <span className={styles.stepText}>{step}</span>
              <div
                className={`${styles.progressBar} ${
                  index < currentStep ? styles.completed : ""
                }`}
              >
                {index < currentStep && <FaCheck className={styles.tickIcon} />}
              </div>
            </li>
          ))}
        </ul>
        <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </nav>

    </aside>
  );
};

export default Sidebar;
