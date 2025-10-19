// components/CommunityImpactLayer/CommunityImpactLayer.tsx
"use client";

import CommunityCarousel from "./components/CommunityCarousel";
import CommunityImpactTitle from "./components/CommunityImpactTitle";


export default function CommunityImpactLayer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden overflow-y-hidden px-4 py-16">
      <CommunityImpactTitle />
      <CommunityCarousel />
    </section>
  );
}
