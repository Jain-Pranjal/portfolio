export function ExperienceSection() {
  return (
    <div className="space-y-6 max-w-3xl pl-4 pt-10">
      <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
        Experience
      </h1>
      
      <div className="space-y-8">
        <div className="experience-item">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-notes-text">Senior Frontend Developer</h3>
            <span className="text-notes-text opacity-75">2021 - Present</span>
          </div>
          <h4 className="text-lg text-notes-accent mb-2">Tech Company Inc.</h4>
          <ul className="list-disc list-inside text-notes-text space-y-2">
            <li>Led the development of multiple high-impact web applications using React and TypeScript</li>
            <li>Implemented responsive design patterns and optimized performance across platforms</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-notes-text">Software Engineer</h3>
            <span className="text-notes-text opacity-75">2019 - 2021</span>
          </div>
          <h4 className="text-lg text-notes-accent mb-2">Digital Solutions Ltd.</h4>
          <ul className="list-disc list-inside text-notes-text space-y-2">
            <li>Developed and maintained client-facing web applications</li>
            <li>Collaborated with UX designers to implement pixel-perfect interfaces</li>
            <li>Reduced application load time by 40% through optimization techniques</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-notes-text">Junior Developer</h3>
            <span className="text-notes-text opacity-75">2018 - 2019</span>
          </div>
          <h4 className="text-lg text-notes-accent mb-2">StartUp Hub</h4>
          <ul className="list-disc list-inside text-notes-text space-y-2">
            <li>Built and maintained responsive websites using modern JavaScript frameworks</li>
            <li>Participated in daily stand-ups and sprint planning meetings</li>
            <li>Assisted in the development of company's main product features</li>
          </ul>
        </div>
      </div>
    </div>
  );
}