import Image from 'next/image'
import React, { useState } from 'react'

import { blogContent } from '@/content/sectionContent'

// Get unique tags for filter
const uniqueTags = ['all', ...new Set(blogContent.map((blog) => blog.tag))]

export function BlogSection() {
    const [activeTag, setActiveTag] = useState('all')

    const filteredBlogs =
        activeTag === 'all'
            ? blogContent
            : blogContent.filter((blog) => blog.tag === activeTag)

    return (
        <div className="max-w-4xl space-y-6 px-4 py-10">
            <h1 className="mb-6 border-b border-notes-border pb-2 text-3xl font-bold text-notes-text">
                Blog
            </h1>

            {/* Tags filter */}
            <div className="mb-6 flex flex-wrap gap-2">
                {uniqueTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`rounded-full px-4 py-2 text-sm ${
                            activeTag === tag
                                ? 'bg-notes-accent text-white'
                                : 'border border-notes-border bg-notes-sidebarHover text-notes-text'
                        }`}
                    >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                ))}
            </div>

            {/* Blog cards */}
            <div className="prose prose-invert max-w-none">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {filteredBlogs
                        .sort(
                            (a, b) =>
                                new Date(b.datePublished).getTime() -
                                new Date(a.datePublished).getTime()
                        )
                        .map((blog) => (
                            <a
                                href={blog.link}
                                key={blog.id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-notes-border bg-notes-sidebarHover p-6 no-underline transition-colors duration-200 hover:border-notes-accent"
                            >
                                <div className="flex flex-col space-y-4">
                                    {blog.id && (
                                        <Image
                                            src={blog.imageLink}
                                            alt={blog.title}
                                            className="h-40 w-full select-none rounded-md object-cover"
                                            draggable="false"
                                            width={640}
                                            height={160}
                                        />
                                    )}
                                    <div>
                                        <span className="mb-2 inline-block rounded bg-notes-accent/20 px-2 py-1 text-xs text-notes-accent">
                                            {blog.tag}
                                        </span>
                                        <h3 className="text-xl font-semibold text-notes-text">
                                            {blog.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-notes-text/70">
                                            {blog.description}
                                        </p>
                                    </div>
                                    <div className="text-sm text-notes-text opacity-75">
                                        Published on{' '}
                                        {new Date(
                                            blog.datePublished
                                        ).toLocaleDateString()}
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
            </div>

            {filteredBlogs.length === 0 && (
                <div className="py-10 text-center text-notes-text/50">
                    No blog posts found for this tag.
                </div>
            )}
        </div>
    )
}
