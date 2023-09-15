import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Linegraph = () => {
  // Sample months/quarters for x-axis
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];

  // Generate random data for essay submissions (types of essays submitted)
  const getRandomData = () => {
    return months.map(() => Math.floor(Math.random() * 10) + 1);
  };

  // Create random data for types of essays submitted
  const essayTypes = ["Admission", "SOP", "Scholarship"];
  const essayData = essayTypes.map((type) => ({
    type,
    data: getRandomData(),
  }));

  return (
    <div>
      Essay Submissions
      <LineChart
        xAxis={[{ scaleType: "band", data: months }]}
        yAxis={[
          {
            id: "linearAxis",
            scaleType: "linear",
            title: "Number of Submissions",
          },
        ]}
        series={essayData.map((item, index) => ({
          yAxisKey: "linearAxis",
          data: item.data,
          label: item.type,
        }))}
        height={300}
        width={500}
      />
    </div>
  );
};

export default Linegraph;
