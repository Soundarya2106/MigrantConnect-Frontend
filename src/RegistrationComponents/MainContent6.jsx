"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent6 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/registrationpage7");
  };

  const handlePreviousPage = () => {
    navigate("/registrationpage5");
  };
  return (
    <section className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h2 className={styles.pageTitle}>Family Details</h2>
        <LanguageSelector />
      </header>

      <nav className={styles.progressNav}>
        <ul className={styles.progressSteps}>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Family Structure</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Family Members and Contact</span>
          </li>
        </ul>
      </nav>

      <form className={styles.familyStructureForm}>
        <h3 className={styles.formTitle}>Family Structure</h3>
        <div className={styles.formGrid}>
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Marital Status <span className={styles.required}>*</span></label>
                    <div className={styles.selectWrapper}> 
                        <select className={`${styles.textInput} ${styles.selectInput}`} required>
                            <option value="" disabled selected>Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Number of Dependents <span className={styles.required}>*</span></label>
                    <div className={styles.selectWrapper}> 
                        <select className={`${styles.textInput} ${styles.selectInput}`} required>
                            <option value="" disabled selected>Select dependents</option>
                            <option value="0">None</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8+">8 or more</option>
                        </select>
                    </div>
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Spouse Name <span className={styles.required}></span> </label>
                <input type="text" className={styles.textInput}/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Spouse Age <span className={styles.required}></span> </label>
                <input type="number" className={styles.textInput}/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Spouse Contact Number <span className={styles.required}></span> </label>
                <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput}/>
            </div>
            
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Spouse Occupation <span className={styles.required}></span> </label>
                <input type="text" className={styles.textInput}/>
            </div>
            
        </div>
      </form>

      <form className={styles.familyMembersForm}>
        <h3 className={styles.formTitle}>Family Members and Contact</h3>
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
                <label className={styles.fieldLabel}> Occupation <span className={styles.required}>*</span> </label>
                <input type="text" className={styles.textInput} required/>
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Number of Children <span className={styles.required}></span> </label>
                <input type="number" className={styles.textInput}/>
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Children Age Group <span className={styles.required}></span></label>
                    <div className={styles.selectWrapper}> 
                        <select className={`${styles.textInput} ${styles.selectInput}`}>
                            <option value="" disabled selected>Select age group</option>
                            <option value="0-2">0 - 2 years (Infant/Toddler)</option>
                            <option value="3-5">3 - 5 years (Preschooler)</option>
                            <option value="6-12">6 - 12 years (School-age Child)</option>
                            <option value="13-17">13 - 17 years (Teenager)</option>
                            <option value="18+">18+ years (Adult Dependent)</option>
                        </select>
                    </div>
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

export default MainContent6;
