import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EasyApplyForm() {
  const [formData, setFormData] = useState({
    shortIntro: "",
    scholarshipEssay: "",
    bestAchievement: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the formData to the server or handle it as you wish.
    // After submitting the form, we'll redirect the user back to the scholarship detail page.
    navigate('/studentdashboard/user/6504cc051df8dda5c499dc8c');
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Easy Apply</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="shortIntro" className="block text-sm font-medium text-gray-700">Brief Introduction</label>
          <textarea 
            id="shortIntro" 
            name="shortIntro" 
            value={formData.shortIntro} 
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="scholarshipEssay" className="block text-sm font-medium text-gray-700">Upload Your Scholarship Application Essay</label>
          <input 
            type="file" 
            id="scholarshipEssay" 
            name="scholarshipEssay" 
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bestAchievement" className="block text-sm font-medium text-gray-700">Most Significant Achievement</label>
          <textarea 
            id="bestAchievement" 
            name="bestAchievement" 
            value={formData.bestAchievement} 
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="4"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EasyApplyForm;
