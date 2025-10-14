import React from "react";

const ChangeButton = ({ changeColorClick }) => {
  return (
    <button className="change-button" onClick={changeColorClick}>
      Change Color
    </button>
  );
};

export default ChangeButton;
