import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Blocks, ArrowRight } from "lucide-react";

const FeaturesGrid = () => {
  return (
    <section className="w-full py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-teal-500 rounded-full" />
          <span className="text-gray-300 text-sm">
            <agent /> Product Overview
          </span>
        </div>

        {/* Main Title Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Discover a simple
            <br />
            notebook solution today.
          </h2>
          <p className="text-gray-400 self-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            lorem quis lectus molestie.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-start gap-6">
                <span className="text-[#333333] text-xl font-medium">01</span>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">
                    Express ideas like a
                    <br />
                    human, not a machine.
                  </h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut lorem quis lectus molestie.
                  </p>
                </div>
              </div>
            </div>

            {/* Circular Visualization - Reduced size */}
            <div className="relative w-[320px] h-[320px] mx-auto bg-[#111] rounded-3xl p-6">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-6 rounded-full border border-[#222]" />
                  <div className="absolute inset-12 rounded-full border border-[#222]" />
                  <div className="absolute inset-20 rounded-full border border-[#222]" />

                  {/* Data Points */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[15%] right-[15%] flex items-center gap-2"
                  >
                    <span className="text-teal-500 text-sm font-medium">
                      92%
                    </span>
                    <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="absolute bottom-[25%] left-[20%] flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-purple-500 text-sm font-medium">
                      84%
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                    className="absolute top-[40%] right-[25%] flex items-center gap-2"
                  >
                    <span className="text-blue-500 text-sm font-medium">
                      76%
                    </span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-start gap-6">
                <span className="text-[#333333] text-xl font-medium">02</span>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center">
                    <Blocks className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">
                    Build your model
                    <br />
                    block by block.
                  </h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut lorem quis lectus molestie.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Steps */}
            <div className="space-y-4">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, delay: step * 0.1 }}
                  className="bg-[#111] p-6 rounded-lg border border-[#222] hover:border-teal-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                        <span className="text-teal-500 font-medium">
                          {step}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-medium">
                          Step {step}
                        </div>
                        <div className="h-1 w-16 bg-[#1A1A1A] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: step * 0.2 }}
                            className="h-full bg-teal-500/30 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-teal-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
