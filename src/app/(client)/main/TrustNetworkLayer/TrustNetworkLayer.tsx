"use client";

import FeatureSection from "./components/FeatureSection";
import HeaderSection from "./components/HeaderSection";
import MapSection from "./components/MapSection";
import StatsGrid from "./components/StatsGrid";

export default function TrustNetworkLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1B2A41] to-[#0F1A2B] text-white overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        <HeaderSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 items-center mb-16">
          <MapSection />
          <FeatureSection />
        </div>
        <StatsGrid />
      </div>
    </section>
  );
}
