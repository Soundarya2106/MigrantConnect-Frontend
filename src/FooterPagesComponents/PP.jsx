"use client";
import React from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import RightItem from "../UserRightsAndResponsibilities/RightItem";

const PP = () => {
  return (
    <>
      <div className={styles.container}>
        <Header
          title="Privacy Policy"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/08f190c8f0ffc33f544bd9087b003ea22ba6265c"
        />

        <main className={styles.contentCard}>
          <p className={styles.lastUpdated}>Last Updated: Jan 03, 2025</p>
          <p className={styles.introText}>
            MigrantConnect is committed to protecting the privacy of all users,
            including migrant workers, employers, and government authorities
            accessing our platform. This Privacy Policy explains how we collect,
            use, and safeguard your personal data when you use our services.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. What Data We Collect</h2>
            <RightItem
              icon="diamond"
              title="When you use MigrantConnect, we may collect the following types of personal information:"
              details={[
                "🔷 Personal Information: Name, age, gender, contact details (phone number, email), and unique ID.",
                "🔷 Employment Information: Occupation, employer details, work location, and job sector.",
                "🔷 Government Schemes Data: Scheme applications, eligibility status, and benefits received.",
                "🔷 Location Data: Residential and workplace location for assistance and tracking (if permitted).",
                "🔷 Issue Reports & Support Requests: Any concerns or complaints filed through our platform.",
                "🔷 Device Information: IP address, browser type, and device details for security and analytics.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Data</h2>
            <RightItem
              icon="diamond"
              title="MigrantConnect collects and processes user data for the following purposes:"
              details={[
                "✅ Account Management: To register users, provide a unique ID, and authenticate login access.",
                "✅ Issue Reporting & Support: To assist in tracking complaints and connecting users with support services.",
                "✅ Government Schemes & Benefits Finder: To help users discover and apply for eligible schemes.",
                "✅ Employment & Work-Related Services: To track migrant employment history and improve workplace assistance.",
                "✅ Security & Compliance: To ensure user verification and prevent fraudulent activity.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Data Sharing</h2>
            <RightItem
              icon="diamond"
              title="MigrantConnect follows strict data-sharing policies. We DO NOT sell or share your data for marketing purposes. However, we may share necessary information with:"
              details={[
                "🔶 Government Authorities: To verify identity and eligibility for welfare schemes.",
                "🔶 Employers & Labor Welfare Boards: Only with user consent, for work-related documentation.",
                "🔶 Legal & Compliance Teams: If required by law for safety, fraud prevention, or legal obligations.",
                "All third parties receiving data from us are required to maintain strict confidentiality.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. User Control Over Data</h2>
            <RightItem
              icon="diamond"
              title="MigrantConnect gives users control over their personal data:"
              details={[
                "📝 View & Update Data: Users can edit their profile details via My ID & Profile section.",
                "🗑️ Delete Data: Users can request data deletion through Account Settings > Delete Account.",
                "🚫 Withdraw Consent: Users may opt out of location tracking and data-sharing settings anytime.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Security Measures to Protect Data
            </h2>
            <RightItem
              icon="diamond"
              title="We implement industry-standard security measures to keep your data safe, including:"
              details={[
                "🔐 Encryption: Sensitive user data is encrypted for protection.",
                "🛡️ Access Controls: Only authorized personnel can access restricted data.",
                "📍 Secure Data Storage: All data is stored on protected servers in compliance with IT laws.",
                "⏳ Regular Audits: We conduct security audits to prevent breaches and unauthorized access.",
              ]}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.introText}>
              If you have any questions about this Privacy Policy or how your
              data is handled, you can contact us at:<br></br>
              <b>📧Email:</b> support@migrantconnect.in<br></br>
              <b>📞Helpline:</b> +91- XXXXXXXXXX<br></br>
              <br></br>
              <br></br>
              <i>
                <b>
                  By using MigrantConnect, you agree to these Terms &
                  Conditions. If you disagree with any part, please discontinue
                  use of the platform.
                </b>
              </i>
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default PP;
