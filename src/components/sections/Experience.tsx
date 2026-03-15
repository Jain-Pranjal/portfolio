import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

import { experienceContent } from '@/content/sectionContent'

export function ExperienceSection() {
    return (
        <div className="max-w-4xl space-y-6 px-4 py-10">
            <h1 className="mb-6 border-b border-notes-border pb-2 text-3xl font-bold text-notes-text">
                Experience
            </h1>

            <div className="prose prose-invert max-w-none">
                <div className="grid grid-cols-1 gap-4">
                    {experienceContent.map((experience, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-notes-border bg-notes-sidebarHover p-6"
                        >
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-xl font-semibold text-notes-text">
                                        {experience.title}
                                    </h3>
                                    <span className="text-notes-text opacity-75">
                                        {experience.period}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <h4 className="text-lg text-notes-accent">
                                        {experience.company}
                                    </h4>
                                    {experience.companyLink && (
                                        <Link
                                            href={experience.companyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-notes-accent hover:underline"
                                        >
                                            <GoArrowUpRight
                                                size={18}
                                                className="ml-1"
                                            />
                                        </Link>
                                    )}
                                </div>
                                <ul className="list-outside list-disc space-y-2 pl-5 text-notes-text">
                                    {experience.responsibilities.map(
                                        (responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
