import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#filter1">Filter 1</a>
        </li>
        <li>
          <a href="#filter2">Filter 2</a>
        </li>
        <li>
          <a href="#filter3">Filter 3</a>
        </li>
        <li>
          <a href="#cat1">Category 1</a>
        </li>
        <li>
          <a href="#cat2">Category 2</a>
        </li>
        <li>
          <a href="#cat3">Category 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
