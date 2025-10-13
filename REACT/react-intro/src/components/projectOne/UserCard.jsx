import React from "react";
import "./userCard.css";

const UserCard = (userData) => {
  return (
    <div className="main-card">
      <img className="profilePic" src={userData.profilePic} alt="Shahzad" />
      <h1 className="name">{userData.name}</h1>
      <p className="bio">{userData.bio}</p>
    </div>
  );
};

export default UserCard;
