import Image from "next/image";
import profilePic from "public/css.png"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-20 bg-gray-500 bg-opacity-10">
      <div className="md:w-1/2 md:mr-8">
        <h2 className="text-5xl font-bold text-gray-50 mb-4">
          Passion Fuels Purpose!
        </h2>
        <h3 className="text-lg font-semibold text-gray-50 mb-4">BIOGRAPHY</h3>
        <p className="text-gray-50 mb-4">
          Hi, I'm <span className="font-bold">CodeBucks</span>, a web developer
          and UI/UX designer with a passion for creating beautiful, functional,
          and user-centered digital experiences. With 4 years of experience in
          the field, I am always looking for new and innovative ways to bring my
          clients' visions to life.
        </p>
        <p className="text-gray-50 mb-4">
          I believe that design is about more than just making things look
          pretty – it's about solving problems and creating intuitive, enjoyable
          experiences for users.
        </p>
        <p className="text-gray-50 mb-4">
          Whether I'm working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </p>
      </div>

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
    </section>
  );
};

export default AboutMe;
