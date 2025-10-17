import React from "react";
import WalletIntro from "./wallet/components/WalletIntro";
import FinancialLayer from "./wallet/components/FinancialLayer";
import IdentityLayer from "./wallet/components/IdentityLayer";
import StoreGrowthLayer from "./wallet/components/StoreGrowthLayer";
import TrustNetworkLayer from "./wallet/components/TrustNetworkLayer";

export default function Main() {
  return (
    <div className="">
      {/* Maintain ~70% of sections: keep core layers for a rich but focused home */}
      <WalletIntro />
      <FinancialLayer />
      <IdentityLayer />
      <StoreGrowthLayer />
      <TrustNetworkLayer />
    </div>
  );
}
