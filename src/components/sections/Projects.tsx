import React from "react";
import { ArrowUpRight } from 'lucide-react';


const projects = [
  {
    title: "Calenzo",
    description: "A sophisticated calendar and scheduling platform featuring real-time collaboration, intelligent event management, and seamless third-party integrations. Built with modern web technologies focusing on user experience and productivity.",
    link: "https://github.com/Jain-Pranjal/Calenzo"
  },
  {
    title: "JSON-Bro",
    description: "A robust mock API service designed for developers to streamline testing and prototyping. Provides flexible endpoints and customizable responses for efficient frontend development workflows.",
    link: "https://github.com/Jain-Pranjal/JSON-Bro"
  },
  {
    title: "SyllabusX",
    description: "Comprehensive academic platform for IPU students featuring centralized syllabus management, collaborative note-sharing, and streamlined content organization.",
    link: "https://github.com/akshat-OwO/syllabusx-client"
  },
  {
    title: "Jai Mata De - Cultural Heritage",
    description: "An elegant web platform celebrating cultural heritage through modern design. Features responsive layouts, optimized performance, and thoughtful user interactions.",
    link: "https://github.com/Jain-Pranjal/jai-mata-de"
  },
  {
    title: "Email-SMS Spam Classifier",
    description: "Advanced machine learning application implementing sophisticated algorithms to classify and filter email and SMS communications, achieving high accuracy in spam detection.",
    link: "https://github.com/Jain-Pranjal/Email-SMS-Spam-Classifier"
  },
  {
    title: "Book-recommender-system",
    description: "The book recommender system basically uses the Collaborative filtering algorithm to recommend the books to the user.",
    link: "https://github.com/Jain-Pranjal/Book-recommender-system"
  }
];

export function ProjectsSection() {
  return (
    <div className="space-y-6 max-w-4xl pl-4 py-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Projects
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 gap-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-notes-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-notes-text mb-2">
                {project.title}
              </h3>
              <p className="text-notes-text mb-4">
                {project.description}
              </p>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-notes-accent hover:underline"
              >
                View Project <ArrowUpRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* <div className="mt-8">
        <h2 className="text-xl font-semibold text-notes-text mb-4">Featured Work</h2>
        <p className="text-notes-text">
          These projects showcase my expertise in different areas of software development,
          from API design to machine learning applications.
        </p>
      </div> */}
    </div>
  );
}

export default ProjectsSection;