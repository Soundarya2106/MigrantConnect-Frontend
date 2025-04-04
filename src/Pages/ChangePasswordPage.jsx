import React, { useState } from "react";
import Sidebar from "../HomePageComponents/Sidebar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import ProfileHeader from "../ProfilePageComponents/ProfileHeader";
import styles from "../ProfilePageDesignFiles/profilePage.module.css"
import ProfileProgress from "../ProfilePageComponents/ProfileProgress";
import ChangePassword from "../ProfilePageComponents/ChangePassword";

const ChangePasswordPage = () => {
    return(
        <main>
            <Header/> 
            <div className={styles.centerContent}>
            <Sidebar className={styles.sidenav}/>
            <div className={styles.profileDetails}>
            <ProfileHeader/>
            <ChangePassword/>
            </div>
            <aside className={styles.progressSection}>
              <ProfileProgress/>
            </aside>
            </div>
            <Footer/>
        </main>
    )
}

export default ChangePasswordPage;