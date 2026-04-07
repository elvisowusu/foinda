"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Wallet, BarChart2, Globe2, Bot, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

const scrollToFooter = () => {
  document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
};

const products = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Foinda ID",
    description: "A verified digital identity linking income streams and financial activity — no paperwork.",
    accent: "text-[#74CBE3]",
    border: "border-[#74CBE3]/30",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Foinda Pay",
    description: "Multi-rail payments across mobile money, cards, and wallets with real-time income tracking.",
    accent: "text-orange-500",
    border: "border-orange-200",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Income Intelligence",
    description: "Live earning signals that replace outdated payslips and prove creditworthiness instantly.",
    accent: "text-[#74CBE3]",
    border: "border-[#74CBE3]/30",
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: "Bank & Fintech Bridge",
    description: "APIs connecting informal earners directly to banking, credit, and government systems.",
    accent: "text-[#1B2A41]",
    border: "border-[#1B2A41]/20",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Foinda Copilot",
    description: "AI-powered insights that turn income data into daily financial decisions.",
    accent: "text-orange-500",
    border: "border-orange-200",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Impact",
    description: "A growing network of earners, institutions, and governments unlocking financial access at scale.",
    accent: "text-[#74CBE3]",
    border: "border-[#74CBE3]/30",
  },
];

const stats = [
  { value: "100M+", label: "Informal Earners" },
  { value: "$2T+", label: "Informal Economy" },
  { value: "70%", label: "Unbanked in Africa" },
  { value: "100 Yrs", label: "Infrastructure Vision" },
];

export default function Home() {
  return (
    <div className="text-[#1B2A41] overflow-x-hidden">

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] overflow-hidden px-4 sm:px-6 lg:px-16 pt-16"
      >
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <Image src="/africaMap.png" alt="" fill className="object-contain" priority />
        </div>

        <motion.div
          className="absolute right-6 top-20 opacity-10 pointer-events-none hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Image src="/foindaAtom.png" alt="" width={180} height={180} />
        </motion.div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Financial Infrastructure for the Next 100 Years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          >
            Building Infrastructure for the{" "}
            <span className="text-orange-500">Future of Work,</span>{" "}
            Income & <span className="text-[#74CBE3]">Economic Participation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-8"
          >
            Unlocking financial access for millions of informal earners globally — connecting them to banks, fintechs, and government through real-time income intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              onClick={scrollToFooter}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 text-sm rounded-lg"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/30 text-white hover:bg-white/10 font-medium px-6 py-2.5 text-sm rounded-lg bg-transparent"
            >
              Learn More <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-8 bg-white/20" />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-orange-500 py-8 px-4 sm:px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp()} className="text-center text-orange-100 text-xs uppercase tracking-widest mb-6">
            The problem we&apos;re solving
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}>
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-orange-100 text-xs mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp()}>
            <span className="text-orange-500 font-semibold text-xs uppercase tracking-wider">Our Mission</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 leading-snug">
              Building for the <span className="text-orange-500">next hundred years</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Where financial access is driven by how people earn. Foinda creates the infrastructure layer that makes the informal economy legible — and fundable.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Real-time income verification for informal earners",
                "API-first infrastructure for banks and fintechs",
                "Government-grade data for social protection",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-[#74CBE3]/15 rounded-2xl blur-2xl" />
              <Image
                src="/phone-hands.png"
                alt="Foinda mobile"
                width={320}
                height={400}
                className="relative z-10 w-full object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="py-16 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <span className="text-orange-500 font-semibold text-xs uppercase tracking-wider">The Platform</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-2">
              Everything Earners & <span className="text-orange-500">Institutions Need</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Full-stack financial infrastructure — from identity to income intelligence to institutional connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.06)}
                className={`bg-white border ${product.border} rounded-xl p-5 hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`${product.accent} mb-3`}>{product.icon}</div>
                <h3 className={`text-sm font-semibold mb-1 ${product.accent}`}>{product.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-16 px-4 sm:px-6 lg:px-16 bg-[#1B2A41] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp()} className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-[#74CBE3]/10 rounded-2xl blur-2xl" />
              <Image
                src="/phone2.png"
                alt="Foinda app"
                width={300}
                height={380}
                className="relative z-10 w-full object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="order-1 lg:order-2">
            <span className="text-[#74CBE3] font-semibold text-xs uppercase tracking-wider">Our Vision</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 leading-snug">
              A world where <span className="text-orange-500">how you earn</span> is how you access finance
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Billions are economically active but financially invisible. Foinda builds the infrastructure that makes informal income legible to banks, fintechs, and governments — enabling financial access at scale.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { metric: "Africa", desc: "Primary market" },
                { metric: "Global", desc: "Long-term ambition" },
                { metric: "B2B2C", desc: "Business model" },
                { metric: "API-first", desc: "Architecture" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-3 border border-white/10">
                  <p className="font-semibold text-[#74CBE3] text-sm">{item.metric}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <div className="flex justify-center mb-5">
              <Image src="/foindaAtom.png" alt="Foinda" width={52} height={52} className="opacity-70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
              Come build the future of{" "}
              <span className="text-orange-500">financial infrastructure</span> with us
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed mb-7">
              We are building the rails that will power the next billion people into the formal economy. Join us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={scrollToFooter}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-2.5 text-sm rounded-lg"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                onClick={scrollToFooter}
                className="border-[#1B2A41]/25 text-[#1B2A41] hover:bg-gray-50 font-medium px-7 py-2.5 text-sm rounded-lg"
              >
                Partner with Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
