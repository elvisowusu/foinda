"use client";

import { Button } from "@/components/ui/button";
import { Wallet, Globe2, Sparkles } from "lucide-react";
import HeroVisual from "./components/HeroVisual";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10">
        {/* LEFT SIDE — Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Future of <span className="text-orange-500">Creator Finance</span>
          </h1>
          <p className="text-gray-600 text-base max-w-md">
            Foinda empowers creators with global payments and smart financial tools.
          </p>

          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-medium">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* CENTER — Hero Animation */}
        <div className="flex-1 flex justify-center items-center">
          <HeroVisual />
        </div>

        {/* RIGHT SIDE — Minimal Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-5 text-left"
        >
          <div className="flex items-center gap-3">
            <Wallet className="text-orange-500" size={22} />
            <p className="text-gray-700 font-medium text-sm">Borderless Wallet</p>
          </div>
          <div className="flex items-center gap-3">
            <Globe2 className="text-orange-500" size={22} />
            <p className="text-gray-700 font-medium text-sm">Instant Advances</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="text-orange-500" size={22} />
            <p className="text-gray-700 font-medium text-sm">Verified Identity</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
