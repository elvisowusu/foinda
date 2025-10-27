"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
      question: "How do I create a Foinda wallet?",
      answer:
        "Creating a Foinda wallet is simple. Click 'Get Started' on our homepage, provide your basic information, verify your identity, and you'll be ready to receive payments in minutes.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "We support mobile money (MoMo), bank cards, digital wallets, and USSD across Ghana, Nigeria, Kenya, and other African countries. We also support international payments.",
    },
    {
      question: "How quickly can I receive payments?",
      answer:
        "Most payments are processed instantly. Cross-border payments typically arrive within 1-2 business days, depending on the destination country and payment method.",
    },
    {
      question: "What are your fees?",
      answer:
        "Our fees are transparent and competitive. Domestic payments are free, while cross-border payments have a small fee that varies by destination. Check our pricing page for detailed information.",
    },
    {
      question: "Is my money safe with Foinda?",
      answer:
        "Yes, we're fully licensed and regulated. Your funds are held in segregated accounts with partner banks, and we use bank-grade security to protect your information.",
    },
    {
      question: "Can I use Foinda for my business?",
      answer:
        "Absolutely! Foinda offers business accounts with additional features like team management, detailed reporting, and API access for integration with your existing systems.",
    },
  ];

export default function FAQSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about Foinda
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
