"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

/* ------------------------------- ARRAYS ------------------------------- */
const slides = [
  {
    image: "/images/community1.jpg",
    title: "Empowering Local Communities",
    description:
      "Our initiatives support local creators and entrepreneurs to achieve sustainable growth through mentorship and funding.",
  },
  {
    image: "/images/community2.jpg",
    title: "Global Collaboration",
    description:
      "We connect creative minds globally, fostering partnerships that drive innovation and cultural exchange.",
  },
  {
    image: "/images/community3.jpg",
    title: "Inclusive Growth",
    description:
      "We prioritize inclusivity by ensuring that every voice—no matter the background—has a platform to shine.",
  },
  {
    image: "/images/community2.jpg",
    title: "Global Collaboration",
    description:
      "We connect creative minds globally, fostering partnerships that drive innovation and cultural exchange.",
  },
  {
    image: "/images/community3.jpg",
    title: "Inclusive Growth",
    description:
      "We prioritize inclusivity by ensuring that every voice—no matter the background—has a platform to shine.",
  },
  {
    image: "/images/community2.jpg",
    title: "Global Collaboration",
    description:
      "We connect creative minds globally, fostering partnerships that drive innovation and cultural exchange.",
  },
  {
    image: "/images/community3.jpg",
    title: "Inclusive Growth",
    description:
      "We prioritize inclusivity by ensuring that every voice—no matter the background—has a platform to shine.",
  },
];

/* --------------------------- ANIMATION CONFIGS --------------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ---------------------------- MAIN COMPONENT ---------------------------- */
export default function CommunityImpactLayer() {
  const carouselRef = useRef<HTMLDivElement | null>(null); // ✅ proper type
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
    <section className="relative flex flex-col items-center justify-center w-full  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden overflow-y-hidden px-4 py-16">
      {/* Title */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-10"
      >
        Our Community Impact
      </motion.h2>

      {/* Carousel */}
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
            loop: true, // ✅ Infinite looping
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="overflow-hidden bg-gray-800 border border-gray-700 shadow-xl rounded-2xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={1200}
                          height={700}
                          className="object-cover w-full h-[260px] md:h-[300px]"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                          <h3 className="text-lg md:text-xl font-semibold mb-1">
                            {slide.title}
                          </h3>
                          <p className="text-gray-200 text-sm md:text-base line-clamp-3">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious data-carousel-prev />
          <CarouselNext data-carousel-next />
        </Carousel>
      </motion.div>
    </section>
  );
}
