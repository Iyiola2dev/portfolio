"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/my_logo.png";

import { MdArrowOutward } from "react-icons/md";
import { IoMoonOutline, IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="w-full fixed flex items-center justify-between py-5 px-5 md:px-[5rem] bg-gradient-to-r from-gray-200 via-purple-100 to-blue-100">
        <Link href="#top">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="w-28 cursor-pointer mr-14"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-6 font-medium font-ovo text-black rounded-full bg-white shadow-sm bg-opacity-50 px-10 py-2">
          <li>
            <Link className="font-ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#projects">
              Projects
            </Link>
          </li>
          {/* <li>
                <Link href="#contact">Contact</Link>
            </li> */}
        </ul>
        <div className=" flex items-center gap-4">
          <button className="text-black  text-xl py-2.5 px-4 rounded-full cursor-pointer flex items-center gap-2  transition">
            <IoMoonOutline />
          </button>
          <button className="text-black hidden lg:flex py-2.5 px-10 rounded-full border border-gray-500 cursor-pointer  items-center gap-2  transition">
            <h2>Contact</h2>
            <MdArrowOutward />
          </button>

          <button
            className="text-black block lg:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 right-0 bg-gradient-to-r from-gray-200 via-purple-100 to-blue-100 shadow-lg rounded-lg w-64 z-50 h-screen flex flex-col items-start p-4 gap-4 lg:hidden transition-transform duration-500 text-black
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-2xl self-end"
          >
            <IoCloseCircleOutline />
          </button>
          <div className="flex flex-col gap-6 mt-10 w-full">
            <Link
              className="font-ovo w-full"
              href="#top"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="font-ovo w-full"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className="font-ovo w-full"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              className="font-ovo w-full"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="font-ovo w-full"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
