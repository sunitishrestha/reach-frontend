import assets from "../assets/assets";
import { useEffect } from "react";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="sizw-8.5 p-1.5 border border-gray-500 rounder-full"
            alt=""
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
