import React from "react";
import styles from "../UserRightsAndResponsibilities/UserRightsAndResponsibilities.module.css";

const Header = ({title, icon}) => {
  return (
    <header className={styles.header}>
      {icon && <img src={icon} alt="Page Icon" className={styles.headerIcon} />}
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

export default Header;
