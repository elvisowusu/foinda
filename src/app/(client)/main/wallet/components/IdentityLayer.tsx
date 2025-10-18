"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, Shield, CheckCircle, Users } from "lucide-react";

// 🌟 Data Arrays (all grouped at top)
const identityFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Verified Identity",
    description: "One-time verification unlocks all Foinda features.",
  },
  {
    icon: <LinkIcon className="w-6 h-6 text-orange-500" />,
    title: "Account Linking",
    description: "Connect YouTube, TikTok, Instagram seamlessly.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
    title: "Earnings Verification",
    description: "Automatic income tracking across platforms.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Creator Network",
    description: "Join verified creators building together.",
  },
];

const linkedAccounts = [
  { name: "YouTube", icon: "YT", color: "bg-red-500" },
  { name: "TikTok", icon: "TT", color: "bg-black" },
  {
    name: "Instagram",
    icon: "IG",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
];

const stats = [
  { number: "10K+", label: "Verified Creators" },
  { number: "50+", label: "Platform Integrations" },
  { number: "99.9%", label: "Verification Accuracy" },
];

// 🌟 Reusable animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const slide = (dir = "left", delay = 0) => ({
  initial: { opacity: 0, x: dir === "left" ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export default function IdentityLayer() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#74CBE3]/10 to-white">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            One ID to Rule Your{" "}
            <span className="text-orange-500">Creative World</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect all your social accounts once. Foinda ID verifies your
            earnings, insights, and creative rights — invisibly.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 overflow-hidden">
          {/* ID Card */}
          <motion.div {...slide("left")} className="relative flex justify-center w-full overflow-hidden">
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
                  <div className="text-sm text-gray-300 mb-3">
                    Linked Accounts
                  </div>
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
                  <div className="text-sm text-gray-300 mb-2">
                    Monthly Earnings
                  </div>
                  <div className="text-2xl font-bold text-orange-500">
                    ₵4,200
                  </div>
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
          </motion.div>

          {/* Feature List */}
          <motion.div {...slide("right")} className="space-y-8 overflow-hidden">
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

            <div className="space-y-6 ">
              {identityFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A41] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.4)}>
              <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-base sm:text-lg flex items-center gap-2">
                <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Link My Accounts
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-1 m-4 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 "
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-lg transition-shadow "
            >
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                {s.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
