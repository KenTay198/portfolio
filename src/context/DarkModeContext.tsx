"use client";
import React,{ createContext, useContext, useEffect, useState } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

//@ts-ignore
const DarkModeContext = createContext<IDarkModeContext>({});

export const useDarkModeState = () => {
  const context = useContext(DarkModeContext);
  return context;
};

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");

    if (savedMode) {
      setDarkMode(savedMode === "dark");
      document.documentElement.classList.toggle("dark", savedMode === "dark");
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(userPrefersDark);
      document.documentElement.classList.toggle("dark", userPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {    
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("displayMode", newDarkMode ? "dark" : "light");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
