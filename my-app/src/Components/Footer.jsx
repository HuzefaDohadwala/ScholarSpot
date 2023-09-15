import React from "react";
import "./Footer.css";

const Footer = () => {
  // Sample titles for the 2nd and 3rd columns
  const columnTitles = [
    "Home",
    "Scholarships",
    "Featured Scholarships",
    "Scholarship Categories",
    "How to Apply",
    "Resources",
  ];
  

  const columnTitles2 = [
    "Scholarship Terms of Use",
    "Privacy Policy",
    "Cookie Policy",
    "Nondiscrimination Policy",
    "Terms and Conditions",
    "Email: your@email.com",
    "Phone: +91 (123) 456-7890"
  ];
  
  

  return (
    <div className="parent-wrapper">
      <div className="footer-wrapper">
        {/* 1st column with Logo */}
        <div className="logo-wrapper">
          <h1>Scholar Spot </h1>
        </div>

        {/* 2nd column with titles */}
        <ul className="title-list">
          {columnTitles.map((title, index) => (
            <li key={index} className="title-item">
              {title}
            </li>
          ))}
        </ul>

        {/* 3rd column with titles */}
        <ul className="title-list">
          {columnTitles2.map((title, index) => (
            <li key={index} className="title-item">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
