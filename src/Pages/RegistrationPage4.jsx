"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent4 from "../RegistrationComponents/MainContent4";

const RegistrationPage4 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={3}/>
        <MainContent4/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage4;
