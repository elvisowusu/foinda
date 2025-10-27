"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-[#1B2A41] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is ready to help you get the most out of Foinda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:admin@foinda.com"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Email Support
            </a>

            <a
              href="tel:+233546028860"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#1B2A41] transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
