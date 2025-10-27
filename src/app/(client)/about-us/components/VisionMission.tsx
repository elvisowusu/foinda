"use client";
import Image from "next/image";
import MotionDiv from "./reusable/MotionDiv";
import { images } from "@/lib/images";

const VisionMission = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <MotionDiv>
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Vision</h2>
        <p className="text-lg text-gray-600 mb-8">
          Foinda envisions a connected and thriving African creator economy
          where finance meets creativity — unlocking new markets, wealth, and
          opportunities across the continent.
        </p>
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Mission</h2>
        <p className="text-lg text-gray-600">
          Foinda’s mission is to power Africa’s creator economy through smart
          finance, digital infrastructure, and invisible IP protection.
        </p>
      </MotionDiv>
      <MotionDiv className="flex justify-center">
        <Image
          src={images.foindaAtom}
          alt="Vision & Mission"
          width={500}
          height={500}
          className="rounded-2xl shadow-2xl"
        />
      </MotionDiv>
    </div>
  </section>
);
export default VisionMission;
