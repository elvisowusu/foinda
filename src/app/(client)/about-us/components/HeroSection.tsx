"use client";
import { useRouter } from "next/navigation";
import MotionDiv from "./reusable/MotionDiv";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-[#F97316]/5 to-[#74CBE3]/10">
      <div className="max-w-7xl mx-auto text-center">
        <MotionDiv>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
            <span className="text-orange-500">Foinda</span> – Powering Africa’s{" "}
            <span className="text-orange-500">Creator Economy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            We empower digital creators, freelancers, and creative entrepreneurs to access smart financing,
            seamless payments, and growth tools — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/contact-us")}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => router.push("/contact-us")}
              className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
            >
              Contact Us
            </button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
