import Image from "next/image";
import profilePic from "public/darkEdited.png";

// AboutMe component
const AboutMe = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center p-20 bg-gray-500 bg-opacity-10 py-40"
      id="about-me"
    >
      <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0 z-20">
        <div className="relative sm:w-48 sm:h-60 md:w-64 md:h-80 lg:w-80 lg:h-96 rounded-lg border-5 border-white shadow-xl shadow-gray-800 overflow-hidden mb-4">
          <Image
            src={profilePic}
            alt="Profile picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 md:mr-8">
        <h2 className="text-5xl font-bold font-cinzel text-white mb-4 md:text-xl text-center">
          {" "}
          &lt; ABOUT ME /&gt;
        </h2>
        <p className="text-gray-50 mb-4 text-2xl font-cinzel text-white shadow-lg text-justify md:text-xl text-center">
          Hey there!, I&apos;m <span className="font-bold">Kasun</span> from
          Rathnapura in Sri Lanka. I&apos;m passionate about coding, automating
          processes, and building systems that work smoothly and efficiently.
          Right now, I&apos;m pursuing a degree in Information and Communication
          Technology, and I&apos;m always looking for new ways to grow and stay
          ahead of the tech curve.
        </p>
        <p className="text-gray-50 mb-4 text-2xl font-cinzel text-white shadow-lg text-justify md:text-xl text-center">
          I love astronomy. It&apos;s something that really fuels my creativity
          and curiosity. I bring that same energy to everything I do, whether
          I&apos;m solving problems or building new systems. Hit me up and
          let&apos;s create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
