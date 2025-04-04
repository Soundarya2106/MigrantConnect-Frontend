"use client";
import React from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";
import AboutIcon from "../assets/abouticon.png";
import RightItem from "../UserRightsAndResponsibilities/RightItem";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <Header
          title="About MigrantConnect"
          icon={AboutIcon}
        />

        <main className={styles.contentCard}>
            <p className={styles.boldText}>Empowering Migrant Workers, One Step at a Time</p>
            <p className={styles.introText}> MigrantConnect is a dedicated digital platform designed to support migrant workers in Tamil Nadu by providing seamless access to government schemes, issue resolution, tracking services, and essential resources. We bridge the gap between migrant laborers and welfare programs, ensuring that no worker is left behind due to a lack of information or accessibility. </p>

            <section className={styles.section}>
                <p className={styles.introText}><span className={styles.boldText}>🌟Our Vision</span><br></br>To empower every migrant worker by providing them with the necessary tools, information, and resources to access government benefits, report workplace concerns, and secure their rights. We believe that every individual, regardless of their location or work sector, deserves equal opportunities and social security.</p>
            </section>

            <section className={styles.section}>
            <h2 className={styles.boldText}>
              📌What We Do
            </h2>
            <div>
              <RightItem
                icon="point1"
                title="✅Provide a Unique ID for Migrant Workers"
                details={[
                  "Every registered user receives a Unique Identification Number (UIN) that allows them to track their applications, government benefits, and support requests with ease.",
                ]}
              />
              <RightItem
                icon="point2"
                title="✅Simplify Government Scheme Access"
                details={[
                  "Our platform analyzes eligibility and helps workers find and apply for relevant welfare schemes with a simple and user-friendly process.",
                ]}
              />
              <RightItem
                icon="point3"
                title="✅Enable Issue Reporting & Resolution"
                details={[
                  "Migrant workers can report workplace issues such as non-payment of wages, poor working conditions, or harassment. Our system ensures that these reports are tracked and resolved efficiently.",
                ]}
              />
              <RightItem
                icon="point4"
                title="✅Offer Tracking & Support Services"
                details={[
                  "Workers can track their applications for government schemes, issue reports, and support requests in real-time, reducing uncertainty and ensuring transparent service delivery.",
                ]}
              />
              <RightItem
                icon="point5"
                title="✅Ensure Awareness & Assistance"
                details={[
                  "Through guides, FAQs, and multilingual support, we help workers understand their rights and navigate legal and administrative processes smoothly.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.boldText}>
               🚀Why MigrantConnect?
            </h2>
            <div>
              <RightItem
                icon="point1"
                title=""
                details={[
                  "🔷 User-Friendly Interface: Simple, intuitive, and accessible in multiple languages.",
                  "🔷 Transparency & Tracking: Every application, issue, or request is trackable in real-time.",
                  "🔷 Secure & Reliable: Ensures data privacy and security while helping workers get the support they need.",
                  "🔷 Government Integration: Designed to align with Tamil Nadu’s welfare programs for effective service delivery.",
                  "🔷 Inclusive & Accessible: Supports workers across sectors like construction, agriculture, manufacturing, domestic work, and more.",
                ]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.boldText}>
               🤝Who We Serve
            </h2>
            <div>
              <RightItem
                icon="point1"
                title=""
                details={[
                  "🔷 Migrant laborers seeking government benefits and support.",
                  "🔷 Workers in construction, factories, domestic work, agriculture, and transport.",
                  "🔷 Individuals facing wage disputes, unsafe work conditions, or discrimination.",
                  "🔷 Anyone needing guidance on rights, entitlements, and employment laws.",
                ]}
              />
            </div>
          </section>

          <footer className={styles.footer}>
          We work to empower and uplift the migrant worker community, ensuring that every individual has access to the support and opportunities they deserve.
          </footer>
        </main>
      </div>
    </>
  );
};

export default About;
