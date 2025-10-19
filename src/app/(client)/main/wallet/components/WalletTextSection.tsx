// components/WalletIntro/WalletTextSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInLeft } from "./animations";
import WalletFeatureList from "./WalletFeatureList";
import WalletButtons from "./WalletButtons";

export default function WalletTextSection() {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full relative z-10 lg:px-12 lg:w-[36rem]"
    >
      <h2 className="text-2xl font-extrabold mb-3 leading-snug md:text-3xl lg:text-[2rem] lg:mb-4 lg:leading-tight">
        <span className="text-[#F97316]">Foinda Wallet</span> — Your Borderless Account
      </h2>

      <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-lg">
        Receive, hold, and send money across platforms and currencies.{" "}
        <span className="text-[#1B2A41]/90 font-medium">Foinda Wallet</span>{" "}
        unifies all your creative earnings — from brand deals, YouTube payouts, and more — in one sleek financial hub.
      </p>

      <WalletFeatureList />
      <WalletButtons />
    </motion.div>
  );
}
