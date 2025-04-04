import React from "react";
import styles from "../HomePageDesignFiles/Footer.module.css";
import chatIcon from "../assets/chat.png"
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <footer>
      <div className={styles.mainFooter}>
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <nav className={styles.footerNav}>
            <a href="/reportpage">Report and Issue</a>
            <a href="/supportpage">Find Support</a>
            <a href="/trackpage">Track My Requests</a>
            <a href="/schemeform">Explore Government Schemes</a>
            <a href="/profilepage1">Manage my ID & Profile</a>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>MigrantConnect</h3>
          <nav className={styles.footerNav}>
            <a href="/aboutpage">About</a>
            <a href="/contactpage">Contact</a>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Policies</h3>
          <nav className={styles.footerNav}>
            <a href="/privacypolicypage">Privacy Policy</a>
            <a href="/tandcpage">Terms and Conditions</a>
            <a href="/dataprotectionpage">Data Protection Policy</a>
            <a href="/userrightspage">User Rights & Responsibilites</a>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Reach Us</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d1b27d2b55641a036f1610f52d8bab148ec5360442278b5970b25b687c95f6?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
                alt="Phone"
                className={styles.contactIcon}
              />
              <span>+91 9080143009</span>
            </div>
            <div className={styles.contactItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/945057de33d9b89f1d8d5bb820c6892aa11149dd0ffad3b72fafc04d2cf9e018?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
                alt="Email"
                className={styles.contactIcon}
              />
              <span>migrantsupport@gmail.com</span>
            </div>

            <div className={styles.contactItem} onClick={() => {nav("/chatbotpage")}}>
              <img
                src={chatIcon}
                alt="Email"
                className={styles.contactIcon}
              />
              <span>Chat With Us</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.socialFooter}>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7de4b1c564f76ce2c8e4e990fdfcb55efc4e9940e29bbe357b86a7a3ae8057?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="Twitter"
            />
          </a>
          <a href="#" className={styles.socialLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c79ee05e6930146a2ed4a119129a0dcd8a113ab70336dde794391f078caafe?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="LinkedIn"
            />
          </a>
          <a href="#" className={styles.socialLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee0f897ec9e802692979a22d48e1900679601c23df727f149a830ff0d416531?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="Instagram"
            />
          </a>
          <a href="#" className={styles.socialLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/119aa83df9fbc1023961c0900f727f04ab1bc90a9dfe4e4cbd43ff1811ad8528?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
              alt="Facebook"
            />
          </a>
        </div>

        <div className={styles.copyright}>
          <p>© 2025 MigrantConnect. All Rights Reserved.</p>
          <p className={styles.tagline}>
            🤍 Together, We Build a Better Future!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
