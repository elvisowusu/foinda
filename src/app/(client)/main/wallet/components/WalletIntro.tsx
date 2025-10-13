"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransactionLines from "./transactionLines"; // Assuming this component is defined
import { CreditCard, Globe2, Users, Zap } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    text: "Accept MoMo, Cards, Wallets, and USSD with one link",
  },
  {
    icon: Globe2,
    text: "Real-time currency conversion across USD, GHS, NGN, and KES",
  },
  {
    icon: Users,
    text: "Split payments for collaborations or store funds in escrow",
  },
  {
    icon: Zap,
    text: "Instant payouts to any account or Foinda wallet",
  },
];

export default function WalletIntro() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="max-w-7xl mx-4 my-8 p-6 
                    md:mx-8 md:p-8 
                    lg:p-0 
                    md:flex lg:h-[32rem] lg:my-[5rem] lg:mx-[10rem] 
                    rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg border border-[#F97316]/10 relative overflow-hidden"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full relative z-10 
                    lg:px-12 lg:w-[36rem]"
        >
          <h2
            className="text-2xl font-extrabold mb-3 leading-snug 
                        md:text-3xl 
                        lg:text-[2rem] lg:mb-4 lg:leading-tight"
          >
            <span className="text-[#F97316]">Foinda Wallet</span> — Your
            Borderless Account
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-lg">
            Receive, hold, and send money across platforms and currencies.{" "}
            <span className="text-[#1B2A41]/90 font-medium">Foinda Wallet</span>{" "}
            unifies all your creative earnings — from brand deals, YouTube
            payouts, and more — in one sleek financial hub.
          </p>

          {/* Feature List */}
          <ul className="space-y-4 text-sm text-[#1B2A41]/80">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <li key={idx} className="flex items-start gap-3">
                  <Icon
                    size={18}
                    className={`text-[#F97316] flex-shrink-0 mt-[2px]`}
                  />
                  {feature.text}
                </li>
              );
            })}
          </ul>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-wrap gap-3 
                        lg:mt-10"
          >
            <Link
              href="/signup"
              className="bg-[#F97316] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#e86410] transition text-sm"
            >
              Create Wallet
            </Link>
            <Link
              href="/docs"
              className="border border-[#F97316]/70 text-[#F97316] px-4 py-3 rounded-lg font-medium hover:bg-[#F97316]/10 transition text-sm"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>

        {/* Phone + Animated Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative hidden md:block mt-8 mx-auto max-w-full 
                     md:absolute md:right-0 md:bottom-0 md:mt-0 md:w-auto"
        >
          <TransactionLines />
          <Image
            src="/phone-hands.png" // Ensure this image path is correct
            alt="Foinda wallet UI"
            width={900}
            height={800}
            // Mobile: Set a max width and use w-3/4 to keep it smaller, centered with mx-auto
            // Desktop (lg): Full width of its container, reset centering
            className="w-3/4 max-w-[300px] mx-auto h-auto drop-shadow-2xl border-none relative z-10 
                       md:w-[400px] md:mx-0 lg:max-w-none"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}