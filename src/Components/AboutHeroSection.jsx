import React from "react";
import { Link } from "react-scroll";
import styles from "../DesignFiles/AboutSection.module.css";

export function HeroSection() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.subtitle}>
          <span className={styles.brandName}>
            <span className={styles.brandLetter}>M</span>
            <span>igrant</span>
            <span className={styles.brandLetter}>C</span>
            <span>onnect: </span>
          </span>
          <span>
            Empowering migrant workers with seamless support, resources, and a
            secure identity for a better future.
          </span>
        </p>
        <button className={styles.registerButton}><Link to="home" smooth={true} duration={200}>Get Started!</Link></button>
      </div>
    </header>
  );
}
