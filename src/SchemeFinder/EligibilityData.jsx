import React from "react";
import styles from "./SchemeFinder.module.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const EligibilityDetails = () => {
    const navigate = useNavigate();

    const editFilters = () => {
        navigate("/schemeform");
    }
  const eligibilityData = {
    "Income Level": "₹1,80,000 per year",
    "Occupation Type": "Construction",
    "Age Group": "35-45 Years",
    "Gender": "Male",
    "District": "Chennai",
    "Housing Status": "Rented House",
    "Special Category": "SC/ST", // Empty if no special category is selected
  };

  return (
    <div className={styles.eligibilityCard}>
      <h3 className={styles.Etitle}>Your Eligibility Details</h3>
      <div className={styles.Edetails}>
        {Object.entries(eligibilityData).map(([label, value]) => (
          value ? ( // Check if value is not empty
            <div key={label} className={styles.EdetailItem}>
              <span className={styles.Elabel}>{label}:</span>
              <span className={styles.Evalue}>{value}</span>
            </div>
          ) : null // Don't render if the value is empty
        ))}
      </div>
      <button className={styles.EeditButton} onClick={editFilters}>Edit Filters</button>
    </div>
  );
};

export default EligibilityDetails;
