"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
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

  return (
    <nav
      className={`w-full fixed z-20 font-poppins bg-white text-[#1B2A41] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-width-wrapper flex justify-between items-center py-3">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.jpg"
            width={40}
            height={40}
            alt="Foinda Logo"
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-bold text-[#1B2A41]">Foinda</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((navLink, index) => {
            const isActive =
              pathname === navLink.link ||
              pathname.startsWith(navLink.link + "/");
            return (
              <Link
                key={index}
                href={navLink.link}
                className={`transition-colors ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4"
                    : "text-[#1B2A41] hover:text-orange-500"
                }`}
              >
                {navLink.text}
              </Link>
            );
          })}
        </div>

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link href={"/signup"}>
            <Button className="rounded-full cursor-pointer h-10 w-35 bg-orange-500 text-white hover:bg-orange-600 border-none">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile dropdown */}
        <div className="sm:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border rounded-md"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1B2A41]" />
            ) : (
              <MenuIcon className="w-6 h-6 text-[#1B2A41]" />
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
                <div className="flex flex-col ">
                  {navLinks.map((navLink, index) => {
                    const isActive =
                      pathname === navLink.link ||
                      pathname.startsWith(navLink.link + "/");
                    return (
                      <Link
                        key={index}
                        href={navLink.link}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 text-left text-sm transition-colors ${
                          isActive
                            ? "text-orange-500 font-medium"
                            : "text-[#1B2A41] hover:text-orange-500"
                        }`}
                      >
                        {navLink.text}
                      </Link>
                    );
                  })}
                  <Link href={"/signup"} onClick={() => setIsOpen(false)}>
                    <Button className="mx-4 my-2 h-10 w-[9rem]  text-white bg-orange-500 hover:bg-orange-600 border-none rounded-md">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
