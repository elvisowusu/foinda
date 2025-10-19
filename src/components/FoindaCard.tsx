import React from "react";
import { motion, MotionProps } from "framer-motion";

export default function FoindaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center mt-[11rem]"
    >
      <div className="relative w-[22rem] max-w-md">
        {/* Main Foinda Animation Container */}
        <div className="relative bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-8 text-white overflow-hidden">
          {/* Floating Creator Handles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-xs font-semibold"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 2) * 30}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {i % 3 === 0 ? "YT" : i % 3 === 1 ? "TT" : "IG"}
              </motion.div>
            ))}
          </div>

          {/* Central Foinda ID Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-500">F</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Foinda ID</h3>
            <p className="text-sm opacity-90 mb-4">Verified Creator</p>

            {/* Connected Accounts */}
            <div className="flex justify-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">
                YT
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">
                TT
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">
                IG
              </div>
            </div>
          </motion.div>

          {/* Glowing Connections */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-500 rounded-full"
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${40 + i * 10}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Particles */}
        <div className="absolute inset-0 -z-10">
          {[
            { left: 10, top: 20, duration: 4, delay: 0 },
            { left: 25, top: 15, duration: 5, delay: 0.5 },
            { left: 40, top: 30, duration: 4.5, delay: 1 },
            { left: 60, top: 25, duration: 5.5, delay: 1.5 },
            { left: 75, top: 40, duration: 4, delay: 2 },
            { left: 85, top: 15, duration: 5, delay: 0.3 },
            { left: 15, top: 60, duration: 4.5, delay: 1.2 },
            { left: 35, top: 70, duration: 5, delay: 0.8 },
            { left: 55, top: 80, duration: 4, delay: 1.8 },
            { left: 80, top: 75, duration: 5.5, delay: 0.2 },
            { left: 20, top: 85, duration: 4.5, delay: 1.5 },
            { left: 45, top: 10, duration: 5, delay: 0.7 },
            { left: 70, top: 50, duration: 4, delay: 1.3 },
            { left: 90, top: 65, duration: 5, delay: 0.9 },
            { left: 5, top: 45, duration: 4.5, delay: 1.7 },
            { left: 30, top: 35, duration: 5, delay: 0.4 },
            { left: 65, top: 5, duration: 4, delay: 1.1 },
            { left: 95, top: 35, duration: 5.5, delay: 0.6 },
            { left: 50, top: 55, duration: 4.5, delay: 1.4 },
            { left: 12, top: 75, duration: 5, delay: 0.1 },
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
