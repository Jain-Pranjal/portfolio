"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { Volume2, Pause } from "lucide-react"

export function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleSpeakerClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 max-w-4xl px-4 py-10 gap-10">
      <div className="space-y-10 max-w-4xl">
        <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
          About Me
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-notes-text">
            Hello! Myself<strong> Pranjal Jain</strong>, a passionate full-stack
            developer with a keen eye for design and a focus on building
            scalable web applications using modern frameworks. My journey in the
            tech world started when I first discovered the power of turning
            ideas into reality through code.
          </p>

          <p className="text-notes-text mt-4">
            I specialize in <strong>full-stack development</strong>, with strong
            expertise in <strong>React JS</strong>, <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, and modern{" "}
            <strong>CSS frameworks</strong> like Tailwind CSS on the front end.
            On the back end, I work with <strong>Node.js</strong>,{" "}
            <strong>Express</strong>, and <strong>Django</strong> to build
            robust, scalable APIs and server-side logic. I focus on writing{" "}
            <strong>clean, maintainable, and scalable code</strong> that
            supports long-term growth and flexibility.
          </p>

          <p className="text-notes-text mt-4">
            When I&apos;m not coding, I enjoy{" "}
            <strong>exploring new technologies</strong>,{" "}
            <strong>writing the tech blogs</strong>, and listening to music.
            I&apos;m always eager to tackle <strong>new challenges</strong> and
            collaborate with <strong>passionate teams</strong> to build{" "}
            <strong>innovative, user-centric solutions</strong>.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-notes-text mb-4">
            My Resume
          </h2>
          <Link
            href="https://dub.sh/pranjal-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="border-l-4 border-notes-accent pl-4 italic text-notes-text hover:text-notes-accent transition-colors duration-200 block"
          >
            &quot;View my resume&quot;
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-notes-text mb-4">
            My Philosophy
          </h2>
          <blockquote className="border-l-4 border-notes-accent pl-4 italic text-notes-text">
            &quot;There&apos;s no place like 127.0.0.1.&quot;
          </blockquote>
        </div>
      </div>

      {/* Profile Image with Speaker Button Overlay */}
      <div className="flex flex-col items-center gap-4 lg:mt-16">
        <div className="relative inline-block">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-notes-border shadow-sm select-none">
            <Image
              src="/profile.jpeg"
              alt="Profile picture"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <button
            onClick={handleSpeakerClick}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            className="absolute bottom-0 right-0 p-2 rounded-full bg-notes-accent text-white hover:bg-notes-accent/90 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-notes-accent translate-x-2 translate-y-2"
          >
            {isPlaying ? (
              <Pause size={20} className="stroke-[1.5]" />
            ) : (
              <Volume2 size={20} className="stroke-[1.5]" />
            )}
          </button>

          <audio
            ref={audioRef}
            src="/portfolio-audio.mp3"
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        <p
          className={`text-notes-text text-sm font-medium transition-opacity duration-300`}
        >
          Listen to know more about me!
        </p>
      </div>
    </div>
  )
}
