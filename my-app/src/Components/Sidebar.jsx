import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          Filter 1
        </li>
        <li>
         Filter 2
        </li>
        <li>
        Filter 3
        </li>
        <li>
          <Link to='/studentdashboard/applied'>
          applied
          </Link>
        </li>
        <li>
          <Link to='/studentdashboard/analytics'>
            analytics
          </Link>
        </li>
        <li>
          <Link to='/studentdashboard/visanprep'>
              visanprep
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
