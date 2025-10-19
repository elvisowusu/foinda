"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useRef } from "react";

/* -------------------- ARRAYS AT TOP -------------------- */
const footerSections = [
  {
    title: "About",
    links: [
      { text: "About Us", link: "/about-us" },
      // { text: "Our Mission", link: "/about-us#mission" },
      { text: "Our Mission", link: "/about-us" },
      // { text: "Team", link: "/about-us#team" },
      { text: "Team", link: "/about-us" },
      // { text: "Careers", link: "/careers" },
      // { text: "Press", link: "/press" }
    ],
  },
  // {
  //   title: "Product",
  //   links: [
  //     { text: "Foinda Wallet", link: "/wallet" },
  //     { text: "Foinda Advance", link: "/wallet#advance" },
  //     { text: "Identity Layer", link: "/wallet#identity" },
  //     { text: "Store & Growth", link: "/wallet#store" },
  //     { text: "Copilot", link: "/wallet#copilot" }
  //   ]
  // },
  // {
  //   title: "Community",
  //   links: [
  //     { text: "Creator Network", link: "/wallet#network" },
  //     { text: "Success Stories", link: "/wallet#stories" },
  //     { text: "Blog", link: "/blog" },
  //     { text: "Events", link: "/events" },
  //     { text: "Partners", link: "/partners" }
  //   ]
  // },
  {
    title: "Support",
    links: [
      { text: "Help Center", link: "/contact-us" },
      { text: "Contact Us", link: "/contact-us" },
      // { text: "API Docs", link: "/docs" },
      { text: "Status", link: "/status" },
      // { text: "Security", link: "/security" }
    ],
  },
];

const socialLinks = [
  {
    icon: <Facebook className="w-5 h-5" />,
    link: "https://facebook.com/foinda",
    label: "Facebook",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    link: "https://twitter.com/foinda",
    label: "Twitter",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    link: "https://instagram.com/foinda",
    label: "Instagram",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://linkedin.com/company/foinda",
    label: "LinkedIn",
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    link: "https://youtube.com/foinda",
    label: "YouTube",
  },
];

const contactInfo = [
  { icon: <Mail className="w-4 h-4" />, text: "admin@foinda.com" },
  { icon: <Phone className="w-4 h-4" />, text: "+233 54 602 8860" },
  { icon: <MapPin className="w-4 h-4" />, text: "Accra, Ghana" },
];
declare global {
  interface Window {
    highlightNewsletter?: () => void;
  }
}

/* -------------------- COMPONENT -------------------- */
export default function Footer() {
  const newsletterRef = useRef<HTMLDivElement>(null);

  if (typeof window !== "undefined") {
    window.highlightNewsletter = () => {
      const el = newsletterRef.current;
      if (!el) return;
      el.classList.add("ring-4", "ring-orange-500");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-orange-500");
      }, 1500);
    };
  }

  return (
    <footer
      id="footer"
      className="bg-[#1B2A41] text-white w-full overflow-hidden"
    >
      {/* Newsletter Section */}
      <div
        ref={newsletterRef}
        className="border-t border-gray-700 transition-all duration-500"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Join the Waitlist</h3>
              <p className="text-gray-300">
                Get the latest news about Foinda features, creator success
                stories, and industry insights.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const emailInput = e.currentTarget.email.value;
                if (!emailInput) return;
                window.location.href = `mailto:admin@foinda.com?subject=Newsletter Subscription&body=Please subscribe: ${emailInput}`;
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors w-full sm:w-auto"
              >
                Join Waitlist
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/logo.jpg"
                  width={40}
                  height={40}
                  alt="Foinda Logo"
                  className="rounded-full"
                />
                <span className="ml-3 text-2xl font-bold">Foinda</span>
              </Link>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Empowering African creators with borderless financial solutions.
                From payments to funding, we&apos;re building the future of
                creator finance.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="text-orange-500">{info.icon}</div>
                    <span className="text-sm">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              {/* <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div> */}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © 2025 Foinda. All rights reserved.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-orange-500 transition-colors">
              Cookies
            </Link>
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
}
