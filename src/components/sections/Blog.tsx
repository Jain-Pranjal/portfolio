import React, { useState } from 'react';
import {blogContent} from "@/content/sectionContent";
import Image from 'next/image';

// Get unique tags for filter
const uniqueTags = ["all", ...new Set(blogContent.map(blog => blog.tag))];

export function BlogSection() {
    const [activeTag, setActiveTag] = useState("all");
    
    const filteredBlogs = activeTag === "all" 
        ? blogContent 
        : blogContent.filter(blog => blog.tag === activeTag);

    return (
        <div className="space-y-6 max-w-4xl px-4 py-10">
            <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
                Blog
            </h1>
            
            {/* Tags filter */}
            <div className="flex flex-wrap gap-2 mb-6">
                {uniqueTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-4 py-2 rounded-full text-sm ${
                            activeTag === tag 
                                ? "bg-notes-accent text-white" 
                                : "bg-notes-sidebarHover text-notes-text border border-notes-border"
                        }`}
                    >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                ))}
            </div>
            
            {/* Blog cards */}
            <div className="prose prose-invert max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredBlogs.map((blog) => (
                        <a 
                            href={blog.link}
                            key={blog.id} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-notes-sidebarHover p-6 rounded-lg border border-notes-border hover:border-notes-accent transition-colors duration-200 no-underline"
                        >
                            <div className="flex flex-col space-y-4">
                                {blog.id && (
                                    <Image
                                        src={blog.imageLink}
                                        alt={blog.title}
                                        className="w-full h-40 object-cover rounded-md select-none"
                                        draggable="false"
                                        width={640}
                                        height={160}
                                    />
                                )}
                                <div>
                                    <span className="inline-block px-2 py-1 text-xs rounded bg-notes-accent/20 text-notes-accent mb-2">
                                        {blog.tag}
                                    </span>
                                    <h3 className="text-xl font-semibold text-notes-text">{blog.title}</h3>
                                    <p className="text-notes-text/70 text-sm mt-1">{blog.description}</p>
                                </div>
                                <div className="text-notes-text opacity-75 text-sm">
                                    Published on {new Date(blog.datePublished).toLocaleDateString()}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
            {filteredBlogs.length === 0 && (
                <div className="text-center py-10 text-notes-text/50">
                    No blog posts found for this tag.
                </div>
            )}
        </div>
    );
};

