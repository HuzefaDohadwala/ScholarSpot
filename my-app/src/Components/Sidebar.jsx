import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import data from '../Images/data-analytics.png'
import docs from '../Images/document.png'
import appli from '../Images/resume.png'
import filter from '../Images/filter.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><img src={filter} alt="icon"/>Amount</li>
        <li><img src={filter} alt="icon"/>Location</li>
        <li>
          <Link to='/studentdashboard/applied'>
            <img src={appli} alt="icon"/> Applied
          </Link>
        </li>
        <li>
          <Link to='/studentdashboard/analytics'>
            <img src={data} alt="icon"/> Analytics
          </Link>
        </li>
        <li>
          <Link to='/studentdashboard/visanprep'>
            <img src={docs} alt="icon"/> Documents
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
