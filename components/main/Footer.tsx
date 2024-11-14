import React from "react";
import Mail from "../sub/Mail";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { FaFacebook, FaFigma, FaStackOverflow, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full bg-gray-950 text-gray-200 py-10 px-6 md:px-40 shadow-lg border rounded-xl border-gray-700/40"
      id="contact"
    >
      {/* Centered Mail Section */}
      <div className="flex justify-center mb-6">
        <a
          href="mailto:your-email@example.com"
          className="text-gray-300 hover:text-white transition z-20"
        >
          <Mail />
        </a>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Community Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 z-40">
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <a
            href="https://www.figma.com/@kaxun" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <FaFigma />
            <span>Figma</span>
          </a>
          <a
            href="https://github.com/KAXUN01" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <RxGithubLogo />
            <span>GitHub</span>
          </a>
          <a
            href="https://stackoverflow.com/users/21034982/kaxun" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <FaStackOverflow />
            <span>Stack Overflow</span>
          </a>
          <a
            href="https://medium.com/@kaxun" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <FaMedium />
            <span>Medium</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 z-20">
          <h3 className="text-xl font-bold mb-2">Social Media</h3>
          <a
            href="https://www.linkedin.com/in/kaxun01/" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <RxLinkedinLogo />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/kasun.madushan.wickramasinghe/" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/k_a_x_u_n/" // Update link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <RxInstagramLogo />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        &copy; KAXUN Dev 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
