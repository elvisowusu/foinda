"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";
import { fadeUp, slideLeft } from "./animations";
import { productTypes } from "./data";

export default function LeftPanel() {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden"
    >
      <div className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        {/* Video Preview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.2}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-4 mb-6"
        >
          <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-3">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">▶</span>
              </div>
              <div className="text-sm text-gray-300">“Ghana Trip Vlog”</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-300">2.3K views</span>
            <span className="text-orange-500">Trending!</span>
          </div>
        </motion.div>

        {/* Zap Icon */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.4}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {productTypes.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.6 + i * 0.1}
              viewport={{ once: true }}
              className={`bg-white/10 rounded-xl p-3 relative transition-all duration-300 ${
                product.trending ? "ring-2 ring-orange-500" : ""
              }`}
            >
              {product.trending && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
              )}
              <div className="text-sm font-semibold mb-1">{product.name}</div>
              <div className="text-xs text-gray-300 mb-2">{product.type}</div>
              <div className="text-orange-500 font-bold">{product.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
