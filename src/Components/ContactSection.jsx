"use client";
import React from "react";
import ContactHeader from "../Components/ContactHeader";
import ContactCard from "../Components/ContactCard";
import styles from "../DesignFiles/ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contactSection} id="contact"> 
      <div className={styles.container}>
        <ContactHeader />
        <div className={styles.cardsContainer}>
          <div className={styles.cardsWrapper}>
            <div className={styles.cardColumn}>
              <ContactCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa44366ab7b1ffe7447282ba59faf5bdd091221d8ba7c281ba3941473e653bea?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
                title="Call for Assistance"
                description="Need immediate assistance? Call our support team for quick help, guidance, and reliable support anytime."
                contactInfo="+91 XXXXXXXXXX"
                type="phone"
              />
            </div>
            <div className={styles.cardColumn}>
              <ContactCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/58ae4b4e91a8b539445dd7d439573914da9e340c0b691e50d20c74016b7af001?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
                title="Email Us for Support"
                description="Have any questions or need assistance? Drop us an email, and our team will get back to you as soon as possible with the support you need."
                contactInfo="support@migrantconnect.in"
                type="email"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
