// Projects.js
import React from "react";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("../sub/ProjectCard"), {
  ssr: false, // Disable SSR for this component
});

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py- z-20 text-justify"
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
          liveDemoUrl="https://heart-disease-prediction-system-ml.streamlit.app/" 
        />
        <ProjectCard
          src="/portfolio.png"
          title="Nextjs & Three Portfolio"
          description=" I developed a dynamic portfolio website using Next.js, Three.js, and Framer Motion to showcase my work and skills. 
          The site features smooth animations, interactive 3D elements, and responsive design, creating an engaging and visually rich user experience.
          Next.js ensures fast performance and SEO optimization, while Three.js adds immersive 3D graphics, and Framer Motion enhances animations for a modern interface."
          liveDemoUrl="https://github.com/KAXUN01/nextjs-portfolio" 
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-12">
        <ProjectCard
          src="/terraform.png"
          title="Build Complete CI/CD Pipeline with Terraform and GitHub Actions"
          description="Designed and implemented a robust CI/CD pipeline for seamless application deployment. 
          Leveraged Terraform for infrastructure as code (IaC) to provision scalable and reliable cloud resources, and used GitHub Actions to automate build, test, and deployment processes."
          liveDemoUrl="https://github.com/KAXUN01/Complete-CI-CD-with-Terraform"
        />
        <ProjectCard
          src="/docker.png"
          title="Deploy Node.js application to AWS EC2 using GitHub Actions and docker"
          description="This project automates the deployment of a Node.js application to AWS EC2 using GitHub Actions and Docker. 
          It includes containerizing the app, setting up an EC2 server, and creating a CI/CD pipeline for seamless, automated updates with minimal manual effort."
          liveDemoUrl="https://github.com/KAXUN01/nextjs-portfolio" 
        />
      </div>
    </div>
  );
};

export default Projects;
