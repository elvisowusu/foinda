"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroText from "./components/HeroText";
import HeroVisual from "./components/HeroVisual";
import HeroHighlights from "./components/HeroHighlights";

export default function HeroSection() {
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const numberOfCoins = 5;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-0">
      {/* Animated coins */}
      {screen.width > 0 &&
        Array.from({ length: numberOfCoins }).map((_, index) => {
          const startX = Math.random() * screen.width; // random start position
          const endX = startX + (Math.random() * 200 - 100); // small horizontal drift
          const delay = Math.random() * 4; // different delay for each coin
          const duration = 6 + Math.random() * 4; // different speed per coin

          return (
            <motion.img
              key={index}
              src="/coin.avif"
              alt="gold coin"
              className="absolute w-16 sm:w-20 lg:w-24 opacity-30 left-0 "
              initial={{ y: 200, x: startX, rotate: 0 }}
              animate={{
                y: [ -300, screen.height + 200 ],
                x: [ startX, endX ],
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration,
                ease: "linear",
                delay,
              }}
            />
          );
        })}

      {/* Hero content */}
      <div className="relative z-0 max-w-7xl lg:mr-3 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10 lg:gap-14">
        <HeroText />
        <HeroVisual />
        <HeroHighlights />
      </div>
    </section>
  );
}
