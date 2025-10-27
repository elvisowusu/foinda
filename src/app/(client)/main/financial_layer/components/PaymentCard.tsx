"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function PaymentCard() {
  return (
    <motion.div {...fadeUp()} className="relative overflow-hidden rounded-3xl">
      <div className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4 text-[#F97316]">
            Instant Cross-Border Payouts
          </h3>
          <p className="text-gray-300 mb-6">
            Whether your client is in Accra, Lagos, or Nairobi — Foinda ensures
            your payment lands in seconds.
          </p>

          <div className="bg-white/10 rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold">Ama receives</div>
                  <div className="text-sm text-gray-300">Instant payout</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-400">₵3,000</div>
            </div>

            {/* Animated Confetti */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              viewport={{ once: true }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [-20, -60],
                    opacity: [1, 0],
                    scale: [1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Background Circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 border border-orange-500 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-blue-400 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}
