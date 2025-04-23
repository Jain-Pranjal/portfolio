export function AboutSection() {
  return (
    <div className="flex flex-row justify-between items-start max-w-5xl pl-4 pr-8 pt-10 gap-10">
      {/* Left Text Content */}
      <div className="space-y-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
          About Me
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-notes-text">
            Hello! I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. 
            My journey in the tech world started when I first discovered the power of turning ideas into reality through code.
          </p>

          <p className="text-notes-text mt-4">
            I specialize in front-end development, with expertise in React, TypeScript, and modern CSS frameworks. 
            I believe in writing clean, maintainable code that scales well and provides an excellent foundation for future development.
          </p>

          <p className="text-notes-text mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying a good book. I'm always eager to take on new challenges and collaborate with passionate teams 
            to build innovative solutions.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-notes-text mb-4">My Philosophy</h2>
          <blockquote className="border-l-4 border-notes-accent pl-4 italic text-notes-text">
            "The best code is the code that never needs to be written. Simplicity is the ultimate sophistication."
          </blockquote>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 mt-10 border-2 border-notes-border shadow-sm select-none">
        <img 
          src="/profile.jpeg" 
          alt="Profile picture" 
          className="w-full h-full object-cover "
          draggable="false"
        />
      </div>
    </div>
  );
}
