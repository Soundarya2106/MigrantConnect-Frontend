import React, { useState } from "react";
import Sidebar from "../HomePageComponents/Sidebar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import ProfileHeader from "../ProfilePageComponents/ProfileHeader";
import styles from "../ProfilePageDesignFiles/profilePage.module.css"
import ProfileProgress from "../ProfilePageComponents/ProfileProgress";
import ChangeProfile from "../ProfilePageComponents/ChangeProfile";


const ChangeProfilePage = () => {
    return(
        <main>
            <Header/> 
            <div className={styles.centerContent}>
            <Sidebar className={styles.sidenav}/>
            <div className={styles.profileDetails}>
            <ProfileHeader/>
            <ChangeProfile/>
            </div>
            <aside className={styles.progressSection}>
              <ProfileProgress/>
            </aside>
            </div>
            <Footer/>
        </main>
    )
}

export default ChangeProfilePage;