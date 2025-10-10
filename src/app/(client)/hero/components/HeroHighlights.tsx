"use client";

import { Wallet, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HighlightItemProps {
  icon: React.ReactNode;
  label: string;
}

function HighlightItem({ icon, label }: HighlightItemProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-orange-500">{icon}</div>
      <p className="text-gray-800 font-semibold text-sm sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export default function HeroHighlights() {
  const highlights = [
    { icon: <Wallet size={22} />, label: "Borderless Wallet" },
    { icon: <Globe2 size={22} />, label: "Instant Advances" },
    { icon: <Sparkles size={22} />, label: "Verified Identity" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 hidden md:flex flex-col gap-4 md:gap-5 items-center md:items-start text-center md:text-left order-3"
    >
      {highlights.map((h, i) => (
        <HighlightItem key={i} icon={h.icon} label={h.label} />
      ))}
    </motion.div>
  );
}
