import { motion } from "framer-motion";

const TrustedCompanies = () => {
  return (
    <div className="w-full bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
            The world's best companies trust <agent />.
          </h2>
          <p className="text-gray-400 text-sm">
            Trusted by leading companies from around the globe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 opacity-70"
        >
          {/* Replace these with actual company logos */}
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=checkr&backgroundColor=gray"
            alt="Checkr"
            className="h-6 w-auto grayscale"
          />
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=LMCU&backgroundColor=gray"
            alt="LMCU"
            className="h-6 w-auto grayscale"
          />
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=moves&backgroundColor=gray"
            alt="Moves"
            className="h-6 w-auto grayscale"
          />
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=checkr2&backgroundColor=gray"
            alt="Checkr"
            className="h-6 w-auto grayscale"
          />
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=upgrade&backgroundColor=gray"
            alt="Upgrade"
            className="h-6 w-auto grayscale"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
