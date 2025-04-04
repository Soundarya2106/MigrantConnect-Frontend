import React, { useState } from "react";
import styles from "./ChatBody.module.css"; // Import CSS Module
import { FaPaperPlane } from "react-icons/fa"; // Send icon
import BotImage from "../assets/bot.png";

const ChatBody = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! My name is MigBot." },
    { sender: "bot", text: "I'm a Virtual Assistant. How can I help you?" },
  ]);
  
  const [input, setInput] = useState("");

  const sendMessage = (text, isPredefined = false) => {
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);

    // Simulate bot response after user message
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: `You asked: "${text}". I'll get back to you!` },
      ]);
    }, 1000);

    if (!isPredefined) setInput(""); // Clear input only for manual messages
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatMessages}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "bot" ? styles.botMessage : styles.userMessage}>
            {msg.sender === "bot" && <img src={BotImage} alt="Bot" className={styles.botIcon} />}
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Predefined Questions */}
      <div className={styles.quickQuestions}>
        {["How to register?", "How to track status?", "How to report issue?"].map((question, index) => (
          <button key={index} onClick={() => sendMessage(question, true)}>{question}</button>
        ))}
      </div>

      {/* User Input Box */}
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="Ask to MigBot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && input.trim() && sendMessage(input)}
        />
        <button onClick={() => input.trim() && sendMessage(input)}>
          <img src={BotImage} alt="MigBot"></img>
        </button>
      </div>
    </div>
  );
};

export default ChatBody;
