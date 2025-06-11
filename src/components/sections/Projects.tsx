import React from "react";
import { ArrowUpRight } from 'lucide-react';
import {projectsContent} from "@/content/sectionContent";


export function ProjectsSection() {
  return (
    <div className="space-y-6 max-w-4xl pl-4 py-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Projects
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 gap-2">
          {projectsContent.map((project, index) => (
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