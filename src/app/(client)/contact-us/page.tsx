"use client";
import ContactFormSection from "./components/ContactFormSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";

export default function ContactUs() {
  return (
    <main className="bg-white text-[#1B2A41] overflow-x-hidden">
      <HeroSection />
      <ContactFormSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
