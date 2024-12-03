import React from "react";
import Image from "next/image";
import ShineBorder from "@/components/ui/shine-border";
import RetroGrid from "@/components/ui/retro-grid"; // Import the GridPattern component
import WordPullUp from "@/components/ui/word-pull-up";

const About = () => {
  return (
    <div className="bg-[#09555c] h-screen flex flex-col justify-center items-center relative">
      <RetroGrid className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-12">
        <WordPullUp
          className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
          words="Hello guys 👋 let me introduce myself !!"
        />
        <ShineBorder
          borderWidth={5}
          className="relative flex max-w-4xl w-full h-auto md:h-96 flex-col md:flex-row items-center justify-center overflow-hidden rounded-lg bg-white p-6 shadow-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Image
              src="/profile.jpeg" // Ensure this path is correct
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="ml-0 md:ml-6 flex-grow text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Pranjal Jain</h2>
            <p className="text-gray-700 mb-4">
            A versatile developer with a strong background in building modern web applications, particularly using Next.js, React, and TypeScript. With expertise in managing databases, implementing complex APIs , I have developed skills in Full stack dvelopment. I am passionate about learning new technologies and frameworks and I am always looking for new challenges. 
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Bachelor&apos;s Degree in Computer Science - Bharati Vidyapeeth&apos;s College of Engineering (2021-2025)
                </li>
              </ul>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

export default About;