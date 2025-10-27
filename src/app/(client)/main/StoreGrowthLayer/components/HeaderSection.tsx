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
      className="text-center mb-14 sm:mb-20"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
        <span className="text-orange-500">Storefront</span> - Turn Followers Into a{" "}
        <span className="text-orange-500">Business</span>
      </h2>
      <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Launch your digital storefront in minutes. Sell merch, courses, and presets — 
        all powered by Foinda Growth insights.
      </p>
    </motion.div>
  );
}
