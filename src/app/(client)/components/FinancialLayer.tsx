"use client";

// import Link from "next/link";
import { motion } from "framer-motion";

// 💡 Reusable Animation Settings
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export default function FinancialLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5 overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">Foinda Pay</span> - Smart Money
            for <span className="text-orange-500">Smart Creators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A multi-rail payment infrastructure that enables creators and
            agencies to send, receive, and split revenue seamlessly across
            mobile money, cards, and wallets.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 overflow-hidden">
          {/* Left Side - Payment Animation */}
          <motion.div
            {...fadeUp()}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[#F97316]">
                  Instant Cross-Border Payouts
                </h3>
                <p className="text-gray-300 mb-6">
                  Whether your client is in Accra, Lagos, or Nairobi — Foinda
                  ensures your payment lands in seconds.
                </p>

                {/* Payment Animation Mockup */}
                <div className="bg-white/10 rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                      <div>
                        <div className="font-semibold">Ama receives</div>
                        <div className="text-sm text-gray-300">
                          Instant payout
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      ₵3,000
                    </div>
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

          {/* Right Side - Advance Feature */}
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
        </div>
      </div>
    </section>
  );
}
