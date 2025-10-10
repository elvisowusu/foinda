"use client";

import HeroText from "./components/HeroText";
import HeroHighlights from "./components/HeroHighlights";
import HeroVisual from "./components/HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-0">
      <div className="relative z-10 max-w-7xl lg:mr-3 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10 lg:gap-14">
        <HeroText />
        <HeroVisual />
        <HeroHighlights />
      </div>
    </section>
  );
}
