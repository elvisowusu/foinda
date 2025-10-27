"use client";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

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

export default MotionDiv;
