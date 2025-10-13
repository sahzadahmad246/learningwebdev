import React, { useState } from "react";
import { Card } from "./children/Card";
import "./StateLifting.css";
const StateLifting = () => {
  const [name, setName] = useState("");
  return (
    <div className="parent-main">
      <h1>StateLifting</h1>
      
      <p>Name in Parent: {name}</p>
      <Card name={name} setName={setName} />
    </div>
  );
};

export default StateLifting;
