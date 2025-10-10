"use client";

import { Button } from "@/components/ui/button";
import { Wallet, Globe2, Sparkles } from "lucide-react";
import HeroVisual from "./components/HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-center">
      {/* Top content */}
      <div className="max-w-3xl mx-auto px-6 mb-16">
        <p className="text-sm font-semibold text-orange-500 mb-3 uppercase tracking-wide">
          Empowering the Creator Economy
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Powering <span className="text-orange-500">Creator Finance</span> for the Modern Age
        </h1>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Foinda is redefining financial access for creators — enabling seamless cross-border
          payments, verified identity, and instant financing. Manage, grow, and earn smarter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Centered Hero Visual */}
      <div className="relative w-full flex justify-center">
        <HeroVisual />
      </div>

      {/* Bottom feature grid */}
      <div className="mt-24 max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
          <Wallet className="text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-900 text-base mb-1">
              Borderless Wallet
            </h5>
            <p className="text-sm text-gray-500">
              Get paid in USD, GHS, NGN, and KES — anywhere, anytime.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
          <Globe2 className="text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-900 text-base mb-1">
              Instant Advances
            </h5>
            <p className="text-sm text-gray-500">
              Access creator-based financing with no collateral required.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 sm:col-span-2 md:col-span-1 md:justify-self-center">
          <Sparkles className="text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-900 text-base mb-1">
              Verified Identity
            </h5>
            <p className="text-sm text-gray-500">
              Build brand trust with verified creator identity and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
