
'use client'

import About from '@/components/About'
import Background from '@/components/Background'
import { DockDemo } from '@/components/Dock'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Volume2, FileText } from 'lucide-react'
import Clock from '@/components/Clock'
import { FootScroll } from '@/components/FootScroll'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import ShimmerButton from '@/components/ui/shimmer-button'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"


const languages = [
  { lang: 'en-US', text: 'PRANJAL JAIN' },
  { lang: 'hi-IN', text: 'प्रांजल जैन' },
  { lang: 'ja-JP', text: 'プランジャル・ジャイン' },
  { lang: 'ur-PK', text: 'پرانجل جین' }
];

const getRandomGradient = () => {
  const colors = [
    'from-gray-700 to-gray-900',
    'from-blue-700 to-blue-900',
    'from-purple-700 to-purple-900',
    'from-green-700 to-green-900',
    'from-red-700 to-red-900',
    'from-indigo-700 to-indigo-900',
    'from-yellow-700 to-yellow-900',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};



const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [gradient, setGradient] = useState(getRandomGradient())
  const [isOpen, setIsOpen] = useState(false)
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length)
      setGradient(getRandomGradient())
    }, 3000) // Change language every 3 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  const speakName = (text: string, lang: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // Use the specified language for pronunciation
    speechSynthesis.speak(utterance);
  }
  
  return (
    <>
      <Background>
        <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 w-full">
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">


        <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <ShimmerButton className="shadow-2xl">
                  <FileText className="h-4 w-4 m-1" />
                  Resume
                </ShimmerButton>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl h-[80vh]">
                <iframe 
                  src="https://drive.google.com/file/d/1Db2xJ0J7xbiw-Smf9QrvQw-jblvC0-3f/view?usp=sharing" 
                  className="w-full h-full"
                  title="Resume"
                  />
              </DialogContent>
            </Dialog>


          <Clock />
        </div>
          <AnimatePresence mode="wait">̀
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`text-center bg-clip-text text-transparent bg-gradient-to-r ${gradient} break-words py-4 relative`}
              >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 break-words ">
                {languages[currentIndex].text}
                <button
                id="volume-button"
                  onClick={() => speakName(languages[currentIndex].text, languages[currentIndex].lang)}
                  className="absolute right-0 top-0 mt-2 ml-4 sm:ml-8" // Added responsive margin-left to create a gap
                  >
                  <Volume2 className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                </button>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </Background>
      <About />
      <Projects />
      <Experience />
      <FootScroll />
      <div className="sticky bottom-4 z-50">
        <DockDemo />
      </div>
    </>
  )
}
export default Page