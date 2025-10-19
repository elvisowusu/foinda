// components/WalletIntro/WalletIntro.tsx
"use client";

import WalletPhoneSection from "./components/WalletPhoneSection";
import WalletTextSection from "./components/WalletTextSection";


export default function WalletIntro() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="max-w-7xl mx-4 my-8 p-6 
                    md:mx-8 md:p-8 
                    lg:p-0 
                    md:flex lg:h-[32rem] lg:py-[3rem] lg:mx-[10rem] 
                    rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg border border-[#F97316]/10 relative overflow-hidden"
      >
        <WalletTextSection />
        <WalletPhoneSection />
      </div>
    </section>
  );
}
