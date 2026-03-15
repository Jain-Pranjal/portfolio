import { DiRedis } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import {
    SiApachekafka,
    SiC,
    SiCplusplus,
    SiCss3,
    SiDjango,
    SiDocker,
    SiDrizzle,
    SiExpress,
    SiFastapi,
    SiFigma,
    SiGit,
    SiGithub,
    SiGooglechrome,
    SiGraphql,
    SiHtml5,
    SiHuggingface,
    SiJavascript,
    SiJira,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiN8N,
    SiNextdotjs,
    SiNodedotjs,
    SiOpenai,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiPython,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

export function SkillsSection() {
    const skillCategories = [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'C', icon: SiC },
                { name: 'C++', icon: SiCplusplus },
                { name: 'Python', icon: SiPython },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'TypeScript', icon: SiTypescript },
            ],
        },
        {
            category: 'Frontend Development',
            skills: [
                { name: 'React', icon: SiReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'HTML5', icon: SiHtml5 },
                { name: 'CSS3', icon: SiCss3 },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
            ],
        },
        {
            category: 'Backend Development',
            skills: [
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express', icon: SiExpress },
                { name: 'Django', icon: SiDjango },
                { name: 'REST APIs', icon: SiHtml5 },
                { name: 'GraphQL', icon: SiGraphql },
                { name: 'FastAPI', icon: SiFastapi },
            ],
        },
        {
            category: 'Database Management',
            skills: [
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'MySQL', icon: SiMysql },
                { name: 'Supabase', icon: SiSupabase },
                { name: 'Prisma', icon: SiPrisma },
                { name: 'Drizzle', icon: SiDrizzle },
                { name: 'Redis', icon: DiRedis },
            ],
        },
        {
            category: 'AI development',
            skills: [
                { name: 'OpenAI', icon: SiOpenai },
                { name: 'Hugging Face', icon: SiHuggingface },
                { name: 'n8n', icon: SiN8N },
            ],
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git', icon: SiGit },
                { name: 'GitHub', icon: SiGithub },
                { name: 'Docker', icon: SiDocker },
                { name: 'Figma', icon: SiFigma },
                { name: 'Postman', icon: SiPostman },
                { name: 'Jira', icon: SiJira },
                { name: 'Performance', icon: SiGooglechrome },
                { name: 'AWS', icon: FaAws },
                { name: 'Apache Kafka', icon: SiApachekafka },
                { name: 'Kubernetes', icon: SiKubernetes },
            ],
        },
    ]

    return (
        <div className="max-w-4xl space-y-6 px-4 py-10">
            <h1 className="mb-6 border-b border-notes-border pb-2 text-3xl font-bold text-notes-text">
                Skills
            </h1>

            <div className="space-y-10">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h2 className="mb-4 text-xl font-semibold text-notes-text">
                            {category.category}
                        </h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                            {category.skills.map((skill, i) => {
                                const Icon = skill.icon
                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 rounded-lg border border-notes-border bg-notes-sidebarHover p-3 shadow-sm"
                                    >
                                        <Icon className="h-6 w-6 text-notes-accent" />
                                        <span className="text-sm font-medium text-notes-text">
                                            {skill.name}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-notes-border bg-notes-sidebarHover p-6">
                    <h2 className="mb-3 text-xl font-semibold text-notes-text">
                        Languages
                    </h2>
                    <ul className="list-outside list-disc space-y-2 pl-5 text-notes-text">
                        <li>Hindi (Native)</li>
                        <li>English (Fluent)</li>
                    </ul>
                </div>

                <div className="rounded-lg border border-notes-border bg-notes-sidebarHover p-6">
                    <h2 className="mb-3 text-xl font-semibold text-notes-text">
                        Soft Skills
                    </h2>
                    <ul className="list-outside list-disc space-y-2 pl-5 text-notes-text">
                        <li>Team Collaboration</li>
                        <li>Project Management</li>
                        <li>Problem Solving</li>
                        <li>Communication</li>
                        <li>Adaptability</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
