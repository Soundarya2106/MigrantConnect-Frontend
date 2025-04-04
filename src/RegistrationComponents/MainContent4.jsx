"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef} from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent4 = () => {
    const navigate = useNavigate();
        
    const handleNextPage = () => {
        navigate("/registrationpage5");
    }  
    
    const handlePreviousPage = () => {
        navigate("/registrationpage3");
    }

    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

   const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

    return (
        <section className={styles.mainContent}>
          <header className={styles.contentHeader}>
            <h2 className={styles.pageTitle}>Work Information</h2>
            <LanguageSelector/>
          </header>
    
          <nav className={styles.progressNav}>
            <ul className={styles.progressSteps}>
              <li className={styles.progressStep}>
                <div className={styles.stepIndicator} />
                <span className={styles.stepLabel}>Bank Information</span>
              </li>
              <li className={styles.progressStep}>
                <div className={styles.stepIndicator} />
                <span className={styles.stepLabel}>Nominee Details</span>
              </li>
              <li className={styles.progressStep}>
                <div className={styles.stepIndicator} />
                <span className={styles.stepLabel}>Bank Document Upload</span>
              </li>
            </ul>
          </nav>

            <form className={styles.bankDetailsForm}>
                <h3 className={styles.formTitle}>Bank Information</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Bank Name <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Branch Name <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Account Holder Name <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Account Number <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Confirm Account Number <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> IFSC Code <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>
                </div>
            </form>

            <form className={styles.nomineeDetailsForm}>
                <h3 className={styles.formTitle}>Nominee Details (if Applicable)</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Nominee Name <span className={styles.required}></span> </label>
                        <input type="text" className={styles.textInput}/>
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
                        <label className={styles.fieldLabel}> Nominee Contact Number <span className={styles.required}></span> </label>
                        <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput}/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Nominee Address <span className={styles.required}></span> </label>
                        <input type="text" className={styles.textInput}/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Nominee Aadhaar Number <span className={styles.required}></span> </label>
                        <input type="text" className={styles.textInput} />
                    </div>
                </div>
            </form>

            <form className={styles.bankDocForm}>
                <h3 className={styles.formTitle}>Bank Document Upload </h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Upload Bank Passbook<i> (PDF Only)</i> <span className={styles.required}>*</span></label>
                        <div className={styles.dropZoneB} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                            <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".pdf" />
                                {fileName ? (
                                <p>{fileName}</p>
                                ) : (
                                <p>Drag a file here or click to upload</p>
                                )}
                        </div>
                        {fileName && (
                            <button 
                            type="button" 
                            className={styles.editFileButton} 
                            onClick={handleClick}
                            >
                            Edit File
                            </button>
                        )}
                    </div>
                </div>
            </form>

            <div className="submitWrapper">
                <button type="submit" className={styles.submitButton} onClick={handleNextPage}>  
                    Save & Next
                </button>      
                <button type="submit" className={styles.backButton} onClick={handlePreviousPage}>
                    Back
                </button>
            </div>
        </section>
    )
}

export default MainContent4;
