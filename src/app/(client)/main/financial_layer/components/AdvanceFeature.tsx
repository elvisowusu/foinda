"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function AdvanceFeature() {
  return (
    <motion.div
      {...fadeUp(0.2)}
      className="relative overflow-hidden rounded-3xl"
    >
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-[#4e80ca] bg-clip-text text-transparent">
          Foinda{" "}
          <span className="text-5xl bg-gradient-to-r from-[#7aa0e0] to-[#4e80ca] bg-clip-text text-transparent">
            Advance
          </span>
        </h3>

        <p className="text-gray-600 mb-6">
          A revenue-based financing product designed to offer creators
          milestone-based funding for their projects.
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90">Pre-approved for</div>
              <div className="text-3xl font-bold">₵3,000</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Based on</div>
              <div className="font-semibold">Last 3 months</div>
            </div>
          </div>

          <div className="bg-white/20 rounded-lg p-3 mb-4">
            <div className="text-sm opacity-90 mb-1">Monthly Revenue</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white/30 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-3/4"></div>
              </div>
              <span className="text-sm font-semibold">₵4,200</span>
            </div>
          </div>

          <button className="w-full bg-white text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Advance Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
