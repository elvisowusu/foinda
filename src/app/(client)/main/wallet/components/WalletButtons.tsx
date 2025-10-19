// components/WalletIntro/WalletButtons.tsx
"use client";

import Link from "next/link";

export default function WalletButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-3 lg:mt-10">
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
  );
}
