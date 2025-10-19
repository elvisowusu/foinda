// components/CommunityImpactLayer/CommunityCarousel.tsx
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
import CommunityCard from "./CommunityCard";
import { fadeInUp } from "./animations";
import { slides } from "./slides";

export default function CommunityCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay infinite loop
  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const nextBtn = carouselEl.querySelector<HTMLButtonElement>(
      "[data-carousel-next]"
    );

    const interval = setInterval(() => {
      if (!isPaused && nextBtn) nextBtn.click();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.div
      ref={carouselRef}
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8, delay: 0.2 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-5xl"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 flex"
            >
              <div className="p-2 w-full flex">
                <CommunityCard
                  image={slide.image}
                  title={slide.title}
                  description={slide.description}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious data-carousel-prev />
        <CarouselNext data-carousel-next />
      </Carousel>
    </motion.div>
  );
}
