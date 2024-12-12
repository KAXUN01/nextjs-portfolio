"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 mt-20 lg:mt-40 w-full relative"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start relative">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl lg:text-6xl font-bold text-white max-w-full lg:max-w-[630px] w-auto h-auto relative"
        >
          <span>
            Hello!
            <br /> I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              KASUN{" "}
            </span>
            <Typewriter
              options={{
                strings: ["DevOps Engineer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm lg:text-lg text-gray-400 my-5 max-w-full lg:max-w-[620px] relative text-justify"
        >
          I&apos;m a Full Stack Software Engineer with a strong foundation in
          DevOps. I build and deploy efficient, scalable applications, combining
          creative problem-solving with technical precision.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="z-30 hover:scale-125 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[160px] lg:max-w-[200px] mx-auto lg:mx-0 relative transition-transform duration-300 ease-in-out border-2 border-green-500"
          href="/resume.pdf"
          target="_blank"
        >
          Get My Profile
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-auto flex justify-center items-center mt-10 lg:mt-0 relative"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={350}
          width={350}
          className="lg:h-[650px] lg:w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
