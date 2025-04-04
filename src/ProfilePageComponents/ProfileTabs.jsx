import React from "react";
import { useRef, useState} from "react";
import styles from "../ProfilePageDesignFiles/ProfileTabs.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons

const ProfileTabs = ({setActiveTab}) => {
  const tabsRef = useRef(null);
  const [activeTab, setTab] = useState("basic");

  const scrollLeft = () => {
    if(tabsRef.current){
      tabsRef.current.scrollBy({left: -150, behavior:"smooth"});
    }
  };

  const scrollRight = () => {
    if(tabsRef.current){
      tabsRef.current.scrollBy({left: 150, behavior:"smooth"});
    }
  };

  const handleTabClick = (tabName) => {
    setTab(tabName);
    setActiveTab(tabName);
  }

  return (
    <div className={styles.tabsWrapper}>
      <button className={styles.arrowButton} onClick={scrollLeft}>
        <FaChevronLeft/>
      </button>

      <nav className={styles.tabsContainer} ref={tabsRef}>
        <a href="#basic" className={`${styles.tab} ${activeTab === "basic" ? styles.active : ""}`} 
        onClick={() => handleTabClick("basic")}>
          Basic Information
        </a>
        <a href="#address" className={`${styles.tab} ${activeTab === "address" ? styles.active : ""}`}
        onClick={() => handleTabClick("address")}>
          Address Details
        </a>
        <a href="#work" className={`${styles.tab} ${activeTab === "work" ? styles.active : ""}`}
        onClick={() => handleTabClick("work")}>
          Work Information
        </a>
        <a href="#bank" className={`${styles.tab} ${activeTab === "bank" ? styles.active : ""}`}
        onClick={() => handleTabClick("bank")}>
          Bank Details
        </a>
        <a href="#documents" className={`${styles.tab} ${activeTab === "doc" ? styles.active : ""}`}
        onClick={() => handleTabClick("doc")}>
          Document Upload
        </a>
        <a href="#family" className={`${styles.tab} ${activeTab === "family" ? styles.active : ""}`}
        onClick={() => handleTabClick("family")}>
          Family Details
        </a>
        <a href="#emergency" className={`${styles.tab} ${activeTab === "emergency" ? styles.active : ""}`}
        onClick={() => handleTabClick("emergency")}>
          Emergency Contact
        </a>
      </nav>

      {/* Right Arrow Button */}
      <button className={styles.arrowButton} onClick={scrollRight}>
        <FaChevronRight/>
      </button>
    </div>
  );
};

export default ProfileTabs;
