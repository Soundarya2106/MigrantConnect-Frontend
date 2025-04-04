import React from 'react';
import styles from '../DesignFiles/Footer.module.css';

const QuickLinks = () => {
  return (
    <nav className={styles.quickLinks}>
      <a href="#home" className={styles.link}>Home</a>
      <a href="#about" className={styles.link}>About</a>
      <a href="#services" className={styles.link}>Services</a>
      <a href="#contact" className={styles.link}>Contact</a>
    </nav>
  );
};

export default QuickLinks;
