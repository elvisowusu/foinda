"use client";
import React from "react";
import { Mail, UserCheck, Globe } from "lucide-react";
import SectionTitle from "./reusable/SectionTitle";
import ContactInfo from "./reusable/ContactInfo";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  return (
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
  );
};

export default ContactSection;
