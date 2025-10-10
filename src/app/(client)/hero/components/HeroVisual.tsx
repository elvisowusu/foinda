"use client";

import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

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
    <div
      className=" relative 
        w-full 
        mt-[10.3rem] 
        md:w-[700px] 
        flex 
        justify-center 
        items-center 
        scale-[1]"
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

      {/* Foreground Money Image */}
      <div className="relative z-20">
        <Image
          src={moneyImageSrc}
          alt="Money coins"
          width={700}
          height={700}
          className="object-contain drop-shadow-2xl"
          priority
        />

        {/* Foinda Pay Tag */}
        <div className="absolute bottom-[0px] right-0">
          <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg text-white font-semibold">
            Foinda Pay
          </div>
        </div>
      </div>
    </div>
  );
}
