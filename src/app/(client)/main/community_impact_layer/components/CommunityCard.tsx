// components/CommunityImpactLayer/CommunityCard.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

interface CommunityCardProps {
  image: string | StaticImageData; // ✅ Allow both types
  title: string;
  description: string;
}

export default function CommunityCard({
  image,
  title,
  description,
}: CommunityCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border border-gray-700 shadow-xl rounded-2xl w-full flex flex-col group">
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
            {title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
