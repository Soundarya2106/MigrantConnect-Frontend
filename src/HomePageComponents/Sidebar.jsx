import React from "react";
import styles from "../HomePageDesignFiles/sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { path: "/homepagecontainer", label: "Home", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5db1439c9894bcdf0f1d45fb8e96109337b9759a05567f07a84952510461830a?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256", active: true },
    { path: "/profilepage1", label: "My ID & Profile", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8bd5e4024be871f869e95b0518a37fe07c2659ee94c6b4cde1ff913ccae5796?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" },
    { path: "/trackpage", label: "Track Requests", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4f65f5aca81d3d590f08c289c8666e902e24775b1deb1a799050d99f65d36af?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" },
    { path: "/reportpage", label: "Report Issues", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a13fa215df26beb30a3f62d4608fa16d1d26e52e82fe1a0d41fa30f34dff125?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" },
    { path: "/schemeform", label: "Scheme Finder", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13e7b2c48f639e3ab0aa34c808ce1691198fbfbfe5c5cba643d7c470a568c822?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" },
    { path: "/supportpage", label: "Support", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7975d8a7eeac127836ce3170f1540ec0dd2a538428f451b1ad3c2edc8e21db67?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" },
    { path: "/", label: "Logout", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fd4449ba5fcf471b21205bce498e5dde7cc93e0f3160757ae0459e0166e921e?placeholderIfAbsent=true&apiKey=42ceb3c9732b4f6a8e263230fd362256" },
  ]

  return (
    <nav className={styles.sidebar}>
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.active : ""}`
          }
        >
          <img src={item.icon} alt={item.label} className={styles.menuIcon} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
