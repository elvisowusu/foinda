"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function HeaderSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-orange-500">Foinda Copilot</span> - Your Personal{" "}
        <span className="text-orange-500">Growth Buddy</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Foinda Copilot turns your data into daily growth actions — so you always
        know your next best move.
      </p>
    </motion.div>
  );
}
