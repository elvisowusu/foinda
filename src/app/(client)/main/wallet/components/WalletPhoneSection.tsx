// components/WalletIntro/WalletPhoneSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TransactionLines from "@/app/(client)/components/transactionLines";
import { fadeInUp } from "./animations";

export default function WalletPhoneSection() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative hidden md:block mt-8 mx-auto max-w-full md:absolute md:right-0 md:bottom-0 md:mt-0 md:w-auto"
    >
      <TransactionLines />
      <Image
        src="/phone-hands.png"
        alt="Foinda wallet UI"
        width={900}
        height={800}
        className="w-3/4 max-w-[300px] mx-auto h-auto drop-shadow-2xl border-none relative z-10 md:w-[400px] md:mx-0 lg:max-w-none"
        priority
      />
    </motion.div>
  );
}
