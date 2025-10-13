import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Repeat, CreditCard, ShieldCheck } from "lucide-react"; // real icons

const features = [
  {
    icon: <Repeat size={18} className="text-[#FCD34D] flex-shrink-0" />,
    text: "Real-time FX conversion with transparent rates",
  },
  {
    icon: <CreditCard size={18} className="text-[#FCD34D] flex-shrink-0" />,
    text: "Withdraw to MoMo or any local bank instantly",
  },
  {
    icon: <ShieldCheck size={18} className="text-[#FCD34D] flex-shrink-0" />,
    text: "Secure transactions with multi-rail compliance",
  },
];

export default function CrossBorderPower() {
  return (
    <div className="max-w-7xl py-8 overflow-hidden bg-[#1B2A41] flex flex-col lg:flex-row items-center h-[32rem] mx-auto lg:mx-[10rem] rounded-3xl backdrop-blur-sm shadow-lg border border-[#F97316]/10 relative">
      {/* Phone (from right to left) */}
      <motion.div
        initial={{ opacity: 0, x: 200, rotate: 20 }} // start offscreen right, rotated
        whileInView={{ opacity: 1, x: 0, rotate: 12 }} // slide to center and lean toward text
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex pt-12 justify-center lg:justify-start order-1 lg:order-1 w-full lg:w-1/2"
      >
        <Image
          src="/phone2.png"
          alt="Foinda wallet UI"
          width={400}
          height={400}
          className="w-[300px] lg:w-[350px] drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="order-2 w-full lg:w-1/2 px-6 lg:px-12 text-center lg:text-left mt-8 lg:mt-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F97316]">
          Move Money Without Borders
        </h2>
        <p className="text-[#E0E0E0] leading-relaxed mb-6 max-w-lg">
          Whether your client is in Accra, Lagos, or Nairobi — Foinda ensures
          your payment lands in seconds. No middlemen, no delays, no guesswork.
        </p>

        <ul className="space-y-3 text-sm max-w-md mx-auto lg:mx-0">
          {features.map((f, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {f.icon}
              <span className="text-[#FCD34D]">{f.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
