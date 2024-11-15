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
          src="/dms.png"
          title="Warmhands Disaster Management System"
          description="A Disaster Management System developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
          This system allows users to report incidents related to natural disasters and notifies users in the affected area after admin verification."
          liveDemoUrl="https://github.com/WarmHands-DMS/warmhands"
        />
        <ProjectCard
          src="/hdp.png"
          title="Heart Disease Prediction Project"
          description="Using Machine Learning to Understand Medical Data and Predict Heart Health: 
          This project leverages machine learning algorithms to analyze medical data and identify factors influencing heart health  
          By training models on a dataset of patient health metrics.
          This application supports early intervention and informed decision-making in healthcare."
          liveDemoUrl="https://heart-disease-prediction-system-ml.streamlit.app/" // Update with actual live demo URL
        />
        <ProjectCard
          src="/portfolio.png"
          title="Nextjs & Three Portfolio"
          description=" I developed a dynamic portfolio website using Next.js, Three.js, and Framer Motion to showcase my work and skills. 
          The site features smooth animations, interactive 3D elements, and responsive design, creating an engaging and visually rich user experience.
          Next.js ensures fast performance and SEO optimization, while Three.js adds immersive 3D graphics, and Framer Motion enhances animations for a modern interface."
          liveDemoUrl="https://github.com/KAXUN01/nextjs-portfolio" // Update with actual live demo URL
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-12">
        <ProjectCard
          src="/dms.png"
          title="Warmhands Disaster Management System"
          description="A Disaster Management System developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
          This system allows users to report incidents related to natural disasters and notifies users in the affected area after admin verification."
          liveDemoUrl="https://github.com/WarmHands-DMS/warmhands"
        />
        <ProjectCard
          src="/hdp.png"
          title="Heart Disease Prediction Project"
          description="Using Machine Learning to Understand Medical Data and Predict Heart Health: 
          This project leverages machine learning algorithms to analyze medical data and identify factors influencing heart health  
          By training models on a dataset of patient health metrics.
          This application supports early intervention and informed decision-making in healthcare."
          liveDemoUrl="https://heart-disease-prediction-system-ml.streamlit.app/" // Update with actual live demo URL
        />
        <ProjectCard
          src="/portfolio.png"
          title="Nextjs & Three Portfolio"
          description=" I developed a dynamic portfolio website using Next.js, Three.js, and Framer Motion to showcase my work and skills. 
          The site features smooth animations, interactive 3D elements, and responsive design, creating an engaging and visually rich user experience.
          Next.js ensures fast performance and SEO optimization, while Three.js adds immersive 3D graphics, and Framer Motion enhances animations for a modern interface."
          liveDemoUrl="https://github.com/KAXUN01/nextjs-portfolio" // Update with actual live demo URL
        />
      </div>
    </div>
  );
};

export default Projects;
