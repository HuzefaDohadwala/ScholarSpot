import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Applied from "./Applied";
import Analytics from "./Analytics";
import VisaNPrep from "./VisaNPrep";
import collegesData from "./Insti.json";
// Import the College component

function StudentDashboard() {
  const [collegesData, setCollegesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/scholarships')
      .then((response) => response.json())
      .then((data) => setCollegesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <div className="flex gap-0">
      {/* Sidebar (1/4 width) */}
      <Sidebar />
      {/* Main Content (3/4 width) */}
      <div className="w-3/4 p-4">
        <Routes>
          <Route path="/studentdashboard/applied" element={<Applied />} />
          <Route path="/studentdashboard/analytics" element={<Analytics />} />
          <Route path="visanprep" element={<VisaNPrep />} />
        </Routes>
        <div className="flex flex-col items-center">
          {collegesData.map((college) => (
            <div key={college._id} className="w-full max-w-lg mb-4">
              <div className="card">
                <div className="card-horizontal">
                  <div className="img-square-wrapper">
                    <img
                      className="w-full h-auto"
                      src="http://via.placeholder.com/300x180"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{college.title}</h4>
                    <h4 className="card-title">{college.location}</h4>
                    <h4 className="card-title">Scholarship Value: ${college.amount}</h4>
                    <h4 className="card-title">GRE/SAT Score: {college.SAT}</h4>
                    <h4 className="card-title">Last date to submit: {college.dueDates_date}</h4>
                    <p className="card-text">{college.description}</p> {/* Assuming description is present in the data */}
                  </div>
                </div>
                <div className="card-footer">
                  <Link to={`/studentdashboard/${college.uniCode}`} className="text-blue-500">
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

