"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent1 = () => {
  const navigate = useNavigate();
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCaste, setSelectedCaste] = useState("");

  const handleNextPage = () => {
    navigate("/registrationpage2");
  }

  // Caste category options
  const categoryOptionsByReligion = {
    Hinduism: ["General", "OBC", "BC", "MBC", "SC", "ST"],
    Islam: ["Islam_General", "Islam_OBC"],
    Christianity: ["Christianity_General", "Christianity_SC"],
    Sikhism: ["Sikhism_General", "Sikhism_OBC", "Sikshism_SC"],
    Buddhism: ["Buddhism_General", "Buddhism_SC"],
    Jainism: ["Jainism_General"],
    Zoroastrianism: ["Zoroastrianism_General"],
    Judaism: ["Judaism_General"],
    Bahai: ["Bahai_General"],
    Others: ["Others"]
  };

  // Caste options based on category
  const casteOptions = {
    General: ["Brahmin", "Rajput", "Kayastha", "Kshatriya", "Vaishya", "Others"],
    OBC: ["Yadav", "Kurmi", "Jat", "Teli", "Gujjar", "Ahir", "Maratha", "Kumbhar", "Koli", "Others"],
    BC: ["Vanniyar", "Gounder", "Mudaliar", "Sourashtra", "Naidu", "Chettiar", "Ezhava", "Billava", "Others"],
    MBC: ["Devar", "Nadar", "Vanniyar", "Agamudayar", "Moopanar", "Thuluva Vellalar", "Gavara", "Kallar", "Others"],
    SC: ["Adi Dravida", "Paraiyar", "Chakkiliyan", "Pallan", "Arunthathiyar", "Madiga", "Mala", "Others"],
    ST: ["Irula", "Kurumbar", "Toda", "Kota", "Paniyan", "Santal", "Gond", "Bhil", "Others"],
    // Islam
    "Islam_General": ["Sayyid", "Sheikh", "Pathan", "Mughal", "Others"],
    "Islam_OBC": ["Julaha", "Ansari", "Qureshi", "Mansoori", "Chik", "Kasgar", "Kunjra", "Others"],
    // Christianity
    "Christianity_General": ["Nadar Christian", "Latin Catholic", "Syrian Christian", "Anglo Indian", "Others"],
    "Christianity_SC": ["Adi Dravida Christian", "Paraiyar Christian", "Arunthathiyar Christian", "Others"],
    // Sikhism
    "Sikhism_General": ["Jat Sikh", "Khatri Sikh", "Arora Sikh", "Others"],
    "Sikhism_OBC": ["Ramgarhia", "Tarkhan", "Lohar", "Others"],
    "Sikhism_SC": ["Mazhabi Sikh", "Ravidassia Sikh", "Others"],
    // Buddhism
    "Buddhism_General": ["Tibetan Buddhist", "Theravada", "Mahayana", "Vajrayana", "Others"],
    "Buddhism_SC": ["Neo Buddhist (Dalit Buddhist)", "Others"],
    // Jainism
    "Jainism_General": ["Digambara", "Shwetambara", "Terapanthi", "Others"],
    // Zoroastrianism
    "Zoroastrianism_General": ["Parsi", "Irani", "Others"],
    // Judaism
    "Judaism_General": ["Bene Israel", "Cochin Jews", "Baghdadi Jews", "Others"],
    // Bahai
    "Bahai_General": ["No caste distinction"],
    "Others" : ["Others"]
  };


  return (
    <section className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h2 className={styles.pageTitle}>Basic Information</h2>
        <LanguageSelector/>
      </header>

      <nav className={styles.progressNav}>
        <ul className={styles.progressSteps}>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Personal Details</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Contact Details</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Language Preference</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Migration Details</span>
          </li>
        </ul>
      </nav>

      <form className={styles.personalDetailsForm}>
        <h3 className={styles.formTitle}>Personal Details</h3>

        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Name
              <span className={styles.required}>*</span>
            </label>
            <input type="text" className={styles.textInput} required />
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Date of Birth
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.dateInputGroup}>
              <input
                type="text"
                className={styles.dateInput}
                placeholder="DD"
              />
              <input
                type="text"
                className={styles.dateInput}
                placeholder="MM"
              />
              <input
                type="text"
                className={styles.dateInput}
                placeholder="YYYY"
              />
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}> Gender <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>


          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Nationality
              <span className={styles.required}>*</span>
            </label>
            <input type="text" className={styles.textInput} value="Indian" disabled />
          </div>

           {/* Religion Dropdown */}
           <div className={styles.formSection}>
          <div className={styles.formField}>
            <label className={styles.fieldLabel}>Religion <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}>
              <select
                className={`${styles.textInput} ${styles.selectInput}`}
                value={selectedReligion}
                onChange={(e) => {
                  setSelectedReligion(e.target.value);
                  setSelectedCategory("");
                  setSelectedCaste("");
                }}
                required
              >
                <option value="" disabled>Select your religion</option>
                {Object.keys(categoryOptionsByReligion).map((religion) => (
                  <option key={religion} value={religion}>{religion}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {selectedReligion && (
          <div className={styles.formSection}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Caste Category <span className={styles.required}>*</span></label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedCaste("");
                  }}
                  required
                >
                  <option value="" disabled>Select your category</option>
                  {categoryOptionsByReligion[selectedReligion]?.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {selectedCategory && (
          <div className={styles.formSection}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Specific Caste <span className={styles.required}>*</span></label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  value={selectedCaste}
                  onChange={(e) => setSelectedCaste(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your caste</option>
                  {casteOptions[`${selectedReligion}_${selectedCategory}`] || casteOptions[selectedCategory]?.map((caste) => (
                    <option key={caste} value={caste}>{caste}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

          <div className={styles.formField}>
            <label className={styles.fieldLabel}> Education Level <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your education level</option>
                <option value="noformaleducation">No formal Education</option>
                <option value="primary">Primary Education (Up to 5th grade)</option>
                <option value="middle">Middle Education (6th - 8th grade)</option>
                <option value="middle">High School (9th - 12th grade)</option>
                <option value="diploma">Diploma</option>
                <option value="ug">Undergraduate</option>
                <option value="pg">Postgraduate</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}> Blood Group <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your blood group</option>
                <option value="aplus">A+</option>
                <option value="aminus">A-</option>
                <option value="bplus">B+</option>
                <option value="bminus">B-</option>
                <option value="abplus">AB+</option>
                <option value="abminus">AB-</option>
                <option value="oplus">O+</option>
                <option value="ominus">O-</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <form className={styles.contactDetailsForm}>
        <h3 className={styles.formTitle}>Contact Details</h3>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Contact Number
              <span className={styles.required}>*</span>
            </label>
            <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput} value="9876543210" readOnly  required />
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Alternate Contact Number
              <span className={styles.required}>*</span>
            </label>
            <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput} required />
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Verify Alternate Number (OTP)
              <span className={styles.required}>*</span>
            </label>
            <input type="text" className={styles.textInput} pattern="\d{4,6}" maxLength="6" inputMode="numeric" autoComplete="one-time-code" required />
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Email ID
              <span className={styles.required}>*</span>
            </label>
            <input type="text" className={styles.textInput} required />
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Verify Email ID (OTP)
              <span className={styles.required}>*</span>
            </label>
            <input type="text" className={styles.textInput} pattern="\d{4,6}" maxLength="6" inputMode="numeric" autoComplete="one-time-code" required />
          </div>
        </div>
      </form>

      <form className={styles.languagePreferenceForm}>
        <h3 className={styles.formTitle}>Language Preference</h3>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.fieldLabel}> Primary Language <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your primary language</option>
                <option value="Assamese">Assamese</option>
                <option value="Bengali">Bengali</option>
                <option value="Bodo">Bodo</option>
                <option value="Dogri">Dogri</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Hindi">Hindi</option>
                <option value="Kannada">Kannada</option>
                <option value="Kashmiri">Kashmiri</option>
                <option value="Konkani">Konkani</option>
                <option value="Maithili">Maithili</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Manipuri">Manipuri</option>
                <option value="Marathi">Marathi</option>
                <option value="Nepali">Nepali</option>
                <option value="Odia">Odia</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Sanskrit">Sanskrit</option>
                <option value="Santali">Santali</option>
                <option value="Sindhi">Sindhi</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Urdu">Urdu</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Other Known Languages
              <span className={styles.required}></span>
            </label>
            <input type="text" className={styles.textInput}/>
          </div>
        </div>
      </form>

      <form className={styles.migrationDetailsForm}>
        <h3 className={styles.formTitle}>Migration Details</h3>
        <div className={styles.formGrid}>
         <div className={styles.formField}>
            <label className={styles.fieldLabel}> State of Origin <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Current State
              <span className={styles.required}>*</span>
            </label>
            <input type="text" className={styles.textInput} value="Tamil Nadu" disabled />
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}> Current City <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your current city</option>
                <option value="Ambur">Ambur</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Erode">Erode</option>
                <option value="Gudiyatham">Gudiyatham</option>
                <option value="Hosur">Hosur</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Karaikudi">Karaikudi</option>
                <option value="Karur">Karur</option>
                <option value="Komarapalayam">Komarapalayam</option>
                <option value="Kumbakonam">Kumbakonam</option>
                <option value="Madurai">Madurai</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Nagercoil">Nagercoil</option>
                <option value="Neyveli">Neyveli</option>
                <option value="Pollachi">Pollachi</option>
                <option value="Pudukottai">Pudukottai</option>
                <option value="Rajapalayam">Rajapalayam</option>
                <option value="Ranipet">Ranipet</option>
                <option value="Salem">Salem</option>
                <option value="Sivakasi">Sivakasi</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Udhagamandalam">Udhagamandalam</option>
                <option value="Vaniyambadi">Vaniyambadi</option>
                <option value="Vellore">Vellore</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}> Migration Reason <span className={styles.required}>*</span></label>
            <div className={styles.selectWrapper}> 
              <select className={`${styles.textInput} ${styles.selectInput}`} required>
                <option value="" disabled selected>Select your reason</option>
                <option value="Employment">Employment</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Marriage">Marriage</option>
                <option value="Family Relocation">Family Relocation</option>
                <option value="Health Treatment">Health Treatment</option>
                <option value="Natural Disaster">Natural Disaster</option>
                <option value="Conflict/Violence">Conflict/Violence</option>
                <option value="Better Living Conditions">Better Living Conditions</option>
                <option value="Government Policy/Resettlement">Government Policy/Resettlement</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <div className="submitWrapper">
      <button type="submit" className={styles.submitButton} onClick={handleNextPage}>
          Save & Next
      </button>
      </div>
    </section>
  );
};

export default MainContent1;
