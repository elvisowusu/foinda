"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransactionLines from "./transactionLines";
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
      <div className="max-w-7xl py-8 overflow-hidden flex h-[32rem] mx-auto lg:mx-[10rem] rounded-3xl my-[5rem] bg-white/90 backdrop-blur-sm shadow-lg border border-[#F97316]/10 relative">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-12 w-[36rem] relative z-10"
        >
          <h2 className="text-[2rem] font-extrabold mb-4 leading-tight">
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
                <li key={idx} className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className={`text-[#F97316] flex-shrink-0`}
                  />
                  {feature.text}
                </li>
              );
            })}
          </ul>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="bg-[#F97316] text-white px-3 py-3 rounded-lg font-medium hover:bg-[#e86410] transition"
            >
              Create Wallet
            </Link>
            <Link
              href="/docs"
              className="border border-[#F97316]/70 text-[#F97316] px-3 py-3 rounded-lg font-medium hover:bg-[#F97316]/10 transition"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>

        {/* Phone + Animated Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute right-0 rounded-br-3xl bottom-0"
        >
          <TransactionLines />
          <Image
            src="/phone-hands.png"
            alt="Foinda wallet UI"
            width={900}
            height={800}
            className="w-[380px] lg:w-[400px] drop-shadow-2xl border-none relative z-10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
