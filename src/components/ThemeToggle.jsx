import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Always force dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // No button rendered — always dark
  return null;
};
