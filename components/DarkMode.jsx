"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer text-white"
          onClick={() => setTheme("Light")}
        />
      ) : (
        <BsFillMoonFill
          className="h-8 w-8 cursor-pointer text-black"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
