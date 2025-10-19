// components/WalletIntro/WalletFeatureList.tsx
"use client";

import { features } from "./features";


export default function WalletFeatureList() {
  return (
    <ul className="space-y-4 text-sm text-[#1B2A41]/80">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <li key={idx} className="flex items-start gap-3">
            <Icon size={18} className="text-[#F97316] flex-shrink-0 mt-[2px]" />
            {feature.text}
          </li>
        );
      })}
    </ul>
  );
}
