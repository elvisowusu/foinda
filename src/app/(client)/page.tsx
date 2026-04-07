"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[#1B2A41] overflow-x-hidden">

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] overflow-hidden px-4 sm:px-6 lg:px-16"
      >
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <Image src="/africaMap.png" alt="" fill className="object-contain" priority />
        </div>

        <motion.div
          className="absolute right-6 top-20 opacity-10 pointer-events-none hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Image src="/foindaAtom.png" alt="" width={180} height={180} />
        </motion.div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Financial Infrastructure for the Next 100 Years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Building Infrastructure for the{" "}
            <span className="text-orange-500">Future of Work,</span>{" "}
            Income &{" "}
            <span className="text-[#74CBE3]">Economic Participation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-6"
          >
            Unlocking financial access for millions of informal earners globally — connecting them to banks, fintechs, and government through real-time income intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-gray-400 text-base italic"
          >
            We are building for the next hundred years — where financial access is driven by how people earn.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
