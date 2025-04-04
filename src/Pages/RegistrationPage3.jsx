"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent3 from "../RegistrationComponents/MainContent3";

const RegistrationPage3 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={2}/>
        <MainContent3/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage3;
