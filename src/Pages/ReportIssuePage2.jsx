"use client"
import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import Footer from "../HomePageComponents/Footer";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css"
import ReportIssue2 from "../ReportIssue/RT2";


const ReportPage2 = () => {
    return(
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <Sidebar className={styles.sidenav}/>
                <div className={styles.content}>
                    <ReportIssue2 />
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default ReportPage2;
