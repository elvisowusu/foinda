"use client";

import { motion } from "framer-motion";
import { Shield, Network, Lock, Globe } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

/* -------------------- ARRAYS -------------------- */
const networkFeatures = [
  {
    icon: Shield,
    title: "Content Protection",
    description:
      "Every post, song, and video protected by Foinda's invisible Social API.",
  },
  {
    icon: Network,
    title: "Creator Network",
    description: "Join verified creators building trust through technology.",
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    description: "Bank-grade security for all your creative transactions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with creators across Africa and beyond.",
  },
];

const networkStats = [
  { number: "50K+", label: "Protected Content" },
  { number: "25+", label: "Countries" },
  { number: "99.8%", label: "Security Score" },
  { number: "24/7", label: "Monitoring" },
];

/* -------------------- ANIMATION VARIANTS -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

/* -------------------- COMPONENT -------------------- */
export default function TrustNetworkLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1B2A41] to-[#0F1A2B] text-white overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.1}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Create with <span className="text-orange-500">Confidence</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every post. Every song. Every video. Protected by Foinda&apos;s invisible
            Social API. Join the verified creator network building trust through
            technology.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 items-center mb-16">
          {/* Left Side — Africa Map */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center overflow-hidden"
          >
            <div className="w-full max-w-lg mx-auto">
              <Image
                src={images.africa_map}
                alt="Africa map"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side — Features */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Your Creative Work, Protected
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Join thousands of creators who trust Foinda to protect their
                intellectual property and build secure business relationships
                across Africa.
              </p>
            </div>

            {/* Features List */}
            {/* <div className="space-y-6">
              {networkFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={0.3 + i * 0.1}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div> */}

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.5}
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
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.2}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16"
        >
          {networkStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.4 + i * 0.1}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
