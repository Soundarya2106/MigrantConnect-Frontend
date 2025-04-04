import React from "react";
import { useState } from "react";
import styles from "../HomePageDesignFiles/IDCardSection.module.css";

const IDCardSection = ({user}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <section className={styles.idCardSection}>
      <h2 className={styles.sectionTitle}>Your Virtual Unique ID Card</h2>

      <div 
      className={styles.cardContainer} 
      onMouseEnter={() => setIsFlipped(true)} 
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        
        {/* Front Side */}
        <div className={styles.front}>
          <h3 className={styles.cardLogo}>
            <span className={styles.FlogoM}>M</span>
            <span>igrant</span>
            <span className={styles.FlogoC}>C</span>
            <span>onnect</span>
          </h3>
          <h4 className={styles.cardTitle}>Official Migrant ID</h4>
          <img src={user.photo} alt="Profile" className={styles.profileImage} />
          <div className={styles.cardInfo}>
            <div className={styles.userName}>
              <span>{user.name}</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4798d081c09a278f7a1c7fb6c1760196806e9c16b77f1f8319019586e3870?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" alt="Verified" className={styles.verifiedIcon} />
            </div>
            <p className={styles.uniqueId}>Unique ID: <strong>{user.uniqueId}</strong> <br></br>
            State: <strong>{user.state}</strong></p>
          </div>
        </div>

        {/* Back Side */}
        <div className={styles.back}>
          <h3 className={styles.cardLogo}>
            <span className={styles.FlogoM}>M</span>
            <span>igrant</span>
            <span className={styles.FlogoC}>C</span>
            <span>onnect</span>
          </h3>
          <h4 className={styles.cardTitle}>Official Migrant ID</h4>
          <img src={user.qrCode} alt="QR Code" className={styles.qrCode} />
          <p className={styles.uniqueId}>Contact: <strong>{user.mobileNumber}</strong><br></br>
            Blood Group: <strong>{user.bloodGroup}</strong><br></br>
            Work Type: <strong>{user.workType}</strong></p>
        </div>

      </div>
    </div>

      <button className={styles.downloadButton}>Download as PDF</button>
    </section>
  );
};

export default IDCardSection;
