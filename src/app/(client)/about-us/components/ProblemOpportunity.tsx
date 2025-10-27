"use client";
import React from "react";
import MotionDiv from "./reusable/MotionDiv";

const ProblemOpportunity = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <MotionDiv>
      <h2 className="text-4xl font-bold mb-6 text-center text-orange-500">
        Problem & Opportunity
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
        Across Africa, millions of creators generate value, shaping culture but remain excluded from traditional finance and business tools.
        Payments are fragmented, funding is scarce, and many creators struggle to scale beyond social platforms. 
        Foinda bridges this gap by offering a reliable financial infrastructure tailored for the creator economy.
      </p>
    </MotionDiv>
  </section>
);

export default ProblemOpportunity;
