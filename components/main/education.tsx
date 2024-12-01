// SkillsEducationSection.js
"use client"; // Ensures the component is client-side, required for hooks in Next.js 14

import React from "react";
import { motion } from "framer-motion";

const SkillsEducationSection = () => {
  return (
    <div
      className="container mx-auto px-4 md:px-40 py-12 md:py-20"
      id="education"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <motion.div
          className="bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md "
          initial={{ opacity: 0, x: -200 }} // Start off-screen from the left
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.9 }} // Duration for the animation
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Skills
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-white">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>CI/CD Pipelines</li>
            <li>AWS (EC2, S3, Lambda)</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>Jenkins</li>
            <li>Linux (Ubuntu, CentOS)</li>
            <li>Monitoring Tools (Prometheus, Grafana)</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>JAVA/C</li>
            <li>GO/PYTHON</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js & Express</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 200 }} // Start off-screen from the right
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.6 }} // Duration for the animation
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-semibold">
              University of Sri Jayewardenepura
            </h3>
            <p>BSc in Information and Communication Technology</p>
            <p>Specialized in Networking</p>
            <p className="text-gray-400 text-sm md:text-base">2021 - Present</p>
          </div>
          <div className="mt-4 text-white">
            <h3 className="text-xl md:text-2xl font-semibold">
              University of Moratuwa
            </h3>
            <p>Full Stack Developer Course</p>
            <p className="text-gray-400 text-sm md:text-base">2021 - 2022</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsEducationSection;
