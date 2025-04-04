"use client";
import React from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import RightItem from "../UserRightsAndResponsibilities/RightItem";
import ContactIcon from "../assets/contact.png";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <Header title="Contact Us" icon={ContactIcon} />

        <main className={styles.contentCard}>
          <p className={styles.boldText}>We're Here to Help!</p>
          <p className={styles.introText}>
            At MigrantConnect, we are committed to assisting migrant workers by
            providing seamless access to government schemes, issue resolution,
            and essential services. If you need support, have inquiries, or want
            to partner with us, feel free to reach out.
          </p>

          <section className={styles.section}>
            <h2 className={styles.boldText}>📌How to Reach Us</h2>
            <div>
              <RightItem
                icon="point1"
                title="📧Email Support"
                details={[
                  "For general inquiries: info@migrantconnect.in",
                  "For support requests: support@migrantconnect.in",
                ]}
              />
              <RightItem
                icon="point2"
                title="💭WhatsApp Support"
                details={[
                  "Chat with us on WhatsApp: +91 9080143009",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.boldText}>🙋🏻‍♂️Need Immediate Assistance?</h2>
            <div>
              <RightItem
                icon="point1"
                title=""
                details={[
                  "🔷 For Technical Support: Facing issues with the website or application? Contact support@migrantconnect.in for help.",
                  "🔷 For Government Scheme Assistance: Need help understanding or applying for a scheme? Call our helpline or visit the Scheme Finder section on our website.",
                  "🔷 For Issue Reporting Support: If you’ve reported an issue and need an update, track your request under Track Requests > Reported Issues or call our support team.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.boldText}>📌Frequently Asked Questions (FAQs)</h2>
            <div>
              <RightItem
                icon="point1"
                title="Before reaching out, check our FAQs section for quick answers to common queries."
                details={[
                  "🔷 How do I register as a migrant worker?",
                  "🔷 What government schemes am I eligible for?",
                  "🔷 How do I track my issue request?",
                  "🔷 How can I update my profile information?",
                  "📖 Visit our FAQ page to get instant solutions!",
                ]}
              />
            </div>
          </section>

          <footer className={styles.footer}>
          We value your feedback! Let us know how we can improve our services to better support you. Your journey matters to us.
          </footer>
        </main>
      </div>
    </>
  );
};

export default Contact;
