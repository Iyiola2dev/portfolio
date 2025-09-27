"use client";

import Image from "next/image";
import React from "react";
import my_pic from "../assets/my_pic.png";
import { IoHandRightOutline } from "react-icons/io5";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto h-screen px-5  flex flex-col md:flex-row items-center justify-center gap-4 font-ovo ">
      <div className="flex flex-col items-center justify-center pt-[5rem] gap-3 text-center">
        <Image
          src={my_pic}
          alt="My Picture"
          width={100}
          height={100}
          className="rounded-full w-32"
        />
        <span className="text-xl md:text-2xl text-black font-ovo font-bold flex items-center gap-1 mt-4">
          <h2>Hi! I&apos;m Iyiola Afuye</h2>
          <IoHandRightOutline />
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-[50px] font-ovo text-black">
          full stack engineer focused on building user-friendly web applications
        </h1>

        <p className="text-black   text-sm sm:text-base max-w-xl">
          I am passionate about creating interactive and dynamic web
          applications that provide a seamless user experience. 
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2 mt-5">
          <Link
            href="#contact"
            className="text-white bg-black flex py-2.5 px-10 rounded-full  cursor-pointer  items-center gap-2  transition w-[200px] justify-center"
          >
            <h2>Contact Me</h2>
            <MdArrowOutward />
          </Link>
          <span className="text-black flex py-2.5 px-10 bg-gradient-to-r from-gray-200 via-purple-100 to-blue-100 rounded-full border-2 border-gray-500 cursor-pointer  items-center gap-2  transition w-[200px] justify-center">
            <a href="/sample-resume.pdf" download>
              My Resume
            </a>
            <BiSolidDownload />
          </span>
        </div>
      </div>
    </div>
  );
};
