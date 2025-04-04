"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent6 from "../RegistrationComponents/MainContent6";

const RegistrationPage6 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={5}/>
        <MainContent6/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage6;
