"use client";
import React, {useState} from "react";
import styles from "../ProfilePageDesignFiles/ChangePassword.module.css"; // Import CSS Module
import { FaCheckCircle } from "react-icons/fa"; // Tick icon
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const nav = useNavigate();
  const [step, setStep] = useState(1);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const verifyCurrentPassword = () => {
    // Simulate verification (Replace this with actual API call)
    if (currentPassword === "userCurrentPassword") {
      setStep(2);
    } else {
      alert("Incorrect current password.");
    }
  };

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Simulate password update (Replace this with actual API call)
    setSuccess(true);
    setTimeout(() => {
      nav("/profilepage1")
    }, 3000); // Reset after 3 seconds
  };

  return (
    <>
      <div className={styles.container}>
        <h4>Change Password</h4>

        {step === 1 && !success && (
          <div className={styles.step}>
            <label>Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
            />
            <button onClick={verifyCurrentPassword}>Verify</button>
          </div>
        )}

        {step === 2 && !success && (
          <div className={styles.step}>
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
            <button onClick={changePassword}>Save</button>
          </div>
        )}

        {success && (
          <div className={styles.successMessage}>
            <FaCheckCircle className={styles.successIcon} />
            <p>Password changed successfully!</p>
          </div>
        )}
      </div>
    </>
  );
};


export default ChangePassword;