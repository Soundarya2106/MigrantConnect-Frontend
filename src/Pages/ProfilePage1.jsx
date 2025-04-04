import React, { useState } from "react";
import Sidebar from "../HomePageComponents/Sidebar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import ProfileHeader from "../ProfilePageComponents/ProfileHeader";
import ProfileTabs from "../ProfilePageComponents/ProfileTabs";
import DetailsCard from "../ProfilePageComponents/DetailsCard";
import styles from "../ProfilePageDesignFiles/profilePage.module.css"
import ProfileProgress from "../ProfilePageComponents/ProfileProgress";

const ProfilePage1 = () =>{
    const [activeTab, setActiveTab] = useState("basic");

    return(
        <main>
            <Header/> 
            <div className={styles.centerContent}>
            <Sidebar className={styles.sidenav}/>
            <div className={styles.profileDetails}>
            <ProfileHeader/>
            <ProfileTabs setActiveTab={setActiveTab}/>

            {activeTab === "basic" && (
            <>
            <DetailsCard
              title="Personal Details"
              details={[
                { label: "Name", value: "Ranjit Singh S" },
                { label: "Date of Birth", value: "23/09/2004" },
                { label: "Gender", value: "Male" },
                { label: "Nationality", value: "Indian" },
                { label: "Religion", value: "Hindu" },
                { label: "Category", value: "category" },
                { label: "Caste", value: "caste" },
                { label: "Blood Group", value: "B+ve" },
                { label: "Education Level", value: "10th" },
              ]}
            />
            

            <DetailsCard
              title="Contact Details"
              details={[
                { label: "Phone Number", value: "7777777777" },
                { label: "Alternate Number", value: "-" },
                { label: "Email ID", value: "ranjitsinghs@gmail.com" },
              ]}
            />

            <DetailsCard
              title="Language Preference"
              details={[
                { label: "Primary Language", value: "Punjabi" },
                { label: "Other languages known", value: "Hindi" },
              ]}
            />

            <DetailsCard
              title="Migration Details"
              details={[
                { label: "State of Origin", value: "Punjab" },
                { label: "Current State", value: "TamilNadu" },
                { label: "Current City", value: "Chennai" },
                { label: "Migration Reason", value: "Employment" },
              ]}
            />
            </>
          )}


           {activeTab === "address" && (
            <>
            <DetailsCard
              title="Current Address"
              details={[
                { label: "House/Flat Number", value: "342" },
                { label: "Street/Locality", value: "Gandhi Street" },
                { label: "City/Town/Village", value: "Thambaram" },
                { label: "District", value: "Chennai" },
                { label: "State", value: "Tamil Nadu" },
                { label: "pincode", value: "637823" },
                { label: "Landmark", value: "-" },
              ]}
            />
            

            <DetailsCard
              title="Permanent Address"
              details={[
                { label: "House/Flat Number", value: "342" },
                { label: "Street/Locality", value: "Gandhi Street" },
                { label: "City/Town/Village", value: "Thambaram" },
                { label: "District", value: "Chennai" },
                { label: "State", value: "Tamil Nadu" },
                { label: "pincode", value: "637823" },
                { label: "Landmark", value: "-" },
              ]}
            />

            <DetailsCard
              title="Additional Details"
              details={[
                { label: "Type of Residence", value: "Rented" },
                { label: "Duration of Stay at Current Address", value: "1-3 Years" },
              ]}
            />
            </>
          )}

          {activeTab === "work" && (
            <>
            <DetailsCard
              title="Employment Details"
              details={[
                { label: "Employment Type", value: "Daily Wage Worker" },
                { label: "Work Sector", value: "Construction" },
                { label: "Job Role/Designation", value: "Carpenter" },
              ]}
            />
            

            <DetailsCard
              title="Employer Details"
              details={[
                { label: "Employer Name", value: "Ramesh S" },
                { label: "Employer Contact Number", value: "8888888888" },
                { label: "Work Location", value: "Chrompet, Chennai" },
                { label: "Work Contract Available?", value: "Yes" },
              ]}
            />

            <DetailsCard
              title="Work Duration and Experience"
              details={[
                { label: "Work Duration", value: "Less than 6 months" },
                { label: "Previous Work Experience", value: "Less than 6 months" },
              ]}
            />

            <DetailsCard
              title="Income and Skills"
              details={[
                { label: "Income", value: "₹5,000 - ₹10,000 per month" },
                { label: "Skills", value: "-" },
                { label: "Certifications", value: "-" },
              ]}
            />
            </>
          )}

          {activeTab === "bank" && (
            <>
            <DetailsCard
              title="Bank Information"
              details={[
                { label: "Bank Name", value: "KVB Bank" },
                { label: "Branch Name", value: "Thambaram" },
                { label: "Account Holder Name", value: "Ranjit Singh S" },
                { label: "Account Number", value: "6666666666666" },
                { label: "IFSC Code", value: "tttttttttt" },
              ]}
            />
            

            <DetailsCard
              title="Nominee Details (if Applicable)"
              details={[
                { label: "Nominee Name", value: "-" },
                { label: "Relationship to Worker", value: "-" },
                { label: "Nominee Contact Number", value: "-" },
                { label: "Nominee Address", value: "-" },
                { label: "Nominee Aadhaar Number", value: "-" },
              ]}
            />

            <DetailsCard
              title="Upload Bank Document"
              details={[
                { label: "Bank Passbook", value: "passbook.pdf" },
                { label: "", value: "" },
                { label: "", value: "" },
              ]}
            />
            </>
          )}

          {activeTab === "doc" && (
          
            <DetailsCard
              title="Documents"
              details={[
                { label: "Aadhaar Number", value: "222222222222" },
                { label: "Aadhaar Card", value: "aadhaar.pdf" },
                { label: "", value: "" },
                { label: "", value: "" },
                { label: "Voter ID", value: "PB/00/000/000000" },
                { label: "Voter ID Card", value: "voterID.pdf" },
                { label: "", value: "" },
                { label: "", value: "" },
                { label: "Pan Number", value: "PV0000000" },
                { label: "Pan Card", value: "pan.pdf" },
                { label: "", value: "" },
                { label: "", value: "" },
                { label: "Ration Card", value: "-" },
                { label: "", value: "" },
                { label: "", value: "" },
                { label: "", value: "" },
                { label: "Worker ID", value: "-" },
              ]}
            />
            )}

           {activeTab === "family" && (
            <>
            <DetailsCard
              title="Family Structure"
              details={[
                { label: "Marital Status", value: "No" },
                { label: "Number of Dependents", value: "1" },
                { label: "Spouse Name", value: "-" },
                { label: "Spouse Age", value: "-" },
                { label: "Spouse Contact Number", value: "-" },
                { label: "Spouse Occupation", value: "-" },
              ]}
            />
            

            <DetailsCard
              title="Family Members and Contact"
              details={[
                { label: "Name", value: "Rikshit Singh" },
                { label: "Relationship to Worker", value: "Brother" },
                { label: "Contact Number", value: "8888888888" },
                { label: "Occupation", value: "-" },
                { label: "Number of Children", value: "-" },
                { label: "Children Age Group", value: "-" },
              ]}
            />
            </>
          )}

          {activeTab === "emergency" && (
            <>
            <DetailsCard
              title="Primary Emergency Contact"
              details={[
                { label: "Name", value: "Rakshit Singh" },
                { label: "Relationship to Worker", value: "Brother" },
                { label: "Contact Number", value: "8888888888" },
                { label: "Address", value: "12, Gandhi Street, Anna Nagar, Chennai, Tamil Nadu" },
              ]}
            />
            

            <DetailsCard
              title="Secondary Emergency Contact"
              details={[
                { label: "Name", value: "-" },
                { label: "Relationship to Worker", value: "-" },
                { label: "Contact Number", value: "-" },
                { label: "Address", value: "-" },
              ]}
            />
            </>
          )}
          

            </div>
            <aside className={styles.progressSection}>
              <ProfileProgress/>
            </aside>
            </div>
            <Footer/>
        </main>
    )
}

export default ProfilePage1;