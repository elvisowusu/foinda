"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function HeaderSection() {
  return (
    <motion.div {...fadeUp()} className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        <span className="text-orange-500">Foinda ID</span> - One ID to Rule Your{" "}
        <span className="text-orange-500">Creative World</span>
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Foinda ID is your verified digital passport — one secure profile that
        links your social accounts, earnings, and creative rights. Sign once and
        unlock payments, storefronts, funding, and verified brand partnerships.
        No paperwork. No duplication. Just trust.
      </p>
    </motion.div>
  );
}
