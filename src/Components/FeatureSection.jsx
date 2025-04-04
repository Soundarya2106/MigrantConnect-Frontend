import React from "react";
import styles from "../DesignFiles/FeatureSection.module.css";

function FeatureSection() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e36434c4e931693149813ed37eb7e24463201604",
      text: "Empower. Connect. Support",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a6c979b2e066072fc24e3a1cf77376944532515",
      text: "Accessibility",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9805601df992b03a23615260ffba6efcfb5d8ff1",
      text: "Safe & Secure Platform",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f88f96cf73971496c2378567e9f58a444ce01ef",
      text: "Report Issues, Get Instant Help",
    },
  ];

  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <div className={styles.featureIconWrapper}>
            <img src={feature.icon} alt="" className={styles.featureIcon} />
          </div>
          <p className={styles.featureText}>{feature.text}</p>
        </div>
      ))}
    </section>
  );
}

export default FeatureSection;
