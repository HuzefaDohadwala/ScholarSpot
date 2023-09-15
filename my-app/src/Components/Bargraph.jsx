import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Bargraph = () => {
  // Random data generation (for the sake of example)
  const underReviewData = [
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
  ];
  const awardedData = [
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
  ];
  const rejectedData = [
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
  ];

  // Constructing the dataset
  const dataset = [
    {
      month: "January",
      underReview: underReviewData[0],
      awarded: awardedData[0],
      rejected: rejectedData[0],
    },
    {
      month: "February",
      underReview: underReviewData[1],
      awarded: awardedData[1],
      rejected: rejectedData[1],
    },
    {
      month: "March",
      underReview: underReviewData[2],
      awarded: awardedData[2],
      rejected: rejectedData[2],
    },
  ];

  const valueFormatter = (value) => `${value}`; // Converting number to string for display purposes

  // Your possible settings for the BarChart (customize as needed)
  const chartSetting = {
    width: 500,
    height: 300,
  };

  return (
    <div>
      Application History
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "underReview", label: "Reviewing", valueFormatter },
          { dataKey: "awarded", label: "Awarded", valueFormatter },
          { dataKey: "rejected", label: "Rejected", valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default Bargraph;
