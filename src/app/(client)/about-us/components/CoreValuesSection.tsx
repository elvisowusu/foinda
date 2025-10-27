"use client";
import React from "react";
import SectionTitle from "./reusable/SectionTitle";
import Card, { CardProps } from "./reusable/Card";
import { Heart, Globe, Zap, Award, UserCheck, BarChart } from "lucide-react";

const coreValues: CardProps[] = [
  {
    icon: <Heart />,
    title: "Empowerment",
    description: "We enable creators to take control of their financial journey.",
  },
  {
    icon: <Globe />,
    title: "Trust & Transparency",
    description: "We build financial tools that creators can rely on and understand.",
  },
  {
    icon: <Zap />,
    title: "Innovation with Purpose",
    description: "Every solution we build is designed to solve real problems.",
  },
  {
    icon: <Award />,
    title: "Inclusion & Access",
    description: "Financial services should be available to all creators, everywhere.",
  },
  {
    icon: <UserCheck />,
    title: "Ownership & Protection",
    description: "Creators’ work and earnings are always theirs to control.",
  },
  {
    icon: <BarChart />,
    title: "Collaboration for Growth",
    description: "We believe in growing together with the creative community.",
  },
];

const CoreValuesSection = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
    <div className="max-w-7xl mx-auto">
      <SectionTitle>Core Values</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((val) => (
          <Card key={val.title} {...val} />
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesSection;
