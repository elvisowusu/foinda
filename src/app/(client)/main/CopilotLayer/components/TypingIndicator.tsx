"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { fadeChild } from "./animations";

export default function TypingIndicator() {
  return (
    <motion.div
      variants={fadeChild(2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-3"
    >
      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white/10 rounded-2xl rounded-bl-md p-3">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i: number) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
