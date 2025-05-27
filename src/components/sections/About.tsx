import Image from "next/image";
export function AboutSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 max-w-4xl px-4 py-10 gap-10">
      <div className="space-y-10 max-w-4xl">
        <h1 className="text-3xl font-bold text-notes-text mb-6 border-b border-notes-border pb-2">
          About Me
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-notes-text">
            Hello! Myself<strong> Pranjal Jain</strong>, a passionate full-stack developer with a keen eye for design and a focus on building scalable web applications using modern frameworks.
            My journey in the tech world started when I first discovered the power of turning ideas into reality through code.
          </p>

         <p className="text-notes-text mt-4">
  I specialize in <strong>full-stack development</strong>, with strong expertise in <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and modern <strong>CSS frameworks</strong> like Tailwind CSS on the front end. On the back end, I work with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Django</strong> to build robust, scalable APIs and server-side logic. I focus on writing <strong>clean, maintainable, and scalable code</strong> that supports long-term growth and flexibility.
</p>

<p className="text-notes-text mt-4">
  When I&apos;m not coding, I enjoy <strong>exploring new technologies</strong>, <strong>contributing to open-source projects</strong>, and listening to music. I&apos;m always eager to tackle <strong>new challenges</strong> and collaborate with <strong>passionate teams</strong> to build <strong>innovative, user-centric solutions</strong>.
</p>

        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-notes-text mb-4">My Philosophy</h2>
          <blockquote className="border-l-4 border-notes-accent pl-4 italic text-notes-text">
          &quot;There&apos;s no place like 127.0.0.1.&quot;
          </blockquote>
        </div>
      </div>

      {/* Profile Image + Signature */}
      <div className="flex flex-col items-center gap-4 lg:mt-16">
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-notes-border shadow-sm select-none">
          <Image
            src="/profile.jpeg"
            alt="Profile picture"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
