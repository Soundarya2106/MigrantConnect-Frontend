"use client"
import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import Footer from "../HomePageComponents/Footer";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css"
import Chatbot from "../Support/Chatbot";

const ChatbotPage = () => {
    return(
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <Sidebar className={styles.sidenav}/>
                <div className={styles.content}>
                    <Chatbot/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default ChatbotPage;