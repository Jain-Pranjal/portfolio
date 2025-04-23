export function SkillsSection() {
    const skillCategories = [
      {
        category: "Frontend Development",
        skills: [
          { name: "React", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "HTML/CSS", level: 95 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript", level: 92 }
        ]
      },
      {
        category: "Backend Development",
        skills: [
          { name: "Node.js", level: 80 },
          { name: "Express", level: 75 },
          { name: "MongoDB", level: 70 },
          { name: "SQL", level: 65 },
          { name: "GraphQL", level: 60 }
        ]
      },
      {
        category: "Tools & Others",
        skills: [
          { name: "Git", level: 88 },
          { name: "Docker", level: 70 },
          { name: "Figma", level: 82 },
          { name: "Responsive Design", level: 90 },
          { name: "Performance Optimization", level: 75 }
        ]
      }
    ];
  
    return (
      <div className="space-y-6 max-w-3xl pl-4 pt-10">
        <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
          Skills
        </h1>
        
        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-xl font-semibold text-notes-text mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-notes-text">{skill.name}</span>
                      <span className="text-notes-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-notes-border rounded-full h-2">
                      <div 
                        className="bg-notes-accent h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
            <h2 className="text-xl font-semibold text-notes-text mb-3">Languages</h2>
            <ul className="list-disc list-inside text-notes-text space-y-2">
              <li>English (Native)</li>
              <li>Spanish (Professional)</li>
              <li>French (Conversational)</li>
            </ul>
          </div>
          
          <div className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
            <h2 className="text-xl font-semibold text-notes-text mb-3">Soft Skills</h2>
            <ul className="list-disc list-inside text-notes-text space-y-2">
              <li>Team Collaboration</li>
              <li>Project Management</li>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  