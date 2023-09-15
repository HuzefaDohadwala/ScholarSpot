import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./Applied.css";
import bin from "./bin.png"; // Import your delete icon image

const Applied = () => {
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
    <>
      <Table className="tableApplied">
        <thead className="tableHead">
          <tr>
            <th>Scholarship Title</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Applied On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                <span
                  className={`status ${
                    item.status === "Accepted"
                      ? "acceptedStatus"
                      : item.status === "Rejected"
                      ? "rejectedStatus"
                      : "inProcessStatus"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.amount}</td>
              <td>{item.appliedOn}</td>
              <td>
                <img
                  src={bin}
                  alt="Delete"
                  onClick={() => handleDelete(item.id)}
                  className="binIcon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Applied;
