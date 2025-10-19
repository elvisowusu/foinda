import React from "react";

import { motion } from "framer-motion";

export default function TransactionLines() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-[2px] w-[120%] rounded-full ${
            i % 2 === 0
              ? "bg-gradient-to-r from-transparent via-[#F97316] to-transparent"
              : "bg-gradient-to-r from-transparent via-[#1B2A41] to-transparent"
          } opacity-30`}
          style={{
            top: `${i * 12 + 5}%`,
            left: "-20%",
          }}
          animate={{
            x: ["-20%", "120%"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
