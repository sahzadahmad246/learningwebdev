import "./App.css";
import { useTheme } from "../useTheme";
import { Moon, Sun } from "lucide-react";
import { store } from "../store";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { AddSlot } from "./components/AddSlot";
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Provider store={store}>
      <div className="bg-theme h-screen">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <h1 class="text-3xl text-theme  font-bold underline">Hello world!</h1>
        <AddSlot/>
      </div>
      <Toaster />
    </Provider>
  );
}

export default App;
