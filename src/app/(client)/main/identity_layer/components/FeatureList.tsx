"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { fadeUp } from "./animations";


export default function FeatureList() {
  return (
    <>
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1B2A41]">
          Your Creative Identity, Simplified
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
          No more juggling multiple accounts and verification processes.
          One Foinda ID connects everything and verifies your creative
          work automatically.
        </p>
      </div>

      <motion.div {...fadeUp(0.4)}>
        <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-base sm:text-lg flex items-center gap-2">
          <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          Link My Accounts
        </button>
      </motion.div>
    </>
  );
}
