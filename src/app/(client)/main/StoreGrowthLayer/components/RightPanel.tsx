"use client";

import { motion } from "framer-motion";
import { slideRight } from "./animations";

export default function RightPanel() {
  return (
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-[#4e80ca] bg-clip-text text-transparent">
          From Content to Commerce
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
          Transform your most popular content into sellable products. Our AI analyzes 
          your audience and suggests the perfect products to monetize your creativity.
        </p>
      </div>
    </motion.div>
  );
}
