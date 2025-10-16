import React from "react";
import ChildTwo from "./childTwo";
import { useTheme } from "./UseTheme";

const ChildOne = () => {
  const { theme } = useTheme();
  let backgroundColor = theme === "light" ? "aliceblue" : "red";
  return (
    <div className="theme-main" style={{ backgroundColor: backgroundColor }}>
      <ChildTwo />
    </div>
  );
};

export default ChildOne;
