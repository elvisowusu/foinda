"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { fadeChild } from "./animations";

export default function FeatureSection() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold mb-4 text-[#1B2A41]">
          AI-Powered Growth Assistant
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Get personalized advice based on your actual performance data. Foinda
          Copilot analyzes your content, audience, and earnings to suggest the
          best next steps.
        </p>
      </div>

      <motion.div
        variants={fadeChild(4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-6"
      >
        <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Chat with Foinda Copilot 💬
        </button>
      </motion.div>
    </div>
  );
}
