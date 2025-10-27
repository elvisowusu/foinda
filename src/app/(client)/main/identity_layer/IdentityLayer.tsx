"use client";

import { motion } from "framer-motion";
import HeaderSection from "./components/HeaderSection";
import { slide } from "./components/animations";
import IDCard from "./components/IDCard";
import FeatureList from "./components/FeatureList";
import StatsSection from "./components/StatsSection";

export default function IdentityLayer() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#74CBE3]/10 to-white">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <HeaderSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 overflow-hidden">
          <motion.div {...slide("left")} className="relative flex justify-center w-full overflow-hidden">
            <IDCard />
          </motion.div>

          <motion.div {...slide("right")} className="space-y-8 overflow-hidden">
            <FeatureList />
          </motion.div>
        </div>

        <StatsSection />
      </div>
    </section>
  );
}
