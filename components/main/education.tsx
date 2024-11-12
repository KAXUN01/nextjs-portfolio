// SkillsEducationSection.js
import React from "react";

const SkillsEducationSection = () => {
  return (
    <div className="container mx-auto px-40 py-1" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <div className="bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <ul className="list-disc pl-5 space-y-2 text-white">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js & Express</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>CI/CD Pipelines</li>
            <li>AWS (EC2, S3, Lambda)</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>Jenkins</li>
            <li>Linux (Ubuntu, CentOS)</li>
            <li>Monitoring Tools (Prometheus, Grafana)</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="text-white">
            <h3 className="text-xl font-semibold">
              University of Sri Jayewardenepura
            </h3>
            <p>BSc in Information and Communication Technology</p>
            <p>Specialized in Networking</p>
            <p className="text-gray-400 text-sm">2021 - Present</p>
          </div>
          <div className="mt-4 text-white">
            <h3 className="text-xl font-semibold">University of Moratuwa</h3>
            <p>Full Stack Developer Course</p>
            <p className="text-gray-400 text-sm">2021 - 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsEducationSection;
