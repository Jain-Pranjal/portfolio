import {
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiGit,
  SiDocker,
  SiFigma,
  SiGooglechrome,
  SiC,
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiJira,
  SiSupabase,
  SiPrisma,
  SiDjango,
  SiGithub,
} from "react-icons/si";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Django", icon: SiDjango },
        { name: "REST APIs", icon: SiHtml5 },
        { name: "GraphQL", icon: SiGraphql },
      ],
    },
    {
      category: "Database Management",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Supabase", icon: SiSupabase },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Docker", icon: SiDocker },
        { name: "Figma", icon: SiFigma },
        { name: "Postman", icon: SiPostman },
        { name: "Jira", icon: SiJira },

        { name: "Performance", icon: SiGooglechrome },
      ],
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl pl-4 py-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Skills
      </h1>

      <div className="space-y-10">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-notes-text mb-4">
              {category.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-notes-sidebarHover border border-notes-border p-3 rounded-lg shadow-sm"
                  >
                    <Icon className="text-notes-accent w-6 h-6" />
                    <span className="text-notes-text text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
          <h2 className="text-xl font-semibold text-notes-text mb-3">
            Languages
          </h2>
          <ul className="list-disc list-outside pl-5 text-notes-text space-y-2">
            <li>Hindi (Native)</li>
            <li>English (Fluent)</li>
          </ul>
        </div>

        <div className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border">
          <h2 className="text-xl font-semibold text-notes-text mb-3">
            Soft Skills
          </h2>
          <ul className="list-disc list-outside pl-5 text-notes-text space-y-2">
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
