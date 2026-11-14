import Image from "next/image";
import Navbar from "@/components/Navbar";
import ArtCard from "@/components/ArtCard";
type Game = {
  title: string;
  image?: string;
  description: string;
  qaRole?: string;
  tags: string[];
  link?: string;
};

const teamGames: Game[] = [
  {
    title: "Wispguard",
    image: "/images/WispGuard.jpg",
    description: "A 3D tower defense game developed by Flintlock Games. I was responsible for implementing the user interface, contributing minor scripting, and playtesting the game for bugs and gameplay balance.",
    qaRole: "Playtested both in the Unity Editor and in standalone builds, and reported bugs directly to the lead programmer.",
    tags: ["Unity", "C#", "Team Project", "3D"],
    link: "https://flintlock-games.itch.io/wispguard", // itch.io / GitHub / video link, leave empty if none
  },
  {
    title: "Etherfall",
    image: "/images/Etherfall.jpg",
    description: "A 3D mobile roguelite dungeon crawler developed by Flintlock Games as our thesis project. As the second programmer, I was responsible for weapon balancing and for playtesting the game to identify bugs and errors.",
    qaRole: "Playtested the game and reported issues to the lead programmer, including a user interface bug where a menu became stuck and could not be closed. I also tested the frame rate in my Android device compared to my tablet which had difference in frame rate.",
    tags: ["Unity", "C#", "Team Project", "Playtesting"],
    link: "https://flintlock-games.itch.io/etherfall",
  },
];

const soloGames: Game[] = [
  {
    title: "Specter Rush",
    image: "/images/SpecterRush.png",
    description:
      "A 2D Endless runner I developed. The game features 2 abilities for the player and 3 obstacles for the player to avoid. The game was made in my 2nd year of Game Development course.",
    tags: ["Unity", "C#", "Solo Project", "2D", "Pixel Art"],
    link: "https://fries101.itch.io/specter-rush",
  },

  {
    title: "Doggo Balls",
    image: "/images/DoggoBalls.png",
    description:
      "A 2D Angry Birds clone that copies the same game mechanics as the angry birds game. This project was required to be made from our course.",
    tags: ["Unity", "C#", "Solo Project", "2D", "Pixel Art"],
    link: "",
  },
];

const models = [
  {
    title: "Golem",
    image: "/images/models/Golem.png",
    note: "A 3D Model of a golem. Made in blender with the guidance of UV wrapping and textured through substance painter.",
  },
  {
    title: "Goblin",
    image: "/images/models/Goblin.png",
    note: "A 3D model of a goblin. Made in blender with the guidance of UV wrapping and textured through substance painter.",
  },
  {
    title: "Giraffe",
    image: "/images/models/Giraffe.png",
    note: "A 3D model of a giraffe. Made in blender and guided by tutorials.",
  }
  
];

const art = [
  {
    title: "Mage",
    image: "/images/gif/Mage.png",
    gif: "/images/gif/Mage-1.gif",
    note: "Idle animation for our 2nd year exam game.",
  },

  {
    title: "Barbarian",
    image: "/images/gif/Barbarian.png",
    gif: "/images/gif/Barbarian.gif",
    note: "Idle animation for our 2nd year exam game.",
  },

   {
    title: "Holy Crusader",
    image: "/images/gif/HolyCrusader.png",
    gif: "/images/gif/HolyCrusader.gif",
    note: "Idle animation for our 2nd year exam game.",
  },
];

function GameCard({ g }: { g: Game }) {
  return (
    <div className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-6 hover:border-[#D4AF37] transition-colors flex flex-col">
      {g.image && (
        <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg border border-[#333333]">
          <Image
            src={g.image}
            alt={`${g.title} thumbnail`}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">{g.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{g.description}</p>

      {g.qaRole && (
        <div className="border-l-2 border-[#D4AF37] pl-3 mb-4">
          <p className="text-xs uppercase tracking-wide text-[#D4AF37] mb-1">
            My QA Role
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{g.qaRole}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {g.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full border border-[#444444] text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {g.link && (
        <a
          href={g.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-[#D4AF37] hover:underline"
        >
          View project →
        </a>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex justify-center px-6 py-16">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16 max-w-5xl w-full shadow-2xl">

          {/* === TEAM PROJECTS === */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-3">
              Team <span className="text-[#D4AF37]">Projects</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Games I built with a team, and the testing I did on them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamGames.map((g) => (
                <GameCard key={g.title} g={g} />
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#333333] mb-12"></div>

          {/* === SOLO PROJECTS === */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-3">
              Solo <span className="text-[#D4AF37]">Projects</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Games I designed and built on my own.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {soloGames.map((g) => (
                <GameCard key={g.title} g={g} />
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#333333] mb-12"></div>

          {/* === 3D MODELS === */}
        <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-3">
            3D <span className="text-[#D4AF37]">Models</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
            Basic models I made while learning, some with expert guidance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m) => (
            <div
                key={m.title}
                className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-4 hover:border-[#D4AF37] transition-colors"
            >
                {/* Image box */}
                <div className="relative aspect-square w-full mb-3 overflow-hidden rounded-lg border border-[#333333] bg-gray-800">
                {m.image ? (
                    <Image
                    src={m.image}
                    alt={`${m.title} 3D model render`}
                    fill
                    className="object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                    Image
                    </div>
                )}
                </div>

                {/* Title and note */}
                <h3 className="font-bold text-[#D4AF37]">{m.title}</h3>
                <p className="text-gray-400 text-sm">{m.note}</p>
            </div>
            ))}
        </div>
        </section>
        
        <div className="w-full h-px bg-[#333333] mb-12"></div>

        {/* === 2D ART === */}
        <section>
        <h2 className="text-4xl font-bold text-center mb-3">
            2D <span className="text-[#D4AF37]">Art</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
            2D Art for projects or personal art.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {art.map((a) => (
            <ArtCard key={a.title} a={a} />
        ))}
        </div>
        </section>
        </div>
      </main>
    </div>
  );
}
