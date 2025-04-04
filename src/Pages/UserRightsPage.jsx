"use client"
import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import URR from "../UserRightsAndResponsibilities/URR";
import Footer from "../HomePageComponents/Footer";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";

const UserRightsPage = () => {
    return(
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <Sidebar className={styles.sidenav}/>
                <div className={styles.content}>
                    <URR/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default UserRightsPage;