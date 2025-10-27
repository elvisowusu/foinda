"use client";

import ContactSection from "./components/ContactSection";
import CoreProductsSection from "./components/CoreProductsSection";
import CoreValuesSection from "./components/CoreValuesSection";
import HeroSection from "./components/HeroSection";
import ProblemOpportunity from "./components/ProblemOpportunity";
import ProgressSection from "./components/ProgressSection";
import UniquenessSection from "./components/UniquenessSection";
import VisionMission from "./components/VisionMission";

const AboutUs = () => {
  return (
    <main className="bg-white text-[#1B2A41] overflow-x-hidden">
      <HeroSection />
      <VisionMission />
      <CoreValuesSection />
      <ProblemOpportunity />
      <CoreProductsSection />
      <ProgressSection />
      <UniquenessSection />
      <ContactSection />
    </main>
  );
};

export default AboutUs;
