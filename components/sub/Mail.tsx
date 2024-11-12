"use client"; // Ensures this component is treated as a client component

import { useState } from 'react';
import { FiClipboard } from 'react-icons/fi';

const Mail = () => {
  const [copied, setCopied] = useState(false);
  const email = "kasunmadhushanw@gmail.com"; // Replace with your actual email

  const handleCopyEmail = () => {
    // Check if the clipboard API is available before attempting to use it
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
        })
        .catch((err) => console.error('Failed to copy!', err));
    } else {
      console.error('Clipboard API is not supported');
    }
  };

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <span>{email}</span>
      <button
        onClick={handleCopyEmail}
        className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 focus:outline-none"
        title="Copy email to clipboard"
      >
        <FiClipboard className="text-gray-600" />
      </button>
      {copied && <span className="text-green-500 ml-2">Copied!</span>}
    </div>
  );
};

export default Mail;
