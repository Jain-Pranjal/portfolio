
"use client";
import { useState, useEffect } from "react";
import { NoteSidebar } from "@/components/Sidebar";
import { AboutSection } from "@/components/sections/About";
import { EducationSection } from "@/components/sections/Education";
import { SkillsSection } from "@/components/sections/Skills";
import { ContactSection } from "@/components/sections/Contact";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { TransitionWrapper } from "@/app/TransitionWrapper";
import { MacWindowBar } from "@/components/global/WindowBar";

type SectionType = "about" | "education" | "skills" | "contact" | "experience" | "projects";
type ActiveTarget = SectionType | string;

export default function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState<ActiveTarget>("about");
  const [notes, setNotes] = useState<{ id: string; content: string }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior directly
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

  const renderSection = () => {
    if (["about", "education", "skills", "contact", "experience", "projects"].includes(activeSection)) {
      switch (activeSection) {
        case "about": return <AboutSection />;
        case "education": return <EducationSection />;
        case "skills": return <SkillsSection />;
        case "contact": return <ContactSection />;
        case "experience": return <ExperienceSection />;
        case "projects": return <ProjectsSection />;
      }
    }

    // If not a known section → it's a note
    const selectedNote = notes.find(n => n.id === activeSection);

    return (
      <div className="w-full h-screen flex">
        <textarea
          className="w-full h-full p-10 bg-transparent outline-none resize-none text-xl leading-relaxed text-notes-text"
          placeholder="Start typing your note..."
          value={selectedNote?.content || ""}
          onChange={(e) =>
            setNotes(prev =>
              prev.map(n =>
                n.id === activeSection ? { ...n, content: e.target.value } : n
              )
            )
          }
        />
      </div>
    );
  }

  const handleNewNote = (id: string) => {
    setNotes(prev => [{ id, content: "" }, ...prev]);
  };
  
  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#232324]">
      <header className="fixed w-full z-40 top-0 left-0">
        <MacWindowBar />
      </header>

      <div className="flex pt-8 h-full">
        <NoteSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onNewNote={handleNewNote}
          notes={notes}
          onDeleteNote={handleDeleteNote}
        />
        <main className={`flex-1 overflow-y-auto h-full ${isMobile ? "pt-12" : ""}`}>
          {/* <div className="relative w-full h-full px-0 bg-[#232324]"> */}
            <TransitionWrapper delay={40}>{renderSection()}</TransitionWrapper>
          {/* </div> */}
        </main>
      </div>
    </div>
  );
}