"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../RegistrationDesignFiles/RegistrationPage.module.css";
import LanguageSelector from "../Components/LanguageSelector";

const MainContent3 = () => {
    const [selectedSector, setSelectedSector] = useState("");
    const [selectedJobRole, setSelectedJobRole] = useState("");
    const navigate = useNavigate();
    
    const handleNextPage = () => {
        navigate("/registrationpage4");
      }  

      const handlePreviousPage = () => {
        navigate("/registrationpage2");
      }

      const jobRolesByIndustry = {
        Agriculture: ["Farmer", "Agricultural Laborer", "Harvester", "Irrigation Worker", "Livestock Keeper"],
        Construction: ["Mason", "Carpenter", "Electrician", "Plumber", "Painter", "Welder", "Construction Laborer", "Site Supervisor", "Civil Engineer"],
        Mining: ["Miner", "Driller", "Geologist", "Excavation Worker", "Machine Operator", "Safety Officer", "Mine Supervisor"],
        Manufacturing: ["Factory Worker", "Machine Operator", "Assembly Line Worker", "Quality Checker", "Supervisor", "Safety Officer", "Technician"],
        Retail: ["Cashier", "Store Keeper", "Sales Assistant", "Stock Handler", "Shop Supervisor"],
        Transport: ["Driver", "Conductor", "Warehouse Worker", "Delivery Person", "Cargo Handler"],
        Hospitality: ["Chef", "Waiter", "Housekeeping Staff", "Receptionist", "Hotel Manager", "Tour Guide"],
        Domestic_Work: ["Housemaid", "Cook", "Nanny", "Elderly Caretaker", "Gardener"],
        Healthcare: ["Nurse", "Paramedic", "Caregiver", "Medical Assistant"],
        IT_Software: ["Software Developer", "UI/UX Designer", "Network Engineer", "Data Analyst", "Cybersecurity Specialist", "System Administrator"],
        Education: ["Teacher", "Professor", "Tutor", "School Administrator"],
        Government_Services: ["Clerk", "Officer", "Inspector", "Police Constable", "Firefighter"],
        Arts_Entertainment: ["Musician", "Actor", "Dancer", "Photographer", "Graphic Designer"],
      }

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
                <span className={styles.stepLabel}>Employement Details</span>
              </li>
              <li className={styles.progressStep}>
                <div className={styles.stepIndicator} />
                <span className={styles.stepLabel}>Employer Details</span>
              </li>
              <li className={styles.progressStep}>
                <div className={styles.stepIndicator} />
                <span className={styles.stepLabel}>Work Duration & Experience</span>
              </li>
              <li className={styles.progressStep}>
                <div className={styles.stepIndicator} />
                <span className={styles.stepLabel}>Income & Skills</span>
              </li>
            </ul>
          </nav>

          <form className={styles.workDetailsForm}>
                <h3 className={styles.formTitle}>Employment Details</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Employment Type <span className={styles.required}>*</span></label>
                        <div className={styles.selectWrapper}> 
                            <select className={`${styles.textInput} ${styles.selectInput}`} required>
                                <option value="" disabled selected>Select your type</option>
                                <option value="daily_wage">Daily Wage Worker</option>
                                <option value="contract">Contract Worker</option>
                                <option value="self_employed">Self-Employed</option>
                                <option value="private">Private Sector Employee</option>
                                <option value="government">Government Employee</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="part_time">Part-Time Worker</option>
                                <option value="full_time">Full-Time Worker</option>
                                <option value="apprentice">Apprentice/Trainee</option>
                                <option value="intern">Intern</option>
                                <option value="unemployed">Unemployed</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>
                            Work Sector <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.selectWrapper}>
                            <select
                                className={`${styles.textInput} ${styles.selectInput}`}
                                value={selectedSector}
                                onChange={(e) => {
                                setSelectedSector(e.target.value);
                                setSelectedJobRole(""); // Reset job role on sector change
                                }}
                                required
                            >
                                <option value="" disabled>Select your work sector</option>
                                {Object.keys(jobRolesByIndustry).map((sector) => (
                                <option key={sector} value={sector}>{sector}</option>
                                ))}
                            </select>
                            </div>
                        </div>
                        </div>

                        <div className={styles.formSection}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>
                            Job Role / Designation <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.selectWrapper}>
                            <select
                                className={`${styles.textInput} ${styles.selectInput}`}
                                value={selectedJobRole}
                                onChange={(e) => setSelectedJobRole(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select your job role</option>
                                {selectedSector && jobRolesByIndustry[selectedSector]?.map((jobRole) => (
                                <option key={jobRole} value={jobRole}>{jobRole}</option>
                                ))}
                                <option value="Other">Other</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
          </form>

          <form className={styles.employerDetailsForm}>
                <h3 className={styles.formTitle}>Employer Details</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Employer Name <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Employer Contact Number <span className={styles.required}>*</span> </label>
                        <input type="tel" pattern="[0-9]{10}" maxLength="10" className={styles.textInput} required/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Work Location <span className={styles.required}>*</span> </label>
                        <input type="text" className={styles.textInput} required />
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Work Contract Available? <span className={styles.required}>*</span></label>
                        <div className={styles.selectWrapper}> 
                            <select className={`${styles.textInput} ${styles.selectInput}`} required>
                                <option value="" disabled selected>Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>
          </form>

          <form className={styles.workDurationForm}>
                <h3 className={styles.formTitle}>Work Duration and Experience</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Work Duration <span className={styles.required}>*</span></label>
                        <div className={styles.selectWrapper}> 
                            <select className={`${styles.textInput} ${styles.selectInput}`} required>
                                <option value="" disabled selected>Select duration</option>
                                <option value="lessthan6">Less than 6 months</option>
                                <option value="6mto1y">6 months - 1 year</option>
                                <option value="1yto3y">1 - 3 years</option>
                                <option value="3yto5y">3 - 5 years</option>
                                <option value="3yto10y">5 - 10 years</option>
                                <option value="morethan10y">More than 10 years</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Previous Work Experience <span className={styles.required}>*</span></label>
                        <div className={styles.selectWrapper}> 
                            <select className={`${styles.textInput} ${styles.selectInput}`} required>
                                <option value="" disabled selected>Select duration</option>
                                <option value="noexp">No previous Experience</option>
                                <option value="lessthan6">Less than 6 months</option>
                                <option value="6mto1y">6 months - 1 year</option>
                                <option value="1yto3y">1 - 3 years</option>
                                <option value="3yto5y">3 - 5 years</option>
                                <option value="3yto10y">5 - 10 years</option>
                                <option value="morethan10y">More than 10 years</option>
                            </select>
                        </div>
                    </div>
                </div>
          </form>

          <form className={styles.incomeDetailsForm}>
                <h3 className={styles.formTitle}>Income and Skills</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Income <span className={styles.required}>*</span></label>
                        <div className={styles.selectWrapper}> 
                            <select className={`${styles.textInput} ${styles.selectInput}`} required>
                                <option value="" disabled selected>Select income range</option>
                                <option value="noincome">No Income</option>
                                <option value="lessthan5k">Less than ₹5,000 per month</option>
                                <option value="5kto10k">₹5,000 - ₹10,000 per month</option>
                                <option value="10kto20k">₹10,000 - ₹20,000 per month</option>
                                <option value="20kto30k">₹20,000 - ₹30,000 per month</option>
                                <option value="30kto50k">₹30,000 - ₹50,000 per month</option>
                                <option value="50kto1L">₹50,000 - ₹1,00,000 per month</option>
                                <option value="morethan1L">More than ₹1,00,000 per month</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Skills <span className={styles.required}></span> </label>
                        <input type="text" className={styles.textInput}/>
                    </div>

                    <div className={styles.formField}>
                        <label className={styles.fieldLabel}> Certifications <span className={styles.required}></span> </label>
                        <input type="text" className={styles.textInput}/>
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

export default MainContent3;