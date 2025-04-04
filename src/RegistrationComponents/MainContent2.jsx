"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent2 = () => {
    const [currentAddress, setCurrentAddress] = useState({
        houseNum: "",
        street: "",
        city: "",
        district: "",
        pincode: "",
        landmark: "",
      });
    
      const [permanentAddress, setPermanentAddress] = useState({
        houseNum: "",
        street: "",
        city: "",
        district: "",
        pincode: "",
        landmark: "",
      });
    
      const [sameAsCurrent, setSameAsCurrent] = useState(false);
      const navigate = useNavigate();

      const handleNextPage = () => {
        navigate("/registrationpage3");
      }  

      const handlePreviousPage = () => {
        navigate("/registrationpage1");
      }
    
      const handleCurrentAddressChange = (e) => {
        setCurrentAddress({ ...currentAddress, [e.target.name]: e.target.value });
    
        // Autofill permanent address if checkbox is checked
        if (sameAsCurrent) {
          setPermanentAddress({ ...currentAddress, [e.target.name]: e.target.value });
        }
      };
    
      // Handle change for permanent address manually
      const handlePermanentAddressChange = (e) => {
        setPermanentAddress({ ...permanentAddress, [e.target.name]: e.target.value });
      };
    
      // Handle checkbox toggle
      const handleCheckboxChange = () => {
        setSameAsCurrent(!sameAsCurrent);
    
        if (!sameAsCurrent) {
          // Copy current address to permanent address when checked
          setPermanentAddress({ ...currentAddress });
        } else {
          // Clear permanent address when unchecked
          setPermanentAddress({ houseNum: "" ,street: "", city: "", district:"", state: "", pincode: "", landmark:"" });
        }
      };
    

  return (
    <section className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h2 className={styles.pageTitle}>Address Details</h2>
        <LanguageSelector/>
      </header>

      <nav className={styles.progressNav}>
        <ul className={styles.progressSteps}>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Current Address</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Permanent Address</span>
          </li>
          <li className={styles.progressStep}>
            <div className={styles.stepIndicator} />
            <span className={styles.stepLabel}>Other Details</span>
          </li>
        </ul>
      </nav>

      <form className={styles.currentAddressForm}>
        <h3 className={styles.formTitle}>Current Address</h3>
        <div className={styles.formGrid}>
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> House/Flat Number <span className={styles.required}>*</span></label>
                <input type="text" name="houseNum" value={currentAddress.houseNum} onChange={handleCurrentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Street/Locality<span className={styles.required}>*</span></label>
                <input type="text" name="street" value={currentAddress.street} onChange={handleCurrentAddressChange}className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> City/Town/Village <span className={styles.required}>*</span></label>
                <input type="text" name="city" value={currentAddress.city} onChange={handleCurrentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> District <span className={styles.required}>*</span></label>
                <input type="text" name="district" value={currentAddress.district} onChange={handleCurrentAddressChange}className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> State <span className={styles.required}>*</span></label>
                <input type="text" value="Tamil Nadu" className={styles.textInput} disabled />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Pincode <span className={styles.required}>*</span></label>
                <input type="text" name="pincode" value={currentAddress.pincode} onChange={handleCurrentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Landmark <span className={styles.required}></span></label>
                <input type="text" name="landmark" value={currentAddress.landmark} onChange={handleCurrentAddressChange} className={styles.textInput}/>
            </div>
        </div>
      </form>

      <div className={styles.checkboxWrapper}>
        <input type="checkbox" id="sameAddress" checked={sameAsCurrent} onChange={handleCheckboxChange} />
        <label htmlFor="sameAddress">Same as Current Address</label>
      </div>

      <form className={styles.permanentAddressForm}>
        <h3 className={styles.formTitle}>Permanent Address</h3>
        <div className={styles.formGrid}>
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> House/Flat Number <span className={styles.required}>*</span></label>
                <input type="text" name="houseNum" value={permanentAddress.houseNum} onChange={handlePermanentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Street/Locality<span className={styles.required}>*</span></label>
                <input type="text" name="street" value={permanentAddress.street} onChange={handlePermanentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> City/Town/Village <span className={styles.required}>*</span></label>
                <input type="text" name="city" value={permanentAddress.city} onChange={handlePermanentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> District <span className={styles.required}>*</span></label>
                <input type="text" name="district" value={permanentAddress.district} onChange={handleCurrentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> State <span className={styles.required}>*</span></label>
                <input type="text" value="Tamil Nadu" className={styles.textInput} disabled />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Pincode <span className={styles.required}>*</span></label>
                <input type="text" name="pincode" value={permanentAddress.pincode} onChange={handleCurrentAddressChange} className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Landmark <span className={styles.required}></span></label>
                <input type="text" name="landmark" value={permanentAddress.landmark} onChange={handleCurrentAddressChange} className={styles.textInput}/>
            </div>
        </div>
      </form>

      <form className={styles.OtherAddDetailsForm}>
        <h3 className={styles.formTitle}>Additional Details</h3>
        <div className={styles.formGrid}>
            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Type of Residence <span className={styles.required}>*</span></label>
                <div className={styles.selectWrapper}> 
                    <select className={`${styles.textInput} ${styles.selectInput}`} required>
                        <option value="" disabled selected>Select your type</option>
                        <option value="owned">Owned</option>
                        <option value="rented">Rented</option>
                        <option value="leased">Leased</option>
                        <option value="government_quarters">Government Quarters</option>
                        <option value="company_provided">Company Provided</option>
                        <option value="hostel">Hostel</option>
                    </select> 
                </div>
            </div>

            <div className={styles.formField}>
                <label className={styles.fieldLabel}> Duration of Stay at Current Address <span className={styles.required}>*</span></label>
                <div className={styles.selectWrapper}> 
                    <select className={`${styles.textInput} ${styles.selectInput}`} required>
                        <option value="" disabled selected>Select your duration</option>
                        <option value="less_than_6_months">Less than 6 months</option>
                        <option value="6_months_1_year">6 months - 1 year</option>
                        <option value="1_3_years">1 - 3 years</option>
                        <option value="3_5_years">3 - 5 years</option>
                        <option value="5_10_years">5 - 10 years</option>
                        <option value="more_than_10_years">More than 10 years</option>
                    </select> 
                </div>
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
  );
};

export default MainContent2;