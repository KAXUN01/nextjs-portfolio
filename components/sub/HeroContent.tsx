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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full relative "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start relative ">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[630px] w-auto h-auto relative "
        >
          <span>
            Hello! I'm
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
          className="text-md text-gray-400 my-5 max-w-[620px] relative "
        >
          I&apos;m a Full Stack Software Engineer with a strong foundation in
          DevOps. I build and deploy efficient, scalable applications, combining
          creative problem-solving with technical precision.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="z-30 hover:scale-125 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] relative transition-transform duration-300 ease-in-out"
          href="#"
        >
          DOWNLOAD CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative "
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
