import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import AboutMe from "@/components/main/aboutMe";
import Education from "@/components/main/education";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <Education />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
