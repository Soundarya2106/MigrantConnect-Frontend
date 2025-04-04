"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent8 from "../RegistrationComponents/MainContent8";

const RegistrationPage8 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={7}/>
        <MainContent8/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage8;
