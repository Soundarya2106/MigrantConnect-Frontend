import React from "react";
import { useState } from "react";
import { LanguageIcon, DropdownIcon } from "../Components/Icons";
import styles from "../DesignFiles/LanguageSelector.module.css";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    "অসমীয়া",
    "বাংলা",
    "भोजपुरी",
    "डोगरी",
    "English",
    "ગુજરાતી",
    "हिन्दी",
    "ಕನ್ನಡ",
    "काश्मीरी",
    "कोङ्कणी",
    "मैथिली",
    "മലയാളം",
    "মণিপুরি",
    "मराठी",
    "नेपाली",
    "ଓଡ଼ିଆ",
    "ਪੰਜਾਬੀ",
    "संस्कृत",
    "संताली",
    "सिंधी",
    "தமிழ்",
    "తెలుగు",
    "اردو"
  ];

  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    console.log("Dropdown isOpen:", isOpen);
  };

  // Function to handle language selection
  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageContainer}>
      <button className={styles.languageSelector}>
        <LanguageIcon />
        <span className={styles.languageText}>{selectedLanguage}</span>
        <div onClick={toggleDropdown} className={`${styles.dropdownIcon} ${isOpen ? styles.open : ""}`}>
          <DropdownIcon />
        </div>
      </button>

      {isOpen && (
        <ul className={styles.languageDropdown}>
          {languages.map((lang, index) => (
            <li
              key={index}
              className={styles.languageOption}
              onClick={() => selectLanguage(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
