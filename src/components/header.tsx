"use client";

import Image from "next/image";
import React, { useRef } from "react";
import my_pic from "../assets/my_pic.png";
import hand from "../assets/hand-icon.png";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

export const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const bounceVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-11/12 max-w-4xl mx-auto h-screen px-5 flex flex-col md:flex-row items-center justify-center gap-4 font-ovo"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-center justify-center pt-[5rem] gap-3 text-center">
        <motion.div variants={itemVariants}>
          <Image
            src={my_pic}
            alt="My Picture"
            width={100}
            height={100}
            className="rounded-full w-32"
          />
        </motion.div>

        <motion.span
          className="text-xl md:text-2xl text-black font-ovo font-bold flex items-center gap-1 mt-4"
          variants={itemVariants}
        >
          <h2>Hi! I&apos;m Iyiola Afuye</h2>
          <motion.div variants={bounceVariants} animate="animate">
            <Image src={hand} alt="Hand Icon" width={24} className="w-6 " />
          </motion.div>
        </motion.span>

        <motion.h1
          className="text-2xl sm:text-3xl lg:text-[50px] font-ovo text-black"
          variants={itemVariants}
        >
          full stack engineer focused on building user-friendly web applications
        </motion.h1>

        <motion.p
          className="text-black text-sm sm:text-base max-w-xl"
          variants={itemVariants}
        >
          I am passionate about creating interactive and dynamic web
          applications that provide a seamless user experience.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 mt-5"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#contact"
              className="text-white bg-black flex py-3 px-10 border border-white rounded-full cursor-pointer items-center gap-2 transition  justify-center"
            >
              <h2>Contact Me</h2>
              <MdArrowOutward />
            </Link>
          </motion.div>

          <motion.span
            className="text-black flex py-3 px-10 bg-gradient-to-r from-gray-200 via-purple-100 to-blue-100 rounded-full border border-gray-500 cursor-pointer items-center gap-2 transition  justify-center"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a href="/sample-resume.pdf" download>
              My Resume
            </a>
            <BiSolidDownload />
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};
