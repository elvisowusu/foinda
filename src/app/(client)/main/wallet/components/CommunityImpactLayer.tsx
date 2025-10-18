"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Globe, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

const icons = [Heart, Users, Globe, Star];

export default function CommunityImpactLayer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-8"
      >
        Our Community Impact
      </motion.h2>

      {/* Carousel Container - shadcn block style */}
      <div className="relative w-full max-w-5xl">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden bg-gray-800 border-gray-700">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Icons Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-12"
      >
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className="bg-gray-800/60 p-4 rounded-2xl shadow-lg"
          >
            <Icon className="w-10 h-10 text-emerald-400" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
