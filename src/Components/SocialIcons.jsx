import React from 'react';
import styles from '../DesignFiles/Footer.module.css';
import {TwitterIcon, WhatsappIcon, InstagramIcon, FacebookIcon } from '../Components/Icons';

const SocialIcons = () => {
  return (
    <nav className={styles.socialIcons}>
      <a href="#twitter" className={styles.socialIcon} aria-label="Twitter">
        <TwitterIcon />
      </a>
      <a href="#whatsapp" className={styles.socialIcon} aria-label="WhatsApp">
        <WhatsappIcon />
      </a>
      <a href="#instagram" className={styles.socialIcon} aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="#facebook" className={styles.socialIcon} aria-label="Facebook">
        <FacebookIcon />
      </a>
    </nav>
  );
};

export default SocialIcons;
