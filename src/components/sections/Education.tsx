export function EducationSection() {
    const education = [
    
      {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Bharati Vidyapeeth College of Engineering, Delhi",
        year: "2021-2025",
        CGPA: "8.87/10",
        description: "Focus on software development and database management. Participated in multiple hackathons and coding competitions."
      },
      {
        degree: "12th Grade (CBSE)",
        institution: "Bal Mandir Sr. Sec. School, Delhi",
        year: "2021",
        CGPA:"93.4%",
        description:"Completed with a focus on Science and Mathematics. Achieved high marks in Physics, Chemistry, and Mathematics."
      },
      {
        degree: "10th Grade (CBSE)",
        institution: "Bal Mandir Sr. Sec. School, Delhi",
        year: "2019",
        CGPA: "94.8%",
        description: "Achieved high marks in all subjects, with a special focus on Mathematics and Science. Participated in various extracurricular activities."
      }
    ];
  
    return (
      <div className="space-y-6 max-w-4xl pl-4 py-10">
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
              <p className="text-notes-muted mt-1">CGPA: {item.CGPA}</p>
              <p className="text-notes-text mt-4">{item.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    );
  }