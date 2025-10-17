"use client";

import { motion } from "framer-motion";
import { Shield, Network, Lock, Globe, Users, CheckCircle } from "lucide-react";

const networkFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Content Protection",
    description: "Every post, song, and video protected by Foinda's invisible Social API"
  },
  {
    icon: <Network className="w-6 h-6 text-orange-500" />,
    title: "Creator Network",
    description: "Join verified creators building trust through technology"
  },
  {
    icon: <Lock className="w-6 h-6 text-orange-500" />,
    title: "Secure Transactions",
    description: "Bank-grade security for all your creative transactions"
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    title: "Global Reach",
    description: "Connect with creators across Africa and beyond"
  }
];

const networkStats = [
  { number: "50K+", label: "Protected Content" },
  { number: "25+", label: "Countries" },
  { number: "99.8%", label: "Security Score" },
  { number: "24/7", label: "Monitoring" }
];

export default function TrustNetworkLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1B2A41] to-[#0F1A2B] text-white">
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
            Create with <span className="text-orange-500">Confidence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every post. Every song. Every video. Protected by Foinda's invisible Social API. 
            Join the verified creator network building trust through technology.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Network Map Animation (Africa-like map) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Holographic Network Map with Africa silhouette */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden">
              {/* Africa silhouette using CSS mask (simple vector shape approximation) */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(80% 60% at 55% 55%, black 60%, transparent 61%)",
                  maskImage:
                    "radial-gradient(80% 60% at 55% 55%, black 60%, transparent 61%)",
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.4), rgba(78,128,202,0.4))",
                  filter: "blur(6px)",
                }}
              />
              {/* Central Node */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center z-10"
              >
                <span className="text-white font-bold text-xl">F</span>
              </motion.div>

              {/* Creator Nodes roughly positioned over Africa */}
              {[
                { name: "Morocco", x: "35%", y: "22%", color: "bg-green-600" },
                { name: "Algeria", x: "42%", y: "25%", color: "bg-green-500" },
                { name: "Egypt", x: "55%", y: "23%", color: "bg-green-500" },
                { name: "Ghana", x: "44%", y: "44%", color: "bg-green-500" },
                { name: "Nigeria", x: "48%", y: "43%", color: "bg-green-600" },
                { name: "Kenya", x: "62%", y: "54%", color: "bg-green-400" },
                { name: "Ethiopia", x: "58%", y: "47%", color: "bg-green-500" },
                { name: "South Africa", x: "53%", y: "75%", color: "bg-green-700" },
              ].map((node, index) => (
                <motion.div
                  key={node.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute w-8 h-8 ${node.color} rounded-full flex items-center justify-center text-white text-xs font-semibold`}
                  style={{ left: node.x, top: node.y }}
                >
                  {node.name[0]}
                </motion.div>
              ))}

              {/* Connection Lines from central Foinda hub to nodes */}
              {[
                { to: { x: 35, y: 22 } },
                { to: { x: 42, y: 25 } },
                { to: { x: 55, y: 23 } },
                { to: { x: 44, y: 44 } },
                { to: { x: 48, y: 43 } },
                { to: { x: 62, y: 54 } },
                { to: { x: 58, y: 47 } },
                { to: { x: 53, y: 75 } },
              ].map((line, index) => (
                <motion.div
                  key={index}
                  className="absolute h-0.5 bg-gradient-to-r from-orange-500 to-transparent"
                  style={{
                    left: "50%",
                    top: "50%",
                    width: `${Math.sqrt(Math.pow(line.to.x - 50, 2) + Math.pow(line.to.y - 50, 2))}%`,
                    transformOrigin: "0 0",
                    transform: `rotate(${Math.atan2(line.to.y - 50, line.to.x - 50) * 180 / Math.PI}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}

              {/* Protection Watermark */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="text-6xl font-bold text-orange-500/30 transform -rotate-12">
                  PROTECTED BY FOINDA API
                </div>
              </motion.div>

              {/* Floating Security Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { left: 10, top: 20, duration: 3, delay: 0 },
                  { left: 22, top: 45, duration: 3.5, delay: 0.2 },
                  { left: 34, top: 70, duration: 4, delay: 0.4 },
                  { left: 46, top: 20, duration: 3.5, delay: 0.6 },
                  { left: 58, top: 45, duration: 4, delay: 0.8 },
                  { left: 70, top: 70, duration: 3, delay: 1 },
                  { left: 82, top: 20, duration: 4, delay: 1.2 },
                  { left: 94, top: 45, duration: 3.5, delay: 1.4 }
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 text-orange-500/50"
                    style={{
                      left: `${icon.left}%`,
                      top: `${icon.top}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: icon.duration,
                      repeat: Infinity,
                      delay: icon.delay,
                    }}
                  >
                    <Shield className="w-full h-full" />
                  </motion.div>
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
              <h3 className="text-3xl font-bold mb-4">
                Your Creative Work, Protected
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Join thousands of creators who trust Foinda to protect their intellectual property 
                and build secure business relationships across Africa.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {networkFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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
                <Network className="w-5 h-5" />
                Explore the Foinda Network 🌐
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Network Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {networkStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
