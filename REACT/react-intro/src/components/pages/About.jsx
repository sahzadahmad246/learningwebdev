import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About Page
      <button onClick={() => navigate("/dashboard")}>move to dashboard</button>
    </div>
  );
};

export default About;
