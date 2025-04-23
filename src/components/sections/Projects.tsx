import React from "react";


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
    title: "Email/SMS spam classifier",
    description: "Distinguish between spam and legitimate emails.",
    link: "https://github.com/Jain-Pranjal/Email-SMS-Spam-Classifier"
  },
  {
    title: "Email/SMS spam classifier",
    description: "Distinguish between spam and legitimate emails.",
    link: "https://github.com/Jain-Pranjal/Email-SMS-Spam-Classifier"
  },
  {
    title: "Email/SMS spam classifier",
    description: "Distinguish between spam and legitimate emails.",
    link: "https://github.com/Jain-Pranjal/Email-SMS-Spam-Classifier"
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

export function ProjectsSection() {
  return (
    <div className="space-y-6 max-w-3xl pl-4 pt-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Projects
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 gap-6">
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
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-notes-text mb-4">Featured Work</h2>
        <p className="text-notes-text">
          These projects showcase my expertise in different areas of software development,
          from API design to machine learning applications.
        </p>
      </div>
    </div>
  );
}

export default ProjectsSection;