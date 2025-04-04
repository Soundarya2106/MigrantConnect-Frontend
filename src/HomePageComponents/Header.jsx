import React from "react";
import styles from "../HomePageDesignFiles/Header.module.css";
import LanguageSelector from "../Components/LanguageSelector";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../assets/location.png";

const Header = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate("/profilepage1")
  }

  const gotoLocation = () => {
    navigate("/locationpage")
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <span className={styles.logoM}>M</span>
        <span className={styles.logoTextM}>igrant</span>
        <span className={styles.logoC}>C</span>
        <span className={styles.logoTextC}>onnect</span>
      </h1>

      <div className={styles.searchBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ffdb02d1bdad3d5d7130633b21e55ff56ea66aff41fe60e03b0f9b3ab73df70?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
          alt="Search"
          className={styles.searchIcon}
        />
        <span className={styles.searchText}>Search</span>
      </div>

      <LanguageSelector />

      <div className={styles.userActions}>
        <img
          src={LocationIcon}
          alt="User action"
          className={styles.actionIcon}
          onClick={gotoLocation}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b72650ac3166b0167805536d282fc1b995f180507472b2fec1e0d7e6fe5abed?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256"
          alt="User action"
          className={styles.actionIcon}
          onClick={gotoProfile}
        />
      </div>
    </header>
  );
};

export default Header;
