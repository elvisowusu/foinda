"use client";
import React from "react";
import SectionTitle from "./reusable/SectionTitle";

const UniquenessSection = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
    <div className="max-w-7xl mx-auto">
      <SectionTitle>Our Uniqueness</SectionTitle>

      <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-4">
        <li>
          Purpose-built for Africa’s creator economy: designed specifically for creators, freelancers, and creative entrepreneurs in Africa.
        </li>
        <li>
          Blending trust, tech & culture: merging fintech innovation, blockchain identity, and African-inspired trust systems.
        </li>
        <li>
          From vision to infrastructure: clarity of mission, community-first design, and technical foundation position Foinda as the backbone of Africa’s emerging creative economy.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-4 text-center">
        🤝 Collaborations & Support
      </h3>
      <p className="text-gray-600 max-w-3xl mx-auto text-center">
        We’re open to collaborations, ecosystem partners, and early supporters who share our vision of building a sustainable financial system for Africa’s creators.
      </p>
    </div>
  </section>
);

export default UniquenessSection;
