"use client";
import React from "react";
import MotionDiv from "./reusable/MotionDiv";

const ProgressSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <MotionDiv>
      <h2 className="text-4xl font-bold mb-6 text-center text-orange-500">
        Current Stage / Progress
      </h2>

      <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-4">
        <li>
          Applying for Ghana Startup Awards (GISA 2026) to gain national recognition for creator-focused financial innovation.
        </li>
        <li>
          Building prototype features, securing partnerships with payment providers, and engaging creative communities across Ghana and Nigeria for pilot testing.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-4">2026 Focus</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Integrating APIs from Paystack, Flutterwave, MoMo, and Coinbase for multi-currency and crypto-compatible transactions.</li>
        <li>Testing Foinda Pay and Foinda Advance with early creators.</li>
        <li>Developing Foinda ID integrations for verified global creator verification.</li>
        <li>Building a community network for early adopters and co-creators.</li>
      </ul>
    </MotionDiv>
  </section>
);

export default ProgressSection;
