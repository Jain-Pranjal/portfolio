export function EducationSection() {
    const education = [
      {
        degree: "Master of Computer Science",
        institution: "Tech University",
        year: "2020 - 2022",
        description: "Specialized in Human-Computer Interaction and Advanced Web Technologies. Graduated with honors."
      },
      {
        degree: "Bachelor of Science in Information Technology",
        institution: "Digital College",
        year: "2016 - 2020",
        description: "Focus on software development and database management. Participated in multiple hackathons and coding competitions."
      },
      {
        degree: "Certificate in UI/UX Design",
        institution: "Design Academy Online",
        year: "2019",
        description: "Completed an intensive 6-month program covering user research, wireframing, prototyping, and usability testing."
      }
    ];
  
    return (
      <div className="space-y-6 max-w-3xl pl-4 pt-10">
        <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
          Education
        </h1>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h2 className="text-xl font-semibold text-notes-text">{item.degree}</h2>
                <span className="text-notes-accent mt-1 md:mt-0">{item.year}</span>
              </div>
              <p className="text-notes-muted mt-2">{item.institution}</p>
              <p className="text-notes-text mt-4">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-notes-sidebarActive p-6 rounded-lg border border-notes-border">
          <h2 className="text-xl font-semibold text-notes-text mb-3">Continuing Education</h2>
          <p className="text-notes-text">
            I believe in lifelong learning and regularly take online courses to stay updated with the latest technologies and industry trends.
            Currently exploring advanced topics in artificial intelligence and cloud architecture.
          </p>
        </div>
      </div>
    );
  }