"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Heart, Globe, Award, Zap } from "lucide-react";

const stats = [
  { number: "10K+", label: "Active Creators" },
  { number: "$2M+", label: "Processed Payments" },
  { number: "50+", label: "Countries Supported" },
  { number: "99.9%", label: "Uptime" },
];

const values = [
  {
    icon: <Heart className="w-8 h-8 text-orange-500" />,
    title: "Creator-First",
    description: "Every feature we build starts with understanding creator needs and pain points."
  },
  {
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    title: "Borderless",
    description: "We believe creativity shouldn't be limited by geography or payment systems."
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Fast & Reliable",
    description: "Speed and reliability are non-negotiable when it comes to your money."
  },
  {
    icon: <Award className="w-8 h-8 text-orange-500" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code to customer support."
  }
];

const team = [
  {
    name: "Kwame Asante",
    role: "CEO & Co-Founder",
    image: "/human1.png",
    bio: "Former fintech executive with 10+ years building payment solutions across Africa."
  },
  {
    name: "Aisha Okafor",
    role: "CTO & Co-Founder", 
    image: "/human1.png",
    bio: "Tech leader passionate about using technology to solve real-world problems."
  },
  {
    name: "David Kimani",
    role: "Head of Product",
    image: "/human1.png", 
    bio: "Product strategist focused on creating intuitive experiences for creators."
  }
];

export default function AboutUs() {
  return (
    <main className="bg-white text-[#1B2A41]">
      {/* Hero Section with Animation */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#F97316]/5 to-[#74CBE3]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empowering African <span className="text-orange-500">Creators</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're building the financial infrastructure that African creators, freelancers, 
                and digital entrepreneurs need to thrive in the global economy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From creativity to income — all in one platform. Foinda helps African creators 
                get paid, protect their work, and grow smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Create Your Foinda ID
                </button>
                <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                  Watch How It Works 🎥
                </button>
              </div>
            </motion.div>

            {/* Right Side - Foinda Animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Main Foinda Animation Container */}
                <div className="relative bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-8 text-white overflow-hidden">
                  {/* Floating Creator Handles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-xs font-semibold"
                        style={{
                          left: `${10 + i * 15}%`,
                          top: `${20 + (i % 2) * 30}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {i % 3 === 0 ? "YT" : i % 3 === 1 ? "TT" : "IG"}
                      </motion.div>
                    ))}
                  </div>

                  {/* Central Foinda ID Card */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="relative z-10 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-500">F</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Foinda ID</h3>
                    <p className="text-sm opacity-90 mb-4">Verified Creator</p>
                    
                    {/* Connected Accounts */}
                    <div className="flex justify-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">YT</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">TT</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">IG</div>
                    </div>
                  </motion.div>

                  {/* Glowing Connections */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-500 rounded-full"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${40 + i * 10}%`,
                        }}
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Background Particles */}
                <div className="absolute inset-0 -z-10">
                  {[
                    { left: 10, top: 20, duration: 4, delay: 0 },
                    { left: 25, top: 15, duration: 5, delay: 0.5 },
                    { left: 40, top: 30, duration: 4.5, delay: 1 },
                    { left: 60, top: 25, duration: 5.5, delay: 1.5 },
                    { left: 75, top: 40, duration: 4, delay: 2 },
                    { left: 85, top: 15, duration: 5, delay: 0.3 },
                    { left: 15, top: 60, duration: 4.5, delay: 1.2 },
                    { left: 35, top: 70, duration: 5, delay: 0.8 },
                    { left: 55, top: 80, duration: 4, delay: 1.8 },
                    { left: 80, top: 75, duration: 5.5, delay: 0.2 },
                    { left: 20, top: 85, duration: 4.5, delay: 1.5 },
                    { left: 45, top: 10, duration: 5, delay: 0.7 },
                    { left: 70, top: 50, duration: 4, delay: 1.3 },
                    { left: 90, top: 65, duration: 5, delay: 0.9 },
                    { left: 5, top: 45, duration: 4.5, delay: 1.7 },
                    { left: 30, top: 35, duration: 5, delay: 0.4 },
                    { left: 65, top: 5, duration: 4, delay: 1.1 },
                    { left: 95, top: 35, duration: 5.5, delay: 0.6 },
                    { left: 50, top: 55, duration: 4.5, delay: 1.4 },
                    { left: 12, top: 75, duration: 5, delay: 0.1 }
                  ].map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400 rounded-full"
                      style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1B2A41] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize access to financial services for African creators by providing 
                borderless payment solutions, instant funding, and comprehensive financial tools 
                that enable them to focus on what they do best: creating.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every creator deserves access to the same financial opportunities 
                regardless of where they're located, and we're building the infrastructure to make that possible.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src="/human1.png"
                alt="Mission illustration"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Foinda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people building the future of creator finance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#1B2A41] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the movement that's transforming how African creators 
              access financial services and grow their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
                Create Your Foinda ID
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#1B2A41] transition">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}