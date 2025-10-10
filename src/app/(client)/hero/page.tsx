"use client";

import Image from "next/image";
import { Wallet, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HeroVisual from "./components/HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* LEFT — Text & Details */}
        {/* <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            <span className="text-orange-600">Fintech</span> + <span className="text-orange-600">Data</span> for the <span className="text-orange-600">Creator Economy</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Foinda is the universal financial layer for creators: borderless payments, instant advances, and a verified financial identity.
          </p>

          <div className="flex gap-4 mb-10">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              See Dashboard
            </Button>
          </div>

          {/* Feature Cards — More concise descriptions */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-start gap-2 p-4 border rounded-lg bg-gray-50">
              <Wallet className="text-orange-500 w-5 h-5" />
              <h5 className="font-semibold text-gray-900 text-sm">
                Borderless Pay
              </h5>
              <p className="text-xs text-gray-500">
                Receive and settle earnings instantly across currencies.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 p-4 border rounded-lg bg-gray-50">
              <Globe2 className="text-orange-500 w-5 h-5" />
              <h5 className="font-semibold text-gray-900 text-sm">
                Instant Advance
              </h5>
              <p className="text-xs text-gray-500">
                Smart capital based on data, not collateral.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 p-4 border rounded-lg bg-gray-50">
              <Sparkles className="text-orange-500 w-5 h-5" />
              <h5 className="font-semibold text-gray-900 text-sm">
                Verified ID
              </h5>
              <p className="text-xs text-gray-500">
                A unified, verifiable financial and creative profile.
              </p>
            </div>
          </div>
        </div> */}
        <HeroVisual/>
      </div>
    </section>
  );
}
