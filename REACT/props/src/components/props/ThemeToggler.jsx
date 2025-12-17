import { useState } from "react";
import { useTheme } from "../customHooks/useTheme";
import { ThemeContext } from "../customHooks/ThemeContext";
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const value = {
    theme,
    themeToggle,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const ThemeCard = () => {
  const { theme, themeToggle, isDark } = useTheme();

  const cardStyle = {
    padding: "20px",
    borderRadius: "12px",
    width: "300px",
    backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
    color: isDark ? "#f5f5f5" : "#222",
    boxShadow: isDark
      ? "0 10px 30px rgba(0,0,0,0.6)"
      : "0 10px 30px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    marginTop: "16px",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isDark ? "#fff" : "#000",
    color: isDark ? "#000" : "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h3>Theme Card</h3>
      <p>Current theme: <strong>{theme}</strong></p>

      <button style={buttonStyle} onClick={themeToggle}>
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

const ThemeToggler = () => {
  const { isDark } = useTheme();

  const wrapperStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDark ? "#0E0A2C" : "#f4f4f4",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={wrapperStyle}>
      <ThemeCard />
    </div>
  );
};

export default ThemeToggler;



