import BasicProps from "./components/props/BasicProps";
import ChildrenProps from "./components/props/ChildrenProps";
import ComplexProps from "./components/props/ComplexProps";
import RefProps from "./components/props/RefProps";
import ThemeToggler from "./components/ThemeToggler";
import Navigation from "./components/Navigation";
import { useTheme } from "./customHooks/useTheme";

function AppContent() {
  const { isDark, themeToggle } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
      <Navigation />

      <div
        className={`w-7/10 mx-auto mt-5 rounded-lg shadow-sm border border-gray-400
        ${
          isDark
            ? "bg-[#0e0a2c] text-[#f2f2f8]"
            : "bg-[#f2f2f8] text-[#0e0a2c]"
        }`}
      >
        <header className="p-4 border-b border-gray-400 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">React Props Explained</h1>
            <p className="text-gray-300">
              A comprehensive guide to learn react props
            </p>
          </div>

          <button
            onClick={themeToggle}
            className={`py-1 px-2 rounded-xl ${
              isDark ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-white"
            }`}
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </header>

        <main className="space-y-8">
          <section id="basic" className="border-b border-gray-400">
            <BasicProps />
          </section>

          <section id="children" className="border-b border-gray-400">
            <ChildrenProps />
          </section>

          <section id="complex" className="border-b border-gray-400">
            <ComplexProps />
          </section>

          <section className="border-b border-gray-400">
            <RefProps />
          </section>

          <section id="theme" className="bg-white mt-3">
            <ThemeToggler />
          </section>
        </main>
      </div>
    </div>
  );
}

export default AppContent;
