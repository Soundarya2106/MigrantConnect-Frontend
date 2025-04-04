"use client";
import React from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import RightItem from "../UserRightsAndResponsibilities/RightItem";

const DPC = () => {
  return (
    <>
      <div className={styles.container}>
        <Header
          title="Data Protection Policy"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/409ef8d21ce3406a7e856612271212e444ef746a?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
        />

        <main className={styles.contentCard}>
          <p className={styles.lastUpdated}>Last Updated: Jan 17, 2025</p>
          <p className={styles.introText}>
            At MigrantConnect, we are committed to protecting the personal data of our users, including migrant workers, employers, and government agencies. This Data Protection Policy outlines how we secure, retain, process, and share user data while complying with applicable Indian IT laws and data protection regulations.
          </p>
          <p className={styles.agreement}>
            By using MigrantConnect, you acknowledge and agree to this policy.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. How We Secure Your Data?</h2>
            <h3 className={styles.sectionSubtitle}>
            We implement industry-standard security measures to protect user data from unauthorized access, misuse, or breaches. Our security practices include:
            </h3>
            <div>
              <RightItem
                icon="lock"
                title="🔐 Data Encryption"
                details={[
                  "> All sensitive data, including personal details, unique IDs, and issue reports, are encrypted during transmission and storage.",
                  "> End-to-end encryption is applied to protect communications between users and support teams.",
                ]}
              />
              <RightItem
                icon="secure"
                title="📂 Secure Storage Policies"
                details={[
                  "> User data is stored in protected cloud servers with multi-layer authentication.",
                  "> Only authorized personnel can access sensitive information based on role-based access controls.",
                ]}
              />
              <RightItem
                icon="trash"
                title="🛡️ Regular Security Audits"
                details={[
                  "> Our platform undergoes periodic security audits to detect vulnerabilities and strengthen protection.",
                  "> We implement firewalls, intrusion detection systems, and automated monitoring to prevent unauthorized access.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Rentention and Deletion Policies</h2>
            <h3 className={styles.sectionSubtitle}>
            We retain user data only as long as necessary to provide our services, comply with legal obligations, and ensure platform integrity.
            </h3>
            <div>
              <RightItem
                icon="period"
                title="🗓️ Data Retention Periods"
                details={[
                  "> User Profiles & IDs: Retained as long as the account remains active.",
                  "> Issue Reports & Support Requests: Stored for up to 1 Year to allow follow-ups and legal documentation.",
                  "> Governmnet Scheme Applications: Retained as per government guidelines for verification.",
                ]}
              />
              <RightItem
                icon="dustbin"
                title="🗑️ Data Deletion & User Rights"
                details={[
                  "User have the right to:",
                  "✅ Request deletion of their account (subject to any legal requirements).",
                  "✅ Withdraw consent for data processing at any time.",
                  "✅ Edit or update their personal information.",
                  "To request data deletion, users can contact support@migrantconnect.in. Data deletion requests will be processed within 7 working days.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Compliance with Indian IT Laws & Data Protection Rules</h2>
            <h3 className={styles.sectionSubtitle}>
            MigrantConnect complies with all relevant Indian IT laws, including:
            </h3>
            <div>
              <RightItem
                icon="act1"
                title="📜 Information Technology (IT) Act, 2000"
                details={[
                  "> Adheres to data protection and cybersecurity regulations under the IT Act.",
                ]}
              />
              <RightItem
                icon="act2"
                title="📜 Personal Data Protection Bill (PDPB) [Future Compliance]"
                details={[
                  "> We follow privacy best practices in anticipation of evolving Indian data protection laws.",
                ]}
              />
              <RightItem
                icon="act3"
                title="📜 Digital Personal Data Protection (DPDP) Act, 2023"
                details={[
                  "> Users have rights over their personal data, including access, correction, and deletion.",
                  "MigrantConnect does not collect excessive personal data beyond service needs.",
                  "We also ensure that government data-sharing requirements are met while protecting user privacy.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Third-Party Data Sharing Transparency</h2>
            <h3 className={styles.sectionSubtitle}>
            MigrantConnect does not sell or misuse user data. However, some data may be shared under specific conditions:
            </h3>
            <div>
              <RightItem
                icon="handshake"
                title="🤝 Government Authorities & Agencies"
                details={[
                  "> Why? To verify eligibility for schemes, track migrant benefits, and improve services.",
                  "> What data? Name, ID, employment details (as per scheme requirements).",
                ]}
              />
              <RightItem
                icon="speaker"
                title="🏛️ NGOs & Support Organizations"
                details={[
                  "> Why? To assist in grievance redressal, legal aid, and emergency support.",
                  "> What data? Issue reports (only with user consent).",
                ]}
              />
              <RightItem
                icon="danger"
                title="⚠️ We Do Not Share Data For:"
                details={[
                  "❌ Advertising or commercial purposes",
                  "❌ Unauthorized third-party access",
                  "❌ Selling or leasing personal information",
                  "Users will always be informed and required to consent before data is shared with any external entity.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Reporting Data Concerns & Breaches
            </h2>
            <p className={styles.introText}>
              If you suspect a data breach, unauthorized access, or misuse of your information, you can immediately:<br></br>
              <b>📧Email:</b> support@migrantconnect.in<br></br>
              <b>📞Helpline:</b> +91- XXXXXXXXXX<br></br>
              We take all reports seriously and investigate security incidents promptly.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Updates to This Policy</h2>
              <p className={styles.introText}>
                MigrantConnect may update this Data Protection Policy from time to time. We will notify users about any significant changes. Continued use of the platform means you agree to the revised policy.
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

export default DPC;
