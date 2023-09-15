import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Piegraph2 = () => {
  // Generate random values for the portion of the goal achieved and the remaining goal
  const totalGoal = Math.floor(Math.random() * 10000) + 1000; // Random total goal between 1000 and 10000
  const goalAchieved = Math.floor(Math.random() * totalGoal); // Random achieved amount between 0 and totalGoal
  const remainingGoal = totalGoal - goalAchieved;

  // Create a data array with random values for the Pie Chart
  const data = [
    { id: 0, value: goalAchieved, label: "Goal Achieved" },
    { id: 1, value: remainingGoal, label: "Remaining Goal" },
  ];

  return (
    <div>
      Financial Overview
      <div className="empty"></div>
      <PieChart
        series={[
          {
            data,
          },
        ]}
        width={500}
        height={200}
      />
    </div>
  );
};

export default Piegraph2;
