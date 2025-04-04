"use client";
import React from "react";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import Header from "../UserRightsAndResponsibilities/Header";
import RightItem from "../UserRightsAndResponsibilities/RightItem";
import ResponsibilityItem from "../UserRightsAndResponsibilities/ResponsibilityItem";
import ViolationItem from "../UserRightsAndResponsibilities/ViolationItem";

const URR = () => {
  return (
    <>
      <div className={styles.container}>
        <Header 
           title="User Rights and Responsibilities"
           icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2d5287d2945d1102f12e3582ab8184d2a268f5"
        />
        <main className={styles.contentCard}>
          <p className={styles.lastUpdated}>Last Updated: Jan 10, 2025</p>
          <p className={styles.introText}>
            At MigrantConnect, we are committed to ensuring a secure,
            transparent, and user-friendly platform for migrant workers,
            employers, and government agencies. This page outlines your rights
            as a user and the responsibilities you must follow while using our
            platform.
          </p>
          <p className={styles.agreement}>
            By using MigrantConnect, you agree to comply with these terms.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. User Rights</h2>
            <h3 className={styles.sectionSubtitle}>
              As a registered user of MigrantConnect, you have the following
              rights regarding your data and platform usage:
            </h3>
            <div>
              <RightItem
                icon="searchicon"
                title="🔍 Right to Access Information"
                details={[
                  "> View your profile details, submitted issue reports, scheme applications, and tracking requests.",
                  "> Access government schemes and migrant support services available to you.",
                ]}
              />
              <RightItem
                icon="pencil"
                title="✏️ Right to Update & Correct Information"
                details={[
                  "> Edit or update personal details such as name, contact information, and employment status.",
                  "> Request corrections in case of incorrect information in issue reports or government applications.",
                ]}
              />
              <RightItem
                icon="trash"
                title="🗑️ Right to Delete Account & Data"
                details={[
                  "> You can request account deletion at any time.",
                  "> Upon deletion, your personal data will be removed, except for information required by law or ongoing service requests.",
                ]}
              />
              <RightItem
                icon="lock"
                title="🔒 Right to Privacy & Security"
                details={[
                  "> Your personal data is secured and protected, following Indian IT laws and data protection policies.",
                  "> You can withdraw consent for data collection and request a copy of your stored data.",
                ]}
              />
              <RightItem
                icon="phone"
                title="📱 Right to Support & Redressal"
                details={[
                  "> Contact MigrantConnect Support for any concerns regarding your account or misuse of your data.",
                  "> Raise complaints if you face discrimination, fraudulent schemes, or unfair treatment.",
                ]}
              />
              <RightItem
                icon="mail"
                title="📧 How to Exercise These Rights?"
                details={[
                  "> You can edit your information through the Account Settings section.",
                  "> To request deletion or report an issue, email support@migrantconnect.in.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. User Responsibilities</h2>
            <h3 className={styles.sectionSubtitle}>
              To maintain a safe and effective platform, all users are expected
              to follow these responsibilities:
            </h3>
            <ResponsibilityItem
              title="✅ Provide Accurate Information"
              details={[
                "> Ensure that all personal details, employment status, and issue reports are true and correct.",
                "> False or misleading information may result in account suspension or rejection of service requests.",
              ]}
            />
            <ResponsibilityItem
              title="✅ Respect Platform Rules & Other Users"
              details={[
                "❌ Do not post abusive, false, or misleading information on the platform.",
                "❌ Treat support agents, officials, and other users with respect while seeking assistance.",
              ]}
            />
            <ResponsibilityItem
              title="✅ Use the Platform for Its Intended Purpose"
              details={[]}
              prohibited={[
                "❌ Misuse the platform for illegal activities.",
                "❌ Submit false claims or reports.",
                "❌ Share confidential government data with unauthorized persons.",
              ]}
              allowed={[
                "✅ Use MigrantConnect for accessing schemes, tracking requests, and reporting issues.",
                "✅ Follow legal guidelines while using platform services.",
              ]}
            />
            <ResponsibilityItem
              title="✅ Keep Your Account Secure"
              details={[
                "❌ Do not share your Unique ID, login credentials, or OTPs with others.",
                "❌Notify MigrantConnect Support immediately in case of suspected unauthorized access.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Reporting Misuse or Security Breaches
            </h2>
            <p className={styles.introText}>
              If you detect fraudulent activities, false claims, or misuse of
              your data, you must report it immediately.<br></br>
              <b>🔍How to Report?</b><br></br>
              <b>📧Email:</b> support@migrantconnect.in<br></br>
              <b>📞Helpline:</b> +91-9080143009<br></br>
              MigrantConnect will take strict action against policy violators,
                fraudsters, and unauthorized access attempts.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Policy Violation & Actions Taken
            </h2>
            <p className={styles.introText}>
              MigrantConnect reserves the right to take action in case of
              violation of platform rules:
            </p>
            <div className={styles.violationsList}>
              <ViolationItem
                title="⚠️Warning & Account Suspension"
                details={[
                  "⭕ First-time minor violations may receive a warning.",
                  "⭕ Repeated offenses may lead to temporary suspension.",
                ]}
              />
              <ViolationItem
                title="⚠️Permanent Ban & Legal Action"
                details={[
                  "⭕ If users engage in fraudulent activities, harassment, or unauthorized data access, their account will be permanently banned.",
                  "⭕ Serious violations may be reported to legal authorities under applicable laws.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Updates to This Policy</h2>
            <p className={styles.introText}>
              MigrantConnect may update this User Rights & Responsibilities page
              to ensure compliance with new policies.<br></br>
              🔔 Users will be notified of significant changes. Continued use of the
              platform means acceptance of the updated terms.
            </p>
            
          </section>

          <footer className={styles.footer}>
            For any questions or concerns, contact privacy@migrantconnect.in.
          </footer>
        </main>
      </div>
    </>
  );
};

export default URR;
