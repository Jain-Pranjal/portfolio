const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Zoth",
    period: "Oct 2024 - Present",
    responsibilities: [
      "Maintained and enhanced Zoth's front-end codebase, delivering seamless user experiences across multiple platforms",
      "Designed, developed, and deployed the Zoth Airdrop Checker",
      "Created and maintained comprehensive test cases for front-end, back-end, and APIs to ensure system reliability",
      "Implemented performance testing capabilities using Google Lighthouse",
      "Implemented 100+ automation test flows using Jest and Playwright, enhancing testing efficiency and reducing manual effort",
      "Resolved the issue of the SonarQube report"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Augsta Infosystems Private Limited",
    period: "July 2024 - August 2024",
    responsibilities: [
      "Developed a banking platform designed for administrators to efficiently manage employees and onboard new users",
      "Implemented a role-based authentication system, enabling controls and permissions for various users",
      "Utilised the NextJS and ReactJS for frontend and backend along with MongoDB as database"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Two Point One Inc.",
    period: "July 2023 - August 2023",
    responsibilities: [
      "Developed an SMS classifier to differentiate between spam and legitimate SMS using a comprehensive dataset",
      "Identified and extracted key features like sender reputation and message content to improve classification accuracy",
      "Utilized Python and Streamlit for model development and Jupyter Notebook for data analysis and visualization"
    ]
  }
];

export function ExperienceSection() {
  return (
    <div className="space-y-6 max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Experience
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 gap-4">
          {experienceData.map((experience, index) => (
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