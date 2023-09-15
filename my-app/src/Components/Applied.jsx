import React, { useState } from "react";
import "./Applied.css";
import bin from "./bin.png"; // Import your delete icon image
import { DataGrid } from "@mui/x-data-grid"; // Ensure you have this library installed

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

  const [data, setData] = useState([
    {
      id: 1,
      title: "ArtUniverse",
      status: "Accepted",
      amount: "$1000",
      appliedOn: "22/08/2022",
    },
    {
      id: 2,
      title: "Beth Mead Scholarships",
      status: "Rejected",
      amount: "$1200",
      appliedOn: "25/08/2022",
    },
    {
      id: 3,
      title: "Malaysia Scholarships",
      status: "In Process",
      amount: "$1500",
      appliedOn: "29/08/2022",
    },
  ]);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
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
  );
};

export default Applied;
