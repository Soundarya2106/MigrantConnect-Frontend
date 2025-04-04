"use client";
import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import WelcomeSection from "../HomePageComponents/WelcomeSection";
import StatsSection from "../HomePageComponents/StatsSection";
import IDCardSection from "../HomePageComponents/IDCardSection";
import Footer from "../HomePageComponents/Footer";
import styles from "../HomePageDesignFiles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <Sidebar />
          </div>
          <div className={styles.centerColumn}>
            <WelcomeSection />
            <StatsSection />
          </div>
          <div className={styles.rightColumn}>
            <IDCardSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
