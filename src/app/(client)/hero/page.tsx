"use client";

import { Button } from "@/components/ui/button";
import { Wallet, Globe2, Sparkles } from "lucide-react";
import HeroVisual from "./components/HeroVisual";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <div
        className="
          relative z-10 max-w-7xl w-full 
          flex flex-col md:flex-row items-center 
          justify-between px-6 md:px-10 lg:px-16
          gap-12 md:gap-8 lg:gap-12
        "
      >
        {/* LEFT — Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-5 order-2 md:order-1 md:w-[66rem]"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Future of{" "}
            <span className="text-orange-500">Creator Finance</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Foinda empowers creators with global payments and smart financial
            tools.
          </p>

          <div className="flex flex-row gap-3 pt-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* CENTER — Hero Animation */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2 scale-90 sm:scale-95 md:scale-100 lg:scale-105">
          <HeroVisual />
        </div>

        {/* RIGHT — Minimal Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center md:items-start gap-4 text-center md:text-left order-3"
        >
          <div className="flex items-center gap-3">
            <Wallet className="text-orange-500" size={22} />
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Borderless Wallet
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Globe2 className="text-orange-500" size={22} />
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Instant Advances
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="text-orange-500" size={22} />
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Verified Identity
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
