import React, { useState } from "react";
import "./Applied.css";
import bin from "./bin.png"; // Import your delete icon image
import { DataGrid } from "@mui/x-data-grid"; // Ensure you have this library installed
import AppliedData from "./AppliedData.json";

const Applied = () => {
  const columns = [
    {
      field: "title",
      headerName: "Scholarship Title",
      flex: 0.3,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.2,
      renderCell: (params) => {
        const status = params.row.status;
        let className = "";
        if (status === "Accepted") className = "acceptedStatus";
        else if (status === "Rejected") className = "rejectedStatus";
        else className = "inProcessStatus";
        return <span className={`status ${className}`}>{status}</span>;
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.2,
    },
    {
      field: "appliedOn",
      headerName: "Applied On",
      flex: 0.2,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.1,
      renderCell: (params) => {
        return (
          <img
            src={bin}
            alt="Delete"
            onClick={() => handleDelete(params.row.id)}
            className="binIcon"
          />
        );
      },
    },
  ];

  const [data, setData] = useState(AppliedData);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleDataUpdate = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div>
      <div
        className="bg-white rounded-xl shadow-lg w-full ml-5 mr-5 mb-20 max-w-screen-lg mx-auto"
        style={{ height: 450 }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Applied;
