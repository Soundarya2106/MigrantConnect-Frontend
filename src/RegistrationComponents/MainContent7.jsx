"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent7 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/registrationpage8");
  };

  const handlePreviousPage = () => {
    navigate("/registrationpage6");
  };
  return (
    <section className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h2 className={styles.pageTitle}>Emergency Contact</h2>
        <LanguageSelector />
      </header>

      <nav className={styles.progressNav}>
        <ul className={styles.progressSteps}>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Primary Emergency Contact</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Secondary Emergency Contact</span>
          </li>
        </ul>
      </nav>

      <form className={styles.PContactForm}>
        <h3 className={styles.formTitle}>Primary Emergency Contact</h3>
        <div className={styles.formGrid}>
        <div className={styles.formField}>
                <label className={styles.fieldLabel}> Name <span className={styles.required}>*</span> </label>
                <input type="text" className={styles.textInput} required/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Relationship to Worker <span className={styles.required}>*</span></label>
                    <div className={styles.selectWrapper}> 
                        <select className={`${styles.textInput} ${styles.selectInput}`} required>
                            <option value="" disabled selected>Select relationship</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="guardian">Guardian</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Contact Number <span className={styles.required}>*</span> </label>
                <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput} required/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Address <span className={styles.required}>*</span> </label>
                <input type="text" className={styles.textInput} required/>
            </div>            
        </div>
      </form>

      <form className={styles.SContactForm}>
        <h3 className={styles.formTitle}>Secondary Emergency Contact (if Applicable)</h3>
        <div className={styles.formGrid}>
        <div className={styles.formField}>
                <label className={styles.fieldLabel}> Name <span className={styles.required}></span> </label>
                <input type="text" className={styles.textInput}/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Relationship to Worker <span className={styles.required}></span></label>
                    <div className={styles.selectWrapper}> 
                        <select className={`${styles.textInput} ${styles.selectInput}`}>
                            <option value="" disabled selected>Select relationship</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="guardian">Guardian</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Contact Number <span className={styles.required}></span> </label>
                <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput}/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Address <span className={styles.required}></span> </label>
                <input type="text" className={styles.textInput}/>
            </div>
        </div>
      </form>

      <div className="submitWrapper">
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleNextPage}
        >
          Save & Next
        </button>
        <button
          type="submit"
          className={styles.backButton}
          onClick={handlePreviousPage}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default MainContent7;
