import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Piegraph = () => {
  // Random data generation for the sake of example
  const academicExcellenceValue = Math.floor(Math.random() * 100) + 1;
  const sportsAchievementsValue = Math.floor(Math.random() * 100) + 1;
  const communityServiceValue = Math.floor(Math.random() * 100) + 1;

  return (
    <div>
      Eligibility Breakdown
      <div className="empty"></div>
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: academicExcellenceValue,
                label: "Academics",
              },
              {
                id: 1,
                value: sportsAchievementsValue,
                label: "Sports",
              },
              {
                id: 2,
                value: communityServiceValue,
                label: "Volunteer",
              },
            ],
          },
        ]}
        width={500}
        height={200}
      />
    </div>
  );
};

export default Piegraph;
