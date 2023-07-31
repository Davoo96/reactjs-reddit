import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");

  localStorage.setItem("theme", theme);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = "light";

    localStorage.theme = "dark";

    localStorage.removeItem("theme");
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="bg-primary text-center py-6 grid grid-cols-3 items-center">
      <h2 className="text-white font-bold text-4xl uppercase leading-normal col-start-2">
        React<span className="text-feedback-warning">JS</span>
      </h2>
      <button
        className={`w-[24px] h-[24px] justify-self-start bg-contain bg-no-repeat bg-center ${
          localStorage.theme === "dark" ? "bg-moon-icon" : "bg-sun-icon"
        }`}
        onClick={handleThemeChange}
        aria-label="Trocar de tema"
      ></button>
    </header>
  );
};

export default Header;
