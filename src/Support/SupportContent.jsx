"use client";
import React, { useState } from "react";
import Header from "../UserRightsAndResponsibilities/Header";
import SupportIcon from "../assets/gethelp.png"
import styles from "./Support.module.css";
import {
FaPhoneAlt,
  FaQuestionCircle,
  FaComment,
  FaSyncAlt,
  FaChevronDown, 
  FaChevronUp
} from "react-icons/fa";
import SupportDetails from "./SupportDetails";

const supportItems = [
  {
    id: 1,
    title: "Contact Support",
    icon: <FaPhoneAlt className={styles.icon} />,
  },
  {
    id: 2,
    title: "FAQs and Self-Help",
    icon: <FaQuestionCircle className={styles.icon} />,
  },
  {
    id: 3,
    title: "Live Chat Assistance",
    icon: <FaComment className={styles.icon} />,
  },
  {
    id: 4,
    title: "Service Status",
    icon: <FaSyncAlt className={styles.icon} />,
  },
];

const Support = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Header}>
          <Header title="Get Help and Support" icon={SupportIcon} />
        </div>

        <div className={styles.Scontainer}>
          {supportItems.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => toggleExpand(item.id)}
            >
              <div className={styles.heading}>
                <div className={styles.left}>
                  {item.icon}
                  <span className={styles.title}>{item.title}</span>
                </div>
                <span className={styles.arrow}>
                  {expanded === item.id ? <FaChevronUp/> : <FaChevronDown/>}
                </span>
              </div>
              {expanded === item.id && <SupportDetails id={item.id} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Support;
