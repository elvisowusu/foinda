"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// ✅ Extend the Window interface to include highlightNewsletter
declare global {
  interface Window {
    highlightNewsletter?: () => void;
  }
}

export default function HeroText() {
  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.highlightNewsletter?.(); // ✅ No "any" needed now
      }, 800);
    }
  };

  const buttons = [
    { label: "Join Waitlist", type: "primary" },
    { label: "Learn More", type: "secondary" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center md:text-left space-y-5 order-2 md:order-1 max-w-lg"
    >
      <h1 className="font-bold text-[#1B2A41] leading-[1.1] text-[clamp(1.8rem,4vw,3rem)] text-2xl">
        Powering the Future of{" "}
        <span className="text-orange-500">Creator Finance</span>
      </h1>

      <p className="text-[#1B2A41] text-base opacity-80 leading-relaxed">
        From payments to funding and analytics - Foinda empowers African
        creators, freelancers, and digital entrepreneurs with everything they
        need to thrive.
      </p>

      <div className="flex flex-col lg:flex-row gap-3 pt-4 justify-center lg:justify-start">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            size="lg"
            onClick={handleScrollToFooter}
            variant={btn.type === "secondary" ? "outline" : undefined}
            className={`cursor-pointer w-full lg:w-auto font-medium ${
              btn.type === "primary"
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
