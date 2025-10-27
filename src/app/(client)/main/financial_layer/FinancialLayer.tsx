"use client";

import AdvanceFeature from "./components/AdvanceFeature";
import HeaderSection from "./components/HeaderSection";
import PaymentCard from "./components/PaymentCard";

export default function FinancialLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5 overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        <HeaderSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 overflow-hidden">
          <PaymentCard />
          <AdvanceFeature />
        </div>
      </div>
    </section>
  );
}
