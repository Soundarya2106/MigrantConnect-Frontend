import React from "react";
import styles from "../HomePageDesignFiles/StatsSection.module.css";
import { Pie } from "react-chartjs-2";
import {issueData, schemeData} from "../HomePageComponents/PieCharts"

const StatCard = ({ title, total, stats, chartData}) => (
  <div className={styles.statCard}>
    <h3 className={styles.cardTitle}>{title}</h3>

    <div className={styles.chartContainer}>
      <Pie data={chartData}
      options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false, // Hides the legend
            },
            tooltip: {
              enabled: true, // Keeps the hover effect
            },
          },
      }} 
      />
    </div>

    <p className={styles.totalCount}>{total}</p>
    <div className={styles.statsList}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div
            className={styles.statDot}
            style={{ backgroundColor: stat.color }}
          />
          <span className={styles.statText}>
            <span className={styles.statLabel}>{stat.label}</span> {stat.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const StatsSection = () => {
  const issueStats = [
    { color: "#623EBA", label: "New Issues:", value: "0" },
    { color: "#F03C59", label: "Pending Issues:", value: "0" },
    { color: "#FB9900", label: "Resolved Issues:", value: "0" },
  ];

  const schemeStats = [
    { color: "#623EBA", label: "Approved Schemes:", value: "0" },
    { color: "#F03C59", label: "Pending Applications:", value: "0" },
    { color: "#FB9900", label: "Rejected Applications:", value: "0" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        <StatCard
          title="Issue Reporting Stats"
          total="Total Issues Reported: 0"
          stats={issueStats}
          chartData={issueData}
        />
        <StatCard
          title="Government Scheme Access"
          total="Total Schemes Applied: 0"
          stats={schemeStats}
          chartData={schemeData}
        />
      </div>
    </section>
  );
};

export default StatsSection;
