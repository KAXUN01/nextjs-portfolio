// Projects.js
import React from "react";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("../sub/ProjectCard"), {
  ssr: false, // Disable SSR for this component
});

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py- z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Warmhands Disaster Management System"
          description="A Disaster Management System developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
          This system allows users to report incidents related to natural disasters and notifies users in the affected area after admin verification."
          liveDemoUrl="https://your-live-demo-link.com" // Update with actual live demo URL
        />
        <ProjectCard
          src="/CardImage.png"
          title="Heart Disease Prediction Project"
          description="Using Machine Learning to Understand Medical Data and Predict Heart Health"
          liveDemoUrl="https://heart-disease-prediction-system-ml.streamlit.app/" // Update with actual live demo URL
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Nextjs & Three Portfolio"
          description=" Developed a Portfolio website using Next-js, Three-js and Framer motion"
          liveDemoUrl="https://your-space-website-demo.com" // Update with actual live demo URL
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-12">
        <ProjectCard
          src="/NextWebsite.png"
          title="Warmhands Disaster Management System"
          description="A Disaster Management System developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
          This system allows users to report incidents related to natural disasters and notifies users in the affected area after admin verification."
          liveDemoUrl="https://your-live-demo-link.com" // Update with actual live demo URL
        />
        <ProjectCard
          src="/CardImage.png"
          title="Heart Disease Prediction Project"
          description="Using Machine Learning to Understand Medical Data and Predict Heart Health"
          liveDemoUrl="https://heart-disease-prediction-system-ml.streamlit.app/" // Update with actual live demo URL
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Nextjs & Three Portfolio"
          description=" Developed a Portfolio website using Next-js, Three-js and Framer motion"
          liveDemoUrl="https://your-space-website-demo.com" // Update with actual live demo URL
        />
      </div>
    </div>
  );
};

export default Projects;
