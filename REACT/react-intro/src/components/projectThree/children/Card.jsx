import React from "react";
import './../StateLifting.css'
export const Card = ({ name, setName }) => {
  return (
    <div className="card-main">
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name in Children: {name}</p>
    </div>
  );
};
