"use client";

import { motion } from "framer-motion";
import { MessageCircle, Bot, Send } from "lucide-react";

/* ----------------------------- SHARED MOTION CONFIGS ----------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const fadeSide = (direction: "left" | "right" = "left", delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } },
});

const fadeChild = (index: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1 },
  },
});

export default function CopilotLayer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-white overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">Foinda Copilot</span> - Your
            Personal <span className="text-orange-500">Growth Buddy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Foinda Copilot turns your data into daily growth actions — so you
            always know your next best move.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Chat Interface */}
          <motion.div
            variants={fadeSide("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] rounded-3xl p-6 text-white relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Foinda Copilot</h3>
                  <p className="text-sm text-gray-300">Always online</p>
                </div>
                <div className="ml-auto w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Messages */}
              <div className="space-y-4 mb-6">
                {/* User message */}
                <motion.div
                  variants={fadeChild(0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-end"
                >
                  <div className="bg-orange-500 rounded-2xl rounded-br-md p-3 max-w-xs">
                    <p className="text-sm">How can I earn more?</p>
                  </div>
                </motion.div>

                {/* Copilot reply */}
                <motion.div
                  variants={fadeChild(1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-md p-3 max-w-xs">
                    <p className="text-sm mb-2">
                      Let&apos;s monetize your 3 most-viewed videos this week.
                      I&apos;ve identified your Ghana travel content is
                      trending!
                    </p>
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-orange-600 transition">
                      Create Preset Pack
                    </button>
                  </div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  variants={fadeChild(2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-[#4e80ca] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-md p-3">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i: number) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Ask Foinda Copilot..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white p-3 rounded-2xl hover:bg-orange-600 transition">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            variants={fadeSide("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#1B2A41]">
                AI-Powered Growth Assistant
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Get personalized advice based on your actual performance data.
                Foinda Copilot analyzes your content, audience, and earnings to
                suggest the best next steps.
              </p>
            </div>

            <motion.div
              variants={fadeChild(4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with Foinda Copilot 💬
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
