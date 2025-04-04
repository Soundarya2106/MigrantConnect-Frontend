"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";
import ConsentSection from "../RegistrationComponents/ConsentComponents/ConsentSection";
import CheckBoxAgreement from "../RegistrationComponents/ConsentComponents/CheckBoxAgreement";

const MainContent8 = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();
  const handlePreviousPage = () => {
    navigate("/registrationpage7");
  };

  const handleNextPage = () => {
    navigate("/homepagecontainer");
  }
  return (
    <section className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h2 className={styles.pageTitle}>Consent and Submission</h2>
        <LanguageSelector />
      </header>

      <section className={styles.container}>
        <p className={styles.header}>
          Before submitting your registration, please review the information
          provided and agree to the following terms:
        </p>

        <ConsentSection
          title="Consent Declaration:"
          className={styles.consentSection}
        >
          "I confirm that the details provided are accurate and true to
          the best of my knowledge. I authorize MigrantConnect to verify my
          information for identity and service eligibility purposes."
        </ConsentSection>

        <ConsentSection
          title="Data Privacy Agreement:"
          className={styles.privacySection}
        >
          "I understand that my personal data will be securely stored and
          used only for official purposes related to MigrantConnect
          services."
        </ConsentSection>

        <ConsentSection
          title="Terms & Conditions:"
          className={styles.termsSection}
        >
          <>
            "I agree to abide by the terms and conditions
            of MigrantConnect and acknowledge that any false information may
            result in the rejection of my application."
          </>
        </ConsentSection>

        <CheckBoxAgreement
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
      </section>

      <div className="submitWrapper">
              <button
                type="submit"
                className={`${styles.submitButton} ${!isAgreed ? styles.disabledButton : ""}`}
                onClick={handleNextPage}
                disabled={!isAgreed}
              >
                Submit
              </button>
              <button
                type="submit"
                className={styles.backButton}
                onClick={handlePreviousPage}
              >
                Back
              </button>
            </div>
    </section>
  )
};

export default MainContent8;