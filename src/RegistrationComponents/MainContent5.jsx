"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef} from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent5 = () => {
    const navigate = useNavigate();
            
    const handleNextPage = () => {
        navigate("/registrationpage6"); 
    }  
        
    const handlePreviousPage = () => {
        navigate("/registrationpage4");
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
                <h2 className={styles.pageTitle}>Document Upload</h2>
                <LanguageSelector/>
            </header>

            <form className={styles.aadhaarForm}>
                <h3 className={styles.formTitle}>Aadhaar Information</h3>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}> Aadhaar Number <span className={styles.required}>*</span> </label>
                                <input type="tel" pattern="[0-9]{12}" maxLength="12" className={styles.textInput} required/>
                        </div>
                    </div>

                    <div className={styles.formFieldD}>
                        <label className={styles.fieldLabel}> Upload Aadhaar Card<i> (PDF Only)</i> <span className={styles.required}>*</span></label>
                            <div className={styles.dropZone} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                                <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".pdf" required />
                                    {fileName ? (
                                    <p>{fileName}</p>
                                    ) : (
                                    <p>Drag a file here or click to upload</p>
                                    )}
                            </div>
                            {fileName && (
                                <button type="button" className={styles.editFileButton} onClick={handleClick}> Edit File </button>
                            )}
                </div>
            </form>

            <form className={styles.voterIDForm}>
                <h3 className={styles.formTitle}>Voter ID Information</h3>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}> Voter ID <span className={styles.required}>*</span> </label>
                                <input type="text" className={styles.textInput} required/>
                        </div>
                    </div>

                    <div className={styles.formFieldD}>
                        <label className={styles.fieldLabel}> Upload Voter ID<i> (PDF Only)</i> <span className={styles.required}>*</span></label>
                            <div className={styles.dropZone} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                                <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".pdf" required />
                                    {fileName ? (
                                    <p>{fileName}</p>
                                    ) : (
                                    <p>Drag a file here or click to upload</p>
                                    )}
                            </div>
                            {fileName && (
                                <button type="button" className={styles.editFileButton} onClick={handleClick}> Edit File </button>
                            )}
                </div>
            </form>

            <form className={styles.rationCardForm}>
                <h3 className={styles.formTitle}>Ration Card Information (If Applicable)</h3>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}> Ration Card Number <span className={styles.required}></span> </label>
                                <input type="text" className={styles.textInput}/>
                        </div>
                    </div>

                    <div className={styles.formFieldD}>
                        <label className={styles.fieldLabel}> Upload Ration Card<i> (PDF Only)</i> <span className={styles.required}></span></label>
                            <div className={styles.dropZone} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                                <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".pdf" />
                                    {fileName ? (
                                    <p>{fileName}</p>
                                    ) : (
                                    <p>Drag a file here or click to upload</p>
                                    )}
                            </div>
                            {fileName && (
                                <button type="button" className={styles.editFileButton} onClick={handleClick}> Edit File </button>
                            )}
                </div>
            </form>

            <form className={styles.workerIDCardForm}>
                <h3 className={styles.formTitle}>Work ID Information (If Applicable)</h3>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}> Work ID <span className={styles.required}></span> </label>
                                <input type="text"  className={styles.textInput}/>
                        </div>
                    </div>

                    <div className={styles.formFieldD}>
                        <label className={styles.fieldLabel}> Upload Work ID<i> (PDF Only)</i> <span className={styles.required}></span></label>
                            <div className={styles.dropZone} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                                <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".pdf" />
                                    {fileName ? (
                                    <p>{fileName}</p>
                                    ) : (
                                    <p>Drag a file here or click to upload</p>
                                    )}
                            </div>
                            {fileName && (
                                <button type="button" className={styles.editFileButton} onClick={handleClick}> Edit File </button>
                            )}
                </div>
            </form>

            <form className={styles.panForm}>
                <h3 className={styles.formTitle}>Pan Information</h3>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}> Pan Number <span className={styles.required}>*</span> </label>
                                <input type="text" className={styles.textInput} required/>
                        </div>
                    </div>

                    <div className={styles.formFieldD}>
                        <label className={styles.fieldLabel}> Upload Pan Card<i> (PDF Only)</i> <span className={styles.required}>*</span></label>
                            <div className={styles.dropZone} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                                <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".pdf" required/>
                                    {fileName ? (
                                    <p>{fileName}</p>
                                    ) : (
                                    <p>Drag a file here or click to upload</p>
                                    )}
                            </div>
                            {fileName && (
                                <button type="button" className={styles.editFileButton} onClick={handleClick}> Edit File </button>
                            )}
                </div>
            </form>

            <form className={styles.photoForm}>
                <h3 className={styles.formTitle}>Photograph</h3>
                    <div className={styles.formFieldD}>
                        <label className={styles.fieldLabel}> Upload Passport Size Photograph <span className={styles.required}>*</span></label>
                            <div className={styles.dropZone} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
                                <input type="file" className={styles.fileInput} ref={fileInputRef} onChange={handleFileChange} accept=".jpg,.jpeg,.png,.pdf" required />
                                    {fileName ? (
                                    <p>{fileName}</p>
                                    ) : (
                                    <p>Drag a file here or click to upload</p>
                                    )}
                            </div>
                            {fileName && (
                                <button type="button" className={styles.editFileButton} onClick={handleClick}> Edit File </button>
                            )}
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

export default MainContent5;