"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import MainContent1 from "../RegistrationComponents/MainContent1";
import Footer from "../Components/Footer";

const RegistrationPage1 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={0}/>
        <MainContent1 />
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage1;
