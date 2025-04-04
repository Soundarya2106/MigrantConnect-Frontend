import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // CSS Module
import { useNavigate } from "react-router-dom";
import BotImage from "../assets/bot.png";
import { FaTimes } from "react-icons/fa";
import ChatBody from "./ChatBody";

const Chatbot = ({ onClose }) => {
    const navigate = useNavigate();

  return (
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <div className={styles.botInfo}>
          <img src={BotImage} alt="MigBot" className={styles.botImage}></img>
          <p> <strong>MigBot</strong><br></br> 🟢 Online Now</p>
          </div>
          <button className={styles.closeButton} onClick={() => navigate("/supportpage")}><FaTimes/></button>
        </div>
        <ChatBody/>
      </div>
  );
};

export default Chatbot;
