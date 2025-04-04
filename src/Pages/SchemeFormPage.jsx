"use client"
import React from "react"
import Header from "../HomePageComponents/Header"
import Footer from "../HomePageComponents/Footer"
import Sidebar from "../HomePageComponents/Sidebar"
import SchemeForm from "../SchemeFinder/SchemeForm"
import styles from "../SchemeFinder/SchemeFinder.module.css";

const SchemeFormPage = () => {
    return(
        <>
        <main>
            <Header/>
            <div className={styles.mainContent}>
                <Sidebar/>
                <SchemeForm/>
            </div>
            <Footer/>
        </main>
        </>
    );
}

export default SchemeFormPage;