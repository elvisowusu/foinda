"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DollarSign, BarChart, FileText, Star } from "lucide-react";

const features = [
  { icon: <DollarSign size={18} className="text-[#FCD34D] flex-shrink-0" />, text: "Instant advance based on your monthly revenue" },
  { icon: <BarChart size={18} className="text-[#FCD34D] flex-shrink-0" />, text: "Automatic repayment from future income" },
  { icon: <FileText size={18} className="text-[#FCD34D] flex-shrink-0" />, text: "Escrow-linked payouts for brand deals" },
  { icon: <Star size={18} className="text-[#FCD34D] flex-shrink-0" />, text: "Transparent dashboard to track repayments" },
];

export default function FoindaAdvance() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
        bg-gradient-to-r from-[#EDEFF1] via-[#F9F7F3] to-[#FFF7EE]
        rounded-3xl shadow-lg"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B2A41]">
            Foinda Advance — Smart Capital for Creators
          </h2>
          <p className="text-[#333333] leading-relaxed mb-6 max-w-lg">
            Get paid for tomorrow’s creativity today. Foinda Advance uses your verified earnings to offer instant cash advances — no collateral, no paperwork.
          </p>

          <ul className="space-y-3 text-sm max-w-md">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {f.icon}
                <span className="text-[#1B2A41]/90">{f.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/advance" className="bg-[#F97316] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e86410] transition">
              Apply for Advance
            </Link>
          </div>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          initial={{ opacity: 0, x: 200, rotate: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center w-full lg:w-1/2"
        >
          <Image
            src="/phone2.png"
            alt="Foinda Advance UI"
            width={400}
            height={800}
            className="w-[300px] lg:w-[350px] drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
