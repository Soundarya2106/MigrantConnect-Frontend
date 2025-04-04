import React from "react";
import Header from "../HomePageComponents/Header";
import Sidebar from "../HomePageComponents/Sidebar";
import WelcomeSection from "../HomePageComponents/WelcomeSection";
import StatsSection from "../HomePageComponents/StatsSection";
import IDCardSection from "../HomePageComponents/IDCardSection";
import Footer from "../HomePageComponents/Footer";
import styles from "../HomePageDesignFiles/MainContent.module.css"

const userEx = {
    name: "User",
    photo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7446f8b266061bcb6519d8af64faebd822cd105fd146516f05cb945fd5501ed0?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256",
    uniqueId: "-",
    state: "-",
    qrCode: "",
    mobileNumber: "9371347148",
    bloodGroup: "-",
    workType: "-"
  };
  

function HomePageContainer() {
    return(
        <main>
            <Header/>
            <div className={styles.mainContent}>
            <Sidebar/>
            <div className={styles.centerContent}>
            <WelcomeSection/>
            <StatsSection/>
            </div>
            <IDCardSection user={userEx}/>
            </div>
            <Footer/>
        </main>
    )
}

export default HomePageContainer;