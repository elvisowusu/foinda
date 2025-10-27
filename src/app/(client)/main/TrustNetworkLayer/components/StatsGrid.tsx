"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import { networkStats } from "./data";

export default function StatsGrid() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={0.2}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16"
    >
      {networkStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.4 + i * 0.1}
          viewport={{ once: true }}
          className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
            {stat.number}
          </div>
          <div className="text-gray-300 text-sm sm:text-base">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
