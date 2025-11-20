"use client";

const skills = [
  "Node.js",
  "React",
  "Vite",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Electron",
  "Tailwind CSS",
  "Python",
  "Cloudflare",
  "Vercel",
];

export default function AboutSection() {
  return (
    <section className="py-12 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Hello! I'm a passionate developer with a love for building
                  efficient and scalable web applications. I specialize in
                  React, Next.js, and Node.js.
                </p>
                <p>
                  I'm always eager to learn new technologies and solve complex
                  problems. When I'm not coding, you can find me exploring open
                  source projects or writing technical articles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium hover:bg-slate-800 hover:border-cyan-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
