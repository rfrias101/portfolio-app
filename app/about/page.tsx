import Link from "next/link";
import Navbar from "@/components/Navbar";

const whatIDo = [
  {
    icon: "🎮",
    title: "Game Testing",
    description:
      "Playtesting game mechanics, UI, and performance in the editor and in builds to find bugs before players do.",
  },
  {
    icon: "📋",
    title: "Reporting Issues",
    description:
      "Flagging bugs found during testing and working directly with the lead programmer to get them resolved.",
  },
  {
    icon: "🛠️",
    title: "Game Dev Background",
    description:
      "Built Unity games in team projects, so I understand how bugs happen and how developers fix them.",
  },
];

const skills = [
  { icon: "🐛", label: "Bug Hunting" },
  { icon: "🕹️", label: "Playtesting" },
  { icon: "🔄", label: "Verifying Fixes" },
  { icon: "🎮", label: "Unity Projects" },
  { icon: "🤝", label: "Team Projects" },
  { icon: "📐", label: "Basic 3D Modeling" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex justify-center px-6 py-16">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16 max-w-5xl w-full shadow-2xl">

          {/* === INTRO === */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#D4AF37]">Me</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              I am a Game Development student who enjoys finding what breaks in
              a game and helping the team fix it. During my team projects, I
              served as a programmer while also playtesting our builds and
              reporting issues to the lead programmer. Testing out new games
              brings more experience and methods in finding bugs, and I am
              willing to learn by playing different game genres even
              if I am not familiar with the genre.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              I am now looking to work as a game QA tester, where I can apply
              both my testing experience and my understanding of how games are
              built in Unity.
            </p>
          </section>

          <div className="w-full h-px bg-[#333333] mb-12"></div>

          {/* === WHAT I DO === */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              What I <span className="text-[#D4AF37]">Do</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatIDo.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-6 hover:border-[#D4AF37] transition-colors text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-[#D4AF37]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#333333] mb-12"></div>

          {/* === SKILLS === */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              My <span className="text-[#D4AF37]">Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#1e1e1e]/50 border border-[#444444] rounded-lg p-5 text-center hover:border-[#D4AF37] transition-colors"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-white text-sm font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#333333] mb-12"></div>

          {/* === CALL TO ACTION === */}
          <section className="text-center">
            <p className="text-gray-300 text-lg mb-6">
              Want to see my work or get in touch?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:scale-105 hover:bg-[#e6c14a] transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                href="/contacts"
                className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:scale-105 hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}