"use client"
import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import Footer from "../HomePageComponents/Footer";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css"
import ReportIssue1 from "../ReportIssue/RI1";

const ReportPage1 = () => {
    return(
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <Sidebar className={styles.sidenav}/>
                <div className={styles.content}>
                    <ReportIssue1 />
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default ReportPage1;
