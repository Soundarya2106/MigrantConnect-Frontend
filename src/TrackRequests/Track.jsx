"use client";
import React, {useState} from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import TrackIcon from "../assets/track.png";
import styles from "../TrackRequests/TrackRequests.module.css";
import IssueCard from "./IssueCards";
import SchemeCard from "./SchemeCards";

//Sample Data, use Dynamic Data
const issues = [
  {
    id: "MC-2024021",
    date: "Delayed Wage Payment",
    submittedDate: "Feb 10, 2025",
    status: "Pending Review",
    progress: 20,
    type: "issue",
  },
  {
    id: "MC-2024022",
    date: "Unsafe Working Condition",
    submittedDate: "Feb 8, 2025",
    status: "In Progress",
    progress: 60,
    type: "issue",
  },
];

const schemes = [
  {
    id: "SC-1001201",
    name: "PM Awas Yojana",
    appliedDate: "Jan 15, 2025",
    status: "Approved",
    progress: 80,
    type: "scheme",
  },
  {
    id: "SC-1001202",
    name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
    appliedDate: "Jan 20, 2025",
    status: "Pending",
    progress: 50,
    type: "scheme",
  },
];

const TrackPage = () => {
  const [activeTab, setActiveTab] = useState("issues");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header title="Track My Requests" icon={TrackIcon} />
          <p className={styles.subtitle}>
            "View the status of your submitted issues, and scheme applications
            in one place."
          </p>
        </div>

        <div className={styles.navbar}>
          <p
            className={`${styles.navItem} ${
              activeTab === "issues" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("issues")}
          >
            Issue Requests
          </p>
          <p
            className={`${styles.navItem} ${
              activeTab === "schemes" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("schemes")}
          >
            Government Schemes Applications
          </p>
        </div>

        <div className={styles.content}>
          {activeTab === "issues" &&
            issues.map((issue) => <IssueCard key={issue.id} {...issue} />)}

          {activeTab === "schemes" &&
            schemes.map((scheme) => <SchemeCard key={scheme.id} {...scheme} />)}
        </div>
      </div>
    </>
  );
};

export default TrackPage;
