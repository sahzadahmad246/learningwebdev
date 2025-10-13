import React from "react";

export const Button = ({ buttonText, onclickFunction }) => {
  return <button className="global-button" onClick={onclickFunction}> {buttonText}</button>;
};
