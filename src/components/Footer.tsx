import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "PRODUCT",
      links: ["Overview", "Features", "Solutions", "Pricing", "Releases"],
    },
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Press", "News", "Contact"],
    },
    {
      title: "RESOURCES",
      links: ["Blog", "Newsletter", "Events", "Help Center", "Support"],
    },
    {
      title: "LEGAL",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Contact"],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { icon: <Github className="w-4 h-4" />, href: "#" },
    { icon: <Youtube className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0A0A0A] pt-24 pb-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-gray-800" />
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-gray-800" />
        <div className="absolute top-60 right-60 w-24 h-24 rounded-full border border-gray-800" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-2xl">
                <agent />
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Design and code beautiful products with our enterprise-ready UI
              kit. Built with modern tools and workflows.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Grid */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-6 tracking-wider text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm">
            © 2024 <agent />. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Cookies Settings
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
