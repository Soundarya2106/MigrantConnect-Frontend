"use client"
import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import Footer from "../HomePageComponents/Footer";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import PP from "../FooterPagesComponents/PP";

const PrivacyPolicyPage = () => {
    return(
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <Sidebar className={styles.sidenav}/>
                <div className={styles.content}>
                    <PP/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default PrivacyPolicyPage;