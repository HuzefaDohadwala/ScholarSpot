import React from "react";
import "./Analytics.css";
import Bargraph from "./Bargraph";
import Piegraph from "./Piegraph";
import Linegraph from "./Linegraph";
import Piegraph2 from "./Piegraph2";

const Analytics = () => {
  return (
    <>
      <div className="analytics">
        <div className="topRow">
          <div className="flexCol">
            <Bargraph />
          </div>
          <div className="flexCol">
            <Piegraph />
          </div>
        </div>
        <div className="bottomRow">
          <div className="flexCol">
            <Linegraph />
          </div>
          <div className="flexCol">
            <Piegraph2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
