import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ChildOne from "./childOne";
import "./theme.css";
const UseContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildOne />
    </ThemeContext.Provider>
  );
};

export default UseContext;
