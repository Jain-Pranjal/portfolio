import React from "react";
import DotPattern from "@/components/ui/dot-pattern";
import WordPullUp from "@/components/ui/word-pull-up";
import { MagicCard } from "@/components/ui/magic-card"; 

const projects = [
  {
    title: "JSON-Bro",
    description: "Fake JSON API for testing and prototyping.",
    link: "https://github.com/Jain-Pranjal/JSON-Bro"
  },
  {
    title: "SyllabusX",
    description: "IPU full syllabus concentrated at one place along with notes.",
    link: "https://github.com/akshat-OwO/syllabusx-client"
  },
  {
    title: "Email/SMS spam classifier",
    description: "Distinguish between spam and legitimate emails.",
    link: "https://github.com/Jain-Pranjal/Email-SMS-Spam-Classifier"
  },
  {
    title: "Book recommender system",
    description: "Recommend the books to the user using Collaborative filtering algorithm.",
    link: "https://github.com/Jain-Pranjal/Book-recommender-system"
  }
];

const Projects = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <DotPattern className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-12">
        <WordPullUp
          className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
          words="Projects 💻"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
          {projects.map((project, index) => (
            <MagicCard key={index} className="p-6" gradientColor="#43C6AC">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-500 hover:underline cursor-pointer">
                View Project
              </a>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;