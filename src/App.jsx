import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Pages/Header";
import Product from "./components/Product";
import About from "./components/Pages/About";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle Dark Mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme on page load
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div
        className={
          theme === "dark"
            ? "dark:bg-gray-900 dark:text-white"
            : "bg-white text-black"
        }
      >
        <div>
          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <Navbar />
        <Header />
        <Product/>
        <About/>
      </div>
    </>
  );
}

export default App;
