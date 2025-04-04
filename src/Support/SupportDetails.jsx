"use client";
import React from "react";
import styles from "./Support.module.css";
import { useNavigate } from "react-router-dom";
import BotImage from "../assets/bot.png";

const SupportDetails = ({ id }) => {
    const navigate = useNavigate();
  switch (id) {
    case 1:
      return (
        <div className={styles.content}>
          <p>If you need assistance, our support team is here to help! Reach out to us through any 
          of the following channels:</p>
          
          <p><strong>Email Support</strong><br></br>
             📧 support@migrantconnect.in</p>

          <p><strong>Helpline Number:</strong><br></br>
             ☎️ +91 9080143009</p>

          <p>For urgent concerns, we recommend calling our helpline for quick resolution. 😊</p>

        </div>
      );

    case 2:
      return (
        <div className={styles.content}>
          <p><strong>◽ How do I register on MigrantConnect?</strong><br></br>
          <i>To register, enter your mobile number and verify it with OTP. Then, complete the 
          registration form to generate your unique ID.</i>
          </p>

          <p><strong>◽How can I track my submitted requests?</strong><br></br>
          <i>Go to Track Requests from the sidebar to check the status of your issue reports, 
          government scheme applications, and other service requests.</i>
          </p>

          <p><strong>◽What documents are required to apply for government schemes?</strong><br></br>
          <i>The required documents vary by scheme but generally include Aadhar card, 
          income certificate, address proof, and occupation details.</i>
          </p>

          <p><strong>◽How can I report an issue at my workplace?</strong><br></br>
          <i>Navigate to the Report Issues section, fill in the details, attach any supporting 
          evidence, and submit your complaint. You will receive a tracking ID to monitor progress.</i>
          </p>

          <p><strong>◽Can I update my profile information after registration?</strong><br></br>
          <i>Yes, you can update your profile details under My ID & Profile. However, certain fields may 
          require re-verification.</i>
          </p>

          <p><strong>◽I forgot my Unique ID. How can I retrieve it?</strong><br></br>
          <i>Log in to your account. Your virtual ID card will display your Unique ID on Home page.</i>
          </p>

          <p><strong>◽How do I contact support for urgent help?</strong><br></br>
          <i>Visit the Support section for contact details, including our helpline, email, and live chat 
          support.</i>
          </p>
        </div>
      );

    case 3:
      return (
        <div className={styles.content}>
          <p>Need instant help? Chat with our support team in real-time! 🚀</p>
          <div className={styles.chatButtonContainer}>
          <button className={styles.chatButton} onClick={() => navigate("/chatbotpage")}><img src={BotImage} alt="MigBot"></img> Chat With Us</button>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.content}>
          <p>At MigrantConnect, we strive to ensure uninterrupted access to all our services. Below is the latest update on system availability.<br></br><br></br>

<strong>✅ All services are running smoothly.</strong><br></br>
<strong>🕒 Last Updated: March 28, 2025</strong><br></br><br></br>

We continuously monitor our platform to provide you with a seamless experience. If you encounter any issues, feel free to reach out to our support team. 😊</p>
        </div>
      );

    default:
      return null;
  }
};

export default SupportDetails;
