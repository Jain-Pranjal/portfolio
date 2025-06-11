import {educationContent} from "@/content/sectionContent";

export function EducationSection() {
    return (
      <div className="space-y-6 max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Education
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 gap-4">
        {educationContent.map((item, index) => (
          <div key={index} className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h2 className="text-xl font-semibold text-notes-text">{item.degree}</h2>
            <span className="text-notes-accent">{item.year}</span>
            </div>
            <p className="text-notes-text opacity-75">{item.institution}</p>
            <p className="text-notes-text opacity-75">CGPA: {item.CGPA}</p>
            <p className="text-notes-text">{item.description}</p>
          </div>
          </div>
        ))}
        </div>
      </div>
      </div>
    );
  }