import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ChildTwo = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return <button onClick={handleTheme}>Change</button>;
};

export default ChildTwo;
