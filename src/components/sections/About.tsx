export function AboutSection() {
  return (
    <div className="flex flex-row justify-between items-start max-w-5xl pl-4 pr-8 py-10 gap-10 ">
      <div className="space-y-10 max-w-4xl ">
        <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
          About Me
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-notes-text">
            Hello! Myself<strong> Pranjal Jain</strong>, a passionate developer with a keen eye for design and a love for creating seamless user experiences. 
            My journey in the tech world started when I first discovered the power of turning ideas into reality through code.
          </p>

          <p className="text-notes-text mt-4">
            I specialize in front-end development, with expertise in React, NextJS, TypeScript, and modern CSS frameworks. 
            I believe in writing clean, maintainable code that scales well and provides an excellent foundation for future development.
          </p>

          <p className="text-notes-text mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying listening to music. I'm always eager to take on new challenges and collaborate with passionate teams 
            to build innovative solutions.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-notes-text mb-4">My Philosophy</h2>
          <blockquote className="border-l-4 border-notes-accent pl-4 italic text-notes-text">
            "I believe that technology should be a tool for empowerment, enabling individuals and communities to achieve their goals and dreams."
          </blockquote>
        </div>
      </div>


     
      {/* Profile Image + Signature */}
      <div className="flex flex-col items-center gap-4 mt-16">
        <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-notes-border shadow-sm select-none">
          <img
            src="/profile.jpeg"
            alt="Profile picture"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Animated Signature
        <svg
          viewBox="0 0 200 60"
          className="w-40 h-12 stroke-[2px] stroke-notes-accent fill-transparent animate-signature"
        >
          <path
            d="M10,30 C30,10 40,40 60,30 S90,30 100,40 S130,10 150,30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </div>
    </div>
  );
}


