import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LeftColumn from "../LeftColumn";
import Analytics from "../Analytics";
import MyCandidates from "../MyCandidates";
import MyJobs from "../MyJobs";

function Dashboard() {
  return (
    <div className="body-container">
      <LeftColumn className="left-container" />
    </div>
  );
}

export default Dashboard;
