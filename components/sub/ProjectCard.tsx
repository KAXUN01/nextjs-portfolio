"use client"; // Ensure this component is a Client Component

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  liveDemoUrl: string;
}

const ProjectCard = ({ src, title, description, liveDemoUrl }: Props) => {
  return (
    <div
      className="w-full md:w-1/3 bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={() => window.open(liveDemoUrl, "_blank")}
      aria-label={`Go to live demo of ${title}`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          height={300}
          width={500}
          className="h-200 w-full object-cover rounded-md"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
