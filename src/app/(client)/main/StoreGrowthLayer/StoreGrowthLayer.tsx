"use client";

import HeaderSection from "./components/HeaderSection";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import CreatorsCarousel from "./components/CreatorsCarousel";

export default function StoreGrowthLayer() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F97316]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <HeaderSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16">
          <LeftPanel />
          <RightPanel />
        </div>
        <CreatorsCarousel />
      </div>
    </section>
  );
}
