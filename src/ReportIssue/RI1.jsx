"use client";
import Header from "../UserRightsAndResponsibilities/Header";
import ReportIcon from "../assets/reportIcon.png";
import styles from "../ReportIssue/ReportIssue.module.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "../ReportIssue/CheckBox"

const ReportIssue1 = () => {
  const issueCategories = {
    "Employment & Wages": [
      "Unpaid wages",
      "Workplace harassment",
      "Job loss without notice",
      "Unsafe working conditions",
      "Discrimination at the workplace",
    ],
    "Housing & Living Conditions": [
      "Poor housing conditions",
      "Eviction without notice",
      "Lack of basic facilities",
    ],
    "Health & Medical Assistance": [
      "Lack of access to healthcare",
      "Workplace injury",
      "Denial of medical treatment",
    ],
    "Legal & Documentation Issues": [
      "Issues with Aadhaar/PAN Card",
      "Problems with Work Permit/Visa",
      "Employer withholding passport/ID",
      "Discrimination due to legal status",
    ],
    "Government Schemes & Benefits": [
      "Difficulty accessing government schemes",
      "Denied ration card benefits",
      "Issues with pension or social security",
    ],
    "Abuse & Exploitation": [
      "Forced labor",
      "Human trafficking",
      "Physical or verbal abuse",
      "Bonded labor",
    ],
    "Transportation & Mobility": [
      "Denied access to public transport",
      "Stranded in a different location",
      "Issues with travel permits",
    ],
    "Family & Social Issues": [
      "Separated from family",
      "Childcare support issues",
      "Domestic violence",
    ],
  };
  const [isAgreed, setIsAgreed] = useState(false);

  const [supportingDocuments, setSupportingDocuments] = useState("");
  const [anonymous, setAnonymous] = useState("");



  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const [fileName, setFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");

  const videoFileInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const [contactMethod, setContactMethod] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [sms, setSms] = useState("");
  const [altSms, setAltSms] = useState("");

  const navigate = useNavigate();

  const GoToAcknowledge = () => {
    navigate("/reportpage2");
  }

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

  const handleVideoFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFileName(file.name);
    }
  };

  const handleVideoDragOver = (event) => {
    event.preventDefault();
  };

  const handleVideoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setVideoFileName(file.name);
    }
  };

  const handleVideoClick = () => {
    videoFileInputRef.current.click();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header title="Report an Issue" icon={ReportIcon} />
          <p className={styles.subtitle}>
            "Facing a problem at work or in your community? Report your issue
            here for timely support."
          </p>
        </div>

        <form className={styles.issueDetailsForm}>
          <h3 className={styles.formTitle}>Issue Details</h3>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Issue Category <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedTitle(""); // Reset title when category changes
                  }}
                  required
                >
                  <option value="" disabled>
                    Select an issue category
                  </option>
                  {Object.keys(issueCategories).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedCategory && (
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>
                  Issue Title <span className={styles.required}>*</span>
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    className={`${styles.textInput} ${styles.selectInput}`}
                    value={selectedTitle}
                    onChange={(e) => setSelectedTitle(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select an issue title
                    </option>
                    {issueCategories[selectedCategory].map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Date of Occurence
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
          </div>

          <div className={styles.textbox}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Issue Description <i>(Type within 1000 words)</i>
                <span className={styles.required}>*</span>
              </label>
              <textarea
                className={`${styles.textInput} ${styles.textArea}`}
                rows="4"
                cols="50"
                required
              />
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Workplace Name (or Contractor Name)
                <span className={styles.required}>*</span>
              </label>
              <input type="text" className={styles.textInput} required />
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Workplace Address (Include Pincode)
                <span className={styles.required}>*</span>
              </label>
              <input type="text" className={styles.textInput} required />
            </div>
          </div>
        </form>

        <form className={styles.docDetailsForm}>
          <h3 className={styles.formTitle}>
            Supporting Documents (If Applicable)
          </h3>
          <div className={styles.formFieldD}>
            <label className={styles.fieldLabel}>
              {" "}
              Upload Supporting Documents{" "}
              <i>(Payslips, Photos, Medical Reports, etc)</i>{" "}
              <span className={styles.required}></span>
            </label>
            <div
              className={styles.dropZone}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              <input
                type="file"
                className={styles.fileInput}
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf, .png, .jpg, .jpeg"
              />
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
                {" "}
                Edit File{" "}
              </button>
            )}
          </div>

          <div className={styles.formFieldD}>
            <label className={styles.fieldLabel}>
              {" "}
              Upload Video Evidence <i>(Short Video Proof)</i>{" "}
              <span className={styles.required}></span>
            </label>
            <div
              className={styles.dropZone}
              onDragOver={handleVideoDragOver}
              onDrop={handleVideoDrop}
              onClick={handleVideoClick}
            >
              <input
                type="file"
                className={styles.fileInput}
                ref={videoFileInputRef}
                onChange={handleVideoFileChange}
                accept=".mp4, .avi, .mkv, .mov, .webm"
              />
              {videoFileName ? (
                <p>{videoFileName}</p>
              ) : (
                <p>Drag a file here or click to upload</p>
              )}
            </div>
            {videoFileName && (
              <button
                type="button"
                className={styles.editFileButton}
                onClick={handleClick}
              >
                {" "}
                Edit File{" "}
              </button>
            )}
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Has this issue been reported before?{" "}
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="supportingDocuments"
                  value="yes"
                  checked={supportingDocuments === "yes"}
                  onChange={(e) => setSupportingDocuments(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>Yes
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="supportingDocuments"
                  value="no"
                  checked={supportingDocuments === "no"}
                  onChange={(e) => setSupportingDocuments(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>No
              </label>
            </div>
          </div>
        </form>

        <form className={styles.contactDetailsForm}>
          <h3 className={styles.formTitle}>
            Contact Details and Privacy Preferences
          </h3>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Preferred Contact Method{" "}
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={contactMethod === "phone"}
                    onChange={(e) => setContactMethod(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span> Phone
                </label>

                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={contactMethod === "email"}
                    onChange={(e) => setContactMethod(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span> Email
                </label>

                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="sms"
                    checked={contactMethod === "sms"}
                    onChange={(e) => setContactMethod(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span> SMS
                </label>
              </div>

              {contactMethod === "phone" && (
                <>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>
                      Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="tel"
                      className={styles.textInput}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>
                      Alternate Phone Number
                    </label>
                    <input
                      type="tel"
                      className={styles.textInput}
                      value={altPhone}
                      onChange={(e) => setAltPhone(e.target.value)}
                    />
                  </div>
                </>
              )}

              {contactMethod === "email" && (
                <>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      className={styles.textInput}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>
                      Alternate Email Address
                    </label>
                    <input
                      type="email"
                      className={styles.textInput}
                      value={altEmail}
                      onChange={(e) => setAltEmail(e.target.value)}
                    />
                  </div>
                </>
              )}

              {contactMethod === "sms" && (
                <>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>
                      SMS Number <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="tel"
                      className={styles.textInput}
                      value={sms}
                      onChange={(e) => setSms(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>
                      Alternate SMS Number
                    </label>
                    <input
                      type="tel"
                      className={styles.textInput}
                      value={altSms}
                      onChange={(e) => setAltSms(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.fieldLabel}>
              Do you want to stay anonymous?{" "}
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="supportingDocuments"
                  value="yes"
                  checked={anonymous === "yes"}
                  onChange={(e) => setAnonymous(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>Yes
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="supportingDocuments"
                  value="no"
                  checked={anonymous === "no"}
                  onChange={(e) => setAnonymous(e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>No
              </label>
            </div>
          </div>
        </form>

        <form className={styles.priorityForm}>
          <h3 className={styles.formTitle}>Issue Priority and Time Frame</h3>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                {" "}
                Issue Severity Level <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.textInput} ${styles.selectInput}`}
                  required
                >
                  <option value="" disabled selected>
                    Select severity level
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                When do you expect this issue to be resolved?
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
          </div>
        </form>

        <form className={styles.verificationForm}>
          <h3 className={styles.formTitle}>Verify OTP</h3>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Enter OTP<i>(Sent to Registered Phone Number)</i>
                <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                maxLength="6"
                className={styles.textInput}
                required
              />
            </div>
          </div>
          <button className={styles.verifyButton}>Verify</button>
        </form>

        <form className={styles.consentForm}>
          <h3 className={styles.formTitle}>Consent and Submission</h3>
          <CheckBox
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          <div className={styles.submitWrapper}>
            <button
              type="submit"
              className={`${styles.submitButton} ${!isAgreed ? styles.disabledButton : ""}`}
              disabled={!isAgreed}
              onClick={GoToAcknowledge}
            >
            Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReportIssue1;
