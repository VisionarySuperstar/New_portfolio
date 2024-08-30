"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState({
    primary: "#0f172a",
    secondary: "#ffffff",

    sunVisible: true,
    moonVisible: false,
  });

  const toggleTheme = () => {
    const updatedTheme = {
      sunVisible: !theme.sunVisible,
      moonVisible: !theme.moonVisible,
      primary: theme.primary === "#FFFBE6" ? "#0f172a" : "#FFFBE6",
      secondary: theme.secondary === "#ffffff" ? "#0f172a" : "#ffffff",
    };
    setTheme(updatedTheme);
  };

  // useEffect to update the CSS variables when theme state changes
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
  }, [theme]);

  return (
    <div className=" fixed shadow-[var(--secondary)]/[0.5] shadow-md z-[6000] w-screen bg-[var(--primary)] text-[var(--secondary)]">
      <div className="bg-blue px-6 py-2 flex justify-between items-center w-full">
        <div className="logo text-2xl font-bold">Lucas Lee</div>
        <button
          className="top-4 left-4 text-white p-2 rounded"
          onClick={() => setVisible(false)}
        >
          <div className="burger lg:hidden flex flex-col space-y-1">
            <div className="line bg-[var(--secondary)] h-1 w-7 rounded-full"></div>
            <div className="line bg-[var(--secondary)] h-1 w-7 rounded-full"></div>
            <div className="line bg-[var(--secondary)] h-1 w-7 rounded-full"></div>
          </div>
        </button>
        <div className="lg:flex hidden space-x-5 p-2">
          <Link href={"/"} className="link">
            Home
          </Link>
          <Link href={"#services"} className="link">
            Services
          </Link>
          <Link href={"#about"} className="link">
            About
          </Link>
          <Link href={"#contact"} className="link">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-transparent  text-base lg:text-xl py-1 px-2 lg:px-4"
          >
            {theme.sunVisible ? <FaSun id="sun" /> : <FaMoon id="moon" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bg-[#00000028] backdrop-blur-sm z-[100] p-2 px-4 text-white h-full flex w-[50%] transition-transform duration-500 ${
          visible ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between w-[80%]">
            <IoClose className="text-3xl" onClick={() => setVisible(true)} />
            <button
              onClick={toggleTheme}
              className="bg-transparent text-base lg:text-xl py-1 px-2 lg:py-2 lg:px-4"
            >
              {theme.sunVisible ? <FaSun id="sun" /> : <FaMoon id="moon" />}
            </button>
          </div>
          <Link href={"/"} className="link w-[10rem]">
            Home
          </Link>
          <Link href={"#services"} className="link w-[10rem]">
            Services
          </Link>
          <Link href={"#about"} className="link w-[10rem]">
            About
          </Link>
          <Link href={"contact"} className="link w-[10rem]">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
