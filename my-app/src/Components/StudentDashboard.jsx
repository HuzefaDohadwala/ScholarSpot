import React from 'react';
import Sidebar from './Sidebar';

const StudentDashboard = () => {
  return (
    <div className="flex gap-0">
      {/* Sidebar (1/4 width) */}
        <Sidebar />
      {/* Main Content (3/4 width) */}
      <div className="w-full bg-gray-400 p-4">
        {/* Your main content goes here */}
        <div className="std_dash">Main Content</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
