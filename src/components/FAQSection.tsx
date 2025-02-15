import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Are there any additional costs or hidden fees?",
    answer:
      "No hidden fees. Our pricing is transparent and includes all features listed. Any additional services are clearly communicated upfront.",
  },
  {
    question: "What are the highlights of your product?",
    answer:
      "Our product offers seamless integration, real-time collaboration, advanced analytics, and enterprise-grade security, all in an intuitive interface.",
  },
  {
    question: "Where can I buy your product or how can I place an order?",
    answer:
      "You can purchase directly through our website or contact our sales team for enterprise plans and custom solutions.",
  },
  {
    question: "What is your product's return or exchange policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied, we'll provide a full refund with no questions asked.",
  },
];

const FAQSection = ({ faqs = defaultFAQs }: FAQSectionProps) => {
  return (
    <section className="w-full min-h-[600px] bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A2A] via-[#0A0A0A] to-[#0A0A0A]" />

      {/* 3D Elements */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-20">
        {/* Floating circles */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-gray-800" />
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-gray-800" />
        <div className="absolute top-60 right-60 w-24 h-24 rounded-full border border-gray-800" />

        {/* 3D Cube */}
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border border-gray-800 transform rotate-45 skew-x-12 skew-y-12" />
            <div className="absolute inset-0 border border-gray-800 transform -rotate-45 skew-x-12 skew-y-12" />
            <div className="absolute inset-0 border border-gray-800 transform rotate-90 skew-x-12 skew-y-12" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-gray-300 text-sm">
                <agent /> Product Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400">
              For any other questions, feel welcome to reach out to our team.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="text-white hover:text-white hover:no-underline py-4 text-left">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-800">
                          <span className="text-sm">+</span>
                        </div>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pl-10">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
