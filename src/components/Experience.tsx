'use client'

import React, { useState, useEffect,useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import WordPullUp from '@/components/ui/word-pull-up';
import Image from 'next/image'


const experiences = [
  {
    company: "Zoth",
    role: "Full Stack Developer",
    period: "Oct 2024 - Present",
    description: "Developing the frontend of the web applciation and handling the backend services.",
    skills: ["React","NextJS", "Node.js", "MongoDB", "AWS"],
    companyImage: "/zoth.png"
},
{
    company: "Augsta Infosystems Private Limited",
    role: "Full Stack Developer",
    period: "July 2024 - August 2024",
    description: "Developed a banking platform designed for administrators to efficiently manage employees and onboard new users.",
    skills: ["ReactJs","NextJs","Vercel", "MongoDB","NodeJs","AWS"],
    companyImage: "/augsta.jpeg"
},
{
    company: "Two Point One Inc.",
    role: "Data Science Intern",
    period: "July 2023 - August 2023",
    description: "Developed an Email/SMS classifier to differentiate between spam and legitimate emails/SMS using a comprehensive dataset.",
    skills: ["JavaScript", "Python", "SQL", "Responsive Design"],
    companyImage: "/twoPointOne.png"
    }
]

const TerminalExperience = () => {
  const [currentExperience, setCurrentExperience] = useState(0)
  const [displayedContent, setDisplayedContent] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDisplayedContent([])
    const experience = experiences[currentExperience]
    const content = [
        
      `>`,
      `Company: ${experience.company}`,
      `Role: ${experience.role}`,
      `Period: ${experience.period}`,
      `Description: ${experience.description}`,
      `Skills: ${experience.skills.join(', ')}`,
      ' ',
      '⚠️ Type "next" for next experience or "prev" for previous experience.'
    ]

    let i = 0
    const intervalId = setInterval(() => {
      if (i < content.length) {
        setDisplayedContent(prev => [...prev, content[i]])
        i++
      } else {
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [currentExperience])

  const handleCommand = (command: string) => {
    if (command.toLowerCase() === 'next' && currentExperience < experiences.length - 1) {
      setCurrentExperience(prev => prev + 1)
    } else if (command.toLowerCase() === 'prev' && currentExperience > 0) {
      setCurrentExperience(prev => prev - 1)
    }
  }

  return (
    <>
       <div className="min-h-screen bg-gray-900 text-green-500 p-4 sm:p-8 flex flex-col items-center justify-center font-mono">
      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl md:leading-[5rem] mb-8"
        words="Experience 🚀"
      />
      <Card className="w-full max-w-4xl bg-black text-green-500 border-green-500">
        <CardContent className="p-6">
          <ScrollArea className="h-[60vh] sm:h-[50vh]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={experiences[currentExperience].companyImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center mb-4"
              >
                <Image src={experiences[currentExperience].companyImage} alt="Company Logo" className="bject-contain" height={150} width={150} />
              </motion.div>
              {displayedContent.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="mb-3"
                >
                  {line}
                </motion.div>
              ))}
            </AnimatePresence>
          </ScrollArea>
          <div className="mt-4 flex items-center">
            <span className="mr-2">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              className="flex-grow bg-transparent border-none outline-none text-green-500 h-12"
              placeholder="Type 'next' or 'prev'"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
</>
  )
}

export default TerminalExperience