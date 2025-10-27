import React from "react";
// import WalletIntro from "../components/WalletIntro";
import CommunityImpactLayer from "./community_impact_layer/page";
import IdentityLayer from "./identity_layer/IdentityLayer";
import FinancialLayer from "./financial_layer/FinancialLayer";
import StoreGrowthLayer from "./StoreGrowthLayer/StoreGrowthLayer";
import TrustNetworkLayer from "./TrustNetworkLayer/TrustNetworkLayer";
import CopilotLayer from "./CopilotLayer/CopilotLayer";

export default function Main() {
  return (
    <main className="bg-white text-[#1B2A41]">
      {/* === Section 1: Wallet Intro === */}
      {/* <WalletIntro /> */}

      {/* === Section 3: Identity Layer === */}
      <IdentityLayer />

      {/* === Section 2: Financial Layer (Merged CrossBorderPower + FoindaAdvance) === */}
      <FinancialLayer />

      {/* === Section 4: Store & Growth Layer === */}
      <StoreGrowthLayer />

      {/* === Section 5: Trust & Network Layer === */}
      <TrustNetworkLayer />

      {/* === Section 6: Copilot Layer === */}
      <CopilotLayer />

      {/* === Section 7: Community & Impact Layer === */}
      <CommunityImpactLayer />
    </main>
  );
}
