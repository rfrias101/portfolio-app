import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const highlights = [
  { value: "2", label: "Team games playtested" },
  { value: "2", label: "Solo games built" },
  { value: "Unity", label: "C# project experience" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16 max-w-5xl w-full shadow-2xl">

          {/* === HERO === */}
          <section className="flex flex-col md:flex-row items-center gap-8 mb-12">

            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-[#D4AF37]">Prinze</span> Frias
              </h1>
              <p className="text-xl text-[#D4AF37] font-semibold mb-6">
                Game QA Tester
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a Game Development student aiming to work as a game QA
                tester. I playtest games, hunt for bugs, and report them clearly
                so developers won't have a hard time debugging and searching for bugs. I have also built games in Unity,
                which helps me understand how bugs happen and how they get
                resolved.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/portfolio"
                  className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:scale-105 hover:bg-[#e6c14a] transition-all duration-300"
                >
                  View My Work
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:scale-105 hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  About Me
                </Link>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-[#D4AF37] overflow-hidden bg-gray-800">
                <Image
                  src="/images/profile.jpg"
                  alt="Prinze Frias"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </section>
          <div className="w-full h-px bg-[#333333] mb-10"></div>

          {/* === HIGHLIGHTS === */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-5 text-center hover:border-[#D4AF37] transition-colors"
              >
                <p className="text-3xl font-bold text-[#D4AF37] mb-1">{h.value}</p>
                <p className="text-gray-400 text-sm">{h.label}</p>
              </div>
            ))}
          </section>

        </div>
      </main>
    </div>
  );
}