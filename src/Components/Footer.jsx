"use client";
import React from 'react';
import styles from '../DesignFiles/Footer.module.css';
import SocialIcons from '../Components/SocialIcons';
import QuickLinks from '../Components/QuickLinks';
import Copyright from '../Components/CopyRight';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerTop}>
        <SocialIcons />
        <QuickLinks />
      </section>
      <section className={styles.footerBottom}>
        <Copyright />
      </section>
    </footer>
  );
}

export default Footer;
