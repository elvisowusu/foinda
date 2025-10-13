"use client";

import Image from "next/image";
import Link from "next/link";
import WalletIntro from "./components/WalletIntro";
import CrossBorderPower from "./components/CrossBorderPower";
import FoindaAdvance from "./components/FoindaAdvance";

export default function WalletPage() {
  return (
    <main className=" bg-gradient-to-br from-[#FFF8F4] via-[#FDF8F6] to-[#E6F7FB] text-[#1B2A41]">
      {/* === Section 1: Wallet Intro === */}
      <WalletIntro />
      {/* === Section 2: Cross-Border Power === */}
      <CrossBorderPower />
      {/* === Section 3: Foinda Advance === */}
      <FoindaAdvance />
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
