import {experienceContent} from "@/content/sectionContent";

export function ExperienceSection() {
  return (
    <div className="space-y-6 max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Experience
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 gap-4">
          {experienceContent.map((experience, index) => (
            <div key={index} className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-semibold text-notes-text">{experience.title}</h3>
                  <span className="text-notes-text opacity-75">{experience.period}</span>
                </div>
                <h4 className="text-lg text-notes-accent">{experience.company}</h4>
                <ul className="list-disc list-outside pl-5 text-notes-text space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}