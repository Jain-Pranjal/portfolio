import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CirclePlus } from "lucide-react";
import { Trash } from "lucide-react";

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
  },
  {
    id: "education",
    label: "Education",
    info: "Academics",
    desc: "My study background",
  },
  {
    id: "skills",
    label: "Skills",
    info: "What I do",
    desc: "Tech & Tools",
  },
  {
    id: "experience",
    label: "Experience",
    info: "Work history",
    desc: "My professional journey",
  },
  {
    id: "projects",
    label: "Projects",
    info: "My work",
    desc: "Showcase of my projects",
  },
  {
    id: "contact",
    label: "Contact",
    info: "Reach out",
    desc: "Let's connect!",
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

  return (
    <div className="flex h-screen ">
      <aside
        className="border-r border-[#222325] flex flex-col select-none bg-[#202021]"
        style={{
          width: `${sidebarWidth}px`,
          minWidth: "200px",
          maxWidth: "500px",
        }}
      >
        <nav className="flex-1 px-0 pt-10">
          {/* New Note */}
          <div className="px-3 mb-2">
            <div
              className={cn(
                "flex flex-row items-start gap-3 p-4 rounded-xl cursor-pointer bg-[#313234] text-white shadow",
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
                <span className="p-[6px]  rounded-md mb-0.5">
                  <CirclePlus className="text-[#ff9f0a] w-5 h-5" />
                </span>
              </div>
              <div className="flex-grow flex flex-col">
                <div className="text-[15px] font-medium leading-snug">
                  New Note
                </div>
                <div className="text-xs text-[#b8b8b8] mt-0.5">
                  Just now • Blank
                </div>
              </div>
            </div>
          </div>

          {/* App Sections */}
          <ul className="space-y-1 px-2">
            {notesMock.map((note) => (
              <li
                key={note.id}
                className={cn(
                  "flex flex-row items-start px-4 py-2 rounded-lg cursor-pointer",
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
              </li>
            ))}

            {/* User-created notes */}
            {notes.map((note) => (
              <li
                key={note.id}
                className={cn(
                  "group flex flex-row items-start px-4 py-2 rounded-lg cursor-pointer justify-between",
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
                  className="flex-grow"
                  onClick={() => setActiveSection(note.id)}
                >
                  <div className="text-[15px] font-medium truncate">
                    Untitled
                  </div>
                  <div className="text-xs text-notes-text mt-0.5">
                    Empty note
                  </div>
                </div>

                {/* Delete icon */}
                <button
                  onClick={(e) => {
                  e.stopPropagation(); // prevent selecting the note
                  const isActive = activeSection === note.id;
                  onDeleteNote(note.id);
                  if (isActive) setActiveSection("about"); // fallback
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400 hover:text-red-500 ml-2"
                  aria-label="Delete note"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div
        className="w-1 bg-[#333] hover:bg-[#555] cursor-col-resize"
        onMouseDown={() => {
          isResizing.current = true;
        }}
        aria-label="Resize sidebar"
      />
    </div>
  );
}
