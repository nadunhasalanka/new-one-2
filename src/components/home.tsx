import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesGrid from "./FeaturesGrid";
import BlogSection from "./BlogSection";
import FAQSection from "./FAQSection";
import TrialSection from "./TrialSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-background text-foreground overflow-x-hidden"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Blog Section */}
      <BlogSection />

      {/* Trial Section */}
      <TrialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Home;
