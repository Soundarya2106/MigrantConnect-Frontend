"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent7 from "../RegistrationComponents/MainContent7";

const RegistrationPage7 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={6}/>
        <MainContent7/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage7;
