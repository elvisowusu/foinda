"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WalletPage() {
  return (
    <main className="bg-white text-[#1B2A41]">
      {/* === Section 1: Wallet Intro === */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#F97316]/5 to-[#74CBE3]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Foinda Wallet — Your Borderless Account
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-lg">
              Receive, hold, and send money across platforms and currencies.
              Foinda Wallet unifies all your creative earnings — from brand
              deals, YouTube payouts, and more — in one sleek financial hub.
            </p>

            <ul className="space-y-3 text-[#1B2A41]/80">
              <li>💸 Accept MoMo, Cards, Wallets, and USSD with one link</li>
              <li>🌍 Real-time currency conversion across USD, GHS, NGN, and KES</li>
              <li>🤝 Split payments for collaborations or store funds in escrow</li>
              <li>⚡ Instant payouts to any account or Foinda wallet</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <Link
                href="/signup"
                className="bg-[#F97316] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e86410] transition"
              >
                Create Wallet
              </Link>
              <Link
                href="/docs"
                className="border border-[#F97316] text-[#F97316] px-6 py-3 rounded-md font-medium hover:bg-[#F97316]/10 transition"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/phone-wallet-transparent.png"
              alt="Foinda wallet UI"
              width={800}
              height={1600}
              className="w-[320px] drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* === Section 2: Cross-Border Power === */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#74CBE3]/10 via-white to-[#F97316]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <Image
              src="/images/phone-wallet-transparent.png"
              alt="Cross-border payments"
              width={800}
              height={1600}
              className="w-[320px] drop-shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B2A41]">
              Move Money Without Borders
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-lg">
              Whether your client is in Accra, Lagos, or Nairobi — Foinda
              ensures your payment lands in seconds. No middlemen, no delays,
              no guesswork.
            </p>

            <ul className="space-y-3 text-[#1B2A41]/80">
              <li>🔁 Real-time FX conversion with transparent rates</li>
              <li>🏦 Withdraw to MoMo or any local bank instantly</li>
              <li>🔒 Secure transactions with multi-rail compliance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* === Section 3: Foinda Advance === */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/10 via-[#74CBE3]/10 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Foinda Advance — Smart Capital for Creators
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-lg">
              Get paid for tomorrow’s creativity today. Foinda Advance uses your
              verified earnings to offer instant cash advances — no collateral,
              no paperwork.
            </p>

            <ul className="space-y-3 text-[#1B2A41]/80">
              <li>💰 Instant advance based on your monthly revenue</li>
              <li>📈 Automatic repayment from future income</li>
              <li>🧾 Escrow-linked payouts for brand deals</li>
              <li>⭐ Transparent dashboard to track repayments</li>
            </ul>

            <div className="mt-8">
              <Link
                href="/advance"
                className="bg-[#1B2A41] text-white px-6 py-3 rounded-md font-medium hover:bg-[#162238] transition"
              >
                Apply for Advance
              </Link>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/phone-advance-transparent.png"
              alt="Foinda advance UI"
              width={800}
              height={1600}
              className="w-[320px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-24 text-center bg-[#1B2A41] text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Focus on Creating. We’ll Handle the Rest.
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-8">
          Manage payments, funding, and collaborations — all within one Foinda
          wallet built for creators like you.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-[#F97316] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e86410] transition"
        >
          Join Foinda
        </Link>
      </section>
    </main>
  );
}
