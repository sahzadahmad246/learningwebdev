import React, { useState } from "react";
import { Button } from "../projectTwo/Button";
import "./style.css";
export const CRendering = () => {
  const [buttonText, setButtonText] = useState("Login");
  const [isAuthed, setIsAuthed] = useState("false");
  const onclickFunction = () => {
    if (isAuthed) {
      setIsAuthed(false);
      setButtonText("Login");
    } else {
      setIsAuthed(true);
      setButtonText("Logout");
    }
  };
  return (
    <div className="main-cr">
      <Button
        buttonText={buttonText}
        onclickFunction={onclickFunction}
        
      />
      <p>
        Authectication status:
        {isAuthed ? "User is logged in" : "User is not logged in"}
      </p>
    </div>
  );
};
