"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

// ✅ Extend the Window interface globally (for highlightNewsletter or other window props)
declare global {
  interface Window {
    highlightNewsletter?: () => void;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const atTop = !scrolled;

  return (
    <nav
      className={`w-full fixed z-20 font-poppins transition-all duration-500 ${
        atTop
          ? "bg-transparent text-white"
          : "bg-white text-[#1B2A41] shadow-md"
      }`}
    >
      <div className="max-width-wrapper flex justify-between items-center py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            width={40}
            height={40}
            alt="Foinda Logo"
            className="rounded-full"
          />
          <span className={`ml-2 text-xl font-bold transition-colors duration-500 ${atTop ? "text-white" : "text-[#1B2A41]"}`}>
            Foinda
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((navLink, index) => {
            const isAnchor = navLink.link.startsWith("#");
            return isAnchor ? (
              <button
                key={index}
                onClick={() => {
                  const id = navLink.link.slice(1);
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`transition-colors duration-500 hover:text-orange-400 ${atTop ? "text-white/80" : "text-[#1B2A41]"}`}
              >
                {navLink.text}
              </button>
            ) : (
              <Link
                key={index}
                href={navLink.link}
                className={`transition-colors duration-500 ${
                  pathname === navLink.link
                    ? "text-orange-400 underline underline-offset-4"
                    : atTop ? "text-white/80 hover:text-orange-400" : "text-[#1B2A41] hover:text-orange-500"
                }`}
              >
                {navLink.text}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            onClick={() => {
              setIsOpen(false);
              const footer = document.getElementById("footer");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`mx-4 my-2 h-10 w-36 border-none rounded-md transition-all duration-500 ${
              atTop
                ? "bg-orange-500 text-white hover:bg-orange-400 ring-1 ring-white/20"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile dropdown */}
        <div className="sm:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 border rounded-md transition-colors duration-500 ${atTop ? "border-white/30" : "border-gray-200"}`}
          >
            {isOpen ? (
              <X className={`w-6 h-6 transition-colors duration-500 ${atTop ? "text-white" : "text-[#1B2A41]"}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 transition-colors duration-500 ${atTop ? "text-white" : "text-[#1B2A41]"}`} />
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border overflow-hidden z-50"
              >
                <div className="flex flex-col">
                  {navLinks.map((navLink, index) => {
                    const isAnchor = navLink.link.startsWith("#");
                    return isAnchor ? (
                      <button
                        key={index}
                        onClick={() => {
                          setIsOpen(false);
                          const id = navLink.link.slice(1);
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-4 py-3 text-left text-sm transition-colors text-[#1B2A41] hover:text-orange-500"
                      >
                        {navLink.text}
                      </button>
                    ) : (
                      <Link
                        key={index}
                        href={navLink.link}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 text-left text-sm transition-colors ${
                          pathname === navLink.link
                            ? "text-orange-500 font-medium"
                            : "text-[#1B2A41] hover:text-orange-500"
                        }`}
                      >
                        {navLink.text}
                      </Link>
                    );
                  })}

                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      const footer = document.getElementById("footer");
                      if (footer) {
                        footer.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="mx-4 my-2 h-10 w-36 text-white bg-orange-500 hover:bg-orange-600 border-none rounded-md"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
