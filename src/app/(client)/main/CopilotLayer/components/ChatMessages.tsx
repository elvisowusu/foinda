"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { fadeChild } from "./animations";
import TypingIndicator from "./TypingIndicator";


export default function ChatMessages() {
  return (
    <div className="space-y-4 mb-6">
      {/* User message */}
      <motion.div
        variants={fadeChild(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-end"
      >
        <div className="bg-orange-500 rounded-2xl rounded-br-md p-3 max-w-xs">
          <p className="text-sm">How can I earn more?</p>
        </div>
      </motion.div>

      {/* Copilot reply */}
      <motion.div
        variants={fadeChild(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-3"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="bg-white/10 rounded-2xl rounded-bl-md p-3 max-w-xs">
          <p className="text-sm mb-2">
            Let&apos;s monetize your 3 most-viewed videos this week. I&apos;ve
            identified your Ghana travel content is trending!
          </p>
          <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-orange-600 transition">
            Create Preset Pack
          </button>
        </div>
      </motion.div>

      {/* Typing indicator */}
      <TypingIndicator />
    </div>
  );
}
