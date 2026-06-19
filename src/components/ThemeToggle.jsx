import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span aria-hidden="true" className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
