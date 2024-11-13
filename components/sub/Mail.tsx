"use client";

import { useState } from "react";
import { FiClipboard } from "react-icons/fi";

const Mail = () => {
  const [copied, setCopied] = useState(false);
  const email = "kasunmadhushanw@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error("Failed to copy!", err));
    } else {
      console.error("Clipboard API is not supported");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer">
      {/* Email Box with White Border, Responsive Padding and Font Size */}
      <div
        className="p-3 md:p-4 rounded-lg shadow-lg border-2 border-white bg-green-900 text-center md:text-left w-full md:w-auto"
        onClick={handleCopyEmail}
      >
        <span className="text-base md:text-lg font-light text-white">
          {email}
        </span>
      </div>

      {/* Clipboard Icon Button */}
      <button
        onClick={handleCopyEmail}
        className="border border-gray-500 rounded-md p-2 hover:bg-gray-200 focus:outline-none"
        title="Copy email to clipboard"
      >
        <FiClipboard className="text-gray-500 text-lg md:text-xl" />
      </button>

      {copied && (
        <span className="text-green-500 text-sm md:text-lg ml-2">Copied!</span>
      )}
    </div>
  );
};

export default Mail;
