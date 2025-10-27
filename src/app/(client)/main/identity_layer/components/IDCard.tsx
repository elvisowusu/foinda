"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const linkedAccounts = [
  { name: "YouTube", icon: "YT", color: "bg-red-500" },
  { name: "TikTok", icon: "TT", color: "bg-black" },
  {
    name: "Instagram",
    icon: "IG",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
];

export default function IDCard() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md overflow-hidden">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center font-bold text-lg">
              F
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Foinda ID</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Verified Creator
              </p>
            </div>
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        {/* Creator Info */}
        <div className="mb-6">
          <div className="text-sm text-gray-300 mb-1">Creator Name</div>
          <div className="text-lg font-semibold">Ama Osei</div>
          <div className="text-sm text-gray-300">@ama_creates</div>
        </div>

        {/* Linked Accounts */}
        <div className="mb-6">
          <div className="text-sm text-gray-300 mb-3">Linked Accounts</div>
          <div className="flex gap-3 flex-wrap overflow-hidden">
            {linkedAccounts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className={`w-10 h-10 sm:w-12 sm:h-12 ${p.color} rounded-xl flex items-center justify-center text-white font-semibold text-sm`}
              >
                {p.icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Earnings */}
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="text-sm text-gray-300 mb-2">Monthly Earnings</div>
          <div className="text-2xl font-bold text-orange-500">₵4,200</div>
          <div className="text-xs text-gray-300 mt-1">
            Verified across all platforms
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div className="absolute top-4 right-4 w-20 h-20 border border-orange-500 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-blue-400 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
