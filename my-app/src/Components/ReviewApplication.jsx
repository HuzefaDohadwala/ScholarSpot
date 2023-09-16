// ReviewApplication.js
import React, { useState } from "react";

const ReviewApplication = ({ onDataUpdate }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [major, setMajor] = useState("");

  const handleAccept = () => {
    onDataUpdate({
      id: Date.now(),
      title: name,
      status: "Accepted",
      amount: "$1500", // You can update this according to your requirements
      appliedOn: new Date().toLocaleDateString(),
    });
  };

  const handleReject = () => {
    onDataUpdate({
      id: Date.now(),
      title: name,
      status: "Rejected",
      amount: "$1500", // You can update this according to your requirements
      appliedOn: new Date().toLocaleDateString(),
    });
  };

  return (
    <div>
      <div className="card">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default ReviewApplication;
