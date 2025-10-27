"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "./animations";
import { creators } from "./data";

export default function CreatorsCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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
  );
}
