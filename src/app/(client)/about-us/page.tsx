"use client";

import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Globe,
  Zap,
  Heart,
  Award,
  CreditCard,
  UserCheck,
  BarChart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { images } from "@/lib/images";

// -------------------- Types -------------------- //
interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionTitleProps {
  children: React.ReactNode;
}

interface IconWrapperProps {
  icon: React.ReactNode;
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

// -------------------- Reusable Components -------------------- //
const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className = "",
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <motion.h2
    className="text-4xl font-bold mb-12 text-center text-orange-500"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.h2>
);

const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => (
  <div className="w-8 h-8 text-orange-500 mx-auto mb-3">{icon}</div>
);

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <IconWrapper icon={icon} />
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <p className="flex items-center gap-2 text-lg text-gray-600">
    {icon} {text}
  </p>
);

// -------------------- Data -------------------- //
const coreValues: CardProps[] = [
  {
    icon: <Heart />,
    title: "Empowerment",
    description:
      "We enable creators to take control of their financial journey.",
  },
  {
    icon: <Globe />,
    title: "Trust & Transparency",
    description:
      "We build financial tools that creators can rely on and understand.",
  },
  {
    icon: <Zap />,
    title: "Innovation with Purpose",
    description: "Every solution we build is designed to solve real problems.",
  },
  {
    icon: <Award />,
    title: "Inclusion & Access",
    description:
      "Financial services should be available to all creators, everywhere.",
  },
  {
    icon: <UserCheck />,
    title: "Ownership & Protection",
    description: "Creators’ work and earnings are always theirs to control.",
  },
  {
    icon: <BarChart />,
    title: "Collaboration for Growth",
    description: "We believe in growing together with the creative community.",
  },
];

const products: CardProps[] = [
  {
    icon: <CreditCard />,
    title: "Foinda Pay",
    description:
      "Send, receive, and split revenue seamlessly across mobile money, cards, and wallets.",
  },
  {
    icon: <Zap />,
    title: "Foinda Advance",
    description: "Revenue-based financing for milestone-based project funding.",
  },
  {
    icon: <UserCheck />,
    title: "Foinda ID",
    description:
      "Digital trust and identity system to help creators build verified reputations.",
  },
  {
    icon: <BarChart />,
    title: "Foinda Network",
    description:
      "Dashboard with insights, analytics, and growth tools for creators.",
  },
];

// -------------------- Main Component -------------------- //
const AboutUs: React.FC = () => {
  const router = useRouter();

  return (
    <main className="bg-white text-[#1B2A41] overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-[#F97316]/5 to-[#74CBE3]/10">
        <div className="max-w-7xl mx-auto text-center">
          <MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
              <span className="text-orange-500">Foinda</span> – Powering
              Africa’s <span className="text-orange-500">Creator Economy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              We empower digital creators, freelancers, and creative
              entrepreneurs to access smart financing, seamless payments, and
              growth tools — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push("/contact-us")}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => router.push("/contact-us")}
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
              >
                Contact Us
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv>
            <h2 className="text-4xl font-bold mb-6 text-orange-500">Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              Foinda envisions a connected and thriving African creator economy
              where finance meets creativity — unlocking new markets, wealth,
              and opportunities across the continent.
            </p>
            <h2 className="text-4xl font-bold mb-6 text-orange-500">Mission</h2>
            <p className="text-lg text-gray-600">
              Foinda’s mission is to power Africa’s creator economy through
              smart finance, digital infrastructure, and invisible IP
              protection.
            </p>
          </MotionDiv>
          <MotionDiv className="flex justify-center">
            <Image
              src={images.foindaAtom}
              alt="Vision & Mission"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </MotionDiv>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Core Values</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <Card key={val.title} {...val} />
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <MotionDiv>
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-500">
            Problem & Opportunity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Across Africa, millions of creators generate value, shaping culture
            but remain excluded from traditional finance and business tools.
            Payments are fragmented, funding is scarce, and many creators
            struggle to scale beyond social platforms. Foinda bridges this gap
            by offering a reliable financial infrastructure tailored for the
            creator economy.
          </p>
        </MotionDiv>
      </section>

      {/* Core Products */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F3F7FB]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Core Products</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod) => (
              <Card key={prod.title} {...prod} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Stage / Progress */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <MotionDiv>
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-500">
            Current Stage / Progress
          </h2>
          <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-4">
            <li>
              Applying for Ghana Startup Awards (GISA 2026) to gain national
              recognition for creator-focused financial innovation.
            </li>
            <li>
              Building prototype features, securing partnerships with payment
              providers, and engaging creative communities across Ghana and
              Nigeria for pilot testing.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-12 mb-4">2026 Focus</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Integrating APIs from Paystack, Flutterwave, MoMo, and Coinbase
              for multi-currency and crypto-compatible transactions.
            </li>
            <li>Testing Foinda Pay and Foinda Advance with early creators.</li>
            <li>
              Developing Foinda ID integrations for verified global creator
              verification.
            </li>
            <li>
              Building a community network for early adopters and co-creators.
            </li>
          </ul>
        </MotionDiv>
      </section>

      {/* Our Uniqueness */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Our Uniqueness</SectionTitle>
          <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-4">
            <li>
              Purpose-built for Africa’s creator economy: designed specifically
              for creators, freelancers, and creative entrepreneurs in Africa.
            </li>
            <li>
              Blending trust, tech & culture: merging fintech innovation,
              blockchain identity, and African-inspired trust systems.
            </li>
            <li>
              From vision to infrastructure: clarity of mission, community-first
              design, and technical foundation position Foinda as the backbone
              of Africa’s emerging creative economy.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-12 mb-4 text-center">
            🤝 Collaborations & Support
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            We’re open to collaborations, ecosystem partners, and early
            supporters who share our vision of building a sustainable financial
            system for Africa’s creators.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <ContactInfo
            icon={<Mail className="w-6 h-6 text-orange-500" />}
            text="foinda.africa@gmail.com"
          />
          <ContactInfo
            icon={<UserCheck className="w-6 h-6 text-orange-500" />}
            text="Founder: Mark Chukwuebuka"
          />
          <ContactInfo
            icon={<Globe className="w-6 h-6 text-orange-500" />}
            text="Country: Ghana"
          />
        </div>
        <button
          onClick={() => router.push("/contact-us")}
          className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Reach Out
        </button>
      </section>
    </main>
  );
};

export default AboutUs;
