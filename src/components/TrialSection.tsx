import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const TrialSection = () => {
  return (
    <section className="w-full min-h-[400px] bg-[#0A0A0A] py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A2A] via-[#0A0A0A] to-[#0A0A0A] opacity-50" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-medium text-white"
            >
              Start Your
              <br />
              7-day free trial
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span>Free 7-day trial</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span>No credit card required</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-gray-400">4.8/5</span>
              <span className="text-gray-400">From 300+ Customer Reviews</span>
            </div>
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-black font-medium rounded-full px-8"
            >
              Get started
            </Button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute right-0 top-0 w-[600px] h-[400px] opacity-20 pointer-events-none">
          {/* Floating circles */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-gray-800" />
          <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-gray-800" />
          <div className="absolute top-60 right-60 w-24 h-24 rounded-full border border-gray-800" />

          {/* Abstract shapes */}
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border border-gray-800 transform rotate-45 skew-x-12 skew-y-12" />
              <div className="absolute inset-0 border border-gray-800 transform -rotate-45 skew-x-12 skew-y-12" />
              <div className="absolute inset-0 border border-gray-800 transform rotate-90 skew-x-12 skew-y-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
