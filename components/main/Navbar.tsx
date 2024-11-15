"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu toggle

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="flex items-center justify-between w-full max-w-2xl border border-[#7042f861] bg-[#0300145e] py-[10px] px-[20px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#education" className="cursor-pointer">
              Education
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact me
            </a>
            <a
              href="https://kaxun.medium.com/"
              target="_blank"
              className="cursor-pointer"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-[#0300145e] text-gray-200 px-10 py-4">
          <a
            href="#about-me"
            className="block py-2 px-4 cursor-pointer hover:bg-[#7042f861] rounded-md"
          >
            About me
          </a>
          <a
            href="#education"
            className="block py-2 px-4 cursor-pointer hover:bg-[#7042f861] rounded-md"
          >
            Education
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 cursor-pointer hover:bg-[#7042f861] rounded-md"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 cursor-pointer hover:bg-[#7042f861] rounded-md"
          >
            Contact me
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
