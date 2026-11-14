"use client";

import { useState } from "react";
import Image from "next/image";

type Art = {
  title: string;
  image: string; // static PNG
  gif?: string;  // optional animated version
  note: string;
};

export default function ArtCard({ a }: { a: Art }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-4 hover:border-[#D4AF37] transition-colors"
      onMouseEnter={() => a.gif && setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
      onClick={() => a.gif && setPlaying((p) => !p)} // tap to play/stop on mobile
    >
      <div className="relative aspect-square w-full mb-3 overflow-hidden rounded-lg border border-[#333333] bg-gray-800">
        <Image
          src={playing && a.gif ? a.gif : a.image}
          alt={`${a.title} artwork`}
          fill
          unoptimized
          className="object-contain [image-rendering:pixelated]"
        />
      </div>

      <h3 className="font-bold text-[#D4AF37]">{a.title}</h3>
      <p className="text-gray-400 text-sm">{a.note}</p>

      {a.gif && (
        <p className="text-xs text-gray-500 mt-2">Hover or tap to play animation</p>
      )}
    </div>
  );
}