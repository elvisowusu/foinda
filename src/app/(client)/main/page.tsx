import React from "react";
import WalletIntro from "../components/WalletIntro";
import FinancialLayer from "../components/FinancialLayer";
import IdentityLayer from "../components/IdentityLayer";
import StoreGrowthLayer from "../components/StoreGrowthLayer";
import TrustNetworkLayer from "../components/TrustNetworkLayer";
import CopilotLayer from "../components/CopilotLayer";
import CommunityImpactLayer from "./community_impact_layer/page";

export default function Main() {
  return (
    <main className="bg-white text-[#1B2A41]">
    {/* === Section 1: Wallet Intro === */}
    {/* <WalletIntro /> */}
    
    {/* === Section 2: Financial Layer (Merged CrossBorderPower + FoindaAdvance) === */}
    <FinancialLayer />
    
    {/* === Section 3: Identity Layer === */}
    <IdentityLayer />
    
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
