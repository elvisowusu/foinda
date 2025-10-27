"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { slideLeft } from "./animations";

export default function MapSection() {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex justify-center overflow-hidden"
    >
      <div className="w-full max-w-lg mx-auto">
        <Image
          src={images.africa_map}
          alt="Africa map"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}
