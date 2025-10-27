"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function HeaderSection() {
  return (
    <motion.div {...fadeUp()} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-orange-500">Foinda Pay</span> - Smart Money for{" "}
        <span className="text-orange-500">Smart Creators</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A multi-rail payment infrastructure that enables creators and agencies
        to send, receive, and split revenue seamlessly across mobile money,
        cards, and wallets.
      </p>
    </motion.div>
  );
}
