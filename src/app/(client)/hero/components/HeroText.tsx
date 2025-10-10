"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center md:text-left space-y-5 order-2 md:order-1 max-w-lg"
    >
      <h1 className="font-bold text-[#1B2A41] leading-[1.1] text-[clamp(1.8rem,4vw,3rem)] text-2xl">
        The Future of <span className="text-orange-500">Creator Finance</span>
      </h1>

      <p className="text-[#1B2A41] text-base opacity-80 leading-relaxed">
        From payments to funding and analytics — Foinda gives creators and
        digital entrepreneurs everything they need to thrive.
      </p>

      <div className="flex flex-col lg:flex-row gap-3 pt-4 justify-center lg:justify-start">
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium w-full lg:w-auto"
        >
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full lg:w-auto"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
