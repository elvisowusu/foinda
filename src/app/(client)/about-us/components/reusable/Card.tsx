"use client";
import { motion } from "framer-motion";
import IconWrapper from "./IconWrapper";
import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

export default Card;
export type { CardProps };
