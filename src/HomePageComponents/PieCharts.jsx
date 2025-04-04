import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export const issueData = {
  labels: ["New Issues", "Pending Issues", "Resolved Issues"],
  datasets: [
    {
      label: "Total Issues Reported",
      data: [0.1,0.1,0.1], // Replace with actual values
      backgroundColor: ["#623EBA", "#F03C59", "#FB9900"],
      hoverOffset: 4,
    },
  ],
};


// Exporting schemeData
export const schemeData = {
  labels: ["Approved Schemes", "Pending Schemes", "Rejected Schemes"],
  datasets: [
    {
      label: "Government Scheme Access",
      data: [0.1,0.1,0.1], // Replace with actual values
      backgroundColor: ["#623eba", "#f03c59", "#fb9900"],
      hoverOffset: 4,
    },
  ],
};
