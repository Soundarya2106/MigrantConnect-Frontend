import React from "react";
import styles from "../HomePageDesignFiles/WelcomeSection.module.css";
import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const navigate = useNavigate();

  const handleActivate = () => {
    navigate("/registrationpage1");
  }

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeContent}>
        <div className={styles.userInfo}>
          <h2 className={styles.welcomeText}>
            <em>Welcome Back,</em> User!
          </h2>
          <div className={styles.statusWrapper}>
            <span className={styles.status}>Current Status: Unverified</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4798d081c09a278f7a1c7fb6c1760196806e9c16b77f1f8319019586e3870?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="Status"
              className={styles.statusIcon}
            />
          </div>
        </div>

        <button className={styles.activateButton} onClick={handleActivate}>Activate Now!</button>

        <p className={styles.activatePrompt}>
          Activate Your Profile! <br />
          Create Unique ID
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
