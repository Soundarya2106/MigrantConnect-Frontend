import React from "react";
import styles from "../ProfilePageDesignFiles/ProfileHeader.module.css";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const nav = useNavigate();
  return (
    <section className={styles.profileHeader}>
      <div className={styles.headerBackground} />
      <div className={styles.profileInfo}>
        <div className={styles.userInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b72650ac3166b0167805536d282fc1b995f180507472b2fec1e0d7e6fe5abed?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.userDetails}>
            <h2 className={styles.userName}>Ranjit Singh S</h2>
            <p className={styles.userId}>MC012567 | Joined June 27 2024<br></br>
            State : Punjab</p>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.changeButton} onClick={() => nav("/changeprofilepage")}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d07a9acfc6b06c4725918b796bef3d3b6891c0ebd7a9ee786fc5947bca106f85?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="Change"
              className={styles.buttonIcon}
            />
            <span>Change Profile</span>
          </button>
          <button className={styles.changeButton} onClick={() => nav("/changepasswordpage")}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a344e868334df6e7062b52cdbde21ff95aa08c2bd775a3c742d017aefbb4627c?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="Change"
              className={styles.buttonIcon}
            />
            <span>Change Password</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
