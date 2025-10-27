"use client";

import { Bot, Send } from "lucide-react";
import ChatMessages from "./ChatMessages";

export default function ChatInterface() {
  return (
    <div className="relative">
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
        <ChatMessages />

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
    </div>
  );
}
