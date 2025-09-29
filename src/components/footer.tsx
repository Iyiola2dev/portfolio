"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import logo from "../assets/my_logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-200 via-purple-100 to-blue-100 z-50  text-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#top">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="w-28 cursor-pointer mr-14"
              />
            </Link>
            <p className="text-gray-800 font-medium mb-6 max-w-md">
              Building exceptional digital experiences that connect brands with
              their audience. Let&apos;s create something amazing together.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Iyiola2dev"
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/iyiola-afuye-b1a772296/"
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/lexicon_h/"
                className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-200 hover:bg-accent-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4 font-ovo text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-gray-800 font-medium">
              <li>
                <Link
                  href="#home"
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-primary-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4 font-ovo text-gray-800">Services</h4>
            <ul className="space-y-2 text-gray-800 font-medium">
              <li>
                <span className="text-primary-300 hover:text-white transition-colors">
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-primary-300 hover:text-white transition-colors">
                  SEO Optimization
                </span>
              </li>

              <li>
                <span className="text-primary-300 hover:text-white transition-colors">
                  Content Creation
                </span>
              </li>
              <li>
                <span className="text-primary-300 hover:text-white transition-colors">
                  Web App Development
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm">
            © {currentYear} Iyiola. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-primary-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-400 hover:text-white text-sm transition-colors"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
