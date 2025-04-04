import React from "react";
import LanguageSelector from "../Components/LanguageSelector";
import styles from "../DesignFiles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span className={styles.mlogotext}>M</span>
        <span className={styles.mlogo}>igrant</span>
        <span className={styles.clogotext}>C</span>
        <span className={styles.clogo}>onnect</span>
      </h1>
      <nav className={styles.navLinks}>
        <a href="#home" className={styles.navItem}>
          Home
        </a>
        <a href="#about" className={styles.navItem}>
          About
        </a>
        <a href="#services" className={styles.navItem}>
          Services
        </a>
        <a href="#contact" className={styles.navItem}>
          Contact
        </a>
      </nav>
      <LanguageSelector />
    </header>
  );
}

export default Header;
