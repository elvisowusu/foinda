"use client";
import React from "react";
import SectionTitle from "./reusable/SectionTitle";
import Card, { CardProps } from "./reusable/Card";
import { CreditCard, Zap, UserCheck, BarChart } from "lucide-react";

const products: CardProps[] = [
  {
    icon: <CreditCard />,
    title: "Foinda Pay",
    description:
      "Send, receive, and split revenue seamlessly across mobile money, cards, and wallets.",
  },
  {
    icon: <Zap />,
    title: "Foinda Advance",
    description: "Revenue-based financing for milestone-based project funding.",
  },
  {
    icon: <UserCheck />,
    title: "Foinda ID",
    description:
      "Digital trust and identity system to help creators build verified reputations.",
  },
  {
    icon: <BarChart />,
    title: "Foinda Network",
    description:
      "Dashboard with insights, analytics, and growth tools for creators.",
  },
];

const CoreProductsSection = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F3F7FB]">
    <div className="max-w-7xl mx-auto">
      <SectionTitle>Core Products</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((prod) => (
          <Card key={prod.title} {...prod} />
        ))}
      </div>
    </div>
  </section>
);

export default CoreProductsSection;
