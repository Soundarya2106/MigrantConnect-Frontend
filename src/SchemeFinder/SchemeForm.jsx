"use client";
import React, { useState } from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import styles from "../SchemeFinder/SchemeFinder.module.css";
import SearchIcon from "../assets/search.png";
import SplCategory from "../SchemeFinder/SplCategory";
import { useNavigate } from "react-router-dom";

const SchemeForm = () => {

  const navigate = useNavigate();

  const showResults = () => {
    navigate("/schemeresult");
  }

  const [selectedCategories, setSelectedCategories] = useState({
    scst: false,
    women: false,
    differentlyAbled: false,
  });

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle only the selected category
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <Header
          title="Find and Apply for Government Schemes"
          icon={SearchIcon}
        />
        <div className={styles.header}>
          <p className={styles.heading}>
            Apply Filters<br></br>
            <i>
              <span>Find the Best Scheme For You!</span>
            </i>
          </p>
        </div>

        <form className={styles.filterForm}>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Income Level <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select income level
                  </option>
                  <option value="noincome">No Income</option>
                  <option value="lessthan5k">Less than ₹5,000 per month</option>
                  <option value="5kto10k">₹5,000 - ₹10,000 per month</option>
                  <option value="10kto20k">₹10,000 - ₹20,000 per month</option>
                  <option value="20kto30k">₹20,000 - ₹30,000 per month</option>
                  <option value="30kto50k">₹30,000 - ₹50,000 per month</option>
                  <option value="50kto1L">₹50,000 - ₹1,00,000 per month</option>
                  <option value="morethan1L">
                    More than ₹1,00,000 per month
                  </option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Occupation Type <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select occupation type
                  </option>
                  <option value="agriculture_worker">Agriculture Worker</option>
                  <option value="construction_worker">
                    Construction Worker
                  </option>
                  <option value="factory_worker">Factory Worker</option>
                  <option value="transport_delivery">
                    Transport & Delivery Worker
                  </option>
                  <option value="street_vendor">
                    Street Vendor / Small Business
                  </option>
                  <option value="domestic_worker">
                    Domestic Worker (Housekeeping / Cook)
                  </option>
                  <option value="skilled_labor">
                    Skilled Labor (Electrician / Plumber / Mechanic)
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Age Group <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select age group
                  </option>
                  <option value="18-25">18 - 25 years</option>
                  <option value="26-35">26 - 35 years</option>
                  <option value="36-45">36 - 45 years</option>
                  <option value="46-55">46 - 55 years</option>
                  <option value="56-above">56 years & above</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Gender <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                District <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select your district
                  </option>
                  <option value="Ariyalur">Ariyalur</option>
                  <option value="Chengalpattu">Chengalpattu</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Cuddalore">Cuddalore</option>
                  <option value="Dharmapuri">Dharmapuri</option>
                  <option value="Dindigul">Dindigul</option>
                  <option value="Erode">Erode</option>
                  <option value="Kallakurichi">Kallakurichi</option>
                  <option value="Kanchipuram">Kanchipuram</option>
                  <option value="Kanyakumari">Kanyakumari</option>
                  <option value="Karur">Karur</option>
                  <option value="Krishnagiri">Krishnagiri</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Mayiladuthurai">Mayiladuthurai</option>
                  <option value="Nagapattinam">Nagapattinam</option>
                  <option value="Namakkal">Namakkal</option>
                  <option value="Nilgiris">Nilgiris</option>
                  <option value="Perambalur">Perambalur</option>
                  <option value="Pudukkottai">Pudukkottai</option>
                  <option value="Ramanathapuram">Ramanathapuram</option>
                  <option value="Ranipet">Ranipet</option>
                  <option value="Salem">Salem</option>
                  <option value="Sivaganga">Sivaganga</option>
                  <option value="Tenkasi">Tenkasi</option>
                  <option value="Thanjavur">Thanjavur</option>
                  <option value="Theni">Theni</option>
                  <option value="Thoothukudi">Thoothukudi</option>
                  <option value="Tiruchirappalli">Tiruchirappalli</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Tirupattur">Tirupattur</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Tiruvallur">Tiruvallur</option>
                  <option value="Tiruvannamalai">Tiruvannamalai</option>
                  <option value="Tiruvarur">Tiruvarur</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Viluppuram">Viluppuram</option>
                  <option value="Virudhunagar">Virudhunagar</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Housing Status <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select your housing status
                  </option>
                  <option value="Own House">Own House</option>
                  <option value="Rented House">Rented House</option>
                  <option value="Government Housing">
                    Government Housing (Slum Board/PMAY)
                  </option>
                  <option value="Employer-Provided Housing">
                    Employer-Provided Housing
                  </option>
                  <option value="Temporary Shelter">Temporary Shelter</option>
                  <option value="Homeless">Homeless</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Special Category <span className={styles.required}></span>
              </label>
            </div>
          </div>
          <form className={styles.filterForm}>
          <div className={styles.splcategory}>
                <SplCategory
                  checked={selectedCategories.scst}
                  onChange={() => handleCheckboxChange("scst")}
                  label="SC/ST"
                />

                <SplCategory
                  checked={selectedCategories.women}
                  onChange={() => handleCheckboxChange("women")}
                  label="Women (Widow/Single Mother/SHG Member)"
                />

                <SplCategory
                  checked={selectedCategories.differentlyAbled}
                  onChange={() => handleCheckboxChange("differentlyAbled")}
                  label="Differently-Abled Person"
                />
              </div>
          </form>

          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButton} onClick={showResults}>
              Find Eligible Schemes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SchemeForm;
