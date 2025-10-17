import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      Dashboard Page <br />
      <button onClick={() => navigate("/dashboard/courses")}>
        explore Courses
      </button>{" "}
      <br />
      <button onClick={() => navigate("/dashboard/reports")}>
        explore Courses
      </button>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
