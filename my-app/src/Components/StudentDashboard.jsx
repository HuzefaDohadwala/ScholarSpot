import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Applied from "./Applied";
import Analytics from "./Analytics";
import VisaNPrep from "./VisaNPrep";
import uniImages from "../staticData/Universities.json";

// ... (other imports and component setup)

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
}

function StudentDashboard() {
  const [collegesData, setCollegesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('http://localhost:8000/users/65042667368561a14b763690/recommendations')
      .then((response) => response.json())
      .then((data) => {
        // Shuffle the uniImages array
        const shuffledImages = shuffleArray(uniImages);
        // Assign a random image URL to each college
        const collegesWithImages = data.map((college) => ({
          ...college,
          imageUrl: shuffledImages[Math.floor(Math.random() * shuffledImages.length)].imageUrl,
        }));
        setCollegesData(collegesWithImages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentColleges = collegesData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex gap-0">
      {/* Sidebar (1/4 width) */}
      <Sidebar />
      {/* Main Content (3/4 width) */}
      <div className="w-3/4 p-4">
        <Routes>
          <Route path="/studentdashboard/applied" element={<Applied />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="visanprep" element={<VisaNPrep />} />
        </Routes>
        <div className="flex justify-between mb-4">
          <div className="text-base font-semibold">
            {collegesData.length} Matched Scholarships
          </div>
          <div className="text-base font-semibold">
            {/* Calculate total scholarship amount */}
            Scholarship Amount Available : ${collegesData.reduce((total, college) => total + college.amount, 0)} 
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentColleges.map((college) => (
            <div key={college._id} className="bg-white p-4 border rounded-lg shadow">
              <div className="h-40 overflow-hidden">
                <img
                  className="w-full h-auto object-cover"
                  src={college.imageUrl}
                  alt="Scholarship"
                />
              </div>
              <h4 className="text-base font-semibold my-2 truncate">
                {truncateText(college.title, 25)} {/* Truncate long titles */}
              </h4>
              <p className="text-gray-500 my-2">{college.location}</p>
              <p className="text-base font-semibold">${college.amount}</p>
              <p className="text-gray-500">Deadline: {college.dueDates_date}</p>
              <Link
                to={`/studentdashboard/${college.uniCode}`}
                className="text-blue-500 mt-2 hover:underline"
              >
                More Info
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(collegesData.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 py-2 px-4 rounded-full ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;