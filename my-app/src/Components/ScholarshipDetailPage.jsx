import React from 'react';
import { useNavigate } from 'react-router-dom';

const scholarships = [
    {
        "_id": "65049a810121b84bf1936c04",
        "title": "Schaefer Halleen’s Social Equity Scholarship",
        "degrees": ["Master", "Bachelor", "Phd"],
        "date": "2022-06-30",
        "location": "United-States",
        "amount": "1000.0",
        "uniCode": "6121",
        "courseDuration": "3",
        "successRate": "95",
        "websiteUrl": "https://example.com",
        "fieldOfStudy": ["Computer Science", "Artificial Intelligence"],
        "SAT": "1478",
        "TOEFL": "119",
        "GRE": "276",
        "applicationType": "Online",
        "feeWaiverInfo": "Explore financial aid options on our website for fee exemptions.",
        "dueDates_title": "Schaefer Halleen’s Social Equity Scholarship",
        "dueDates_date": "2023-07-03",
        "age_min": "17",
        "age_max": "21",
        "genderCriteria": [],
        "ethnicityCriteria": [],
        "nationalityCriteria": [],
        "extraCurricularActivities": [],
        "financialNeedRequired": false,
        "militaryServiceRequired": true,
        "disabilityPreference": false
    },
    {
        "_id": "65049a810121b84bf1936c05",
        "title": "Tech Innovation Grant",
        "degrees": ["Bachelor", "Phd"],
        "date": "2022-08-20",
        "location": "Canada",
        "amount": "1500.0",
        "uniCode": "5122",
        "courseDuration": "4",
        "successRate": "90",
        "websiteUrl": "https://techexample.com",
        "fieldOfStudy": ["Information Technology", "Network Security"],
        "SAT": "1400",
        "TOEFL": "115",
        "GRE": "270",
        "applicationType": "Online",
        "feeWaiverInfo": "Visit the Tech Innovation website for fee waiver details.",
        "dueDates_title": "Tech Innovation Grant Application",
        "dueDates_date": "2023-08-22",
        "age_min": "18",
        "age_max": "25",
        "genderCriteria": ["Female"],
        "ethnicityCriteria": ["Hispanic"],
        "nationalityCriteria": ["Canadian"],
        "extraCurricularActivities": ["Coding Clubs"],
        "financialNeedRequired": true,
        "militaryServiceRequired": false,
        "disabilityPreference": false
    },
    {
        "_id": "65049a810121b84bf1936c06",
        "title": "Green Environment Grant",
        "degrees": ["Bachelor"],
        "date": "2022-09-15",
        "location": "Australia",
        "amount": "2000.0",
        "uniCode": "4123",
        "courseDuration": "4",
        "successRate": "88",
        "websiteUrl": "https://greenexample.com",
        "fieldOfStudy": ["Environmental Science", "Sustainable Engineering"],
        "SAT": "1350",
        "TOEFL": "110",
        "GRE": "265",
        "applicationType": "Online",
        "feeWaiverInfo": "Check out our website for exclusive fee waiver options.",
        "dueDates_title": "Green Environment Grant Deadline",
        "dueDates_date": "2023-09-17",
        "age_min": "18",
        "age_max": "24",
        "genderCriteria": ["Male"],
        "ethnicityCriteria": ["Asian"],
        "nationalityCriteria": ["Australian"],
        "extraCurricularActivities": ["Nature Clubs", "Hiking Groups"],
        "financialNeedRequired": false,
        "militaryServiceRequired": false,
        "disabilityPreference": true
    },
]

function ScholarshipDetailPage() {
    const navigate = useNavigate();
    
    // Randomly select one of the static scholarship data sets
    const scholarship = scholarships[Math.floor(Math.random() * scholarships.length)];
  
    // Randomly select Apply or Easy Apply
    const isEasyApply = Math.random() > 0.5;
  
    const handleApplyClick = () => {
      if (isEasyApply) {
        navigate("/easy-apply-form");
      } else {
        window.location.href = scholarship.websiteUrl;
      }
    };
  
    return (
      <div className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">{scholarship.title}</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">General Info</h2>
            <div>University Code: {scholarship.uniCode}</div>
            <div>Location: {scholarship.location}</div>
            <div>Course Duration: {scholarship.courseDuration} years</div>
            <div>Success Rate: {scholarship.successRate}%</div>
            <div>Amount: ${scholarship.amount}</div>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Test Scores</h2>
            <div>SAT: {scholarship.SAT}</div>
            <div>TOEFL: {scholarship.TOEFL}</div>
            <div>GRE: {scholarship.GRE}</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Application Details</h2>
          <div>Type: {scholarship.applicationType}</div>
          <div>Fee Waiver: {scholarship.feeWaiverInfo}</div>
          <div>Due Date: {new Date(scholarship.dueDates_date).toLocaleDateString()}</div>
        </div>
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Criteria</h2>
          <div>Field of Study: {scholarship.fieldOfStudy.join(", ")}</div>
          <div>Academic Level: {scholarship.degrees.join(", ")}</div>
          <div>Age: {scholarship.age_min} - {scholarship.age_max}</div>
          <div>Gender: {scholarship.genderCriteria.join(", ") || "Any"}</div>
        </div>
        <button 
          onClick={handleApplyClick} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          {isEasyApply ? "Easy Apply" : "Apply"}
        </button>
      </div>
    );
  }
  
  export default ScholarshipDetailPage;