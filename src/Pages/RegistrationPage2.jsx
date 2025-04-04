"use client";
import React from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import Sidebar from "../RegistrationComponents/Sidebar";
import Footer from "../Components/Footer";
import MainContent2 from "../RegistrationComponents/MainContent2";

const RegistrationPage2 = () => {
  return (
    <main className={styles.registrationPage}>
      <section className={styles.contentWrapper}>
        <Sidebar currentStep={1}/>
        <MainContent2/>
      </section>
      <Footer />
    </main>
  );
};

export default RegistrationPage2;
