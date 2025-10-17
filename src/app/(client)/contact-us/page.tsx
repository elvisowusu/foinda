"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-orange-500" />,
    title: "Email Support",
    details: ["support@foinda.com", "partnerships@foinda.com"],
    description: "Get help with your account or business inquiries"
  },
  {
    icon: <Phone className="w-6 h-6 text-orange-500" />,
    title: "Phone Support",
    details: ["+233 20 123 4567", "+234 1 234 5678"],
    description: "Speak directly with our support team"
  },
  {
    icon: <MapPin className="w-6 h-6 text-orange-500" />,
    title: "Office Locations",
    details: ["Accra, Ghana", "Lagos, Nigeria"],
    description: "Visit us at our regional offices"
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-500" />,
    title: "Business Hours",
    details: ["Mon-Fri: 8AM-6PM GMT", "Sat: 9AM-2PM GMT"],
    description: "We're here to help during business hours"
  }
];

const faqs = [
  {
    question: "How do I create a Foinda wallet?",
    answer: "Creating a Foinda wallet is simple. Click 'Get Started' on our homepage, provide your basic information, verify your identity, and you'll be ready to receive payments in minutes."
  },
  {
    question: "What payment methods do you support?",
    answer: "We support mobile money (MoMo), bank cards, digital wallets, and USSD across Ghana, Nigeria, Kenya, and other African countries. We also support international payments."
  },
  {
    question: "How quickly can I receive payments?",
    answer: "Most payments are processed instantly. Cross-border payments typically arrive within 1-2 business days, depending on the destination country and payment method."
  },
  {
    question: "What are your fees?",
    answer: "Our fees are transparent and competitive. Domestic payments are free, while cross-border payments have a small fee that varies by destination. Check our pricing page for detailed information."
  },
  {
    question: "Is my money safe with Foinda?",
    answer: "Yes, we're fully licensed and regulated. Your funds are held in segregated accounts with partner banks, and we use bank-grade security to protect your information."
  },
  {
    question: "Can I use Foinda for my business?",
    answer: "Absolutely! Foinda offers business accounts with additional features like team management, detailed reporting, and API access for integration with your existing systems."
  }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "", type: "general" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-white text-[#1B2A41] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#F97316]/5 to-[#74CBE3]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about Foinda? Need help with your account? 
              We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="business">Business Partnership</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 text-white hover:bg-orange-600 py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-2xl flex items-center justify-center h-full min-h-[500px]"
            >
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Locations</h3>
                <p className="mb-4">Accra, Ghana & Lagos, Nigeria</p>
                <p className="text-sm">Interactive map coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about Foinda
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to help you get the most out of Foinda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@foinda.com"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Support
              </a>
              <a
                href="tel:+233201234567"
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#1B2A41] transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}