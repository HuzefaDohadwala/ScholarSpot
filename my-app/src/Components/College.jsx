import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function College() {
  // Use the useParams hook to get the collegeId from the URL
  const { collegeId } = useParams();

  // You can fetch college details based on collegeId here
  // Updated JSON data with additional details
  const collegesData = [
    {
      "id": 1,
      "name": "College A",
      "location": "City A",
      "scholarshipValue": "$10,000",
      "greSatScore": "1400",
      "description": "Some info about College A",
      "lastDateToSubmit": "2023-12-31",
      "collegeBoardCode": "12345",
      "applicationTypesAccepted": "Common App, Coalition App",
      "easyApply": true
    },
    {
      "id": 2,
      "name": "College B",
      "location": "City B",
      "scholarshipValue": "$8,000",
      "greSatScore": "1300",
      "description": "Some info about College B",
      "lastDateToSubmit": "2023-12-15",
      "collegeBoardCode": "67890",
      "applicationTypesAccepted": "Common App",
      "easyApply": false
    }
  ];

  // Find the college with the matching id
  const college = collegesData.find((college) => college.id === parseInt(collegeId));

  if (!college) {
    return <div>College not found</div>;
  }

  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold">{college.name}</h1>
      <p className="text-gray-600">Location: {college.location}</p>
      <p className="text-gray-600">Scholarship Value: {college.scholarshipValue}</p>
      <p className="text-gray-600">GRE/SAT Score: {college.greSatScore}</p>
      <p className="text-gray-600">Description: {college.description}</p>
      <p className="text-gray-600">Last Date to Submit: {college.lastDateToSubmit}</p>
      <p className="text-gray-600">College Board Code: {college.collegeBoardCode}</p>
      <p className="text-gray-600">Application Types Accepted: {college.applicationTypesAccepted}</p>
      <div className="flex gap-2">
        {college.easyApply ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Easy Apply</button>
        ) : (
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            <span className="mr-1">Like</span> ❤️
          </button>
        )}
      </div>
    </div>
  );
}

export default College;
