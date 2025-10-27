"use client";

import { motion } from "framer-motion";
import HeaderSection from "./components/HeaderSection";
import { fadeSide } from "./components/animations";
import ChatInterface from "./components/ChatInterface";
import FeatureSection from "./components/FeatureSection";

export default function CopilotLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-white overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        <HeaderSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            variants={fadeSide("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ChatInterface />
          </motion.div>

          <motion.div
            variants={fadeSide("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FeatureSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
