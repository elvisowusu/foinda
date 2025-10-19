// components/CommunityImpactLayer/CommunityImpactTitle.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

export default function CommunityImpactTitle() {
  return (
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold text-center mb-10"
    >
      Our Community <span className="text-orange-500">Impact</span>
    </motion.h2>
  );
}
