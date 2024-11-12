import Image from "next/image";
import profilePic from "public/css.png"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center p-20 bg-gray-500 bg-opacity-10 py-40"
      id="about-me"
    >
      <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
        <div className="relative w-48 h-60 rounded-lg shadow-lg overflow-hidden mb-4">
          <Image
            src={profilePic}
            alt="Profile picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 md:mr-8">
        <h2 className="text-5xl font-bold text-gray-50 mb-4">BIOGRAPHY</h2>
        <p className="text-gray-50 mb-4">
          Hey there!, I'm <span className="font-bold">Kasun</span> from
          Rathnapura in Sri Lanka. I’m passionate about coding, automating
          processes, and building systems that work smoothly and efficiently.
          Right now, I’m pursuing a degree in Information and Communication
          Technology, and I’m always looking for new ways to grow and stay ahead
          of the tech curve.
        </p>
        <p className="text-gray-50 mb-4">
          I love astronomy. It’s something that really fuels my creativity and
          curiosity. I bring that same energy to everything I do, whether I’m
          solving problems or building new systems. Hit me up and let’s create
          something amazing together!
        </p>
        <p className="text-gray-50 mb-4"></p>
      </div>
    </section>
  );
};

export default AboutMe;
