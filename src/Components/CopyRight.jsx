import React from 'react';
import styles from '../DesignFiles/Footer.module.css';

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <p className={styles.copyrightText}>
        © 2025 MigrantConnect. All Rights Reserved.
      </p>
      <p className={styles.tagline}>
        🤍 Together, We Build a Better Future!
      </p>
    </div>
  );
};

export default Copyright;
