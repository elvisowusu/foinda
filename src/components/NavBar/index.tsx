"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed z-20 font-poppins transition-colors duration-200 text-[#1B2A41] shadow-sm bg-white">
      <div className="max-width-wrapper flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/assets/svgs/logo.svg" width={50} height={40} alt="Foinda" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((navLink, index) => {
            const isActive =
              pathname === navLink.link || pathname.startsWith(navLink.link + "/");

            return (
              <Link
                key={index}
                href={navLink.link}
                className={`link transition-colors ${
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
        <div className="hidden items-center gap-4 sm:flex">
          <Link href={"/login"}>
            <Button
              variant={"link"}
              className="cursor-pointer text-[#1B2A41] hover:text-orange-500 transition duration-200"
            >
              Sign in
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="rounded-full cursor-pointer h-12 w-44 bg-[#1B2A41] text-white hover:bg-orange-600 ease-out duration-150 border-none">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger className="sm:hidden border p-2 rounded-md">
    <MenuIcon className="w-6 h-6 text-[#1B2A41]" />
  </SheetTrigger>

  <SheetContent side="left" className="p-0">
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-full w-full bg-white pl-7"
    >
      <SheetHeader>
        <SheetTitle>
          <Image
            src="/assets/svgs/logo.svg"
            width={80}
            height={70}
            alt="Foinda"
          />
        </SheetTitle>

        <div className="flex flex-col items-start gap-6 pt-16">
          {navLinks.map((navLink, index) => {
            const isActive =
              pathname === navLink.link ||
              pathname.startsWith(navLink.link + "/");

            return (
              <SheetClose asChild key={index}>
                <Link
                  className={`text-2xl w-full text-left font-poppins font-medium tracking-tighter transition-colors ${
                    isActive
                      ? "text-orange-500 underline"
                      : "text-[#1B2A41] hover:text-orange-500"
                  }`}
                  href={navLink.link}
                >
                  {navLink.text}
                </Link>
              </SheetClose>
            );
          })}

          <Link href={"/login"}>
            <Button className="rounded-full h-12 w-44 bg-orange-600 text-white hover:bg-orange-700 cursor-pointer border-none">
              Sign in
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="rounded-full h-12 w-44 bg-[#1B2A41] text-white cursor-pointer hover:bg-blue-950 border-none">
              Get Started
            </Button>
          </Link>
        </div>
      </SheetHeader>
    </motion.div>
  </SheetContent>
</Sheet>

      </div>
    </nav>
  );
}
