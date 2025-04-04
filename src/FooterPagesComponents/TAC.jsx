"use client";
import React from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import RightItem from "../UserRightsAndResponsibilities/RightItem";

const TAC = () => {
  return (
    <>
      <div className={styles.container}>
        <Header
          title="Terms and Conditions"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c0625671787afbe83429417a4f7e11d42ccf5c3d?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
        />

        <main className={styles.contentCard}>
          <p className={styles.lastUpdated}>Last Updated: Nov 20, 2024</p>
          <p className={styles.introText}>
            Welcome to MigrantConnect! These Terms & Conditions ("Terms") govern
            your use of our platform, including the website and mobile
            applications. By accessing or using MigrantConnect, you agree to
            comply with these Terms. If you do not agree with any part of these
            Terms, please do not use the platform.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              1. User Eligibility and Account Responsibilities
            </h2>
            <div>
              <RightItem
                icon="diamond1"
                title="🔷 Who Can Use MigrantConnect?"
                details={[
                  "> MigrantConnect is designed for migrant workers, employers, government agencies, and other authorized users who seek employment-related assistance, government benefits, and support services.",
                ]}
              />
              <RightItem
                icon="diamond2"
                title="🔷 Account Creation & Security"
                details={[
                  "> Users must provide accurate and complete information during registration.",
                  "> You are responsible for maintaining the confidentiality of your login credentials.",
                  "> MigrantConnect is not responsible for unauthorized account access due to your negligence.",
                ]}
              />
              <RightItem
                icon="diamond3"
                title="🔷 User Responsibilities"
                details={[
                  "> Ensure that the information provided (ID details, employment, issues reported) is truthful and up to date.",
                  "> Do not share your unique ID with unauthorized individuals.",
                  "> You must immediately report any unauthorized access or security breach.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. Acceptable and Prohibited Activities
            </h2>
            <h3 className={styles.sectionSubtitle}>✅Acceptable Activites</h3>
            <RightItem
              icon="tick"
              title="You may use MigrantConnect for:"
              details={[
                "✔️ Finding and applying for government schemes & benefits.",
                "✔️ Reporting workplace issues (e.g., wage theft, unsafe conditions).",
                "✔️ Tracking applications for employment and benefits.",
                "✔️ Seeking legal or emergency assistance.",
                "✔️ Accessing verified support services for migrant workers.",
              ]}
            />
            <h3 className={styles.sectionSubtitle}>🚫Prohibited Activites</h3>
            <RightItem
              icon="wrong"
              title="You MUST NOT:"
              details={[
                "❌ Provide false or misleading information.",
                "❌ Use the platform for fraudulent or illegal activities.",
                "❌ Attempt to hack, disrupt, or manipulate system functionality.",
                "❌ Impersonate another person or government authority.",
                "❌ Upload or share hateful, discriminatory, or harmful content.",
                "🔷 Violation of these Terms may result in account suspension or legal action.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Dispute Resolution and Governing Laws
            </h2>
            <RightItem
              icon="none"
              title=""
              details={[
                "> If any disputes arise related to service accessibility, issue reporting, or scheme eligibility, we encourage users to first contact our support team for resolution.",
                "> Any legal disputes will be governed by the laws of Tamil Nadu, India.",
                "> Disputes will be settled through mediation where possible before legal action.",
                "> MigrantConnect is not responsible for disputes between employers and employees, but we may assist in connecting users with legal aid services.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Limitation of Liability</h2>
            <RightItem
              icon="none"
              title=""
              details={[
                "> MigrantConnect does not guarantee the approval of government schemes or dispute resolutions.",
                "> We only facilitate communication between users, employers, and government agencies.",
                "> We are not responsible for any third-party services, employment decisions, or scheme approvals.",
                "> While we take security measures, MigrantConnect is not liable for any data breaches caused by third-party cyberattacks.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Changes to These Terms</h2>
            <RightItem
              icon="none"
              title=""
              details={[
                "MigrantConnect may update these Terms from time to time. We will notify users of any major changes. Continued use of the platform after changes means you accept the revised Terms.",
              ]}
            />
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Contact Us
            </h2>
            <p className={styles.introText}>
            If you have any questions about this Privacy Policy or how your data is handled, you can contact us at:<br></br>
              <b>📧Email:</b> support@migrantconnect.in<br></br>
              <b>📞Helpline:</b> +91-9080143009<br></br><br></br><br></br>
              <i><b>By using MigrantConnect, you agree to these Terms & Conditions. If you disagree with any part, please discontinue use of the platform.</b></i>
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default TAC;
