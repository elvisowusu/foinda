"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, Package, Star, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const productTypes = [
  {
    name: "Ghana Trip Preset",
    type: "Photo Preset",
    price: "₵50",
    trending: true,
  },
  {
    name: "Creator Course",
    type: "Online Course",
    price: "₵200",
    trending: false,
  },
  {
    name: "Brand Merch",
    type: "Physical Product",
    price: "₵80",
    trending: true,
  },
  { name: "Music Beat", type: "Audio File", price: "₵30", trending: false },
];

const creators = [
  {
    name: "Ama Osei",
    product: "Travel Presets",
    revenue: "₵2,400",
    growth: "+340%",
  },
  {
    name: "Kwame Asante",
    product: "Music Beats",
    revenue: "₵1,800",
    growth: "+280%",
  },
  {
    name: "Fatima Ali",
    product: "Fashion Course",
    revenue: "₵3,200",
    growth: "+420%",
  },
  {
    name: "Yaw Mensah",
    product: "Digital Art",
    revenue: "₵1,500",
    growth: "+200%",
  },
  {
    name: "Nana Aba",
    product: "Lifestyle Coaching",
    revenue: "₵2,000",
    growth: "+260%",
  },
];

/* -------------------- ANIMATIONS -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function StoreGrowthLayer() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  // 🔁 Auto-play carousel
  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const nextBtn = carouselEl.querySelector(
      "[data-carousel-next]"
    ) as HTMLElement | null;

    const interval = setInterval(() => {
      if (!isPaused && nextBtn) nextBtn.click();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F97316]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.1}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-orange-500">Storefront</span> - Turn Followers
            Into a <span className="text-orange-500">Business</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Launch your digital storefront in minutes. Sell merch, courses, and
            presets — all powered by Foinda Growth insights.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16">
          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden"
          >
            <div className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              {/* Video Preview */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={0.2}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-4 mb-6"
              >
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">▶</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      “Ghana Trip Vlog”
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-300">2.3K views</span>
                  <span className="text-orange-500">Trending!</span>
                </div>
              </motion.div>

              {/* Zap Icon */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={0.4}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              {/* Product Grid (Desktop) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {productTypes.map((product, i) => (
                  <motion.div
                    key={product.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={0.6 + i * 0.1}
                    viewport={{ once: true }}
                    className={`bg-white/10 rounded-xl p-3 relative transition-all duration-300 ${
                      product.trending ? "ring-2 ring-orange-500" : ""
                    }`}
                  >
                    {product.trending && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="text-sm font-semibold mb-1">
                      {product.name}
                    </div>
                    <div className="text-xs text-gray-300 mb-2">
                      {product.type}
                    </div>
                    <div className="text-orange-500 font-bold">
                      {product.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-[#4e80ca] bg-clip-text text-transparent">
                From Content to Commerce
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Transform your most popular content into sellable products. Our
                AI analyzes your audience and suggests the perfect products to
                monetize your creativity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ✅ Creators Carousel with autoplay */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.3}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 overflow-hidden"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-[#1B2A41]">
            Creators Making It Happen
          </h3>
          <motion.div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="max-w-4xl mx-auto relative px-2"
          >
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 sm:-ml-4">
                {creators.map((creator) => (
                  <CarouselItem
                    key={creator.name}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 sm:pl-4"
                  >
                    <Card className="rounded-2xl shadow-md hover:shadow-lg my-2 transition-all bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {creator.name[0]}
                          </span>
                        </div>
                        <h4 className="font-semibold text-[#1B2A41] mb-2">
                          {creator.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {creator.product}
                        </p>
                        <div className="text-orange-500 font-bold text-lg mb-1">
                          {creator.revenue}
                        </div>
                        <div className="text-green-500 text-sm font-medium">
                          {creator.growth}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious data-carousel-prev />
              <CarouselNext data-carousel-next />
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
