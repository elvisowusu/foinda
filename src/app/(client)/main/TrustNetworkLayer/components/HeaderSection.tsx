"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function HeaderSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={0.1}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-6">
        Create with <span className="text-orange-500">Confidence</span>
      </h2>
      <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Every post. Every song. Every video. Protected by Foinda&apos;s invisible
        Social API. Join the verified creator network building trust through
        technology.
      </p>
    </motion.div>
  );
}
