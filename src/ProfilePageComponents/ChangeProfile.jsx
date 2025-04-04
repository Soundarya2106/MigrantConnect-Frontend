import React, { useState } from "react";
import styles from "../ProfilePageDesignFiles/ChangeProfile.module.css"; // Import CSS module
import { FaSave, FaUpload } from "react-icons/fa";

const ChangeProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission (dummy function)
  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Change Profile</h2>

      {/* Profile Image Preview */}
      <div className={styles.profilePicContainer}>
        <img
        //retrieve original user's current profile pic
          src={selectedImage || "https://cdn.builder.io/api/v1/image/assets/TEMP/6b72650ac3166b0167805536d282fc1b995f180507472b2fec1e0d7e6fe5abed?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"}
          alt="Profile"
          className={styles.profilePic}
        />
        <input
          type="file"
          id="fileInput"
          className={styles.fileInput}
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput" className={styles.uploadBtn}>
          <FaUpload /> Upload New Picture
        </label>
      </div>

      {/* Save Button */}
      <button className={styles.saveBtn} onClick={handleSave}>
        <FaSave /> Save Changes
      </button>
    </div>
  );
};

export default ChangeProfile;
