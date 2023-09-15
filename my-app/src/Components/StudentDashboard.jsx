import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar';
import Applied from './Applied';
import VisaNPrep from './VisaNPrep';

const StudentDashboard = () => {
  return (
    <div className="flex gap-0">
      {/* Sidebar (1/4 width) */}
      <Sidebar />
      {/* Main Content (3/4 width) */}
      <div className="w-full bg-gray-400 p-4">
        <Routes>
          <Route path="applied" element={<Applied/>} />
          <Route path="analytics" element={<Applied/>} />
          <Route path="visanprep" element={<VisaNPrep/>} />
        </Routes>
      </div>
    </div>
  );
};

export default StudentDashboard;
