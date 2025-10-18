"use client";

import { motion } from "framer-motion";
import { Link, Shield, CheckCircle, Users } from "lucide-react";

const identityFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Verified Identity",
    description: "One-time verification unlocks all Foinda features"
  },
  {
    icon: <Link className="w-6 h-6 text-orange-500" />,
    title: "Account Linking",
    description: "Connect YouTube, TikTok, Instagram seamlessly"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
    title: "Earnings Verification",
    description: "Automatic income tracking across platforms"
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Creator Network",
    description: "Join verified creators building together"
  }
];

export default function IdentityLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#74CBE3]/10 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One ID to Rule Your <span className="text-orange-500">Creative World</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect all your social accounts once. Foinda ID verifies your earnings, 
            insights, and creative rights — invisibly.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Foinda ID Card Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main Foinda ID Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Foinda ID</h3>
                      <p className="text-sm text-gray-300">Verified Creator</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Creator Info */}
                <div className="mb-6">
                  <div className="text-sm text-gray-300 mb-1">Creator Name</div>
                  <div className="text-lg font-semibold">Ama Osei</div>
                  <div className="text-sm text-gray-300">@ama_creates</div>
                </div>

                {/* Connected Accounts */}
                <div className="mb-6">
                  <div className="text-sm text-gray-300 mb-3">Linked Accounts</div>
                  <div className="flex gap-3">
                    {[
                      { name: "YouTube", icon: "YT", color: "bg-red-500" },
                      { name: "TikTok", icon: "TT", color: "bg-black" },
                      { name: "Instagram", icon: "IG", color: "bg-gradient-to-r from-purple-500 to-pink-500" }
                    ].map((platform, index) => (
                      <motion.div
                        key={platform.name}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center text-white font-semibold text-sm relative`}
                      >
                        {platform.icon}
                        {/* Connection Line */}
                        <motion.div
                          className="absolute -right-2 w-4 h-0.5 bg-orange-500"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Earnings Summary */}
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-sm text-gray-300 mb-2">Monthly Earnings</div>
                  <div className="text-2xl font-bold text-orange-500">₵4,200</div>
                  <div className="text-xs text-gray-300 mt-1">Verified across all platforms</div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-orange-500 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-blue-400 rounded-full"></div>
                </div>
              </motion.div>

              {/* Floating Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full"
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${30 + i * 15}%`,
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
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#1B2A41]">
                Your Creative Identity, Simplified
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                No more juggling multiple accounts and verification processes. 
                One Foinda ID connects everything and verifies your creative work automatically.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {identityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A41] mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg flex items-center gap-2">
                <Link className="w-5 h-5" />
                Link My Accounts
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
            <div className="text-gray-600">Verified Creators</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Platform Integrations</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
            <div className="text-gray-600">Verification Accuracy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
