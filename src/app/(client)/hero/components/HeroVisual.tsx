"use client";

import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroVisualProps {
  moneyImageSrc?: string;
  dotLottieSrc?: string;
  lottieJsonUrl?: string;
}

export default function HeroVisual({
  moneyImageSrc = "/human1.png",
  dotLottieSrc = "https://lottie.host/9a7b05e7-559c-4c12-af2d-1575936271f6/wdgsp48St8.lottie",
  lottieJsonUrl = "https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json",
}: HeroVisualProps) {
  const [socialAnimation, setSocialAnimation] = useState<object | null>(null);

  useEffect(() => {
    fetch(lottieJsonUrl)
      .then((res) => res.json())
      .then((data: object) => setSocialAnimation(data))
      .catch((err) => console.error("Failed to load Lottie JSON:", err));
  }, [lottieJsonUrl]);

  return (
    <div className="flex-1 flex justify-center items-center order-1 md:order-2 scale-[0.9] md:scale-[1] lg:scale-[1.05]">
      <div
        className="
        relative 
        w-full 
        md:mt-[8.5rem] 
        md:w-[700px] 
        flex 
        justify-center 
        items-center
        overflow-visible
      "
      >
        {/* DotLottie background */}
        <div className="absolute inset-0 z-10 flex justify-center items-end opacity-70">
          <DotLottieReact
            src={dotLottieSrc}
            loop
            autoplay
            style={{
              width: "70%",
              height: "100%",
              transform: "translateY(10%)",
            }}
          />
        </div>

        {/* JSON Lottie background */}
        {socialAnimation && (
          <div className="absolute inset-0 z-0 flex justify-center items-end opacity-100">
            <Lottie
              animationData={socialAnimation}
              loop
              autoplay
              style={{
                width: "200%",
                height: "200%",
                transform: "translateY(35%)",
              }}
            />
          </div>
        )}

        {/* Foreground Human / Money Image (Animated on Scroll) */}
        <motion.div
          className="relative z-20"
          initial={{ y: 150, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1.2,
          }}
          viewport={{ once: true, amount: 0.4 }} // 👈 triggers when 40% visible
        >
          <Image
            src={moneyImageSrc}
            alt="Human illustration"
            width={700}
            height={700}
            className="object-contain drop-shadow-2xl"
            priority
          />

          {/* Foinda Pay Tag — fades in slightly later */}
          <motion.div
            className="absolute bottom-[20px] right-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg text-white font-semibold">
              Foinda Pay
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
