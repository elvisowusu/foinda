"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#F97316]/5 to-[#74CBE3]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about Foinda? Need help with your account?
              We&apos;re here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>
  );
}
