"use client";
import React, { useState } from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../SchemeFinder/SchemeFinder.module.css";
import SearchIcon from "../assets/search.png";
import EligibilityDetails from "./EligibilityData";
import SchemeCard from "./SchemeCard";

const SchemeResult = () => {
    //Sample data, use dynamic data
    const schemeData1 = {
        title: "Pradhan Mantri Awas Yojana (PMAY)",
        eligibility: [
          "Household income below ₹6,00,000 for EWS/LIG category",
          "Applicant must not own a pucca house anywhere in India",
          "Must be a first-time homebuyer",
          "SC/ST, OBC, Women, and differently-abled applicants get priority",
        ],
        deadline: "31st December 2024",
        description:
          "Aims to provide affordable housing for urban and rural poor with financial assistance and subsidies on home loans.",
      };

      const schemeData2 = {
        title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        eligibility: [
          "All small and marginal farmers with up to 2 hectares of land",
          "Must be an Indian citizen",
          "Excludes institutional landholders and taxpayers",
          "Farmers from all states and UTs (except West Bengal initially)",
        ],
        deadline: "Ongoing",
        description:
          "Provides direct income support of ₹6,000 per year in three installments to small and marginal farmers across India.",
      };
      
  return (
    <>
      <div className={styles.container}>
        <Header
          title="Find and Apply for Government Schemes"
          icon={SearchIcon}
        />
        <div className={styles.header}>
          <div className={styles.centerContent}>
            <p className={styles.heading}>Your Eligible Schemes</p>
            <SchemeCard {...schemeData1} />
            <SchemeCard {...schemeData2} />
          </div>
          <div className="rightContent"><EligibilityDetails/></div>
        </div>
      </div>
    </>
  );
};

export default SchemeResult;
