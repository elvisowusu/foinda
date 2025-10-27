"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const stats = [
  { number: "10K+", label: "Verified Creators" },
  { number: "50+", label: "Platform Integrations" },
  { number: "99.9%", label: "Verification Accuracy" },
];

export default function StatsSection() {
  return (
    <motion.div
      {...fadeUp(0.3)}
      className="grid grid-cols-1 m-4 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-lg transition-shadow"
        >
          <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
            {s.number}
          </div>
          <div className="text-gray-600 text-sm sm:text-base">{s.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
