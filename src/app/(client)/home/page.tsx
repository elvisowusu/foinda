"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-center overflow-hidden">
      {/* Soft moving background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(34,211,238,0.15),_transparent_60%)] animate-pulse" />

      {/* Main heading */}
      <h1 className="relative z-10 text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-lg transition-all duration-500 hover:scale-105">
        Foinda
      </h1>

      {/* Subheading */}
      <p className="z-10 mt-6 max-w-2xl text-gray-400 text-base md:text-lg font-light tracking-wide">
        Empowering African creators to transform creativity into capital —
        sustainably and joyfully.
      </p>

      {/* Call to action button */}
      <button className="z-10 mt-10 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
        Join Wait List
      </button>

      {/* Floating shapes for subtle motion */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-bounce" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-ping" />
    </div>
  );
}
