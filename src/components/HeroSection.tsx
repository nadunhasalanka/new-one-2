import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import TrustedCompanies from "./TrustedCompanies";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Deliver an Enterprise",
  subtitle = "Quality Project in Minutes",
  ctaText = "Get started for free",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] relative overflow-hidden">
      <Navbar />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-teal-500 rounded-full" />
            <span className="text-gray-300 text-sm">
              <agent /> Product Overview
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
              <br />
              {subtitle}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultrices quis lectus molestie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-teal-500 hover:bg-teal-600 text-black font-medium rounded-full px-8"
            >
              {ctaText}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl mx-auto bg-[#1A1A1A] rounded-lg p-8 border border-gray-800"
          >
            <div className="relative w-full aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent" />
              <img
                src="https://cdn.dribbble.com/userupload/13632773/file/original-722d633c0d3c23a7d67fbc5e3f451d2f.png?resize=1504x1128"
                alt="Dashboard Preview"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <TrustedCompanies />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent -z-10" />
    </div>
  );
};

export default HeroSection;
