import { useContext } from "react";
import { ThemeContext } from "../components/props/ThemeContext";
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
