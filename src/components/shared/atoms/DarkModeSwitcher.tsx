"use client";
import Button from "@atoms/Button";
import React, { useMemo } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDarkModeState } from "src/context/DarkModeContext";

const DarkModeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useDarkModeState();

  const ToggleIcon = useMemo(() => (darkMode ? IoMoon : IoSunny), [darkMode]);

  return (
    <div className="relative">
      <Button
        onClick={() => toggleDarkMode()}
        template={darkMode ? "secondary" : "primary"}
      >
        <ToggleIcon size={30} />
      </Button>
    </div>
  );
};

export default DarkModeSwitcher;
