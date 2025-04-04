"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent5 from "../RegistrationComponents/MainContent5";

const RegistrationPage5 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={4}/>
        <MainContent5/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage5;
