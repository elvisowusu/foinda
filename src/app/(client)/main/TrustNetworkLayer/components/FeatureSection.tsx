"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { fadeUp, slideRight } from "./animations";

export default function FeatureSection() {
  return (
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Your Creative Work, Protected
        </h3>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
          Join thousands of creators who trust Foinda to protect their
          intellectual property and build secure business relationships
          across Africa.
        </p>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        custom={0.5}
        viewport={{ once: true }}
        className="pt-6"
      >
        <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg flex items-center gap-2">
          <Network className="w-5 h-5" />
          Explore the Foinda Network 🌐
        </button>
      </motion.div>
    </motion.div>
  );
}
