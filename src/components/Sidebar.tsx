import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CirclePlus, Trash, User, GraduationCap, Code, Briefcase, FolderGit2, Mail, FileText } from "lucide-react";

type SectionType =
  | "about"
  | "education"
  | "skills"
  | "contact"
  | "experience"
  | "projects";
type ActiveTarget = SectionType | string; // can be section OR note ID

interface SidebarProps {
  activeSection: ActiveTarget;
  setActiveSection: (section: ActiveTarget) => void;
  onNewNote: (id: string) => void;
  notes: { id: string; content: string }[];
  onDeleteNote: (id: string) => void;
}

const notesMock = [
  {
    id: "about",
    label: "About Me",
    info: "Know more",
    desc: "Personal overview",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: "education",
    label: "Education",
    info: "Academics",
    desc: "My study background",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "skills",
    label: "Skills",
    info: "What I do",
    desc: "Tech & Tools",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "experience",
    label: "Experience",
    info: "Work history",
    desc: "My professional journey",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "projects",
    label: "Projects",
    info: "My work",
    desc: "Showcase of my projects",
    icon: <FolderGit2 className="w-5 h-5" />,
  },
  {
    id: "contact",
    label: "Contact",
    info: "Reach out",
    desc: "Let's connect!",
    icon: <Mail className="w-5 h-5" />,
  },
];

export function NoteSidebar({
  activeSection,
  setActiveSection,
  onNewNote,
  notes,
  onDeleteNote,
}: SidebarProps) {
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);
  const isResizing = useRef(false);

  // Handle resizing for desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const newWidth = e.clientX;
      setSidebarWidth(Math.max(200, Math.min(newWidth, 500)));
    };

    const stopResizing = () => {
      isResizing.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, []);

  const handleNewNote = () => {
    const id = Date.now().toString();
    onNewNote(id); // Add to state in parent
    setActiveSection(id); // Activate the blank note
  };

  // Determine if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex h-screen">
      <aside
        className={cn(
          "border-r border-[#222325] flex flex-col select-none bg-[#202021]",
          isMobile ? "w-[70px]" : ""
        )}
        style={
          !isMobile
            ? {
                width: `${sidebarWidth}px`,
                minWidth: "200px",
                maxWidth: "500px",
              }
            : {}
        }
      >
        <nav className="flex-1 px-0 pt-10">
          {/* New Note */}
          <div className={cn("px-3 mb-2", isMobile && "px-1")}>
            <div
              className={cn(
                "flex flex-row items-start gap-3 p-4 rounded-xl cursor-pointer bg-[#313234] text-white shadow",
                isMobile && "justify-center p-3",
                typeof activeSection === "string" &&
                  !notesMock.find((n) => n.id === activeSection)
                  ? "outline outline-2 outline-[#ff9f0a]"
                  : "hover:bg-[#35363a]"
              )}
              onClick={handleNewNote}
              tabIndex={0}
              role="button"
              aria-label="Create New Note"
            >
              <div className="flex flex-col items-center">
                <span className="p-[6px] rounded-md mb-0.5">
                  <CirclePlus className="text-[#ff9f0a] w-5 h-5" />
                </span>
              </div>
              {!isMobile && (
                <div className="flex-grow flex flex-col">
                  <div className="text-[15px] font-medium leading-snug">
                    New Note
                  </div>
                  <div className="text-xs text-[#b8b8b8] mt-0.5">
                    Just now • Blank
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* App Sections */}
          <ul className={cn("space-y-1", isMobile ? "px-1" : "px-2")}>
            {notesMock.map((note) => (
              <li
                key={note.id}
                className={cn(
                  "flex flex-row items-center rounded-lg cursor-pointer",
                  isMobile ? "px-2 py-3 justify-center" : "px-4 py-2",
                  activeSection === note.id
                    ? "text-white"
                    : "hover:bg-[#262728]"
                )}
                onClick={() => setActiveSection(note.id)}
                style={
                  activeSection === note.id
                    ? { backgroundColor: "rgb(157, 132, 59)" }
                    : {}
                }
              >
                {/* Icon only visible on mobile */}
                {isMobile && (
                  <div className="flex items-center justify-center mx-auto">
                    {note.icon}
                  </div>
                )}

                {/* Text content only visible on larger screens */}
                {!isMobile && (
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[15px] truncate">
                        {note.label}
                      </span>
                      <span className="text-xs text-[#b8b8b8]">{note.info}</span>
                    </div>
                    <div className="text-xs text-notes-text truncate mt-0.5">
                      {note.desc}
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* User-created notes */}
            {notes.map((note) => (
              <li
                key={note.id}
                className={cn(
                  "group flex flex-row items-center rounded-lg cursor-pointer relative",
                  isMobile ? "px-2 py-3 justify-center" : "px-4 py-2",
                  activeSection === note.id
                    ? "text-white"
                    : "hover:bg-[#262728]"
                )}
                style={
                  activeSection === note.id
                    ? { backgroundColor: "rgb(157, 132, 59)" }
                    : {}
                }
              >
                {/* Clickable note body */}
                <div 
                  className="flex items-center w-full" 
                  onClick={() => setActiveSection(note.id)}
                >
                  {/* Document icon for notes - only on mobile */}
                  {isMobile ? (
                    <div className="mx-auto">
                      <FileText className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="flex-grow">
                      <div className="text-[15px] font-medium truncate">
                        Untitled
                      </div>
                      <div className="text-xs text-notes-text mt-0.5">
                        Empty note
                      </div>
                    </div>
                  )}
                </div>

                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting the note
                    const isActive = activeSection === note.id;
                    onDeleteNote(note.id);
                    if (isActive) setActiveSection("about"); // fallback
                  }}
                  className={cn(
                    "text-sm text-gray-400 hover:text-red-500",
                    isMobile 
                      ? "absolute -top-1 -right-1 bg-[#313234] rounded-full p-1" 
                      : "opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  )}
                  aria-label="Delete note"
                >
                  <Trash className={isMobile ? "w-3 h-3" : "w-4 h-4"} />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Only show resize handle on desktop */}
      {!isMobile && (
        <div
          className="w-1 bg-[#333] hover:bg-[#555] cursor-col-resize"
          onMouseDown={() => {
            isResizing.current = true;
          }}
          aria-label="Resize sidebar"
        />
      )}
    </div>
  );
}