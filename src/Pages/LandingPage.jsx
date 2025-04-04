"use client";
import React from "react";
import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";
import FeatureSection from "../Components/FeatureSection";
import styles from "../DesignFiles/Container.module.css";
import BGImage from "../assets/BGImage.jpg";
import { AboutSection } from "../Components/AboutSection";
import ServicesContainer from "../Components/ServicesContainer";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

function Container() {
  return (
    <main className={styles.container} id="home">
      <Header/>
      <section className={styles.mainContent}>
        <div className={styles.leftContent}>
          <h1 className={styles.welcomeText}>Welcome to</h1>
          <p className={styles.brandName}>
            <span className={styles.logotext}>M</span>
            <span className={styles.logo}>igrant</span>
            <span className={styles.logotext}>C</span>
            <span className={styles.logo}>onnect</span>
          </p>
          <p className={styles.description}>
            "Join MigrantConnect today! Register or log in to track, report, and
            access support. Start your journey towards better assistance now."
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={BGImage} alt="Illustration" className={styles.fadeImage} />
        </div>
        <LoginForm />
      </section>
      <FeatureSection />
      <AboutSection />
      <ServicesContainer />
      <ContactSection/>
      <Footer/>
    </main>
  );
}

export default Container;
