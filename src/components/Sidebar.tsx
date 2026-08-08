'use client'

import {
    Briefcase,
    CirclePlus,
    Code,
    FileText,
    FolderGit2,
    GraduationCap,
    Mail,
    Newspaper,
    Trash,
    User,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'

import { cn } from '@/lib/utils'
import { ActiveTarget } from '@/types/section'

interface SidebarProps {
    activeSection: ActiveTarget
    setActiveSection: (section: ActiveTarget) => void
    onNewNote: (id: string) => void
    notes: { id: string; content: string }[]
    onDeleteNote: (id: string) => void
}

const notesMock = [
    {
        id: 'about',
        label: 'About Me',
        info: 'Know more',
        desc: 'Personal overview',
        icon: <User className="h-5 w-5" />,
    },
    {
        id: 'education',
        label: 'Education',
        info: 'Academics',
        desc: 'Study background',
        icon: <GraduationCap className="h-5 w-5" />,
    },
    {
        id: 'skills',
        label: 'Skills',
        info: 'What I use',
        desc: 'Tech & Tools',
        icon: <Code className="h-5 w-5" />,
    },
    {
        id: 'experience',
        label: 'Experience',
        info: 'Work history',
        desc: 'Professional journey',
        icon: <Briefcase className="h-5 w-5" />,
    },
    {
        id: 'projects',
        label: 'Projects',
        info: 'My work',
        desc: 'Showcase of my projects',
        icon: <FolderGit2 className="h-5 w-5" />,
    },
    {
        id: 'blog',
        label: 'Blogs',
        info: 'Read my thoughts',
        desc: 'Articles & insights',
        icon: <Newspaper className="h-5 w-5" />,
    },
    {
        id: 'contact',
        label: 'Contact',
        info: 'Reach out',
        desc: "Let's connect!",
        icon: <Mail className="h-5 w-5" />,
    },
]

export function NoteSidebar({
    activeSection,
    setActiveSection,
    onNewNote,
    notes,
    onDeleteNote,
}: SidebarProps) {
    const [playClick] = useSound('/click-audio.mp3', { volume: 1 })
    const [sidebarWidth, setSidebarWidth] = useState<number>(300)
    const isResizing = useRef(false)

    // Delay rendering until we determine mobile status
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Set mounted state after initial render
    useEffect(() => {
        setMounted(true)
        setIsMobile(window.innerWidth < 768)
    }, [])

    // Handle desktop sidebar resizing
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing.current) return
            const newWidth = e.clientX
            setSidebarWidth(Math.max(200, Math.min(newWidth, 500)))
        }

        const stopResizing = () => {
            isResizing.current = false
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', stopResizing)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', stopResizing)
        }
    }, [])

    // Update mobile state on resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleNewNote = () => {
        playClick()
        const id = Date.now().toString()
        onNewNote(id)
        setActiveSection(id)
        const mainElement = document.querySelector('main')
        mainElement?.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSectionSelect = (id: ActiveTarget) => {
        playClick()
        setActiveSection(id)
        const mainElement = document.querySelector('main')
        mainElement?.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Don't render anything until we've determined the screen size
    if (!mounted) {
        return null
    }

    return (
        <div className="flex h-screen">
            <aside
                className={cn(
                    'flex select-none flex-col border-r border-[#222325] bg-[#202021]',
                    isMobile ? 'w-[70px]' : ''
                )}
                style={
                    !isMobile
                        ? {
                              width: `${sidebarWidth}px`,
                              minWidth: '200px',
                              maxWidth: '500px',
                          }
                        : {}
                }
            >
                <nav className="flex-1 px-0 pt-10">
                    {/* New Note */}
                    <div className={cn('mb-2 px-3', isMobile && 'px-1')}>
                        <div
                            className={cn(
                                'flex cursor-pointer flex-row items-start gap-3 rounded-xl bg-[#313234] p-4 text-white shadow',
                                isMobile && 'justify-center p-3',
                                typeof activeSection === 'string' &&
                                    !notesMock.find(
                                        (n) => n.id === activeSection
                                    )
                                    ? 'outline outline-2 outline-[#ff9f0a]'
                                    : 'hover:bg-[#35363a]'
                            )}
                            onClick={handleNewNote}
                            tabIndex={0}
                            role="button"
                            aria-label="Create New Note"
                        >
                            <div className="flex flex-col items-center">
                                <span className="mb-0.5 rounded-md p-[6px]">
                                    <CirclePlus className="h-5 w-5 text-[#ff9f0a]" />
                                </span>
                            </div>
                            {!isMobile && (
                                <div className="flex flex-grow flex-col">
                                    <div className="text-[15px] font-medium leading-snug">
                                        New Note
                                    </div>
                                    <div className="mt-0.5 text-xs text-[#b8b8b8]">
                                        Just now • Blank
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Section List */}
                    <ul className={cn('space-y-1', isMobile ? 'px-1' : 'px-2')}>
                        {notesMock.map((note) => (
                            <li
                                key={note.id}
                                className={cn(
                                    'flex cursor-pointer flex-row items-center rounded-lg',
                                    isMobile
                                        ? 'justify-center px-2 py-3'
                                        : 'px-4 py-2',
                                    activeSection === note.id
                                        ? 'text-white'
                                        : 'hover:bg-[#262728]'
                                )}
                                onClick={() => handleSectionSelect(note.id)}
                                style={
                                    activeSection === note.id
                                        ? {
                                              backgroundColor:
                                                  'rgb(157, 132, 59)',
                                          }
                                        : {}
                                }
                            >
                                {isMobile ? (
                                    <div className="mx-auto flex items-center justify-center">
                                        {note.icon}
                                    </div>
                                ) : (
                                    <div className="flex-grow">
                                        <div className="flex justify-between">
                                            <span className="truncate text-[15px] font-semibold">
                                                {note.label}
                                            </span>
                                            <span className="text-xs text-[#b8b8b8]">
                                                {note.info}
                                            </span>
                                        </div>
                                        <div className="mt-0.5 truncate text-xs text-notes-text">
                                            {note.desc}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}

                        {notes.map((note) => (
                            <li
                                key={note.id}
                                className={cn(
                                    'group relative flex cursor-pointer flex-row items-center rounded-lg',
                                    isMobile
                                        ? 'justify-center px-2 py-3'
                                        : 'px-4 py-2',
                                    activeSection === note.id
                                        ? 'text-white'
                                        : 'hover:bg-[#262728]'
                                )}
                                style={
                                    activeSection === note.id
                                        ? {
                                              backgroundColor:
                                                  'rgb(157, 132, 59)',
                                          }
                                        : {}
                                }
                            >
                                <div
                                    className="flex w-full items-center"
                                    onClick={() => handleSectionSelect(note.id)}
                                >
                                    {isMobile ? (
                                        <div className="mx-auto">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                    ) : (
                                        <div className="flex-grow">
                                            <div className="truncate text-[15px] font-medium">
                                                Untitled
                                            </div>
                                            <div className="mt-0.5 text-xs text-notes-text">
                                                Empty note
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        const isActive =
                                            activeSection === note.id
                                        onDeleteNote(note.id)
                                        if (isActive)
                                            handleSectionSelect('about')
                                    }}
                                    className={cn(
                                        'text-sm text-gray-400 hover:text-red-500',
                                        isMobile
                                            ? 'absolute -right-1 -top-1 rounded-full bg-[#313234] p-1'
                                            : 'ml-2 opacity-0 transition-opacity group-hover:opacity-100'
                                    )}
                                    aria-label="Delete note"
                                >
                                    <Trash
                                        className={
                                            isMobile ? 'h-3 w-3' : 'h-4 w-4'
                                        }
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Resizer */}
            {!isMobile && (
                <div
                    className="w-1 cursor-col-resize bg-[#333] hover:bg-[#555]"
                    onMouseDown={() => {
                        isResizing.current = true
                    }}
                    aria-label="Resize sidebar"
                />
            )}
        </div>
    )
}
